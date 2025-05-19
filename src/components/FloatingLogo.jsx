export default function FloatingLogo() {
  return (
    <div className="absolute top-0 left-0 px-6 py-6 z-10">
      <a href="#home" aria-label="Voltar para o topo" className="flex items-center">
        <img
          src="/logo.svg"
          alt="Logo do portfolio de Julia Bacchi"
          className="h-10 mr-2 w-auto"
        />
      </a>
    </div>
  );
}
