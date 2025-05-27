export default function FloatingLogo() {
  return (
    <div className="absolute top-0 left-0 px-6 py-6 z-10">
      <a
        href="#home"
        aria-label="Voltar para o início"
        className="flex items-center group"
      >
        <img
          src="/logo.svg"
          alt="Logo Julia Bacchi"
          className="h-10 mr-2 w-auto"
          width="40"
          height="40"
        />
      </a>
    </div>
  );
}
