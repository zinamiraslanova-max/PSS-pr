import heroImage from "@/assets/hero-bg.jpg";

const galleryItems = [
  { id: 1, title: "Укладка", category: "Волосы" },
  { id: 2, title: "Маникюр", category: "Ногти" },
  { id: 3, title: "Макияж", category: "Визаж" },
  { id: 4, title: "Стрижка", category: "Волосы" },
  { id: 5, title: "Педикюр", category: "Ногти" },
  { id: 6, title: "Уход", category: "Лицо" },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Наши работы
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Галерея
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Примеры работ наших мастеров
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={heroImage}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-body text-xs text-primary-foreground/80 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg sm:text-xl text-primary-foreground font-semibold mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
