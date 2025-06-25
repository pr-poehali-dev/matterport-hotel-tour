import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "21 апартамент",
      iframe: `<iframe width="853" height="480" src="https://my.matterhub.ru/8/QZqpS4y9ggq/?m=QZqpS4y9ggq&hl=1" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>`,
      description:
        "Гармония истории и современности в уникальных апартаментах на Новом Арбате",
      link: "https://page20hotel.com/3d-tur/",
      buttonText: "Посмотреть тур на сайте апартаментов",
    },
    {
      title: "20 номеров",
      iframe: `<iframe width="853" height="480" src="https://3d.bogdarnya.ru/AC5PHGftup4/?m=AC5PHGftup4&hl=1" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>`,
      description:
        "Место возрождения русской культуры и быта в отеле «Богдарня»",
      link: "https://bogdarnya.ru/catalog/otel-bogdarnya",
      buttonText: "Посмотреть тур на сайте отеля",
    },
    {
      title: "8 апартаментов, переговорная, лаунж зона",
      iframe: `<iframe width="853" height="480" src="https://my.matterhub.ru/8/yhmcys2nrfN/?m=yhmcys2nrfN&hl=1" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>`,
      description:
        'Наследие Петра I в современном интерьере апарт-отеля "Окно"',
      link: "https://oknohotel.com/3d-tur/",
      buttonText: "Посмотреть тур на сайте отеля",
    },

    {
      title: "21 стол, 2 банкетных зала",
      iframe: `<iframe width="853" height="480" src="https://3d.bogdarnya.ru/6pxyC6jtytC/?m=6pxyC6jtytC&hl=1" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>`,
      description:
        "Центр русской и европейской гастрономии, музей подлинной сельской культуры",
      link: "https://bogdarnya.ru/food/restoran-kolkhoznyy-klub",
      buttonText: "Посмотреть тур на сайте ресторана",
    },
    {
      title:
        'Уютный дом "капсула" площадью 32 кв.м. подходит для любителей уединенного и комфортного отдыха на природе.',
      iframe: `<iframe width="853" height="480" src="https://3d.bogdarnya.ru/captyc8ZSao/?m=captyc8ZSao&hl=1" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>`,
    },
    {
      title:
        "Современная моторная яхта Adelya (Leomar, длина 20 м) — это идеальный выбор для аренды яхты в Анталии",
      iframe: `<iframe width="853" height="480" src="https://my.matterhub.ru/8/CtoYyhXJQQr/" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>`,
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
                {project.description && (
                  <p className="text-gray-600 mb-4">{project.description}</p>
                )}
                {project.link && (
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {project.buttonText || "Посмотреть тур"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
