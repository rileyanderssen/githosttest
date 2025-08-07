import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useBusinessInfo, useNavigation } from "@/components/ContentManager";
import logo from "@/assets/annerley-dental-main-logo.png";

const Footer = () => {
  const businessInfo = useBusinessInfo();
  const navigation = useNavigation();

  const socialLinks = [
    { icon: Facebook, href: businessInfo.socialMedia.facebook, label: "Facebook" },
    { icon: Instagram, href: businessInfo.socialMedia.instagram, label: "Instagram" },
    { icon: Twitter, href: businessInfo.socialMedia.twitter, label: "Twitter" }
  ];

  return (
    <footer className="bg-dental-dark text-dental-light">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Practice Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <img 
                src={logo} 
                alt="Annerley Dental Logo" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Brisbane's trusted dental practice for over 30 years. 
                Providing comprehensive dental care with a personal touch.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="border-primary/20 hover:bg-primary hover:border-primary"
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {navigation.footer.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{businessInfo.address}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${businessInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {businessInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Mon & Thu: 8:30am – 5:30pm</div>
                  <div>Tue & Wed: 9:00am - 5:00pm</div>
                  <div>Friday: 7:30am-3:00pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Annerley Dental. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <span>
              Website by{" "}
              <a href="#" className="text-primary hover:underline">
                Heart Digital
              </a>
            </span>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="text-center">
            <h5 className="font-semibold text-foreground mb-2">Dental Emergency?</h5>
            <p className="text-sm text-muted-foreground mb-3">
              For after-hours dental emergencies, please call our emergency line
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${businessInfo.phone}`}>
                <Phone className="h-4 w-4" />
                Call Emergency Line
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;