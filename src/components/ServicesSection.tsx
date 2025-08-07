import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Smile, Moon, Zap } from "lucide-react";
import { useServices } from "@/components/ContentManager";
import dentalImplantsImage from "@/assets/services/dental-implants.webp";

const ServicesSection = () => {
  const services = useServices();

  const serviceIcons = {
    "dental-implants": Heart,
    "clear-aligners": Smile,
    "cosmetic-dentistry": Zap,
    "sleep-disordered-breathing": Moon
  };

  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Comprehensive <span className="text-primary">Dental Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From preventive care to advanced treatments, we offer a full range of dental services 
            to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredServices.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
            
            return (
              <Card 
                key={service.id} 
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-dark"
                    asChild
                  >
                    <a href={`/services/${service.id}`} className="flex items-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Service Highlight */}
        <Card className="overflow-hidden shadow-soft">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Dental Implants: The Gold Standard for Tooth Replacement
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dental implants offer a permanent solution for missing teeth. Our titanium implants 
                  integrate with your jawbone through osseointegration, providing a stable foundation 
                  for natural-looking crowns that function just like your original teeth.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Permanent solution that can last a lifetime
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Preserves jawbone structure and facial appearance
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    No impact on adjacent healthy teeth
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Natural appearance and comfortable function
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" asChild>
                  <a href="/services/dental-implants">
                    Learn About Dental Implants
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">
                    Book Consultation
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={dentalImplantsImage}
                alt="Dental Implant Treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/services" className="group">
              View All Services 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;