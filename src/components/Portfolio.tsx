import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "Отель Богдарня",
      iframe: `<iframe width="853" height="480" src="https://3d.bogdarnya.ru/AC5PHGftup4/?m=AC5PHGftup4&hl=1" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>`,
      description:
        "Место возрождения русской культуры и быта – именно так можно охарактеризовать отель «Богдарня»",
      link: "https://bogdarnya.ru/catalog/otel-bogdarnya",
      buttonText: "Посмотреть тур на сайте отеля",
    },
    {
      title: "Дизайнерские апартаменты",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "Современный интерьер с авторским дизайном",
    },
    {
      title: "Премиальная вилла в Подмосковье",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      description: "Загородная резиденция с панорамными видами",
    },
    {
      title: "Luxury SPA-комплекс",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
      description: "Релаксационные зоны и процедурные кабинеты",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Наши проекты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый виртуальный тур — это история успеха наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                {project.iframe ? (
                  <div
                    className="w-full h-64 [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:object-cover"
                    dangerouslySetInnerHTML={{ __html: project.iframe }}
                  />
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
                  </>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300"
                  onClick={() =>
                    project.link && window.open(project.link, "_blank")
                  }
                >
                  {project.buttonText || "Посмотреть тур"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
