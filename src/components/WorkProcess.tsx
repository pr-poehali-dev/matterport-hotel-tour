import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const WorkProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Брифинг и подготовка",
      description: "Обсуждаем детали, подготавливаем объект к съёмке",
      icon: "FileText",
    },
    {
      number: "2",
      title: "Съёмка за 1 день",
      description: "Профессиональная панорамная съёмка объекта",
      icon: "Camera",
    },
    {
      number: "3",
      title: "Обработка и публикация",
      description: "Создание тура в течение 48 часов",
      icon: "Settings",
    },
    {
      number: "4",
      title: "Интеграция",
      description: "Размещение на сайте, Яндексе, в соцсетях",
      icon: "Globe",
    },
    {
      number: "5",
      title: "Настройка аналитики",
      description: "Отслеживание просмотров и конверсий",
      icon: "BarChart3",
    },
    {
      number: "6",
      title: "Выгрузка на хостинг",
      description: "Полная передача материалов клиенту",
      icon: "Download",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой и прозрачный процесс от заявки до результата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <Icon name={step.icon} size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <Icon
                name="FileCheck"
                size={32}
                className="text-green-600 mx-auto mb-3"
              />
              <h4 className="font-semibold mb-2">Договор</h4>
              <p className="text-sm text-gray-600">
                Официальное оформление всех работ
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6 text-center">
              <Icon
                name="CreditCard"
                size={32}
                className="text-blue-600 mx-auto mb-3"
              />
              <h4 className="font-semibold mb-2">Оплата после публикации</h4>
              <p className="text-sm text-gray-600">
                Платите только за готовый результат
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-6 text-center">
              <Icon
                name="Package"
                size={32}
                className="text-purple-600 mx-auto mb-3"
              />
              <h4 className="font-semibold mb-2">Что включено</h4>
              <p className="text-sm text-gray-600">
                Съёмка, обработка, интеграция, аналитика
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
