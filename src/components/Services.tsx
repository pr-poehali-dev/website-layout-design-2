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
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl mb-6">
            <Icon name="Sparkles" size={28} className="text-black" />
          </div>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Полный спектр услуг по разработке — от простых сайтов до сложных
            корпоративных систем
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden bg-blue-900"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg bg-yellow-500">
                  <Icon name={service.icon} size={28} className="text-black" />
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-2xl text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-100 mb-6 leading-relaxed text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-200 transition-colors duration-300"
                    >
                      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-900 rounded-3xl p-12 shadow-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                Готовы воплотить вашу идею?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Не нашли подходящую услугу? Мы работаем с индивидуальными
                проектами и поможем реализовать любую задачу
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Обсудить проект
                <Icon name="ArrowRight" size={20} className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
