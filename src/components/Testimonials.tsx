import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Гости приезжают уже зная каждый уголок. Меньше вопросов – больше восторга.",
      author: "Управляющий бутик-отеля",
      company: "Премиум-отель в центре Москвы",
    },
    {
      text: "Администраторы шлют ссылку на нужный ракурс вместо съёмок вручную.",
      author: "Менеджер сети отелей",
      company: "Сеть апарт-отелей",
    },
    {
      text: "За первый месяц окупили расходы, бронирования уверенные, отмен стало в 3× меньше.",
      author: "Владелец апарт-отеля",
      company: "Luxury Apartments",
    },
    {
      text: "Инвесторы приняли решение дистанционно, не приезжая на просмотр.",
      author: "Девелопер",
      company: "Premium Development",
    },
    {
      text: "За первый месяц окупили все расходы. +40% бронирований премиум-номеров.",
      author: "Управляющий отеля",
      company: "Four Seasons Moscow",
    },
    {
      text: "Инвесторы принимали решения дистанционно. +25% продаж на этапе котлована.",
      author: "Девелопер",
      company: "Capital Group",
    },
    {
      text: "Покупатели видели каждую деталь. Продажа за 2 недели вместо 6 месяцев.",
      author: "Владелец недвижимости",
      company: "Частный заказчик",
    },
    {
      text: "Бронирования уверенные, а отмен стало в 3× меньше.",
      author: "Управляющий бутик-отеля",
      company: "Премиум-размещение",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 2)) %
        Math.ceil(testimonials.length / 2),
    );
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Что говорят <span className="text-gold">партнёры</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {testimonials
              .slice(currentSlide * 2, currentSlide * 2 + 2)
              .map((testimonial, index) => (
                <div
                  key={currentSlide * 2 + index}
                  className="bg-white p-8 rounded-xl shadow-sm transform transition-all duration-500 hover:scale-105 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <blockquote className="text-lg mb-6 italic text-gray-800">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <cite className="text-gold font-medium not-italic">
                      {testimonial.author}
                    </cite>
                    <div className="text-gray-700 text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-10 h-10 p-0"
            >
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <div className="flex gap-2 items-center">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-gold" : "bg-gray-300"
                    }`}
                  />
                ),
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-10 h-10 p-0"
            >
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
