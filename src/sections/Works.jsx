import { useState } from "react";

const Techs = () => {
  const projects = [
    {
      name: "EcoTasks",
      description:
        "Um app de desafios sustentáveis que ajuda a reduzir a pegada de carbono com ações diárias simples. Desenvolvido com React, TailwindCSS e Vite.",
      view: "/ecotasks-v.png",
      alt: "Visualização ecotasks",
      link: "https://ecotasks.vercel.app/",
    },
    {
      name: "Rota Baleia Franca",
      description:
        "Landing page institucional para rota turística no litoral de Santa Catarina. Design acessível, responsivo e com performance otimizada.",
      view: "/rota-v.png",
      alt: "Visualização Baleia Franca",
      link: "https://rotabaleiafranca.com.br/",
    },
    {
      name: "Recipes Generator",
      description:
        "Gerador de receitas com IA, onde o usuário insere ingredientes disponíveis e recebe sugestões criativas. Desenvolvido com React, OpenAI API e Netlify.",
      view: "/recipes-v.png",
      alt: "Visualização Recipes Generator",
      link: "https://recipes-generator-ai.netlify.app/",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const { name, description, view, alt, link } = projects[index];

  return (
    <section
      id="works"
      className="fullscreen-section bg-white flex flex-col md:flex-row justify-between items-center"
    >
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="w-full md:w-[30%] px-0 md:px-6 my-20 md:my-2 md:mx-10 flex flex-col justify-center items-center md:items-start text-left mb-10 md:mb-0">
        <h2 className="text-[36px] md:text-[67px] px-10 mb-4">Trabalhos</h2>
        <p className="text-[16.5px] px-10 text-gray-700 mb-8 max-w-md">
          Alguns dos meus projetos <br /> entregues e apps white label.
        </p>
        <div className="flex gap-4 px-10 flex-wrap">
          <button
            onClick={nextProject}
            className="bg-[#F6F7EC] font-semibold px-9 py-3 rounded-full shadow hover:bg-[#EAE0D4]"
          >
            ver mais
          </button>
          <a href="#blog" className="flex items-center">
            <button className="bg-[#EAE0D4] font-regular px-8 py-3 rounded-full shadow hover:bg-[#F6F7EC]">
              blog tech
            </button>
          </a>
        </div>
      </div>

      <div className="w-full md:w-[40%] flex justify-center items-center px-4 md:px-10 my-10 md:my-0">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={view}
            alt={alt}
            className="max-w-[80%] h-auto object-contain translate-y-4"
          />
        </a>
      </div>

      <div className="w-full md:w-[30%] px-10 md:px-20 flex flex-col justify-center items-center md:items-start text-left my-10 md:my-0">
        <h2 className="text-[28px] md:text-[30px] font-bold mb-4">{name}</h2>
        <p className="text-[16px] md:text-[14px] text-gray-700 mb-6">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Techs;
