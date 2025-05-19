import { Link } from "react-router-dom";

import svg1 from "../assets/blog/1blog.svg";
import svg2 from "../assets/blog/2blog.svg";
import svg3 from "../assets/blog/3blog.svg";
import svg4 from "../assets/blog/4blog.svg";
import svg5 from "../assets/blog/5blog.svg";
import svg6 from "../assets/blog/6blog.svg";
import svg7 from "../assets/blog/7blog.svg";

const cards = [
  {
    title: "Novidades no mundo tech",
    color: "bg-[#CCE6FF]",
    icon: svg1,
    link: "/blog/novidades",
    destaque: true,
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

function CardBlog({ card, isFeatured }) {
  return (
    <Link to={card.link}>
      <div
        className={`rounded-xl ${
          card.color
        } relative flex flex-col justify-center ${
          isFeatured ? "mt-4 sm:mt-5 py-6 sm:py-20" : "py-6 px-4 min-h-[200px]"
        }`}
      >
        <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center text-lg font-bold text-[#D4A418]">
          +
        </div>
        <img
          src={card.icon}
          alt={card.title}
          className={`mx-auto ${isFeatured ? "w-24 sm:w-32" : "w-20 sm:w-32"}`}
        />
        <div
          className={`text-center font-serif font-bold text-white ${
            isFeatured
              ? "pt-2 md:pt-4 text-[24px] md:text-[40px] leading-none mt-4"
              : "pt-6 text-[24px] md:text-[40px] leading-none mb-4"
          }`}
        >
          {card.title}
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const destaque = cards.find((card) => card.destaque);
  const outros = cards.filter((card) => !card.destaque);

  return (
    <section
      id="blog"
      className="fullscreen-section bg-[#FDF3DD] w-full py-12 px-4 sm:py-16 sm:px-6"
    >
      {/* Logo flutuante no topo */}
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a
          href="#home"
          className="flex items-center"
          aria-label="Voltar para o topo"
        >
          <img
            className="h-10 mr-2 w-auto"
            src="logo.svg"
            alt="Logo do portfolio de Julia Bacchi"
          />
        </a>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Lateral esquerda */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col items-center px-2 sm:px-0">
              <h2 className="text-[36px] md:text-[67px]">Blog</h2>
              <a href="#home">
                <button className="bg-white mt-5 md:mt-3 text-sm font-semibold px-9 py-3 rounded-full shadow hover:bg-gray-100">
                  volte aqui
                </button>
              </a>
            </div>

            {destaque && <CardBlog card={destaque} isFeatured />}
          </div>

          {/* Grid dos outros cards */}
          <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outros.map((card, index) => (
              <CardBlog key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
