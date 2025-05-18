
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Heart, BookOpen, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <User className="h-6 w-6 text-primary" />,
      title: "Individual Counselling",
      description:
        "One-on-one sessions tailored to your unique needs, providing a safe space to explore personal challenges and develop coping strategies.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Group Counselling",
      description:
        "Supportive group environments where shared experiences foster connection and collective healing through guided discussions.",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Family & Couple Counselling",
      description:
        "Strengthen relationships through communication-focused therapy designed to resolve conflicts and build stronger bonds.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Anxiety Management",
      description:
        "Learn effective techniques to manage anxiety, stress, and overwhelming emotions with evidence-based approaches.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Training Programs",
      description:
        "Structured programs focused on personal development, leadership skills, and mental health awareness for individuals and organizations.",
    },
  ];

  return (
    <section id="services" className="oasis-section py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive mental health solutions tailored to your individual needs,
            from personal counseling to specialized programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="oasis-card hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
