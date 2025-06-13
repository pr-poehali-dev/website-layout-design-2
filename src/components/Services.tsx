import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Globe",
      title: "Веб-разработка",
      description:
        "Создание современных сайтов и веб-приложений с адаптивным дизайном и высокой производительностью.",
      features: ["Responsive дизайн", "SEO оптимизация", "Быстрая загрузка"],
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description:
        "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android.",
      features: ["React Native", "Swift & Kotlin", "App Store публикация"],
    },
    {
      icon: "ShoppingCart",
      title: "E-commerce решения",
      description:
        "Полнофункциональные интернет-магазины с системами оплаты, управления заказами и аналитикой.",
      features: ["Интеграция платежей", "Система заказов", "Аналитика продаж"],
    },
    {
      icon: "Zap",
      title: "Автоматизация",
      description:
        "Разработка систем автоматизации бизнес-процессов, CRM и интеграции с внешними сервисами.",
      features: [
        "API интеграции",
        "Workflow автоматизация",
        "Отчёты и аналитика",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по разработке — от простых сайтов до сложных
            корпоративных систем
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover-scale group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={service.icon} size={24} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-primary mr-2 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не нашли подходящую услугу? Мы работаем с индивидуальными проектами
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Обсудить проект
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
