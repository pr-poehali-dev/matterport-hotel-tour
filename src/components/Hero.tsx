import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with reception photo */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 max-w-6xl mx-auto text-white">
          Ваш уникальный интерьер{" "}
          <span className="text-gold font-medium">продаёт себя сам</span> — если
          показать его по-настоящему
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Живые 3D-туры Matterport для бутик-отелей, где важно показать
          атмосферу и статус на 360°
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
          <Button className="btn-primary text-lg px-10 py-6">
            Смотреть пример
          </Button>
          <Button
            variant="outline"
            className="btn-secondary text-lg px-10 py-6"
          >
            Получить расчёт
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
