import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Calculator = () => {
  const [area, setArea] = useState<number>(0);

  const calculatePrice = (area: number) => {
    if (area <= 100) {
      return {
        package: "Базовый",
        pricePerSq: 250,
        basePrice: 25000,
        subscription: 0,
      };
    } else if (area <= 300) {
      return {
        package: "Премиум",
        pricePerSq: 150,
        basePrice: 45000,
        subscription: 2000,
      };
    } else {
      return {
        package: "Luxury",
        pricePerSq: 100,
        basePrice: 75000,
        subscription: 5000,
      };
    }
  };

  const pricing = calculatePrice(area);
  const totalPrice =
    area > 0
      ? pricing.basePrice + area * pricing.pricePerSq + pricing.subscription
      : 0;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте примерную стоимость виртуального тура для Вашего
            пространства
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Расчёт стоимости</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="area" className="text-lg font-medium">
                  Площадь объекта (м²)
                </Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Введите площадь"
                  value={area || ""}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="mt-2 text-lg h-12"
                />
              </div>

              {area > 0 && (
                <div className="bg-amber-50 p-6 rounded-lg space-y-4 animate-scale-in border border-gold/20">
                  <h3 className="text-xl font-semibold text-center mb-4">
                    Рекомендуемый пакет: {pricing.package}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Площадь:</span>
                      <span className="font-medium">{area} м²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Цена за м²:</span>
                      <span className="font-medium">
                        {pricing.pricePerSq} ₽
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Базовая стоимость:</span>
                      <span className="font-medium">
                        {pricing.basePrice.toLocaleString()} ₽
                      </span>
                    </div>
                    {pricing.subscription > 0 && (
                      <div className="flex justify-between">
                        <span>Абонентская плата:</span>
                        <span className="font-medium">
                          {pricing.subscription.toLocaleString()} ₽
                        </span>
                      </div>
                    )}
                    <hr className="border-gray-300" />
                    <div className="flex justify-between text-xl font-bold">
                      <span>Итого:</span>
                      <span className="text-gold">
                        {totalPrice.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
