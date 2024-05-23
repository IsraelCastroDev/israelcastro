import type { Proyecto } from "@/Types";

export const proyectos: Proyecto[] = [
  {
    name: "Librería virtual",
    description:
      "Hecha en React, usando TailwindCSS para los estilos, custom hooks para separar la lógica de los componentes y useReducer con Context API",
    img: "/images/libreria-react.webp",
    url: "https://libreria-virtual-react.vercel.app/",
    technologies: ["React", "TailwindCSS"],
  },
  {
    name: "Tienda de Guitarras",
    description:
      "Proyecto hecho con React y TypeScript, esta vez usando CSS para los estilos, usé LocalStorage y custom kooks para separar la lógica de los componentes.",
    img: "/images/tienda-guitarras.webp",
    url: "https://magnificent-salmiakki-3ed837.netlify.app/",
    technologies: ["React", "CSS", "TypeScript"],
  },
  {
    name: "Cotizador de Criptomonedas",
    description:
      "Proyecto hecho con React y TailwindCSS, consumiendo una API de criptomonedas en tiempo real para obtener la cotización actual de cada criptomoneda.",
    img: "/images/cripto.webp",
    url: "https://cripto-react-eight.vercel.app/",
    technologies: ["React", "API", "TailwindCSS"],
  },
];
