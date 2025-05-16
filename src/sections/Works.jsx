import { useState } from "react";

const Techs = () => {
  const projects = [
    {
      img1: "/ecotasks-d.png",
      img2: "/ecotasks-v.png",
      link1: "https://github.com/juliabacchi1/ecotasks",
      link2: "https://ecotasks.vercel.app/",
      alt1: "Descrição ecotasks",
      alt2: "Visualização ecotasks",
    },
    {
      img1: "/rota-d.png",
      img2: "/rota-v.png",
      link1: "https://cero-phi.vercel.app/",
      link2: "https://rotabaleiafranca.com.br/",
      alt1: "Descrição Baleia Franca",
      alt2: "Visualização Baleia Franca",
    },
    {
      img1: "/recipes-d.png",
      img2: "/recipes-v.png",
      link1: "https://github.com/juliabacchi1/recipes-generator",
      link2: "https://recipes-generator-ai.netlify.app/",
      alt1: "Descrição Recipes Generator",
      alt2: "Visualização Recipes Generator",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section
      id="works"
      className="fullscreen-section bg-white flex flex-col md:flex-row justify-between items-center"
    >
      {/* Logo */}
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      {/* Texto */}
      <div className="w-full md:w-[40%] px-0 md:px-6 my-20 md:my-2 md:mx-10 flex flex-col justify-center items-center md:items-start text-left mb-10 md:mb-0">
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

      {/* Imagens do projeto */}
      <div className="w-full md:w-[60%] flex flex-col md:flex-row justify-center items-center gap-6 px-6">
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <a href={projects[index].link1} target="_blank" rel="noreferrer">
            <img
              src={projects[index].img1}
              alt={projects[index].alt1}
              className="max-w-[80%] md:max-w-full h-auto object-contain"
            />
          </a>
        </div>
        <div className="w-full md:w-[60%] flex justify-center items-center">
          <a href={projects[index].link2} target="_blank" rel="noreferrer">
            <img
              src={projects[index].img2}
              alt={projects[index].alt2}
              className="max-w-[80%] h-auto object-contain md:translate-y-10"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Techs;
