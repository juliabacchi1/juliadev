import AboutMe from "./AboutMe";
import Techs from "./Techs";
import Works from "./Works";
import Contato from "./Contato";
import Blog from "./Blog";

export default function Project() {
  return (
    <>
      <main
        id="home"
        className="overflow-hidden md:min-h-screen relative bg-gradient-to-r from-[#E2F4F3] to-[#C9D6FF] text-gray-800 p-4"
      >
        <div className="p-2 flex items-center">
          <a href="/" className="flex items-center">
            <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
            <p className="font-semibold">Portfolio Julia Bacchi</p>
          </a>
        </div>
        <header className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-[clamp(2rem,6vw,3.5rem)] leading-tight mb-4 pt-6 md:pt-0 text-center md:text-left">
              Desenvolvendo
              <br /> tecnologia <br /> com cara de lar
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#sobre-mim">
                <button className="bg-white text-sm font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100">
                  sobre mim
                </button>
              </a>
              <a
                href="curriculo.pdf"
                download
                className="bg-gray-100 text-sm font-regular px-5 py-3 rounded-full shadow hover:bg-white/100"
              >
                meu currículo
              </a>
            </div>
          </div>
          <img
            src="home.png"
            alt="computador vintage, imagem de freepik"
            className="w-64 md:w-96 h-auto mx-auto md:mx-0 -mt-8 sm:-mt-10"
          />
        </header>
      </main>
      <AboutMe />
      <Techs />
      <Works />
      <Contato />
      <Blog />
    </>
  );
}
