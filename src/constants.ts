import { MindElixirData } from "mind-elixir";
import { MindElixirDataWithSummary } from "./types";

export const frontData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Frontend 🚀",
    children: [
      {
        id: "duration",
        topic: "Duración ⏰",
        children: [
          { id: "6-weeks", topic: "6 semanas" },
          { id: "8-weeks", topic: "8 semanas" },
        ],
      },
      {
        id: "tools",
        topic: "Herramientas 🛠️",
        children: [
          {
            id: "vs-code",
            topic: "VS Code 📝",
            children: [
              { id: "code-editor", topic: "Editor de código" },
              { id: "useful-extensions", topic: "Extensiones útiles" },
            ],
          },
          {
            id: "chrome-devtools",
            topic: "Chrome DevTools 🌐",
            children: [
              { id: "debugging", topic: "Depuración" },
              { id: "performance", topic: "Análisis de rendimiento" },
            ],
          },
          {
            id: "nodejs",
            topic: "Node.js 🖥️",
            children: [
              { id: "runtime", topic: "Entorno de ejecución" },
              { id: "npm", topic: "npm y paquetes" },
            ],
          },
          {
            id: "git",
            topic: "Git 🗂️",
            children: [
              { id: "version-control", topic: "Control de versiones" },
              { id: "github", topic: "GitHub" },
            ],
          },
        ],
      },
      {
        id: "topics",
        topic: "Temas 📚",
        children: [
          {
            id: "html-css",
            topic: "HTML, CSS 🌐",
            children: [
              { id: "structure", topic: "Estructura básica" },
              { id: "styles", topic: "Estilos y diseño" },
            ],
          },
          {
            id: "javascript-dom",
            topic: "JavaScript, DOM 📜",
            children: [
              { id: "fundamentals", topic: "Fundamentos" },
              { id: "dom-manipulation", topic: "Manipulación del DOM" },
            ],
          },
          {
            id: "react-redux",
            topic: "React, Redux ⚛️",
            children: [
              { id: "components", topic: "Componentes" },
              { id: "state-redux", topic: "Estado y Redux" },
            ],
          },
        ],
      },
      {
        id: "level",
        topic: "Nivel 📈",
        children: [
          {
            id: "basic",
            topic: "Básico 🟢",
            children: [
              { id: "basic-html-css", topic: "HTML, CSS" },
              { id: "static-site", topic: "Página web estática" },
            ],
          },
          {
            id: "intermediate",
            topic: "Intermedio 🟠",
            children: [
              { id: "intermediate-js-dom", topic: "JavaScript, DOM" },
              { id: "interactive-app", topic: "Aplicación interactiva" },
            ],
          },
          {
            id: "advanced",
            topic: "Avanzado 🔴",
            children: [
              { id: "advanced-react-redux", topic: "React, Redux" },
              { id: "spa-react", topic: "SPA con React" },
            ],
          },
        ],
      },
      {
        id: "projects",
        topic: "Proyectos 🖌️",
        children: [
          { id: "static-web", topic: "Página web estática" },
          { id: "interactive-app-project", topic: "Aplicación interactiva" },
          { id: "spa-project", topic: "SPA con React" },
        ],
      },
    ],
  },
};
export const backData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Backend 🚀",
    children: [
      {
        id: "introduction",
        topic: "Introduction",
        children: [],
      },
      {
        id: "core-concepts",
        topic: "Core Concepts",
        children: [
          { id: "mvc-architecture", topic: "MVC Architecture" },
          { id: "restful-api-design", topic: "RESTful API Design" },
          { id: "middleware", topic: "Middleware" },
          { id: "database-integration", topic: "Database Integration" },
        ],
      },
      {
        id: "features",
        topic: "Features",
        children: [
          {
            id: "authentication-authorization",
            topic: "Authentication and Authorization",
          },
          { id: "caching", topic: "Caching" },
          { id: "real-time-communication", topic: "Real-time Communication" },
          {
            id: "scalability-load-balancing",
            topic: "Scalability and Load Balancing",
          },
          { id: "testing-debugging", topic: "Testing and Debugging" },
          {
            id: "documentation-community",
            topic: "Documentation and Community Support",
          },
        ],
      },
      {
        id: "useful-resources",
        topic: "Useful Resources",
        children: [
          { id: "official-website", topic: "Official Website" },
          { id: "github-repository", topic: "GitHub Repository" },
          { id: "api-documentation", topic: "API Documentation" },
        ],
      },
    ],
  },
};

export const historyofPeruData: MindElixirDataWithSummary = {
  nodeData: {
    id: "root",
    topic: "Historia del Perú 🇵🇪",
    summary:
      "🇵🇪 Un recorrido extenso por la historia del Perú, desde sus primeras civilizaciones hasta los desafíos actuales. Exploraremos las épocas de auge cultural, la llegada de los españoles y la lucha por la independencia, además de las transformaciones políticas, sociales y culturales que han dado forma al Perú moderno.",
    children: [
      {
        id: "introduccion",
        topic: "Introducción 🌎",
        summary:
          "Un vistazo inicial al Perú, su ubicación estratégica en Sudamérica y una breve descripción de sus variados paisajes geográficos y climáticos.",
        children: [
          {
            id: "contexto-general",
            topic:
              "Contexto General: Ubicación y características geográficas 🌍",
            summary:
              "El Perú se encuentra en la costa oeste de Sudamérica, en la región andina, y es conocido por su asombrosa biodiversidad que va desde la costa árida hasta los frondosos bosques amazónicos. Esta diversidad ha influido profundamente en su cultura y sociedad.",
          },
        ],
      },
      {
        id: "periodos-historicos",
        topic: "Periodos Históricos 📜",
        summary:
          "Desde las civilizaciones precolombinas hasta el Perú contemporáneo, un viaje a través de las principales etapas históricas del país.",
        children: [
          {
            id: "precolombino",
            topic: "Época Precolombina 🏺",
            summary:
              "Época de esplendor de las civilizaciones preincaicas y la formación del Imperio Inca, con avances en arquitectura, agricultura y astronomía que asombraron a los primeros exploradores europeos.",
            children: [
              {
                id: "culturas-antiguas",
                topic: "Culturas antiguas: Caral, Chavín, Nazca, Moche 🌄",
                summary:
                  "Culturas avanzadas que se desarrollaron mucho antes del Imperio Inca y dejaron huellas imborrables en la arqueología, como las Líneas de Nazca y las pirámides de Caral.",
              },
              {
                id: "imperio-inca",
                topic: "Imperio Incaico: Organización y expansión 🌅",
                summary:
                  "El Imperio Inca, la civilización más vasta en Sudamérica, se destacó por su sistema de carreteras, organización social y arquitectura monumental como Machu Picchu.",
              },
            ],
          },
          {
            id: "conquista-colonial",
            topic: "Conquista y Época Colonial ⚔️",
            summary:
              "Con la llegada de los españoles en 1532, la conquista trajo un periodo de cambio, explotación y evangelización que reestructuró la sociedad peruana.",
            children: [
              {
                id: "conquista-espanola",
                topic: "Conquista española: Llegada de Pizarro 🏴‍☠️",
                summary:
                  "La llegada de Francisco Pizarro y sus hombres marcó el inicio de una guerra de conquista que terminó con la caída del Imperio Inca y el establecimiento de la Colonia.",
              },
              {
                id: "colonia",
                topic: "Época Colonial: Virreinato y explotación 🏛️",
                summary:
                  "Durante el virreinato, los recursos del Perú fueron explotados y sus poblaciones indígenas sufrieron bajo el dominio español, aunque también hubo un mestizaje cultural y artístico importante.",
              },
            ],
          },
          {
            id: "independencia",
            topic: "Independencia 🕊️",
            summary:
              "Un período crucial en el que el Perú se independiza de España, marcando el inicio de su camino como una nación libre.",
            children: [
              {
                id: "procesos-independencia",
                topic: "Procesos de Independencia: Emancipación ✊",
                summary:
                  "Una serie de movimientos y personajes históricos, como San Martín y Bolívar, jugaron un rol importante en la emancipación del Perú, proclamada en 1821.",
              },
              {
                id: "batallas-clave",
                topic: "Batallas clave: Junín, Ayacucho ⚔️",
                summary:
                  "Las batallas de Junín y Ayacucho en 1824 fueron decisivas para consolidar la independencia de Perú y poner fin al dominio colonial en Sudamérica.",
              },
            ],
          },
          {
            id: "republica",
            topic: "República 🇵🇪",
            summary:
              "La joven república enfrentó conflictos internos y externos mientras se consolidaba como nación.",
            children: [
              {
                id: "primeros-anos",
                topic: "Primeros años republicanos: Conflictos internos 💥",
                summary:
                  "Los primeros años republicanos estuvieron marcados por inestabilidad política y conflictos, mientras el país intentaba estructurarse bajo un nuevo sistema de gobierno.",
              },
              {
                id: "guerra-pacifico",
                topic: "Guerra del Pacífico: Conflicto con Chile ⚔️",
                summary:
                  "El conflicto con Chile, que resultó en la pérdida de territorio, tuvo un gran impacto en la identidad y economía de Perú, dejando heridas profundas en su historia.",
              },
              {
                id: "modernizacion",
                topic: "Siglo XX: Modernización y conflictos sociales 🚧",
                summary:
                  "Un siglo de grandes cambios, marcado por la industrialización, modernización y también por conflictos sociales que reflejaban las luchas de clase y demandas de la población.",
              },
            ],
          },
          {
            id: "contemporaneo",
            topic: "Perú Contemporáneo 🌎",
            summary:
              "Desde las reformas sociales hasta los retos actuales, el Perú de hoy enfrenta desafíos y se adapta en una era globalizada.",
            children: [
              {
                id: "reformas-sociales",
                topic: "Reformas Sociales y Económicas 📈",
                summary:
                  "Períodos de reforma que intentaron mejorar las condiciones de vida y las estructuras económicas, adaptándose a un contexto cambiante.",
              },
              {
                id: "terrorismo-conflicto",
                topic: "Conflicto Interno: Sendero Luminoso y MRTA ⚠️",
                summary:
                  "Un periodo oscuro en los años 80 y 90 marcado por la violencia interna y las actividades de grupos insurgentes, con graves consecuencias sociales y políticas.",
              },
              {
                id: "democracia-actual",
                topic: "Perú Actual: Democracia y desafíos contemporáneos 📊",
                summary:
                  "Hoy, el Perú continúa enfrentando desafíos en su democracia, buscando equilibrio entre el crecimiento económico y la estabilidad política.",
              },
            ],
          },
        ],
      },
      {
        id: "personajes-clave",
        topic: "Personajes Clave 🎭",
        summary:
          "Destacados personajes históricos, desde emperadores Incas hasta líderes contemporáneos, que dejaron una marca en el Perú.",
        children: [
          {
            id: "pachacutec",
            topic: "Pachacútec: Expansión Inca 🏛️",
            summary:
              "El gran emperador inca que llevó al Imperio Inca a su máxima expansión territorial, dejando un legado de organización y poder.",
          },
          {
            id: "francisco-pizarro",
            topic: "Francisco Pizarro: Conquistador español ⚔️",
            summary:
              "El conquistador que lideró la expedición que culminó en la caída del Imperio Inca y el establecimiento del virreinato español.",
          },
          {
            id: "tupac-amaru",
            topic: "Túpac Amaru II: Rebelión indígena ✊",
            summary:
              "El líder indígena que encabezó una de las primeras rebeliones contra el dominio español en 1780, siendo un símbolo de resistencia.",
          },
          {
            id: "jose-de-san-martin",
            topic: "José de San Martín: Libertador 🕊️",
            summary:
              "Militar argentino que contribuyó a la independencia de Perú y otras naciones sudamericanas, proclamando la independencia peruana en 1821.",
          },
          {
            id: "simon-bolivar",
            topic: "Simón Bolívar: Libertador ✊",
            summary:
              "Junto a San Martín, consolidó la independencia del Perú y otros países sudamericanos en su lucha contra la monarquía española.",
          },
          {
            id: "maria-elena-moyano",
            topic: "María Elena Moyano: Activista social 🌹",
            summary:
              "Activista social que luchó por los derechos de los más desfavorecidos y fue asesinada durante el conflicto interno de Perú.",
          },
        ],
      },
      {
        id: "temas-destacados",
        topic: "Temas Destacados 🎉",
        summary: "Aspectos únicos de la cultura, arte y tradiciones del Perú.",
        children: [
          {
            id: "arquitectura-inca",
            topic: "Arquitectura Inca: Machu Picchu y caminos 🏛️",
            summary:
              "Logros arquitectónicos avanzados, como la impresionante ciudadela de Machu Picchu, y una red de caminos que conectaban el imperio.",
          },
          {
            id: "diversidad-cultural",
            topic: "Diversidad Cultural: Grupos étnicos y costumbres 🌐",
            summary:
              "Una rica variedad de culturas, lenguas y costumbres que hacen del Perú un mosaico cultural único en el mundo.",
          },
          {
            id: "gastronomia",
            topic: "Gastronomía Peruana: Tradiciones culinarias 🍲",
            summary:
              "Una de las cocinas más ricas y diversas, famosa a nivel mundial por su fusión de ingredientes y sabores únicos.",
          },
          {
            id: "patrimonio-cultural",
            topic: "Patrimonio Cultural: Festividades y arte 🎨",
            summary:
              "Festividades tradicionales y expresiones artísticas que son parte esencial de la identidad peruana.",
          },
        ],
      },
      {
        id: "recursos-utiles",
        topic: "Recursos Útiles 📚",
        summary:
          "Fuentes adicionales y lugares clave para explorar la historia y cultura del Perú.",
        children: [
          {
            id: "museo-nacional",
            topic: "Museo Nacional de Arqueología 🏺",
            summary:
              "Museo que alberga artefactos arqueológicos de todas las épocas del Perú, brindando una experiencia educativa y cultural inigualable.",
          },
          {
            id: "biblioteca-peruana",
            topic: "Biblioteca Nacional del Perú 📖",
            summary:
              "La Biblioteca Nacional conserva documentos históricos, literarios y académicos que cuentan la historia del Perú a través de sus páginas.",
          },
          {
            id: "web-historia-peru",
            topic: "Sitios web: Historia del Perú y cultura 🌐",
            summary:
              "Recursos digitales donde puedes aprender más sobre la historia, cultura y patrimonio peruano.",
          },
        ],
      },
    ],
  },
};

export const themeMindMap = {
  name: "Latte",
  palette: [
    "#dd7878",
    "#ea76cb",
    "#8839ef",
    "#e64553",
    "#fe640b",
    "#df8e1d",
    "#40a02b",
    "#209fb5",
    "#1e66f5",
    "#7287fd",
  ],
  cssVar: {
    "--main-color": "#444446",
    "--main-bgcolor": "#ffffff",
    "--color": "#777777",
    "--bgcolor": "#f6f6f6",
    "--panel-color": "#444446",
    "--panel-bgcolor": "#ffffff",
    "--panel-border-color": "#eaeaea",
    "--root-bgcolor": "#2d8dff",
  },
};
