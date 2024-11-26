"use client";

import { Input } from "@/components/ui/input";
import axios from "axios";
import { FormEvent, useState } from "react";
import { SliderReveal } from "../components/SliderReveal";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [htmlData, setHtmlData] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const prompt = formData.get("prompt") as string;

    if (!prompt) {
      alert("Por favor, introduce un prompt");
      return;
    }

    setLoading(true); // Activa el estado de carga

    try {
      // Envía la solicitud al backend usando axios
      const response = await axios.post("/api/slide", { message: prompt });

      // Procesa la respuesta y actualiza el estado con el objeto de datos recibido
      const data = response.data;
      setHtmlData(data);
    } catch (error) {
      console.error("Error al recibir los datos:", error);
      alert(
        "Ocurrió un error al procesar los slides. Por favor, intenta de nuevo."
      );
    } finally {
      setLoading(false); // Desactiva el estado de carga al finalizar
    }
  };

  return (
    <div className="showcase w-full h-full min-h-screen flex items-center justify-center flex-col">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/2620/2620449.png" className="w-32 h-32" alt="" /> */}
      {!htmlData && (
        <>
          <h2 className="text-black text-3xl p-4 font-bold">Slides With AI</h2>
          <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-md">
            <Input
              type="text"
              name="prompt"
              id="prompt"
              placeholder="Escribe algo"
              className="flex-grow"
              disabled={loading}
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Enviar"}
            </button>
          </form>
        </>
      )}
      {htmlData && <SliderReveal html={htmlData} />}
      <Button
        className="fixed top-4 left-4 z-50"
        onClick={() => router.refresh()}
      >
        Atras
      </Button>
    </div>
  );
}
