import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useForm } from "@formspree/react";

const FinalCTA = () => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Используем демо-форму Formspree (в продакшене нужно будет заменить на реальный ID)
  const [state, handleSubmit] = useForm("demo");

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

    // Создаем FormData для отправки
    const formElement = e.target as HTMLFormElement;
    const formDataToSend = new FormData(formElement);

    await handleSubmit(formDataToSend);

    if (state.succeeded) {
      setPhone("");
      setPhoneError("");
    }
  };

  return (
    <section
      id="final-cta"
      className="py-20 bg-gradient-to-br from-amber-400 via-gold to-amber-600 text-white"
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

                <Button
                  type="submit"
                  disabled={state.submitting || !phone}
                  className="w-full h-14 text-lg bg-gold hover:bg-amber-600 shadow-lg animate-fade-in transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {state.submitting
                    ? "Отправляем..."
                    : "Получить индивидуальное предложение"}
                </Button>

                {state.succeeded && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-green-600 mr-2"
                      />
                      <span className="text-green-800">
                        Заявка успешно отправлена!
                      </span>
                    </div>
                  </div>
                )}

                {state.errors && state.errors.length > 0 && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center">
                      <Icon
                        name="AlertCircle"
                        size={20}
                        className="text-red-600 mr-2"
                      />
                      <span className="text-red-800">
                        Ошибка отправки. Попробуйте ещё раз.
                      </span>
                    </div>
                  </div>
                )}
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
