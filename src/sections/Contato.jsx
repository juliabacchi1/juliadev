import { Mail, Github, Linkedin, Phone } from "iconoir-react";

export default function Contato() {
  return (
    <section
      id="contato"
      className="fullscreen-section bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/fundo-contato.png')" }}
    >
      {/* Logo flutuante no topo */}
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="h-10 mr-2 w-auto" src="logo.svg" alt="logo" />
        </a>
      </div>

      {/* Título e subtítulo */}
      <h2 className="font-serif text-[45px] md:text-[88px] mb-2 md:mb-0 text-[#156669]">
        E agora?!
      </h2>
      <p className="text-[18px] md:text-[35px] text-gray-800">
        Bora trabalhar juntos
      </p>

      {/* Ícones de contato */}
      <div className="flex gap-4 md:gap-6 m-7">
        <a
          href="https://wa.me/48991779743?text=Oi%20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Phone className="w-8 h-8 text-[#1F2937]" />
        </a>
        <a
          href="https://github.com/juliabacchi1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Github className="w-8 h-8 text-[#1F2937]" />
        </a>
        <a
          href="https://www.linkedin.com/in/juliabacchi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin className="w-8 h-8 text-[#1F2937]" />
        </a>
        <a
          href="mailto:juliabacchi92@gmail.com"
          className="hover:scale-110 transition-transform"
        >
          <Mail className="w-8 h-8 text-[#1F2937]" />
        </a>
      </div>

      {/* Botão para blog */}
      <div className="mt-10">
        <a href="#blog" className="flex items-center">
          <button className="bg-[#EAE0D4] font-semibold px-9 py-3 rounded-full shadow hover:bg-white">
            blog tech
          </button>
        </a>
      </div>
    </section>
  );
}
