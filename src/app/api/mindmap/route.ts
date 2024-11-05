import { getObjectAI } from "@/utils/ai";

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
