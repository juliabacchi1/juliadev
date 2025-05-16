import { Link } from "react-router-dom";

import svg1 from "../assets/blog/1blog.svg";
import svg2 from "../assets/blog/2blog.svg";
import svg3 from "../assets/blog/3blog.svg";
import svg4 from "../assets/blog/4blog.svg";
import svg5 from "../assets/blog/5blog.svg";
import svg6 from "../assets/blog/6blog.svg";
import svg7 from "../assets/blog/7blog.svg";

export default function Blog() {
  const cards = [
    {
      title: "Novidades no mundo tech",
      color: "bg-[#CCE6FF]",
      icon: svg1,
      link: "/blog/novidades",
    },
    {
      title: "Quero ser programador",
      color: "bg-[#D9B8F4]",
      icon: svg2,
      link: "/blog/novidades",
    },
    {
      title: "Leituras necessárias",
      color: "bg-[#D8A137]",
      icon: svg3,
      link: "/blog/livros",
    },
    {
      title: "Séries imperdíveis",
      color: "bg-[#F05B28]",
      icon: svg4,
      link: "/blog/series",
    },
    {
      title: "O que front-end precisa",
      color: "bg-[#F05B28]",
      icon: svg5,
      link: "/blog/novidades",
    },
    {
      title: "Inteligência artificial",
      color: "bg-[#CCE6FF]",
      icon: svg6,
      link: "/blog/novidades",
    },
    {
      title: "Mulheres na programação",
      color: "bg-[#F6E3B9]",
      icon: svg7,
      link: "/blog/novidades",
    },
  ];

  return (
    <section
      id="blog"
      className="fullscreen-section bg-[#FDF3DD] w-full py-12 px-4 sm:py-16 sm:px-6"
    >
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          <div className="w-full lg:w-1/4 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col items-center px-2 sm:px-0">
              <h2 className="text-[36px] md:text-[67px]">Blog</h2>
              <a href="#home">
                <button className="bg-white mt-5 md:mt-3 text-sm font-semibold px-9 py-3 rounded-full shadow hover:bg-gray-100">
                  volte aqui
                </button>
              </a>
            </div>

            {cards
              .filter((card) => card.title === "Novidades no mundo tech")
              .map((card, index) => (
                <Link to={card.link} key={index}>
                  <div
                    key={index}
                    className={`rounded-xl ${card.color} mt-4 sm:mt-5 py-6 sm:py-20 relative flex flex-col justify-center`}
                  >
                    <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center text-lg font-bold text-[#D4A418]">
                      +
                    </div>
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-24 sm:w-32 h-auto mx-auto"
                    />
                    <div className="text-center pt-2 md:pt-4 text-[24px] md:text-[40px] leading-none font-serif mt-4 font-bold text-white">
                      {card.title}
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards
              .filter((card) => card.title !== "Novidades no mundo tech")
              .map((card, index) => (
                <Link to={card.link} key={index}>
                  <div
                    key={index}
                    className={`rounded-xl ${card.color} py-6 px-4 relative flex flex-col justify-between min-h-[200px]`}
                  >
                    <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center text-lg font-bold text-[#D4A418]">
                      +
                    </div>
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-20 sm:w-32 h-auto mx-auto"
                    />
                    <div className="text-center pt-6 text-[24px] md:text-[40px] leading-none font-serif mb-4 font-bold text-white">
                      {card.title}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
