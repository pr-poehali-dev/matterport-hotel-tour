import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Calculator = () => {
  const [area, setArea] = useState<number>(0);

  const calculatePrice = (area: number) => {
    if (area <= 0) return 0;
    
    const basePrice = area * 150; // 150₽ за м²
    const bonusCount = Math.floor(area / 500); // количество бонусов по 500м²
    const bonusPrice = bonusCount * 10000; // 10000₽ за каждые 500м²
    
    return basePrice + bonusPrice;
  };

  const totalPrice = calculatePrice(area);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Калькулятор стоимости</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Узнайте примерную стоимость виртуального тура для Вашего пространства
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
                <Label htmlFor="area" className="text-lg font-medium text-gray-700">
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
                      Примерная стоимость виртуального тура
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      150₽/м² + 10 000₽ за каждые 500м²
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