import { Link } from "react-router-dom";
import FloatingLogo from "../components/FloatingLogo";
import Button from "../components/Button";

const iconModules = import.meta.glob("../assets/blog/*.svg", { eager: true });

const cards = [
  {
    title: "Desperte o seu lado consciente",
    color: "bg-blog-blue",
    icon: iconModules["../assets/blog/1blog.svg"].default,
    link: "/blog/consciente",
    destaque: true,
  },
  {
    title: "Apps que inspiram",
    color: "bg-blog-purple",
    icon: iconModules["../assets/blog/2blog.svg"].default,
    link: "/blog/apps",
  },
  {
    title: "Leituras necessárias",
    color: "bg-blog-yellow",
    icon: iconModules["../assets/blog/3blog.svg"].default,
    link: "/blog/livros",
  },
  {
    title: "Séries imperdíveis",
    color: "bg-blog-orange",
    icon: iconModules["../assets/blog/4blog.svg"].default,
    link: "/blog/series",
  },
  {
    title: "Seja um front-end",
    color: "bg-blog-orange",
    icon: iconModules["../assets/blog/5blog.svg"].default,
    link: "/blog/frontend",
  },
  {
    title: "Design para devs",
    color: "bg-blog-blue",
    icon: iconModules["../assets/blog/6blog.svg"].default,
    link: "/blog/design",
  },
  {
    title: "Heroínas digitais",
    color: "bg-blog-cream",
    icon: iconModules["../assets/blog/7blog.svg"].default,
    link: "/blog/mulher",
  },
];

function CardBlog({ card, isFeatured = false }) {
  return (
    <Link
      to={card.link}
      aria-label={`Ler ${card.title}`}
      className="block h-full"
    >
      <div
        className={`rounded-xl ${
          card.color
        } relative flex flex-col justify-center transition-transform hover:scale-[1.02] ${
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
        <h3
          className={`text-center font-serif font-bold text-white ${
            isFeatured
              ? "pt-2 md:pt-4 text-2xl md:text-4xl leading-none mt-4"
              : "pt-6 text-2xl md:text-4xl leading-none mb-4"
          }`}
        >
          {card.title}
        </h3>
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
      className="fullscreen-section bg-blog-primary w-full py-12 px-4 sm:py-16 sm:px-6"
    >
      <FloatingLogo />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Lateral esquerda */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6 sm:gap-10">
            <div className="flex flex-col items-center px-2 sm:px-0">
              <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8">Blog</h2>
              <Button href="#home" className="bg-white hover:bg-gray-100">
                volte aqui
              </Button>
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
