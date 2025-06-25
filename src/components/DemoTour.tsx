const DemoTour = () => {
  const tips = [
    "Посмотрите инфо-метки",
    "Загляните в номер люкс",
    "Щёлкните по локациям для быстрого перехода",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Попробуйте <span className="text-gold">глазами вашего гостя</span>
          </h2>
        </div>

        {/* Demo iframe placeholder */}
        <div className="max-w-6xl mx-auto mb-12 animate-fade-in">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏨</span>
                </div>
                <p className="text-xl font-medium text-gray-700">
                  Matterport Demo Tour
                </p>
                <p className="text-gray-600">
                  Интерактивный 3D-тур загружается...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white px-6 py-3 rounded-full shadow-sm border border-gold/20"
            >
              <span className="text-sm text-secondary">💡 {tip}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-lg text-secondary mb-4">Возможности Matterport:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Инфо-метки с контактами",
              "План этажа",
              "Замер площади",
              "Интеграция с Google",
            ].map((feature, index) => (
              <span
                key={index}
                className="bg-gold/10 text-gold px-4 py-2 rounded-md text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTour;
