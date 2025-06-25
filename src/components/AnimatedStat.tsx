import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedStatProps {
  value: string;
  label: string;
  delay?: number;
}

export default function AnimatedStat({
  value,
  label,
  delay = 0,
}: AnimatedStatProps) {
  // Extract number and suffix from value string
  const numericValue = parseInt(value.replace(/[^\d]/g, "")) || 0;
  const prefix = value.match(/^[^\d]*/)?.[0] || "";
  const suffix = value.match(/[^\d]*$/)?.[0] || "";

  const { count, elementRef } = useCountUp({
    end: numericValue,
    duration: 2500,
    startOnView: true,
  });

  return (
    <div
      ref={elementRef}
      className="text-center transform transition-all duration-700 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-light text-gold mb-2 transition-all duration-300">
        <span className="inline-block animate-fade-in">
          {prefix}
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-black opacity-80 transition-opacity duration-500 hover:opacity-100">
        {label}
      </p>
    </div>
  );
}
