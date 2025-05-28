import { Mail, Github, Linkedin, Phone } from "iconoir-react";
import FloatingLogo from "../components/FloatingLogo";
import Button from "../components/Button";

export default function Contato() {
  return (
    <section
      id="contato"
      className="fullscreen-section bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/fundo-contato.png')" }}
    >
      <FloatingLogo />

      <h2 className="font-serif text-5xl md:text-7xl mb-6 md:mb-8 text-contact-500">
        E agora?!
      </h2>
      <p className="text-xl md:text-4xl text-gray-800">Bora trabalhar juntos</p>

      <div className="flex gap-4 md:gap-6 m-8">
        {[
          {
            icon: <Phone className="w-8 h-8" />,
            href: "https://wa.me/48991779743?text=Oi%20",
            label: "WhatsApp",
          },
          {
            icon: <Github className="w-8 h-8" />,
            href: "https://github.com/juliabacchi1",
            label: "GitHub",
          },
          {
            icon: <Linkedin className="w-8 h-8" />,
            href: "https://www.linkedin.com/in/juliabacchi/",
            label: "LinkedIn",
          },
          {
            icon: <Mail className="w-8 h-8" />,
            href: "mailto:juliabacchi92@gmail.com",
            label: "Email",
          },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contato via ${item.label}`}
            className="hover:scale-110 transition-transform duration-200"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <Button href="#blog" className="bg-work-100 hover:bg-white mt-10">
        blog tech
      </Button>
    </section>
  );
}
