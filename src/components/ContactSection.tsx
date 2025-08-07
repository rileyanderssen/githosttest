import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Calendar, Navigation } from "lucide-react";
import { useBusinessInfo } from "@/components/ContentManager";

const ContactSection = () => {
  const businessInfo = useBusinessInfo();

  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: businessInfo.address,
      action: "Get Directions",
      href: `https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`
    },
    {
      icon: Phone,
      label: "Call Us",
      value: businessInfo.phone,
      action: "Call Now",
      href: `tel:${businessInfo.phone}`
    },
    {
      icon: Mail,
      label: "Email Us",
      value: businessInfo.email,
      action: "Send Email",
      href: `mailto:${businessInfo.email}`
    },
    {
      icon: Clock,
      label: "Opening Hours",
      value: "Mon & Thu: 8:30am – 5:30pm\nTue & Wed: 9:00am - 5:00pm\nFriday: 7:30am-3:00pm",
      action: "View All Hours",
      href: "/contact"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Ready to Start Your <span className="text-primary">Dental Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book your appointment today and experience the difference that personalized, 
            professional dental care can make for your smile and overall health.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.label}
                  </h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line mb-3">
                    {info.value}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined}>
                    {info.action}
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Main CTA Section */}
        <Card className="bg-gradient-primary text-primary-foreground overflow-hidden">
          <div className="p-8 lg:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Book Your Appointment Today
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Experience exceptional dental care from Brisbane's most trusted dentist. 
                New patients welcome with our special $145 comprehensive examination.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                variant="outline-hero" 
                size="xl"
                className="flex-1 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href={businessInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5" />
                  Book Online
                </a>
              </Button>
              
              <Button 
                variant="outline-hero" 
                size="xl"
                className="flex-1 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Navigation className="h-4 w-4" />
                <span>Easy Parking Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Flexible Appointment Times</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Same Day Emergency Care</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center space-y-3">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Find Us in Annerley</h4>
                <p className="text-muted-foreground">{businessInfo.address}</p>
                <Button variant="outline" asChild>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;