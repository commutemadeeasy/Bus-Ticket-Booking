import { Ticket, Shield, UserCheck, Headphones, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    id:1,
    icon: Ticket,
    title: 'Easy Ticket Booking',
    description: 'Book your tickets in just a few clicks with our simple and intuitive interface.',
  },
  {
    id:2,
    icon: Shield,
    title: 'Secure Payment',
    description: 'Your transactions are protected with industry-standard encryption and security.',
  },
  {
    id:3,
    icon: UserCheck,
    title: 'Trusted Operators',
    description: 'We partner only with verified and reliable bus operators across Nepal.',
  },
  {
    id:4,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer support team is available round the clock to assist you.',
  },
  {
    id:5,
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Get live updates on bus schedules, delays, and route changes instantly.',
  },
  {
    id:6,
    icon: CreditCard,
    title: 'Multiple Payment Options',
    description: 'Pay with eSewa, Khalti, bank cards, or cash - whatever works for you.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-muted/50" id="about">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">NepalYatra</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your travel experience seamless, safe, and enjoyable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
