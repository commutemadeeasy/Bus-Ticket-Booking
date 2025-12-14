import { Percent, Gift, Clock, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

const offers = [
  {
    icon: Percent,
    title: '20% Off First Booking',
    description: 'Use code FIRST20 for your first trip',
    code: 'FIRST20',
    gradient: 'from-primary/10 to-primary/5',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Gift,
    title: 'Festival Special',
    description: 'Dashain & Tihar special discounts',
    code: 'FESTIVAL15',
    gradient: 'from-secondary/10 to-secondary/5',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: Clock,
    title: 'Early Bird Offer',
    description: 'Book 7 days ahead, save 10%',
    code: 'EARLY10',
    gradient: 'from-accent/10 to-accent/5',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    icon: Sparkles,
    title: 'Group Discount',
    description: '15% off for groups of 5+',
    code: 'GROUP15',
    gradient: 'from-destructive/10 to-destructive/5',
    iconBg: 'bg-destructive/10',
    iconColor: 'text-destructive',
  },
];

const OffersSection = () => {
  return (
    <section className="py-20 bg-background" id="offers">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exclusive <span className="text-gradient">Offers</span> & Discounts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Save more on your travels with our special promotions and seasonal deals.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className={`group bg-linear-to-br ${offer.gradient} border border-border rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${offer.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <offer.icon className={`w-6 h-6 ${offer.iconColor}`} />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{offer.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>
              <div className="flex items-center justify-between">
                <code className="px-3 py-1 bg-card rounded-lg text-sm font-mono font-semibold text-primary border border-border">
                  {offer.code}
                </code>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
