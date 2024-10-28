'use client';

import { useState, useRef, FormEvent } from 'react';
import MindElixirReact from './MindElixirReact';
import MindElixir from 'mind-elixir';
import { Input } from './ui/input';
import { completePartialMindData } from '@/app/utils/completePartialMindData';
import { MindElixirDataWithSummary } from '@/types';
import { themeMindMap } from '@/constants';

export default function MindMapSection() {
  const ME = useRef(null);
  const [streamData, setStreamData] = useState<MindElixirDataWithSummary | null>(null);

  // Función para manejar el envío del formulario y la recepción de datos en streaming
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const prompt = formData.get('prompt') as string;
  
    try {
      const response = await fetch('/api/mindmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: prompt }),
      });
  
      if (!response.body) {
        throw new Error('No se pudo obtener el cuerpo de la respuesta');
      }
  
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedData = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
  
        // Decodifica el fragmento recibido
        accumulatedData += decoder.decode(value, { stream: true });
        
        // Procesa cada línea de JSON completa
        const lines = accumulatedData.split('\n');
        
        for (let i = 0; i < lines.length - 1; i++) {
          const line = lines[i];
          
          if (!line.trim()) continue; // Ignora líneas vacías
          
          try {
            const jsonData = JSON.parse(line);
            const partialMindData = completePartialMindData(jsonData);
            console.log('partialMindData', partialMindData);
            setStreamData(partialMindData);
          } catch {
            // Es normal que JSON.parse falle si los datos no están completos todavía
            continue;
          }
        }
        
        // Mantén solo la última línea en `accumulatedData` en caso de que esté incompleta
        accumulatedData = lines[lines.length - 1];
      }
    } catch (error) {
      console.error('Error al recibir los datos en streaming:', error);
    }
  };
  

  return (
    <div className="block m-auto">
      <form onSubmit={handleSubmit}>
        <Input type="text" name="prompt" id="prompt" placeholder="Escribe algo" />
      </form>
      {streamData && (
        <MindElixirReact
          ref={ME}
          data={streamData}
          options={{ direction: MindElixir.SIDE, editable: false, theme: themeMindMap }}
          className="w-full h-[calc(100vh-200px)] mx-auto"
        />
      )}
    </div>
  );
}
