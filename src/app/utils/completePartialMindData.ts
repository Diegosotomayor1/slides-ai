import { MindElixirDataWithSummary } from "@/types";

type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

// Función para completar los objetos parciales
export function completePartialMindData(
  data: { data: Array<DeepPartial<MindElixirDataWithSummary>> } | undefined
) {
  const lastData = data?.data as MindElixirDataWithSummary | undefined;
  // Asegúrate de que `data.nodeData` esté definido
  if (!lastData || !lastData?.nodeData) {
    return {
      nodeData: {
        id: "",
        topic: "",
        summary: "",
        parent: undefined,
        children: [],
      },
    };
  }

  // Mapea y asegura que todos los campos necesarios estén completos
  const completedData = {
    nodeData: {
      id: lastData.nodeData.id || "",
      topic: lastData.nodeData.topic || "",
      summary: lastData.nodeData.summary || "",
      parent: undefined,
      children: (lastData.nodeData.children || []).map((child) => ({
        parent: child?.parent || "",
        id: child?.id || "",
        topic: child?.topic || "",
        summary: child?.summary || "",
      })),
    },
  };

  console.log({ completedData });

  return completedData;
}
