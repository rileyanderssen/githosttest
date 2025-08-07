import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Calendar, Heart, ArrowRight } from "lucide-react";
import { useTeamMembers } from "@/components/ContentManager";

const AboutSection = () => {
  const teamMembers = useTeamMembers();
  const drBasil = teamMembers[0]; // Dr Basil is the first team member

  const achievements = [
    { icon: Calendar, label: "35+ Years Experience", value: "Since 1987" },
    { icon: Users, label: "Patients Treated", value: "10,000+" },
    { icon: Award, label: "Practice Established", value: "1994" },
    { icon: Heart, label: "Patient Satisfaction", value: "5-Star Rated" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-dental-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary font-semibold">
                <Award className="h-4 w-4 mr-2" />
                Meet Our Team
              </Badge>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                About <span className="text-primary">Dr Basil</span> Athanassiadis
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr Basil, born and raised in Brisbane, has been a dentist for more than 35 years. 
                He is widely recognised as being among Brisbane's best and most qualified dentists 
                and has a reputation for always putting his patients' best interests at heart.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Experience & Qualifications</h3>
              <ul className="space-y-2 text-muted-foreground">
                {drBasil.qualifications?.map((qualification, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {qualification}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Practice Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                He started his practice in Annerley in May 1994 and celebrated 30 years of owning 
                his own practice in 2024. Since starting in Annerley in 1994, Dr Basil has treated 
                over 10,000 patients with dedication and expertise.
              </p>
            </div>

            <Button variant="outline" size="lg" asChild>
              <a href="/about" className="group">
                Learn More About Our Practice
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Content - Stats & Achievements */}
          <div className="space-y-8 animate-fade-in">
            <Card className="p-8 shadow-soft bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Three Decades of Excellence
                </h3>
                <p className="text-muted-foreground">
                  Dr Basil's commitment to dental excellence spans over three decades, 
                  making him one of Brisbane's most experienced and trusted dentists.
                </p>
              </div>
            </Card>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-card transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quote */}
            <Card className="p-6 border-l-4 border-l-primary bg-accent/30">
              <blockquote className="text-foreground italic text-lg">
                "I believe in always putting my patients' best interests at heart. 
                Every treatment plan is tailored to the individual's needs and goals."
              </blockquote>
              <footer className="mt-3 text-sm text-muted-foreground font-medium">
                — Dr Basil Athanassiadis, Principal Dentist
              </footer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;