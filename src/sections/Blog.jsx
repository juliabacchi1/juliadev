// Blog.jsx
export default function Blog() {
  const cards = [
    { title: "Quero ser programador", color: "bg-[#D9B8F4]" },
    { title: "Mudança de carreira", color: "bg-[#D8A137]" },
    { title: "Síndrome do impostor", color: "bg-[#F05B28]" },
    { title: "Novidades na programação", color: "bg-[#CCE6FF]" },
    { title: "O que um front-end precisa", color: "bg-[#F05B28]" },
    { title: "Inteligência artificial", color: "bg-[#CCE6FF]" },
    { title: "Mulheres na programação", color: "bg-[#F6E3B9]" },
  ];

  return (
    <section id="blog" className="relative bg-[#FDF3DD] w-full py-16 px-6">
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2">
            <h2 className="text-[67px]">Blog</h2>
          </div>
          <a href="#contato">
            <button className="bg-white mt-3 text-sm font-semibold px-9 py-3 rounded-full shadow hover:bg-gray-100">
              me chama
            </button>
          </a>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl ${card.color} aspect-[3/4] p-4 relative flex flex-col justify-between`}
            >
              {/* Ícone no canto superior direito */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-lg font-bold text-[#D4A418]">
                +
              </div>

              {/* Ícone ilustrativo central (pode substituir por SVG ou emoji) */}
              <div className="flex justify-center text-5xl">🌟</div>

              {/* Título do card */}
              <div className="text-center text-xl font-semibold font-[TAN-NewYork]">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
