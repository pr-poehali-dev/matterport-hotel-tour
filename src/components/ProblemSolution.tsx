import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const AnimatedStat = ({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const numericValue = value.match(/\d+/)?.[0];
      const prefix = value.match(/^[^\d]*/)?.[0] || "";
      const suffix = value.match(/[^\d]*$/)?.[0] || "";

      if (numericValue) {
        const target = parseInt(numericValue);
        let current = 0;
        const increment = target / 30;
        const duration = 1500;
        const stepTime = duration / 30;

        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            setDisplayValue(value);
            clearInterval(counter);
          } else {
            setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
          }
        }, stepTime);

        return () => clearInterval(counter);
      } else {
        setDisplayValue(value);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`text-center transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="text-4xl md:text-5xl font-light text-gold mb-2">
        {displayValue}
      </div>
      <p className="text-black">{label}</p>
    </div>
  );
};

const ProblemSolution = () => {
  const problems = [
    {
      icon: "ImageOff",
      title: "Статичный контент ≠ эмоции",
      description: "Фото не передают атмосферу",
    },
    {
      icon: "MousePointer",
      title: "Ограниченное взаимодействие с фото/видео",
      description: "Отсутствие интерактива снижает интерес к бронированию",
    },
    {
      icon: "MousePointerClick",
      title: "Низкое вовлечение",
      description: "Посетители быстрее покидают сайт",
    },
    {
      icon: "Camera",
      title: "Фото не показывают 100% пространства",
      description: "Важные фрагменты остаются за кадром",
    },
  ];

  const stats = [
    { value: "+87%", label: "просмотров" },
    { value: "54%", label: "не приедут без тура" },
    { value: "х3", label: "дольше на сайте" },
    { value: "+41%", label: "бронирований" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Problems */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Фото и видео устарели —{" "}
            <span className="text-gold">гость не чувствует атмосферу</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {problems.map((problem, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gold/10 transition-all duration-500 overflow-visible relative">
                  {index === 0 ? (
                    <img
                      src="https://cdn.poehali.dev/files/c966b33e-85bb-4f51-bbd8-8aff11bd8d09.png"
                      alt="Статичный контент"
                      className="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-[2] group-hover:rotate-[360deg] relative z-10"
                    />
                  ) : index === 1 ? (
                    <img
                      src="https://cdn.poehali.dev/files/ec7b85f6-38f5-43e9-ae66-54e3f7488690.png"
                      alt="Ограниченное взаимодействие с фото/видео"
                      className="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-[2] group-hover:rotate-[360deg] relative z-10"
                    />
                  ) : index === 3 ? (
                    <img
                      src="https://cdn.poehali.dev/files/1ec14ca3-52e5-411a-94a9-6d25161b6f8b.png"
                      alt="Фото не показывают 100% пространства"
                      className="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-[2] group-hover:[transform:scale(2)_rotateY(720deg)] relative z-10"
                    />
                  ) : index === 2 ? (
                    <img
                      src="https://cdn.poehali.dev/files/9fd94515-2a5b-4f1a-b2c5-bba6411231cf.png"
                      alt="Низкое вовлечение"
                      className="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-[2] group-hover:[transform:scale(2)_rotateY(720deg)] relative z-10"
                    />
                  ) : (
                    <span className="text-2xl transition-all duration-500 group-hover:scale-[2] group-hover:[transform:scale(2)_rotateY(180deg)]">
                      📸
                    </span>
                  )}
                </div>
                <h3 className="font-medium mb-2 text-2xl">{problem.title}</h3>
                <p className="text-black font-normal text-sm">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16 animate-fade-in">
          <h3 className="text-3xl font-light text-center mb-8">Решение</h3>
          <blockquote className="text-xl md:text-2xl text-center leading-relaxed text-text italic">
            "3D-тур — это не фото. Гость идёт по залам, рассматривает детали,
            чувствует масштаб и сразу влюбляется в Ваше пространство. Это
            эмоциональное погружение, которое продаёт."
          </blockquote>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.value}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
