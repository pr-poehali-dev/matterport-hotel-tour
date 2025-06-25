import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const packages = [
    {
      name: "Базовый",
      price: "от 25 000 ₽",
      area: "до 100 м²",
      features: [
        "Панорамная съёмка",
        "Обработка фото",
        "Простой виртуальный тур",
        "Размещение в сети",
        "Базовая аналитика",
      ],
      color: "border-gray-200",
    },
    {
      name: "Премиум",
      price: "от 45 000 ₽",
      area: "до 300 м²",
      features: [
        "Профессиональная съёмка",
        "Расширенная обработка",
        "Интерактивный тур",
        "Интеграция на сайт",
        "Подробная аналитика",
        "Техподдержка 3 месяца",
      ],
      color: "border-amber-200 bg-amber-50",
      popular: true,
    },
    {
      name: "Luxury",
      price: "от 75 000 ₽",
      area: "без ограничений",
      features: [
        "Премиальная съёмка",
        "Профессиональная обработка",
        "VIP виртуальный тур",
        "Полная интеграция",
        "Расширенная аналитика",
        "Персональный менеджер",
        "Техподдержка 6 месяцев",
      ],
      color: "border-amber-200 bg-amber-50",
    },
  ];

  return (
    <>
      <style jsx>{`
        .text-gold {
          color: #d4af37;
        }
        .bg-gold {
          background-color: #d4af37;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
          transform: scale(0.8);
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите оптимальный пакет для вашего объекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-gold mt-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600">{pkg.area}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-3 flex-shrink-0"
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full transform hover:scale-105 transition-all duration-300 ${pkg.popular ? "bg-gold hover:bg-amber-600" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <p className="text-lg text-gray-600">
              Нужна кастомизация?{" "}
              <button className="text-gold hover:underline font-semibold hover:text-amber-600 transition-colors">
                Свяжитесь с нами
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
