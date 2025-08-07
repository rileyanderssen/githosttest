import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useNavigation, useBusinessInfo } from "@/components/ContentManager";
import logo from "@/assets/annerley-dental-main-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const businessInfo = useBusinessInfo();

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${businessInfo.phone}`} className="hover:underline">
                {businessInfo.phone}
              </a>
            </div>
            <span className="hidden md:block">{businessInfo.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block">Mon & Thu: 8:30am – 5:30pm</span>
            <Button 
              variant="outline-hero" 
              size="sm" 
              asChild
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href={businessInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4" />
                BOOK NOW
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Annerley Dental Logo" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.main.map((item) => (
                <div key={item.path} className="relative group">
                  <a
                    href={item.path}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-64 bg-background shadow-soft rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.path}
                          href={subItem.path}
                          className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Button variant="appointment" size="lg">
                <Phone className="h-4 w-4" />
                Call {businessInfo.phone}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navigation.main.map((item) => (
                <div key={item.path}>
                  <a
                    href={item.path}
                    className="block py-2 text-foreground hover:text-primary font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.path}
                          href={subItem.path}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-3">
                <Button 
                  variant="appointment" 
                  className="w-full"
                  asChild
                >
                  <a href={`tel:${businessInfo.phone}`}>
                    <Phone className="h-4 w-4" />
                    Call {businessInfo.phone}
                  </a>
                </Button>
                <Button 
                  variant="hero" 
                  className="w-full"
                  asChild
                >
                  <a href={businessInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-4 w-4" />
                    Book Appointment Online
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;