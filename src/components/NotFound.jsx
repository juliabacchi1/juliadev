import NotFoundImg from "../assets/404-image.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#8c82b3] flex flex-col items-center justify-center text-center p-6">
      <img
        src={NotFoundImg}
        alt="Erro 404 - Página não encontrada"
        className="w-60 md:w-72 h-auto mb-10"
      />

      <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
        Opa! Página não encontrada
      </h1>

      <p className="mb-6 text-white text-base md:text-lg">
        A página que você tentou acessar não existe ou foi movida.
      </p>

      <a
        href="/"
        className="bg-white text-[#8c82b3] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        Voltar para o início
      </a>
    </div>
  );
}
