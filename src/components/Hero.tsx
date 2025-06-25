import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with reception photo and parallax effect */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            animation: "parallax-float 8s ease-in-out infinite",
          }}
        />
        {/* White translucent overlay */}
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 max-w-6xl mx-auto text-black">
          Ваш интерьер уникален —{" "}
          <span className="text-[#d4af37] font-medium">
            покажите его по-настоящему
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
          Живые 3D-туры Matterport для бутик-отелей, где важно показать
          атмосферу на 360°
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
          <Button
            className="text-lg px-10 py-6 text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#d4af37" }}
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
