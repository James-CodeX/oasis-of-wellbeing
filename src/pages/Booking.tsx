
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">Book a Session</h1>
              <p className="text-lg text-muted-foreground">Schedule your counseling or mentorship session with our experienced professionals</p>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-bold">Available Services</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Individual Counselling",
                      description: "One-on-one sessions focused on personal growth and mental wellbeing.",
                      duration: "60 minutes"
                    },
                    {
                      title: "Group Counselling",
                      description: "Supportive group environment led by professional counselors.",
                      duration: "90 minutes"
                    },
                    {
                      title: "Family/Couple Counselling",
                      description: "Sessions designed to improve relationships and communication.",
                      duration: "75 minutes"
                    },
                    {
                      title: "Anxiety Management",
                      description: "Learn techniques to manage and reduce anxiety symptoms.",
                      duration: "60 minutes"
                    },
                    {
                      title: "School Mentorship Consultation",
                      description: "Discuss implementing mentorship programs at your school.",
                      duration: "45 minutes"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-medium">{service.title}</h3>
                      <p className="mt-2 text-muted-foreground">{service.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-primary flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {service.duration}
                        </span>
                        <Button size="sm">Select</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-border px-4 py-2"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-border px-4 py-2"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-md border border-border px-4 py-2"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border border-border px-4 py-2"
                      placeholder="Tell us more about what you're looking for"
                    ></textarea>
                  </div>

                  <Button className="w-full">Request Booking</Button>

                  <p className="text-sm text-center text-muted-foreground">
                    We'll contact you within 24 hours to confirm your booking and schedule a specific time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
