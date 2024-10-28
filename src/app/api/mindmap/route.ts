import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { z } from "zod";

const MindElixirDataWithSummaryChildChildren = z.object({
  parent: z.string().describe("id del nodo padre"),
  id: z.string().describe("id del nodo"),
  topic: z.string().describe("tema del nodo"),
  summary: z.string().describe("resumen corto"),
});

const MindElixirDataWithSummaryChildrenSchema = z.object({
  parent: z.string().describe("id del nodo padre"),
  id: z.string().describe("id del nodo"),
  topic: z.string().describe("tema del nodo"),
  summary: z.string().describe("resumen corto"),
  children: MindElixirDataWithSummaryChildChildren.array()
    .min(1)
    .describe("Subtemas del subtema padre"),
});

export const MindElixirDataWithSummarySchema = z.object({
  nodeData: z.object({
    //Poner el MindElixirDataWithSummaryChildrenSchema de forma implicita
    id: z.string().describe("id del nodo"),
    topic: z.string().describe("tema del nodo"),
    summary: z.string().describe("resumen corto"),
    children: MindElixirDataWithSummaryChildrenSchema.array()
      .min(3)
      .describe("Subtemas del tema principal"),
  }),
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return new Response(
        JSON.stringify({ error: "Prompt no proporcionado" }),
        {
          status: 400,
        }
      );
    }

    // Crea el stream para enviar los datos progresivamente con bloques diferenciados
    const stream = new ReadableStream({
      async start(controller) {
        const partialObjectStream = await getObjectStream(message);

        let counter = 0;

        // Lee y envía bloques diferenciados con una pausa entre cada uno
        for await (const partial of partialObjectStream) {
          counter++;

          // Añadir identificador o estructura diferenciada a cada bloque
          const structuredData = {
            part: counter,
            data: partial,
          };

          // Serializa cada bloque y envíalo
          controller.enqueue(JSON.stringify(structuredData) + "\n");
        }

        // Cierra el stream una vez que todos los bloques se han enviado
        controller.close();
      },
    });

    console.log("streaming structured data in blocks...");

    return new Response(stream, {
      headers: {
        "Content-Type": "application/json",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Error en la API:", error);
    return new Response("Error en el servidor", { status: 500 });
  }
}

const getObjectStream = async (message: string) => {
  const { partialObjectStream } = await streamObject({
    model: openai("gpt-4o-mini"),
    system: `
      Genera un mapa mental educativo basado en el tema proporcionado en el prompt. El mapa mental debe seguir estas especificaciones:
      - Estructura: Debe entenderse como un curso completo y por lo que tendra muchos subtemas y subtemas en sus subtemas.
      - Formato: El resultado debe ser un **objeto JSON** que siga el esquema de MindElixir, donde cada nodo tiene un **id**, **topic**, **summary** y una lista de **children** que dentro de ellas tendra otros **children**.
      - Contenido: Los **summaries** deben ser informativos, detallados y en un solo párrafo, proporcionando una introducción o contexto relevante para el tema de cada nodo.
      - Enriquecimiento: Utiliza **emojis** en los temas de los dos primeros niveles para hacer el mapa mental más visual. Los resúmenes deben contextualizar y dar sentido a la relación entre cada nivel del tema.
      - Complejidad: El mapa mental debe ser de gran tamaño para que sea legible.
      
      El objetivo es que este mapa mental sea útil para comprender el tema de manera estructurada y progresiva, con nodos bien definidos y con suficiente detalle en cada subtema.
    `,
    schema: MindElixirDataWithSummarySchema,
    output: "object",
    prompt: message,
    mode: "json",
    maxTokens: 10000,
  });

  return partialObjectStream;
};
