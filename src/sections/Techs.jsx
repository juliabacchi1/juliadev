import { FaReact, FaFigma } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import {
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";

const tecnologias = [
  { icon: <FaReact size={80} />, name: "React", link: "https://react.dev/" },
  {
    icon: <SiNextdotjs size={80} />,
    name: "Next.js",
    link: "https://nextjs.org/",
  },
  { icon: <SiVite size={80} />, name: "Vite", link: "https://vitejs.dev/" },
  {
    icon: <SiTypescript size={80} />,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <AiOutlineJavaScript size={80} />,
    name: "JavaScript",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    icon: <SiTailwindcss size={80} />,
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: <FaFigma size={80} />,
    name: "Figma",
    link: "https://www.figma.com/",
  },
];

export default function Techs() {
  return (
    <section
      id="techs"
      className="fullscreen-section flex flex-col justify-center gap-10 items-center bg-gradient-to-b from-[#8AA9F8] to-[#EFC9DD] text-white"
    >
      {/* Logo flutuante no topo */}
      <div className="absolute top-0 left-0 px-4 md:px-6 py-4 md:py-6 z-10">
        <a
          href="#home"
          aria-label="Voltar para o topo"
          className="flex items-center"
        >
          <img
            src="logo.svg"
            alt="Logo do portfólio de Julia Bacchi"
            className="h-10 mr-2 w-auto"
          />
        </a>
      </div>

      <h2 className="text-[36px] md:text-[67px] text-center mt-20 mb-4 md:mb-8">
        Tecnologias
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl px-4 text-white">
        {tecnologias.map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acesse a documentação de ${tech.name}`}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-2">{tech.icon}</div>
            <span className="text-sm md:text-base font-semibold">
              {tech.name}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-4 md:mt-12 mb-8 md:mb-12">
        <a href="#works">
          <button className="bg-white text-black font-semibold px-9 py-3 rounded-full shadow hover:bg-gray-100">
            trabalhos
          </button>
        </a>
      </div>
    </section>
  );
}
