export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
      <p className="mb-4 text-lg text-gray-600">
        O link que você tentou acessar não existe.
      </p>
      <a href="/" className="text-blue-600 hover:underline">
        Voltar para a home
      </a>
    </div>
  );
}
