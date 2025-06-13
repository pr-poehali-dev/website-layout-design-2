import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">П</span>
          </div>
          <span className="font-montserrat font-bold text-xl text-gray-900">
            Поехали
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-600 hover:text-primary transition-colors story-link"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-primary transition-colors story-link"
          >
            О нас
          </a>
          <a
            href="#portfolio"
            className="text-gray-600 hover:text-primary transition-colors story-link"
          >
            Портфолио
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-primary transition-colors story-link"
          >
            Контакты
          </a>
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90">
            Начать проект
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#services"
              className="block text-gray-600 hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-primary transition-colors"
            >
              О нас
            </a>
            <a
              href="#portfolio"
              className="block text-gray-600 hover:text-primary transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-primary transition-colors"
            >
              Контакты
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Начать проект
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
