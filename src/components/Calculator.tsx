import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Calculator = () => {
  const [area, setArea] = useState<number>(0);

  const calculatePrice = (area: number) => {
    if (area <= 0) return 0;

    // Фиксированная стоимость до 100м²
    if (area <= 100) return 25000;

    const basePrice = area * 150; // 150₽ за м²
    const bonusCount = Math.ceil(area / 500); // количество блоков по 500м²
    const bonusPrice = bonusCount * 10000; // 10000₽ за каждый блок 500м²

    return basePrice + bonusPrice;
  };

  const totalPrice = calculatePrice(area);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full bg-repeat bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Калькулятор стоимости
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте примерную стоимость виртуального тура для Вашего
            пространства
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-center text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Расчёт стоимости
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label
                  htmlFor="area"
                  className="text-lg font-medium text-gray-700"
                >
                  Площадь объекта (м²)
                </Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Введите площадь"
                  value={area || ""}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="mt-2 text-lg h-12 border-2 border-blue-200 focus:border-blue-500 transition-colors"
                />
              </div>

              {area > 0 && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200/50 animate-scale-in">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {totalPrice.toLocaleString()} ₽
                    </div>
                    <div className="text-gray-600 text-lg">
                      Стоимость виртуального тура
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
