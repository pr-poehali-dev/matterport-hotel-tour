import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gold/90 via-amber-600 to-amber-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы увеличить продажи с помощью виртуальных туров?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Получите индивидуальное предложение и узнайте, как виртуальные туры
            помогут вашему бизнесу
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
                    placeholder="Введите ваше имя"
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
                    Площадь объекта (м²)
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
                  className="w-full h-14 text-lg bg-gold hover:bg-amber-600 shadow-lg animate-fade-in transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: "0.4s" }}
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
