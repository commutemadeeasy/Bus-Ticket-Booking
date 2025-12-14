import { Target, Mountain, Heart, Globe } from 'lucide-react';

const objectives = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To revolutionize bus travel in Nepal by providing a seamless, digital-first booking experience that connects travelers to every corner of this beautiful country.',
  },
  {
    icon: Mountain,
    title: 'Connecting Nepal',
    description: 'From the bustling streets of Kathmandu to the serene hills of Pokhara, we\'re building a network that makes every destination accessible.',
  },
  {
    icon: Heart,
    title: 'Safety First',
    description: 'We prioritize your safety by partnering only with operators who meet our strict safety standards and maintain their vehicles regularly.',
  },
  {
    icon: Globe,
    title: 'Sustainable Travel',
    description: 'By promoting shared transportation, we\'re contributing to a greener Nepal and reducing the carbon footprint of travel.',
  },
];

const ObjectiveSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Objective</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At NepalYatra, we believe that travel should be accessible, convenient, and safe for everyone. 
              Our platform is designed to empower travelers with the tools they need to explore Nepal with confidence.
            </p>
            
            <div className="space-y-6">
              {objectives.map((objective, index) => (
                <div key={objective.title} className="flex gap-4">
                  <div className="hrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <objective.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">{objective.title}</h3>
                    <p className="text-muted-foreground text-sm">{objective.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-lineaer-to-br from-secondary/20 to-accent/20 rounded-3xl transform -rotate-3" />
              <div className="relative bg-card rounded-3xl shadow-elevated p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 animate-float">
                  <Mountain className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Explore Nepal
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of travelers who trust NepalYatra for their journeys
                </p>
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="text-center">
                    <p className="font-bold text-2xl text-primary">50+</p>
                    <p className="text-xs text-muted-foreground">Cities</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl text-secondary">100+</p>
                    <p className="text-xs text-muted-foreground">Operators</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl text-accent">10K+</p>
                    <p className="text-xs text-muted-foreground">Happy Travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
