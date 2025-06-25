import Icon from "@/components/ui/icon";

const DemoTour = () => {
  const tips = [
    "Посмотрите инфо-метки",
    "Загляните в номер люкс",
    "Щёлкните по локациям для быстрого перехода",
  ];

  return (
    <section id="demo-tour" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Попробуйте <span className="text-gold">глазами Вашего гостя</span>
          </h2>
        </div>

        {/* Demo iframe placeholder */}
        <div className="max-w-6xl mx-auto mb-12 animate-fade-in">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://my.matterhub.ru/8/4PMaut6Zba5/?m=4PMaut6Zba5&hl=1"
              frameBorder="0"
              allowFullScreen
              allow="xr-spatial-tracking"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-lg text-black mb-4">Возможности 3D-VR тура:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: "Написать в мессенджер", icon: "MessageCircle" },
              {
                text: "Визитка с возможностью позвонить из тура",
                icon: "Phone",
              },
              { text: "Инфо-метки с контактами", icon: "Tag" },
              { text: "План этажа", icon: "Map" },
              { text: "Быстрые переходы по локациям", icon: "Navigation" },
              { text: "Интеграция с Яндекс.Метрикой", icon: "BarChart" },
              { text: "Замер площади", icon: "Ruler" },
              { text: "Просмотр в VR-шлеме или очках", icon: "Glasses" },
              { text: "Переход в модуль бронирования", icon: "Calendar" },
              { text: "Быстрая работа со всех устройств", icon: "Monitor" },
            ].map((feature, index) => (
              <span
                key={index}
                className="bg-white text-black border border-gold/50 px-4 py-2 rounded-full text-sm shadow-sm hover:scale-105 transition-transform duration-200 flex items-center gap-2"
              >
                {feature.icon && (
                  <Icon
                    name={feature.icon}
                    size={16}
                    className="animate-pulse text-gold"
                  />
                )}
                {feature.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTour;
