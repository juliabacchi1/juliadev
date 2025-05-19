import Arrow from "../assets/blog/arrow.svg";

export default function PostTemplate({ title, image, date, children }) {
  const [day, month, year] = date.split("/");

  return (
    <section className="relative bg-[#f4f3f2] min-h-screen py-20 px-4 flex justify-center items-start">
      {/* Logo flutuante no topo */}
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a
          href="/"
          className="flex items-center"
          aria-label="Voltar para a home"
        >
          <img
            className="h-10 mr-2 w-auto"
            src="/logo.svg"
            alt="Logo do Portfolio de Julia Bacchi"
          />
        </a>
      </div>

      <div className="relative w-full max-w-5xl">
        <div className="absolute left-0 font-medium text-gray-600 text-lg flex items-center gap-2 sm:-top-10 -top-2">
          <span>por Julia Bacchi</span>
          <img src={Arrow} alt="seta curva" className="w-16 h-16" />
        </div>

        <div className="absolute right-0 sm:-top-16 -top-6">
          <div className="w-28 h-28 rounded-full border-2 border-black bg-white flex flex-col items-center justify-center font-semibold text-lg text-black shadow leading-tight text-center">
            <span>
              {day} / {month}
            </span>
            <span>{year}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-black p-6 w-full mx-auto mt-16 sm:mt-6">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-[18rem] sm:h-[30rem] object-cover py-3 mb-6"
          />

          <h1 className="uppercase text-3xl sm:text-4xl tracking-widest font-semibold mb-4 text-gray-800">
            {title}
          </h1>

          <div className="text-base py-10 sm:text-lg leading-relaxed text-gray-700 space-y-6">
            {children}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-9 py-2 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition"
          >
            Voltar
          </button>
        </div>
      </div>
    </section>
  );
}
