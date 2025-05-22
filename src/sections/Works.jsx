import { useState } from "react";
import FloatingLogo from "../components/FloatingLogo";

const Works = () => {
  const projects = [
    {
      name: "Bora!",
      description:
        "Um app de checklist de viagem com interface visual e intuitiva. Crie e organize listas com itens por categoria. Desenvolvido com React, TailwindCSS e Vite.",
      view: "/bora.png",
      alt: "Visualização Bora!",
      link: "https://bora-app-jet.vercel.app/",
    },
    {
      name: "ecotasks",
      description:
        "Um app de desafios sustentáveis que ajuda a reduzir a pegada de carbono com ações diárias simples. Desenvolvido com React, TailwindCSS e Vite.",
      view: "/ecotasks-v.png",
      alt: "Visualização ecotasks",
      link: "https://ecotasks.vercel.app/",
    },
    {
      name: "Rota Baleia Franca",
      description:
        "Landing page institucional para rota turística no litoral de Santa Catarina. Design acessível, responsivo e com performance otimizada. Desenvolvido com WordPress.",
      view: "/rota-v.png",
      alt: "Visualização Baleia Franca",
      link: "https://rotabaleiafranca.com.br/",
    },
    {
      name: "Recipes Generator",
      description:
        "Gerador de receitas com IA, onde o usuário insere ingredientes disponíveis e recebe sugestões criativas. Desenvolvido com JavaScript, OpenAI API e Netlify.",
      view: "/recipes-v.png",
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

      {/* Texto lateral */}
      <div className="w-full md:w-[30%] px-6 my-16 md:my-2 md:mx-10 flex flex-col items-center md:items-start text-left">
        <h2 className="text-[36px] md:text-[67px] mb-4">Trabalhos</h2>
        <p className="text-[16.5px] text-center md:text-start text-gray-700 mb-8 max-w-md">
          Alguns dos meus projetos <br /> entregues e apps white label.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={nextProject}
            className="bg-[#F6F7EC] font-semibold px-9 py-3 rounded-full shadow hover:bg-[#EAE0D4] transition"
          >
            ver mais
          </button>
          <a href="#contato">
            <button className="bg-[#EAE0D4] font-regular px-7 py-3 rounded-full shadow hover:bg-[#F6F7EC] transition">
              me chama
            </button>
          </a>
        </div>
      </div>

      <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 gap-6">
        {/* Imagem */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="w-full md:w-1/2"
        >
          <img src={view} alt={alt} className="w-full h-auto object-contain" />
        </a>

        {/* Descrição */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start text-left mt-4 md:mt-4 pr-0 md:pr-12">
          <h3 className="text-[24px] md:text-[30px] font-bold mb-3">{name}</h3>
          <p className="text-[15px] md:text-[14px] text-center md:text-start text-gray-700 pb-10">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
