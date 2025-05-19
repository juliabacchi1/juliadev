import NotFoundImg from "../assets/404-image.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <img
        src={NotFoundImg}
        alt="Erro 404 - Página não encontrada"
        className="w-60 md:w-96 mb-6"
      />

      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
        Opa! Página não encontrada
      </h1>

      <p className="mb-6 text-gray-600 text-base md:text-lg">
        A página que você tentou acessar não existe ou foi movida.
      </p>

      <a
        href="/"
        className="bg-black text-white px-6 py-3 rounded-full shadow hover:bg-gray-800 transition"
      >
        Voltar para o início
      </a>
    </div>
  );
}
