import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const FinalCTA = () => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [consent, setConsent] = useState(false);

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
    setPhone(formatted);
    setPhoneError("");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация перед отправкой
    const error = validatePhone(phone);
    if (error) {
      setPhoneError(error);
      return;
    }

    if (!consent) {
      alert("Необходимо согласие на обработку персональных данных");
      return;
    }

    // Получаем данные формы
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    // Формируем сообщение для отправки
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const messageText = `Новая заявка с сайта:
📝 Имя: ${name || "Не указано"}
📧 Email: ${email || "Не указан"}
📱 Телефон: ${phone}
💬 Сообщение: ${message || "Не указано"}`;

    // Формируем ссылки для мессенджеров
    const whatsappUrl = `https://wa.me/79190223316?text=${encodeURIComponent(messageText)}`;
    const telegramUrl = `https://t.me/Cap_Rizo?text=${encodeURIComponent(messageText)}`;

    // Показываем варианты отправки
    const choice = confirm(
      "Выберите способ отправки заявки:\n\nОК - WhatsApp\nОтмена - Telegram",
    );

    // Открываем выбранный мессенджер
    if (choice) {
      window.open(whatsappUrl, "_blank");
    } else {
      window.open(telegramUrl, "_blank");
    }

    // Очищаем форму после отправки
    setPhone("");
    setPhoneError("");
    setConsent(false);
    formElement.reset();
  };

  return (
    <section
      id="final-cta"
      className="py-20 relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/files/6507a63e-3546-4823-9e1f-802584502bda.png')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы увеличить продажи с помощью виртуальных туров?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Получите индивидуальное предложение и узнайте, как виртуальные туры
            помогут Вашему бизнесу
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-scale-in">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">
                Получить предложение
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="animate-fade-in">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Имя
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ваше имя"
                    className="mt-2 h-12 focus:ring-gold focus:border-gold"
                  />
                </div>

                <div className="animate-fade-in">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2 h-12 focus:ring-gold focus:border-gold"
                  />
                </div>

                <div className="animate-fade-in">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Телефон/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`mt-2 h-12 focus:ring-gold focus:border-gold ${
                      phoneError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    required
                  />
                  {phoneError && (
                    <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                  )}
                </div>

                <div className="animate-fade-in">
                  <Label
                    htmlFor="message"
                    className="text-gray-700 font-medium"
                  >
                    Сообщение
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о вашем проекте или задайте вопрос"
                    className="mt-2 min-h-[100px] focus:ring-gold focus:border-gold"
                  />
                </div>

                <div className="animate-fade-in">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={(checked) => setConsent(!!checked)}
                      className="mt-1 border-2 border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                      required
                    />
                    <Label
                      htmlFor="consent"
                      className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                    >
                      Я согласен(а) на обработку персональных данных в
                      соответствии с{" "}
                      <a
                        href="#"
                        className="text-gold hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(
                            "Политика конфиденциальности: Ваши персональные данные используются исключительно для связи с вами по вашему запросу и не передаются третьим лицам.",
                          );
                        }}
                      >
                        политикой конфиденциальности
                      </a>
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!phone || !consent}
                  className="w-full h-14 text-lg bg-gold hover:bg-amber-600 shadow-lg animate-fade-in transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  Получить индивидуальное предложение
                </Button>
              </form>

              <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center">
                  <Icon
                    name="Shield"
                    size={24}
                    className="text-green-600 mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Гарантия результата
                    </h4>
                    <p className="text-green-700 text-sm">
                      Не берём оплату, если результат не устроит
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
