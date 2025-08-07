import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Award, Calendar, Phone } from "lucide-react";
import { useBusinessInfo, useNewPatientOffer, useHealthFunds } from "@/components/ContentManager";
import bupaLogo from "@/assets/health-funds/bupa-logo.jpg";
import hcfLogo from "@/assets/health-funds/hcf-logo.jpg";
import nibLogo from "@/assets/health-funds/nib-logo.jpg";

const HeroSection = () => {
  const businessInfo = useBusinessInfo();
  const newPatientOffer = useNewPatientOffer();
  const healthFunds = useHealthFunds();

  const logoMap = {
    "Bupa": bupaLogo,
    "HCF": hcfLogo,
    "NIB": nibLogo
  };

  return (
    <section className="bg-gradient-subtle py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary font-semibold">
                <Award className="h-4 w-4 mr-2" />
                35+ Years of Excellence
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Trusted{" "}
                <span className="text-primary">Dentist</span> in{" "}
                <span className="text-primary">Annerley</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dr Basil Athanassiadis and the Annerley Dental team provide comprehensive dental care 
                on Brisbane's Southside. With over 35 years of experience and 10,000+ patients treated, 
                we're committed to your oral health and beautiful smile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                asChild
                className="animate-scale-in"
              >
                <a href={businessInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5" />
                  Book Appointment Online
                </a>
              </Button>
              
              <Button 
                variant="outline-hero" 
                size="xl"
                asChild
                className="animate-scale-in"
              >
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="h-5 w-5" />
                  Call {businessInfo.phone}
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">5-Star Rated Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">10,000+ Patients Treated</span>
              </div>
            </div>

            {/* Health Funds */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Preferred provider for these health funds:
              </p>
              <div className="flex items-center gap-4">
                {healthFunds.map((fund) => (
                  <img
                    key={fund.name}
                    src={logoMap[fund.name as keyof typeof logoMap]}
                    alt={`${fund.name} Health Fund`}
                    className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - New Patient Offer */}
          <div className="lg:pl-8 animate-fade-in">
            <Card className="p-8 shadow-soft border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="text-center space-y-6">
                <Badge variant="default" className="text-lg px-4 py-2">
                  New Patient Special
                </Badge>
                
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {newPatientOffer.price}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {newPatientOffer.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {newPatientOffer.includes}
                  </p>
                </div>

                <div className="bg-accent/50 rounded-lg p-4">
                  <p className="text-sm text-foreground font-medium">
                    {newPatientOffer.note}
                  </p>
                </div>

                <Button 
                  variant="appointment" 
                  size="xl" 
                  className="w-full"
                  asChild
                >
                  <a href="/contact">
                    Claim Your New Patient Offer
                  </a>
                </Button>

                <div className="text-xs text-muted-foreground space-y-1">
                  {newPatientOffer.terms.slice(0, 2).map((term, index) => (
                    <p key={index}>
                      {index + 1}. {term}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;