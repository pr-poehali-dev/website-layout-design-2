import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">П</span>
              </div>
              <span className="font-montserrat font-bold text-xl">Поехали</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Профессиональная команда разработчиков, создающая инновационные
              веб-решения для вашего бизнеса.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Веб-разработка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мобильные приложения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Автоматизация
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Команда
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Поехали. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
