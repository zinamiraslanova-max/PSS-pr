import { useState } from "react";
import { X, Calendar, Clock, User, Phone, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Service {
  id: number;
  title: string;
  price: string;
  duration: string;
}

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  services: Service[];
}

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  return dates;
};

export const BookingModal = ({ open, onOpenChange, services }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dates = generateDates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      setStep(1);
      setSelectedService(null);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({ name: "", phone: "" });
      setIsSubmitted(false);
    }, 2000);
  };

  const formatDate = (date: Date) => {
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
    };
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-scale-in">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
              Запись подтверждена!
            </h3>
            <p className="font-body text-muted-foreground">
              Мы отправим вам SMS с деталями записи
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-semibold text-foreground">
            Онлайн запись
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                "flex-1 h-1 rounded-full transition-colors duration-300",
                s <= step ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="font-body font-medium text-foreground">Выберите услугу</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                    selectedService === service.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-body font-medium text-foreground">
                        {service.title}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {service.price} · {service.duration}
                      </div>
                    </div>
                    {selectedService === service.id && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <Button
              variant="default"
              className="w-full mt-4"
              disabled={!selectedService}
              onClick={() => setStep(2)}
            >
              Далее
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Select Date & Time */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h4 className="font-body font-medium text-foreground mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Выберите дату
              </h4>
              <div className="grid grid-cols-7 gap-2">
                {dates.map((date, index) => {
                  const formatted = formatDate(date);
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "flex flex-col items-center p-2 rounded-lg text-sm transition-all duration-200",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-foreground"
                      )}
                    >
                      <span className="text-xs opacity-70">{formatted.day}</span>
                      <span className="font-medium">{formatted.date}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-body font-medium text-foreground mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Выберите время
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "py-2 px-3 rounded-lg text-sm font-body transition-all duration-200",
                      selectedTime === time
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                Назад
              </Button>
              <Button
                variant="default"
                className="flex-1"
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(3)}
              >
                Далее
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-muted/50 rounded-xl p-4">
              <h4 className="font-body text-sm text-muted-foreground mb-2">Ваша запись</h4>
              <div className="font-body text-foreground">
                <p className="font-medium">{selectedServiceData?.title}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedDate && formatDate(selectedDate).date}{" "}
                  {selectedDate && formatDate(selectedDate).month} в {selectedTime}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Введите имя"
                />
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>
                Назад
              </Button>
              <Button type="submit" variant="rose" className="flex-1">
                Записаться
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
