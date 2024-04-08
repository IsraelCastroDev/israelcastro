import type { Proyecto } from "@/Types";

export const proyectos: Proyecto[] = [
  {
    name: "Cotizador de Criptomonedas",
    description:
      "Proyecto hecho con React y TailwindCSS, consumiendo una API de criptomonedas en tiempo real para obtener la cotización actual de cada criptomoneda.",
    img: "/images/cripto.webp",
    url: "https://cripto-react-eight.vercel.app/",
    technologies: ["React", "API", "TailwindCSS"],
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
    name: "Calculadora de Propinas",
    description:
      "Proyecto hecho con React y TypeScript, usando TailwindCSS para los estilos, con lógica para calcular propinas a base de un porcentaje elegido por el usuario.",
    img: "/images/calculador-propinas.webp",
    url: "https://ubiquitous-cannoli-070af7.netlify.app/",
    technologies: ["React", "TailwindCSS", "TypeScript"],
  },
];
