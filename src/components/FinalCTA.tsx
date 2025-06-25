import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import emailjs from "@emailjs/browser";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_your_service_id", // Замените на ваш Service ID
        "template_your_template_id", // Замените на ваш Template ID
        {
          to_email: "romanpetrov369@yandex.ru",
          from_name: formData.name,
          phone: formData.phone,
          area: formData.area,
          message: `Новая заявка на виртуальный тур:
          Имя: ${formData.name}
          Телефон: ${formData.phone}
          Площадь: ${formData.area} м²`,
        },
        "your_public_key", // Замените на ваш Public Key
      );

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", area: "" });
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="final-cta"
      className="py-20 bg-gradient-to-br from-gold/90 via-amber-600 to-amber-700 text-white"
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  className="animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Имя
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="mt-2 h-12 focus:ring-gold focus:border-gold"
                    required
                  />
                </div>

                <div
                  className="animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Телефон/WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="mt-2 h-12 focus:ring-gold focus:border-gold"
                    required
                  />
                </div>

                <div
                  className="animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <Label htmlFor="area" className="text-gray-700 font-medium">
                    Площадь пространства (м²)
                  </Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Например, 150"
                    value={formData.area}
                    onChange={(e) => handleChange("area", e.target.value)}
                    className="mt-2 h-12 focus:ring-gold focus:border-gold"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg bg-gold hover:bg-amber-600 shadow-lg animate-fade-in transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                  style={{ animationDelay: "0.4s" }}
                >
                  {isSubmitting
                    ? "Отправляем..."
                    : "Получить индивидуальное предложение"}
                </Button>

                {submitStatus === "success" && (
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

                {submitStatus === "error" && (
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
