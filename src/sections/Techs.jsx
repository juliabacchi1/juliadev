import { FaReact, FaFigma } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import {
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";
import FloatingLogo from "../components/FloatingLogo";
import Button from "../components/Button";

const icon_size = 80;

const tecnologias = [
  { icon: <FaReact size={icon_size} />, name: "React", link: "https://react.dev/" },
  {
    icon: <SiNextdotjs size={icon_size} />,
    name: "Next.js",
    link: "https://nextjs.org/",
  },
  { icon: <SiVite size={icon_size} />, name: "Vite", link: "https://vitejs.dev/" },
  {
    icon: <SiTypescript size={icon_size} />,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <AiOutlineJavaScript size={icon_size} />,
    name: "JavaScript",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    icon: <SiTailwindcss size={icon_size} />,
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: <FaFigma size={icon_size} />,
    name: "Figma",
    link: "https://www.figma.com/",
  },
];

export default function Techs() {
  return (
    <section
      id="techs"
      className="fullscreen-section flex flex-col justify-center gap-10 items-center bg-gradient-to-b from-tech-start to-tech-end text-white"
    >
      <FloatingLogo />

      <h2 className="text-4xl md:text-6xl lg:text-7xl text-center m-8">
        Tecnologias
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl px-4 text-white">
        {tecnologias.map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acesse a documentação de ${tech.name}`}
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <div className="mb-2">{tech.icon}</div>
            <span className="text-sm md:text-base font-semibold">
              {tech.name}
            </span>
          </a>
        ))}
      </div>
      <div className="m-8">
        <Button href="#works" className="bg-white hover:bg-gray-100 text-black py-4 px-8">
          trabalhos
        </Button>
      </div>
    </section>
  );
}
