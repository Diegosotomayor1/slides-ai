"use client";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/league.css"; // Tema de Reveal.js

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealMath from "reveal.js/plugin/math/math";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealSearch from "reveal.js/plugin/search/search";
import RevealZoom from "reveal.js/plugin/zoom/zoom";
import { Button } from "./ui/button";

export function SliderReveal({ html }: { html: string }) {
  const deckDivRef = useRef<HTMLDivElement>(null); // Referencia al contenedor de Reveal.js
  const deckRef = useRef<Reveal.Api | null>(null); // Referencia a la instancia de Reveal.js

  useEffect(() => {
    if (deckRef.current) return; // Prevenir doble inicialización en modo estricto

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide", // Configuración de transición
      backgroundTransition: "fade",
      showNotes: true,
      showSlideNumber: "all",
      touch: false,
      katex: {
        version: "latest",
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
      },
      plugins: [
        RevealMath.KaTeX,
        RevealNotes,
        RevealZoom,
        RevealSearch,
        RevealHighlight,
      ],
    });

    deckRef.current.initialize().then(() => {
      // Configuración adicional o event listeners aquí
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <>
      <div className="reveal" ref={deckDivRef}>
        <div
          className="slides bg-cover bg-center bg-no-repeat"
          dangerouslySetInnerHTML={{ __html: html }} // Renderizado de HTML puro
        />
      </div>
      <Button className="fixed top-4 left-4 z-50">Atras</Button>
    </>
  );
}
