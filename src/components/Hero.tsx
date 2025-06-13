import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6 animate-fade-in">
            Создаём сайты,
            <span className="text-primary block">которые работают</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Профессиональная разработка веб-сайтов и приложений. От идеи до
            запуска за 2 недели.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать проект
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary/5"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть примеры
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                50+
              </div>
              <div className="text-sm text-gray-600">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                24/7
              </div>
              <div className="text-sm text-gray-600">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                2
              </div>
              <div className="text-sm text-gray-600">Недели</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                100%
              </div>
              <div className="text-sm text-gray-600">Качество</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
