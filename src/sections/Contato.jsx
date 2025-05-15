export default function Contato() {
  return (
    <section
      id="contato"
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/fundo-contato.png')" }}
    >
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <h2 className="font-serif text-[85px] text-[#156669] text-center">
        Me chama
      </h2>
      <p className="text-[36px] text-center text-gray-800 mb-10">
        Vamos trabalhar juntos
      </p>

      <div className="flex gap-8 mb-16">
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/whatsapp.svg"
            alt="WhatsApp"
            className="w-10 h-10 hover:scale-110 transition"
          />
        </a>
        <a
          href="https://github.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.svg"
            alt="GitHub"
            className="w-10 h-10 hover:scale-110 transition"
          />
        </a>
        <a
          href="https://linkedin.com/in/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/linkedin.svg"
            alt="LinkedIn"
            className="w-10 h-10 hover:scale-110 transition"
          />
        </a>
        <a href="mailto:seuemail@email.com">
          <img
            src="/email.svg"
            alt="Email"
            className="w-10 h-10 hover:scale-110 transition"
          />
        </a>
      </div>

      <button className="bg-[#EAE0D4] font-semibold px-9 py-3 rounded-full shadow hover:bg-white">
        blog tech
      </button>
    </section>
  );
}
