import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation Menu */}
      <nav className="relative z-20">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center w-full gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://cdn.poehali.dev/files/14b29ab4-0afc-439e-bdd1-3a08ac6f64d6.png"
                alt="3D-TOUR.PRO"
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation buttons - responsive spacing */}
            <div className="hidden md:flex items-center flex-1 justify-start ml-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <button
                  onClick={() => scrollToSection("demo-tour")}
                  className="text-gray-700 hover:text-[#d4af37] transition-colors"
                >
                  Попробовать 3D-тур
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-700 hover:text-[#d4af37] transition-colors"
                >
                  Портфолио
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 hover:text-[#d4af37] transition-colors"
                >
                  Отзывы
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-700 hover:text-[#d4af37] transition-colors"
                >
                  Цены
                </button>
              </div>
            </div>

            {/* Phone number */}
            <div className="flex-shrink-0">
              <a
                href="tel:+7(999)123-45-67"
                className="text-black font-playfair text-sm hover:text-[#d4af37] transition-colors"
              >
                +7 (999) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center">
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
                0 0 1px rgba(255, 255, 255, 0.9),
                1px 1px 0 rgba(255, 255, 255, 0.4),
                -1px -1px 0 rgba(255, 255, 255, 0.4),
                1px -1px 0 rgba(255, 255, 255, 0.3),
                -1px 1px 0 rgba(255, 255, 255, 0.3),
                2px 2px 0 rgba(255, 255, 255, 0.2),
                -2px -2px 0 rgba(255, 255, 255, 0.2),
                2px -2px 0 rgba(255, 255, 255, 0.15),
                -2px 2px 0 rgba(255, 255, 255, 0.15),
                0 2px 2px rgba(255, 255, 255, 0.1)
              `,
              }}
            >
              покажите его по-настоящему
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            Живые 3D-VR туры для отелей, гостиниц и вилл, где важно показать
            атмосферу на 360°
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
