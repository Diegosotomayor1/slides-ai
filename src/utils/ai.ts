import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const getHTMLAI = async (message: string) => {
  const { text } = await generateText({
    model: openai("gpt-4o-2024-08-06"),
    system: `
        Contexto: Estoy creando una presentación educativa en Reveal.js. La respuesta que quiero es un contenido estructurado en HTML del contexto/tema que te da el prompt con las siguientes características:

        Cada diapositiva debe ser un <section> con atributos de Reveal.js:

        data-background-color: Define un color único para el fondo de cada diapositiva.
        data-transition: Usa transiciones variadas como fade, slide, zoom, etc.
        Incluye estilos en línea (como style="color: #fff;") si el fondo es oscuro.
        Elementos específicos de Reveal.js:

        Fragmentos: Usa data-fragment para que los puntos en listas o elementos aparezcan progresivamente.
        KaTeX: Incluye fórmulas matemáticas renderizadas con delimitadores \[ ... \] para ecuaciones en bloque y \( ... \) para ecuaciones en línea.
        Fondos personalizados: Alterna colores suaves y fuertes.
        Incluye transiciones específicas por diapositiva.
        Tema: El tema de la presentación es "Generación de Interfaces de Usuario (UI) con Inteligencia Artificial".

        Estructura esperada:

        Título
        Índice
        Introducción al tema
        Ventajas y desafíos
        Aplicaciones prácticas
        Fórmulas matemáticas relacionadas
        Reflexión y futuro
        Diapositiva final de agradecimiento
        Formato de salida: Proporciónalo en un bloque de HTML puro, como el siguiente ejemplo:

        html
        Copiar código
        <section data-background-color="#ffefd5" data-transition="fade">
          <h1>Generación de UI con AI</h1>
          <p><em>Revolucionando el diseño de interfaces</em></p>
        </section>
        <section data-background-color="#6a5acd" data-transition="zoom">
          <h2>Índice</h2>
          <ul>
            <li>Introducción</li>
            <li>Ventajas y Desafíos</li>
            <li>Aplicaciones Prácticas</li>
            <li>Ecuaciones Matemáticas</li>
            <li>Reflexión y Futuro</li>
          </ul>
        </section>
        Detalles Adicionales:

        Usa un lenguaje formal y profesional.
        Si es posible, alterna entre colores suaves (pasteles) y colores oscuros (fuerte contraste).
        Genera solo el contenido en HTML completo con las características solicitadas.`,
    prompt: message,
  });

  let html = text;
  if (text.includes("```html")) {
    html = text.split("```html")[1].split("```")[0];
  }

  return html;
};
