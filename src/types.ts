import { z } from "zod";

interface ChildrendMindData {
  id: string;
  topic: string;
  summary: string;
  children?: ChildrendMindData[];
  parent?: string;
}

export interface MindElixirDataWithSummary {
  nodeData: ChildrendMindData;
}

export const MindElixirDataWithSummaryChildChildren = z.object({
  id: z.string().describe("id del nodo"),
  topic: z.string().describe("tema del nodo"),
  summary: z.string().describe("resumen del nodo de un parrafo"),
});

export const MindElixirDataWithSummaryChildrenSchema = z.object({
  id: z.string().describe("id del nodo"),
  topic: z.string().describe("tema del nodo"),
  summary: z.string().describe("resumen del nodo de un parrafo"),
  children: MindElixirDataWithSummaryChildChildren.array().describe(
    "Subtemas del subtema padre"
  ),
});

export const MindElixirDataWithSummarySchema = z.object({
  nodeData: z.object({
    //Poner el MindElixirDataWithSummaryChildrenSchema de forma implicita
    id: z.string().describe("id del nodo"),
    topic: z.string().describe("tema del nodo"),
    summary: z.string().describe("resumen del nodo de un parrafo"),
    children: MindElixirDataWithSummaryChildrenSchema.array().describe(
      "Subtemas del tema principal"
    ),
  }),
});
