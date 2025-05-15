import svg1 from "../assets/blog/1blog.svg";
import svg2 from "../assets/blog/2blog.svg";
import svg3 from "../assets/blog/3blog.svg";
import svg4 from "../assets/blog/4blog.svg";
import svg5 from "../assets/blog/5blog.svg";
import svg6 from "../assets/blog/6blog.svg";
import svg7 from "../assets/blog/7blog.svg";

export default function Blog() {
  const cards = [
    { title: "Novidades na programação", color: "bg-[#CCE6FF]", icon: svg1 },
    { title: "Quero ser programador", color: "bg-[#D9B8F4]", icon: svg2 },
    { title: "Mudança de carreira", color: "bg-[#D8A137]", icon: svg3 },
    { title: "Síndrome do impostor", color: "bg-[#F05B28]", icon: svg4 },
    {
      title: "O que front-end precisa",
      color: "bg-[#F05B28]",
      icon: svg5,
    },
    { title: "Inteligência artificial", color: "bg-[#CCE6FF]", icon: svg6 },
    { title: "Mulheres na programação", color: "bg-[#F6E3B9]", icon: svg7 },
  ];

  return (
    <section id="blog" className="relative bg-[#FDF3DD] w-full py-16 px-6">
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Coluna Esquerda */}
          <div className="w-full lg:w-1/4 flex flex-col gap-8">
            
            <div className="flex flex-col items-center">
              <h2 className="text-[67px]">Blog</h2>
              <a href="#contato">
                <button className="bg-white mt-3 text-sm font-semibold px-9 py-3 rounded-full shadow hover:bg-gray-100">
                  me chama
                </button>
              </a>
            </div>

            {/* Card destaque */}
            {cards
              .filter((card) => card.title === "Novidades na programação")
              .map((card, index) => (
                <div
                  key={index}
                  className={`rounded-xl ${card.color} mt-5 py-20 relative flex flex-col justify-center`}
                >
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-lg font-bold text-[#D4A418]">
                    +
                  </div>
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-32 h-auto mx-auto"
                  />
                  <div className="text-center text-[40px] leading-none font-serif mt-6 font-bold text-white">
                    {card.title}
                  </div>
                </div>
              ))}
          </div>

          {/* Coluna Direita */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards
              .filter((card) => card.title !== "Novidades na programação")
              .map((card, index) => (
                <div
                  key={index}
                  className={`rounded-xl ${card.color} py-5 relative flex flex-col justify-between`}
                >
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-lg font-bold text-[#D4A418]">
                    +
                  </div>
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-32 h-auto mx-auto"
                  />
                  <div className="text-center text-[40px] leading-none font-serif mb-8 font-bold text-white">
                    {card.title}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
