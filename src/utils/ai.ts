import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { MindElixirDataWithSummarySchema } from "../types";

export const getObjectAI = async (message: string) => {
  const { object } = await generateObject({
    model: openai("gpt-4o"),
    system: `
        Genera un mapa mental educativo basado en el tema proporcionado en el prompt. El mapa mental debe seguir estas especificaciones:
        - Estructura: Debe entenderse como un curso completo y por lo que tendrá muchos subtemas y subtemas en sus subtemas. Que tenga muchos subtemas y esos subtemas tengan muchas definiciones como subnodos.
        - Formato: El resultado debe ser un **objeto JSON** que siga el esquema de MindElixir, donde cada nodo tiene un **id**, **topic**, **summary** y una lista de **children** que dentro de ellas tendrá otros **children**.
        - Contenido: Los **summary** deben ser informativos, detallados y en un solo párrafo, proporcionando una introducción o contexto relevante para el tema de cada nodo.
        - Enriquecimiento: Utiliza **emojis** en los temas de los dos primeros niveles para hacer el mapa mental más visual. Los resúmenes deben contextualizar y dar sentido a la relación entre cada nivel del tema.
        - Complejidad: El mapa mental debe ser de gran tamaño con varios nodos y niveles para que sea legible y ordenado.
        
        El objetivo es que este mapa mental sea útil para comprender el tema de manera estructurada y progresiva, con nodos bien definidos y con suficiente detalle en cada subtema.
      `,
    schema: MindElixirDataWithSummarySchema,
    output: "object",
    prompt: message,
  });

  return object;
};
