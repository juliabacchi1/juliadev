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
        className="min-h-[100dvh] md:min-h-screen relative bg-gradient-to-r from-[#E2F4F3] to-[#C9D6FF] text-gray-800 p-4"
      >
        {/* Logo header */}
        <div className="p-2 flex items-center">
          <a
            href="/"
            aria-label="Ir para a página inicial"
            className="flex items-center"
          >
            <img
              className="h-10 mr-2 w-auto"
              src="logo.svg"
              alt="Logo do portfólio de Julia Bacchi"
            />
            <p className="font-semibold">Portfolio Julia Bacchi</p>
          </a>
        </div>

        {/* Hero section */}
        <header className="max-w-5xl mx-auto my-10 md:my-0 flex flex-col-reverse md:flex-row items-center justify-around">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-[clamp(2rem,6vw,3.5rem)] leading-tight mb-8 md:mb-4 text-center md:text-left">
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
                className="bg-gray-100 text-sm font-normal px-5 py-3 rounded-full shadow hover:bg-white/100"
              >
                meu currículo
              </a>
            </div>
          </div>

          <img
            src="home.png"
            alt="Ilustração de computador vintage, estilo retrô"
            loading="lazy"
            className="w-44 md:w-96 h-auto mx-auto md:mx-0 -mt-8 sm:-mt-10"
          />
        </header>
      </main>

      {/* Sections */}
      <AboutMe />
      <Techs />
      <Works />
      <Contato />
      <Blog />
    </>
  );
}
