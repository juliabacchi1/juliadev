import { useState } from "react";
import FloatingLogo from "../components/FloatingLogo";
import Button from "../components/Button";

const Works = () => {
  const projects = [
    {
      name: "Bora!",
      description:
        "Um app de checklist de viagem com interface visual e intuitiva. Crie e organize listas com itens por categoria. Desenvolvido com React, TailwindCSS e Vite.",
      view: "/bora.webp",
      alt: "Visualização Bora!",
      link: "https://bora-app-jet.vercel.app/",
    },
    {
      name: "Portal Rick and Morty",
      description:
        "Exploração interativa do multiverso com quiz, galeria de personagens via API, filtros, gamificação e estado global com contexto. Desenvolvido com React, TailwindCSS e Vite.",
      view: "/rickandmorty.webp",
      alt: "Visualização Portal Rick and Morty",
      link: "https://portal-rickandmorty.vercel.app/",
    },
    {
      name: "ecotasks",
      description:
        "Um app de desafios sustentáveis que ajuda a reduzir a pegada de carbono com ações diárias simples. Desenvolvido com React, TailwindCSS e Vite.",
      view: "/ecotasks.webp",
      alt: "Visualização ecotasks",
      link: "https://ecotasks.vercel.app/",
    },
    {
      name: "Rota Baleia Franca",
      description:
        "Landing page institucional para rota turística no litoral de Santa Catarina. Design acessível, responsivo e com performance otimizada. Desenvolvido com WordPress.",
      view: "/rotabaleia.webp",
      alt: "Visualização Baleia Franca",
      link: "https://rotabaleiafranca.com.br/",
    },
    {
      name: "Kitchen Assistant",
      description:
        "Gerador de receitas com IA, onde o usuário insere ingredientes disponíveis e recebe sugestões criativas. Desenvolvido com JavaScript, OpenAI API e Netlify.",
      view: "/recipes.webp",
      alt: "Visualização Recipes Generator",
      link: "https://recipes-generator-ai.netlify.app/",
    },
  ];

  const [index, setIndex] = useState(0);
  const { name, description, view, alt, link } = projects[index];

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section
      id="works"
      className="fullscreen-section bg-white flex flex-col md:flex-row items-center justify-center"
    >
      <FloatingLogo />
      <link
        rel="preload"
        href={projects[(index + 1) % projects.length].view}
        as="image"
      />
      {/* Texto lateral */}
      <div className="w-full md:w-[30%] px-6 my-16 mb-4 md:my-2 md:mx-10 flex flex-col items-center md:items-start text-left">
        <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6">Trabalhos</h2>
        <p className="text-base md:text-lg text-center md:text-start text-gray-700 mb-8 max-w-md">
          Alguns dos meus projetos <br /> entregues e apps white label.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={nextProject}
            className="bg-[#F6F7EC] hover:bg-[#EAE0D4] px-9"
          >
            ver mais
          </Button>
          <Button href="#contato" className="bg-[#EAE0D4] hover:bg-[#F6F7EC]">
            me chama
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          {index + 1}/{projects.length}
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center md:items-start px-4 md:px-8 lg:px-12 gap-6">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={view}
            alt={alt}
            className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </a>

        {/* Descrição */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start text-left mt-2 md:mt-0 pr-0 md:pr-4 lg:pr-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
            {name}
          </h3>
          <p className="text-sm md:text-base text-center md:text-start text-gray-700 pb-6 md:pb-8 lg:pb-10">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
