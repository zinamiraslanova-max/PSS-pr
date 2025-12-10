import { LucideIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  duration: string;
  onBook: () => void;
  delay?: number;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  price,
  duration,
  onBook,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <div
      className="group gradient-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center gap-4 mb-5 text-sm">
        <span className="font-body font-semibold text-foreground">{price}</span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <Clock className="w-4 h-4" />
          {duration}
        </span>
      </div>
      
      <Button
        variant="outline"
        className="w-full"
        onClick={onBook}
      >
        Записаться
      </Button>
    </div>
  );
};
