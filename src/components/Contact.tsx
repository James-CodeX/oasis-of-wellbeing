
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="oasis-section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              We're here to help you on your journey to better mental health and wellbeing.
              Reach out to us for more information about our services or to book a session.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">Charles: +254798084914</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">oasisofwellbeing.c@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-secondary rounded-2xl">
              <h3 className="font-serif font-bold text-lg mb-2">School Programs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in bringing our programs to your school? Contact us for 
                customized solutions for your institution.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                Enquire About School Programs
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8">
            <h3 className="font-serif font-bold text-xl mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your needs"
                  rows={5}
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
