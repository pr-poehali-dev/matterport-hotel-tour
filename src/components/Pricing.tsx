import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [phoneError, setPhoneError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  // Функция для форматирования номера телефона
  const formatPhoneNumber = (value: string) => {
    // Удаляем все символы кроме цифр
    const numbers = value.replace(/\D/g, "");

    // Если первая цифра не 7, добавляем 7
    let formattedNumbers = numbers;
    if (numbers.length > 0 && numbers[0] !== "7") {
      formattedNumbers = "7" + numbers;
    }

    // Ограничиваем до 11 цифр (7 + 10 цифр номера)
    formattedNumbers = formattedNumbers.slice(0, 11);

    // Форматируем в +7 (XXX) XXX-XX-XX
    if (formattedNumbers.length >= 1) {
      let formatted = "+7";
      if (formattedNumbers.length > 1) {
        const rest = formattedNumbers.slice(1);
        if (rest.length > 0) formatted += " (";
        if (rest.length >= 3) {
          formatted += rest.slice(0, 3) + ")";
          if (rest.length > 3) formatted += " ";
        } else {
          formatted += rest;
        }
        if (rest.length > 3) {
          const middle = rest.slice(3, 6);
          formatted += middle;
          if (rest.length > 6) formatted += "-";
        }
        if (rest.length > 6) {
          const end1 = rest.slice(6, 8);
          formatted += end1;
          if (rest.length > 8) formatted += "-";
        }
        if (rest.length > 8) {
          formatted += rest.slice(8, 10);
        }
      }
      return formatted;
    }
    return "+7";
  };

  // Валидация номера телефона
  const validatePhone = (phoneNumber: string) => {
    const numbers = phoneNumber.replace(/\D/g, "");
    if (numbers.length !== 11 || numbers[0] !== "7") {
      return "Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX";
    }
    return "";
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setFormData({ ...formData, phone: formatted });
    setPhoneError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация перед отправкой
    const error = validatePhone(formData.phone);
    if (error) {
      setPhoneError(error);
      return;
    }

    if (!formData.consent) {
      alert("Необходимо согласие на обработку данных");
      return;
    }

    try {
      const response = await fetch(
        "https://formspree.io/f/romanpetrov369@yandex.ru",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            package: selectedPackage,
            subject: `Заявка с сайта - ${selectedPackage}`,
          }),
        },
      );

      if (response.ok) {
        alert("Заявка отправлена! Свяжемся с вами в ближайшее время.");
        setIsDialogOpen(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          consent: false,
        });
      } else {
        alert("Ошибка отправки. Попробуйте позже.");
      }
    } catch (error) {
      alert("Ошибка отправки. Попробуйте позже.");
    }
  };

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
              Выберите оптимальный пакет для Вашего пространства
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
                    onClick={() => {
                      setSelectedPackage(pkg.name);
                      setIsDialogOpen(true);
                    }}
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
              <button
                onClick={() => {
                  setSelectedPackage("Кастомизация");
                  setIsDialogOpen(true);
                }}
                className="text-gold hover:underline font-semibold hover:text-amber-600 transition-colors"
              >
                Свяжитесь с нами
              </button>
            </p>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>
                {selectedPackage === "Кастомизация"
                  ? "Запрос кастомизации"
                  : `Заявка на пакет "${selectedPackage}"`}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон/WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  required
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={
                    phoneError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: !!checked })
                  }
                />
                <Label htmlFor="consent" className="text-sm">
                  Согласен на обработку персональных данных *
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-amber-600"
              >
                Отправить заявку
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default Pricing;
