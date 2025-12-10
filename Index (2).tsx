import { useState } from "react";
import { Scissors, Sparkles, Heart, Phone, MapPin, Clock, Star, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { ServiceCard } from "@/components/ServiceCard";
import { GallerySection } from "@/components/GallerySection";
import heroImage from "@/assets/hero-bg.jpg";

const services = [
  {
    id: 1,
    icon: Scissors,
    title: "Стрижки и укладки",
    description: "Профессиональные стрижки, укладки и окрашивание от лучших мастеров",
    price: "от 2 500 ₽",
    duration: "60-120 мин",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Маникюр и педикюр",
    description: "Классический, аппаратный и комбинированный маникюр с покрытием",
    price: "от 1 800 ₽",
    duration: "60-90 мин",
  },
  {
    id: 3,
    icon: Heart,
    title: "Уход за лицом",
    description: "Косметологические процедуры, чистки, пилинги и массаж лица",
    price: "от 3 000 ₽",
    duration: "45-90 мин",
  },
  {
    id: 4,
    icon: Star,
    title: "Макияж",
    description: "Дневной, вечерний и свадебный макияж от визажистов-художников",
    price: "от 3 500 ₽",
    duration: "60-90 мин",
  },
];

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/" className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              Blossom
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#gallery" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                Галерея
              </a>
              <a href="#about" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#contact" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="default"
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => setIsBookingOpen(true)}
              >
                Записаться
              </Button>
              <button
                className="md:hidden p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#services"
                className="text-base font-body text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#gallery"
                className="text-base font-body text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Галерея
              </a>
              <a
                href="#about"
                className="text-base font-body text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-base font-body text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <Button
                variant="default"
                className="mt-2"
                onClick={() => {
                  setIsBookingOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Записаться
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Интерьер салона красоты"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-body text-sm tracking-[0.2em] uppercase mb-6 opacity-0 animate-fade-up">
              Салон красоты премиум класса
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up stagger-1 text-balance">
              Раскройте свою природную красоту
            </h1>
            <p className="font-body text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto opacity-0 animate-fade-up stagger-2">
              Доверьте свою красоту профессионалам. Индивидуальный подход, лучшие мастера и премиальная косметика.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-3">
              <Button variant="hero" size="lg" onClick={() => setIsBookingOpen(true)}>
                Записаться онлайн
                <ChevronRight className="ml-1" />
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-primary/60" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              Что мы предлагаем
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Широкий спектр услуг для вашей красоты и расслабления
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                onBook={() => setIsBookingOpen(true)}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
                О салоне
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Мы создаём красоту с любовью
              </h2>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Салон красоты Blossom — это место, где профессионализм встречается с заботой о каждом клиенте. 
                Наша команда из 15 мастеров постоянно совершенствует свои навыки и следит за последними трендами индустрии красоты.
              </p>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Мы используем только премиальную косметику ведущих мировых брендов и гарантируем индивидуальный подход к каждому гостю.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-1">10+</div>
                  <div className="font-body text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-1">15</div>
                  <div className="font-body text-sm text-muted-foreground">Мастеров</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-1">5K+</div>
                  <div className="font-body text-sm text-muted-foreground">Клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={heroImage}
                  alt="Интерьер салона"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-semibold text-foreground">4.9</div>
                    <div className="font-body text-sm text-muted-foreground">Рейтинг на Яндекс</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              Свяжитесь с нами
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Контакты
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Будем рады видеть вас в нашем салоне
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="gradient-card rounded-2xl p-8 text-center shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Телефон</h3>
              <a href="tel:+74951234567" className="font-body text-muted-foreground hover:text-primary transition-colors">
                +7 (495) 123-45-67
              </a>
            </div>

            <div className="gradient-card rounded-2xl p-8 text-center shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Адрес</h3>
              <p className="font-body text-muted-foreground">
                г. Москва, ул. Тверская, д. 15
              </p>
            </div>

            <div className="gradient-card rounded-2xl p-8 text-center shadow-card hover:shadow-hover transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Часы работы</h3>
              <p className="font-body text-muted-foreground">
                Пн-Вс: 10:00 — 21:00
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="rose" size="xl" onClick={() => setIsBookingOpen(true)}>
              Записаться на приём
              <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="/" className="font-heading text-2xl font-semibold text-foreground">
              Blossom
            </a>
            <p className="font-body text-sm text-muted-foreground">
              © 2024 Blossom Beauty Salon. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} services={services} />
    </div>
  );
};

export default Index;
