import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

const MindElixirDataWithSummaryChildChildren = z.object({
  parent: z.string().describe("id del nodo padre"),
  id: z.string().describe("id del nodo"),
  topic: z.string().describe("tema del nodo"),
  summary: z.string().describe("resumen del nodo de un parrafo"),
});

const MindElixirDataWithSummaryChildrenSchema = z.object({
  parent: z.string().describe("id del nodo padre"),
  id: z.string().describe("id del nodo"),
  topic: z.string().describe("tema del nodo"),
  summary: z.string().describe("resumen del nodo de un parrafo"),
  children: MindElixirDataWithSummaryChildChildren.array()
    .min(1)
    .describe("Subtemas del subtema padre"),
});

export const MindElixirDataWithSummarySchema = z.object({
  nodeData: z.object({
    //Poner el MindElixirDataWithSummaryChildrenSchema de forma implicita
    id: z.string().describe("id del nodo"),
    topic: z.string().describe("tema del nodo"),
    summary: z.string().describe("resumen del nodo de un parrafo"),
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
        { status: 400 }
      );
    }

    // Genera el objeto completo en una sola respuesta
    const response = await getObjectAI(message);
    console.log("response", response);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error en la API:", error);
    return new Response(JSON.stringify({ error: "Error en el servidor" }), {
      status: 500,
    });
  }
}

const getObjectAI = async (message: string) => {
  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    system: `
      Genera un mapa mental educativo basado en el tema proporcionado en el prompt. El mapa mental debe seguir estas especificaciones:
      - Estructura: Debe entenderse como un curso completo y por lo que tendrá muchos subtemas y subtemas en sus subtemas. Que tenga muchos subtemas y esos subtemas tengan muchas definiciones como subnodos.
      - Formato: El resultado debe ser un **objeto JSON** que siga el esquema de MindElixir, donde cada nodo tiene un **id**, **topic**, **summary** y una lista de **children** que dentro de ellas tendrá otros **children**.
      - Contenido: Los **summary** deben ser informativos, detallados y en un solo párrafo, proporcionando una introducción o contexto relevante para el tema de cada nodo.
      - Enriquecimiento: Utiliza **emojis** en los temas de los dos primeros niveles para hacer el mapa mental más visual. Los resúmenes deben contextualizar y dar sentido a la relación entre cada nivel del tema.
      - Complejidad: El mapa mental debe ser de gran tamaño para que sea legible.
      
      El objetivo es que este mapa mental sea útil para comprender el tema de manera estructurada y progresiva, con nodos bien definidos y con suficiente detalle en cada subtema.
    `,
    schema: MindElixirDataWithSummarySchema,
    output: "object",
    prompt: message,
  });

  return object;
};
