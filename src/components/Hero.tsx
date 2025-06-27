import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="px-8 py-4">
          <div className="flex justify-between items-center w-full gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={scrollToTop}
                className="transition-all duration-300 hover:scale-105 group"
              >
                <img
                  src="https://cdn.poehali.dev/files/7db32aa0-0df6-4c3c-94f4-ef2483d1949c.png"
                  alt="3D-TOUR.PRO"
                  className="h-6 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.9)] group-hover:brightness-110"
                />
              </button>
            </div>

            {/* Navigation buttons - full width distribution */}
            <div className="hidden md:flex items-center flex-1 justify-center mx-8">
              <div className="flex items-center justify-between w-full max-w-2xl">
                <button
                  onClick={() => scrollToSection("demo-tour")}
                  className="text-gray-700 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Попробовать 3D-тур
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-700 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Портфолио
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Отзывы
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-700 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Цены
                </button>
              </div>
            </div>

            {/* Phone number */}
            <div className="flex-shrink-0">
              <a
                href="tel:+79190223316"
                className="text-black font-playfair text-sm hover:text-[#d4af37] transition-colors"
              >
                +7 919 022-33-16
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center pt-16">
        {/* Background with reception photo and parallax effect */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/files/59607296-85f7-4ab2-b035-4140a35ceadd.png')`,
              animation: "parallax-float 8s ease-in-out infinite",
            }}
          />
          {/* White translucent overlay */}
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 max-w-6xl mx-auto text-black">
            Ваш интерьер уникален —{" "}
            <span
              className="text-[#d4af37] font-medium"
              style={{
                textShadow: `
                0 0 3px rgba(255, 255, 255, 1),
                0 0 6px rgba(255, 255, 255, 0.9),
                0 0 12px rgba(255, 255, 255, 0.8),
                1px 1px 0 rgba(255, 255, 255, 0.6),
                -1px -1px 0 rgba(255, 255, 255, 0.6),
                1px -1px 0 rgba(255, 255, 255, 0.5),
                -1px 1px 0 rgba(255, 255, 255, 0.5),
                2px 2px 0 rgba(255, 255, 255, 0.4),
                -2px -2px 0 rgba(255, 255, 255, 0.4),
                2px -2px 0 rgba(255, 255, 255, 0.3),
                -2px 2px 0 rgba(255, 255, 255, 0.3),
                3px 3px 0 rgba(255, 255, 255, 0.25),
                -3px -3px 0 rgba(255, 255, 255, 0.25),
                0 4px 8px rgba(255, 255, 255, 0.2)
              `,
              }}
            >
              покажите его по-настоящему
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            Живые 3D-VR туры для отелей, гостиниц и вилл, где важно показать{" "}
            <span
              className="text-[#d4af37] font-medium"
              style={{
                textShadow: `
                0 0 3px rgba(255, 255, 255, 1),
                0 0 6px rgba(255, 255, 255, 0.9),
                0 0 12px rgba(255, 255, 255, 0.8),
                1px 1px 0 rgba(255, 255, 255, 0.6),
                -1px -1px 0 rgba(255, 255, 255, 0.6),
                1px -1px 0 rgba(255, 255, 255, 0.5),
                -1px 1px 0 rgba(255, 255, 255, 0.5),
                2px 2px 0 rgba(255, 255, 255, 0.4),
                -2px -2px 0 rgba(255, 255, 255, 0.4),
                2px -2px 0 rgba(255, 255, 255, 0.3),
                -2px 2px 0 rgba(255, 255, 255, 0.3),
                3px 3px 0 rgba(255, 255, 255, 0.25),
                -3px -3px 0 rgba(255, 255, 255, 0.25),
                0 4px 8px rgba(255, 255, 255, 0.2)
              `,
              }}
            >
              атмосферу
            </span>{" "}
            на 360°
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button
              className="text-lg px-10 py-6 text-white transition-all duration-300 relative"
              style={{
                backgroundColor: "#d4af37",
              }}
              onClick={() => scrollToSection("demo-tour")}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255, 255, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="relative z-10">Смотреть пример</span>
              <div
                className="absolute inset-0 border-2 border-white rounded-md"
                style={{
                  animation:
                    "pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
            </Button>
            <Button
              variant="outline"
              className="text-lg px-10 py-6 border-2 transition-all duration-300 hover:text-[#111111]"
              style={{
                borderColor: "#d4af37",
                color: "#d4af37",
              }}
              onClick={() => scrollToSection("final-cta")}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d4af37";
                e.currentTarget.style.color = "#111111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#d4af37";
              }}
            >
              Получить расчёт
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes parallax-float {
          0%,
          100% {
            transform: scale(1) translateY(0px);
          }
          50% {
            transform: scale(1.05) translateY(-10px);
          }
        }

        @keyframes pulse-border {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
