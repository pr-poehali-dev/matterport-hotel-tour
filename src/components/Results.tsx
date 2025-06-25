const Results = () => {
  const cases = [
    {
      title: "Four Seasons Moscow",
      result: "+40% бронирований премиум-номеров",
      description: "За первый месяц окупили все расходы",
    },
    {
      title: "Capital Group",
      result: "+25% продаж на этапе котлована",
      description: "Инвесторы принимали решения дистанционно",
    },
    {
      title: "Частный заказчик",
      result: "Продажа за 2 недели вместо 6 месяцев",
      description: "Покупатели видели каждую деталь",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Измеримые результаты, которые{" "}
            <span className="text-gold">говорят за себя</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                {case_.title}
              </h3>
              <div className="text-2xl text-gold font-light mb-4">
                {case_.result}
              </div>
              <p className="text-gray-700 italic">"{case_.description}"</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 max-w-4xl mx-auto">
            "Бронирования уверенные, а отмен стало в 3× меньше."
          </blockquote>
          <cite className="text-gray-700 font-medium mt-4 block">
            — Управляющий бутик-отеля
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Results;
