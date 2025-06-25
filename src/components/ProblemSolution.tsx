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
          <h3 className="text-3xl font-light text-center mb-8 relative flex items-center justify-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="text-yellow-500"
              fill="currentColor"
            >
              {/* VR Headset */}
              <ellipse
                cx="16"
                cy="10"
                rx="8"
                ry="4"
                fill="currentColor"
                opacity="0.9"
              />
              <rect x="10" y="8" width="12" height="4" rx="2" fill="white" />
              <rect
                x="11"
                y="9"
                width="10"
                height="2"
                rx="1"
                fill="currentColor"
              />

              {/* VR Side indicators */}
              <path
                d="M6 11 C6 11 7 10 8 11 C8 12 7 13 6 12 Z"
                fill="currentColor"
                opacity="0.7"
              />
              <path
                d="M26 11 C26 11 25 10 24 11 C24 12 25 13 26 12 Z"
                fill="currentColor"
                opacity="0.7"
              />
              <path
                d="M4 12 C4 12 5 11 6 12 C6 13 5 14 4 13 Z"
                fill="currentColor"
                opacity="0.5"
              />
              <path
                d="M28 12 C28 12 27 11 26 12 C26 13 27 14 28 13 Z"
                fill="currentColor"
                opacity="0.5"
              />

              {/* Person Body */}
              <ellipse cx="16" cy="16" rx="6" ry="4" fill="currentColor" />
              <path
                d="M10 18 Q10 20 8 22 Q8 24 10 26 Q12 28 14 26 Q16 24 18 26 Q20 28 22 26 Q24 24 24 22 Q24 20 22 18"
                fill="currentColor"
                opacity="0.8"
              />

              {/* Arms in motion */}
              <ellipse
                cx="8"
                cy="18"
                rx="2"
                ry="4"
                fill="currentColor"
                opacity="0.7"
                transform="rotate(-20 8 18)"
              />
              <ellipse
                cx="24"
                cy="18"
                rx="2"
                ry="4"
                fill="currentColor"
                opacity="0.7"
                transform="rotate(20 24 18)"
              />

              {/* Movement indicator arrow */}
              <path
                d="M26 24 L29 22 L26 20 L27 22 Z"
                fill="currentColor"
                opacity="0.6"
              />

              {/* Footsteps */}
              <ellipse
                cx="20"
                cy="29"
                rx="2"
                ry="1.5"
                fill="currentColor"
                opacity="0.4"
              />
              <ellipse
                cx="24"
                cy="30"
                rx="1.5"
                ry="1"
                fill="currentColor"
                opacity="0.3"
              />
              <ellipse
                cx="22"
                cy="31"
                rx="1"
                ry="0.5"
                fill="currentColor"
                opacity="0.2"
              />
            </svg>
            Эффект присутствия и свободы передвижения
          </h3>
          <blockquote className="text-xl md:text-2xl text-center leading-relaxed text-text italic">
            "3D-тур — это не просто фото: гость свободно гуляет по залам,
            разглядывает детали, чувствует масштаб и сразу влюбляется в Ваше
            пространство. Такое эмоциональное погружение усиливает доверие и
            продаёт."
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

// CSS styles for walking person animation
const styles = `
  .walking-person {
    animation: walkLeftRight 4s ease-in-out infinite;
  }
  
  @keyframes walkLeftRight {
    0% {
      transform: translateX(-50px);
    }
    50% {
      transform: translateX(calc(100vw - 100px));
    }
    100% {
      transform: translateX(-50px);
    }
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
