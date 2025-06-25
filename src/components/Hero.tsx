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
          <div className="flex justify-between items-center w-full">
            <div className="text-xl font-semibold text-[#d4af37]">
              СОЗДАНИЕ ВИРТУАЛЬНЫХ ТУРОВ.РФ
            </div>
            <div className="hidden md:flex justify-center flex-1 mx-8">
              <div className="flex justify-evenly w-full max-w-2xl">
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
            <a
              href="tel:+79190223316"
              className="text-[#d4af37] font-semibold hover:text-[#b8941f] transition-colors text-lg"
            >
              +7 919 022 33 16
            </a>
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
            <span className="text-[#d4af37] font-medium">
              покажите его по-настоящему
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            Живые 3D-VR туры для отелей, гостиниц и вилл, где важно показать
            атмосферу на 360°
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button
              className="text-lg px-10 py-6 text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#d4af37" }}
              onClick={() => scrollToSection("demo-tour")}
            >
              Смотреть пример
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
      `}</style>
    </section>
  );
};

export default Hero;
