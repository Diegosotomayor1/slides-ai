'use client';

import { themeMindMap } from '@/constants';
import { MindElixirDataWithSummary } from '@/types';
import axios from 'axios';
import MindElixir from 'mind-elixir';
import { FormEvent, useRef, useState } from 'react';
import { Input } from './ui/input';
import MindElixirReact from './MindElixirReact';

// Carga dinámica del componente MindElixirReact solo en el cliente


export default function MindMapSection() {
  const ME = useRef(null);
  const [objectData, setObjectData] = useState<MindElixirDataWithSummary | null>(null);
  const [loading, setLoading] = useState(false);

  // Función para manejar el envío del formulario y la recepción de datos
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const prompt = formData.get('prompt') as string;

    if (!prompt) {
      alert('Por favor, introduce un prompt');
      return;
    }

    setLoading(true); // Activa el estado de carga

    try {
      // Envía la solicitud al backend usando axios
      const response = await axios.post('/api/mindmap', { message: prompt });

      // Procesa la respuesta y actualiza el estado con el objeto de datos recibido
      const data = response.data;
      setObjectData(data);
    } catch (error) {
      console.error("Error al recibir los datos:", error);
      alert('Ocurrió un error al procesar el mapa mental. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false); // Desactiva el estado de carga al finalizar
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-md">
        <Input type="text" name="prompt" id="prompt" placeholder="Escribe algo" className="flex-grow" disabled={loading} />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Enviar'}
        </button>
      </form>

      {/* Loader durante la carga */}
       
        { loading && <div className="flex items-center justify-center w-full mt-8 ">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-l-blue-200" />
        </div>}
 
      {/* Renderiza el mapa mental después de recibir los datos */}
      {objectData && !loading && (
        <MindElixirReact
          ref={ME}
          data={objectData}
          options={{ direction: MindElixir.SIDE, editable: true, theme: themeMindMap }}
          className="w-screen h-[500px] mt-8"
        />
      )}
    </div>
  );
}
