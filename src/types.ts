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
