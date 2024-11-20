import type { Proyecto } from "@/Types";

export const proyectos: Proyecto[] = [
  {
    name: "App Flashvideo",
    description:
      "App de películas, consume la API de TheMovieDB usando Tanstack Query React, TailwindCSS y TypeScript. Usé custom hooks para reutilizar los queries y separar lógica de componentes.",
    img: "/images/bg-flashvideo.webp",
    url: "https://flashvideo.vercel.app/",
    technologies: ["React", "CSS", "TypeScript", "API", "ReactQuery"],
  },
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
      "Proyecto hecho con React y TypeScript, esta vez usando CSS para los estilos, usé LocalStorage para la persistencia y custom kooks para separar la lógica de los componentes.",
    img: "/images/tienda-guitarras.webp",
    url: "https://magnificent-salmiakki-3ed837.netlify.app/",
    technologies: ["React", "CSS", "TypeScript"],
  },
];

/*

  {
    name: "Super Quiz",
    description:
      "Aplicación web para crear, jugar y gestionar cuestionarios. Desarrollada con tecnologías modernas, incluye un backend con Node y Express, usando MongoDB como base de datos.",
    img: "/images/super-quiz.webp",
    url: "https://super-quiz-five.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Express",
      "MongoDB",
      "ReactQuery",
    ],
  },
 */
