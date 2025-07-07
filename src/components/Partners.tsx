const Partners = () => {
  const partners = [
    {
      name: "DONGFENG",
      logo: "https://cdn.poehali.dev/files/24450761-7cda-4f34-bf6a-54cef43fdf79.png",
      alt: "Dongfeng logo",
    },
    {
      name: "Lake House",
      logo: "https://cdn.poehali.dev/files/31a6a592-fb82-4095-b9fd-f32e38fe3b13.png",
      alt: "Lake House logo",
    },
    {
      name: "Matterport",
      logo: "https://cdn.poehali.dev/files/79537b5e-4d27-4e62-9532-9532fc60fb96.png",
      alt: "Matterport logo",
    },
    {
      name: "Brilions",
      logo: "https://cdn.poehali.dev/files/753bb46c-6130-4fab-8a6d-d180d3dab67d.png",
      alt: "Brilions logo",
    },
    {
      name: "WeHeavy",
      logo: "https://cdn.poehali.dev/files/b20d0095-04bf-4c14-b922-542136e421cd.png",
      alt: "WeHeavy logo",
    },
    {
      name: "Усадьба Кописки",
      logo: "https://cdn.poehali.dev/files/dd2bb241-d28c-43c8-b6c5-5656e6f2e241.png",
      alt: "Усадьба Кописки logo",
    },
    {
      name: "AvaCan",
      logo: "https://cdn.poehali.dev/files/74b44295-13fb-4541-80af-96a3cda287b1.png",
      alt: "AvaCan logo",
    },
    {
      name: "Фитнес клуб ROCK",
      logo: "https://cdn.poehali.dev/files/253bd0c3-7a3b-406d-a6f7-69b017f98d39.png",
      alt: "Фитнес клуб ROCK logo",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Наши любимые партнёры
          </h2>
          <p className="text-xl text-gray-600">
            Компании, которые доверяют нам создание виртуальных туров
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-24"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
