
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Booking = () => {
  // State to track the selected service or program
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  // Form setup for contact information
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      serviceType: "service", // Default to service booking
      programLevel: "", // For training programs - school level
    },
  });

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data, "Selected item:", selectedItem);
    // Here you would typically send this data to your backend
    alert("Booking request sent! We'll contact you within 24 hours.");
    form.reset();
    setSelectedItem(null);
  };

  // Service options
  const services = [
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
  ];

  // Training program options
  const programs = [
    {
      title: "Career Guidance",
      description: "Help students discover their passions and plan their educational and career paths.",
      duration: "90 minutes"
    },
    {
      title: "Substance Abuse Awareness",
      description: "Educational programs about the risks of substance abuse and healthy coping.",
      duration: "120 minutes"
    },
    {
      title: "Leadership Training",
      description: "Develop confident, ethical leaders through comprehensive training workshops.",
      duration: "180 minutes"
    }
  ];

  // School levels for training programs
  const schoolLevels = ["Primary School", "Junior Secondary", "Senior Secondary"];

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
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="services" className="w-full mb-8">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="services">Counseling Services</TabsTrigger>
                  <TabsTrigger value="programs">Training Programs</TabsTrigger>
                </TabsList>
                
                <TabsContent value="services" className="mt-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Available Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {services.map((service, index) => (
                      <div 
                        key={index} 
                        className={`p-6 rounded-xl border ${selectedItem === `service-${index}` ? 'border-primary bg-primary/5' : 'border-border bg-card'} hover:shadow-md transition-all cursor-pointer`}
                        onClick={() => setSelectedItem(`service-${index}`)}
                      >
                        <h3 className="text-lg font-medium">{service.title}</h3>
                        <p className="mt-2 text-muted-foreground">{service.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-primary flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {service.duration}
                          </span>
                          <Button 
                            size="sm" 
                            variant={selectedItem === `service-${index}` ? "default" : "outline"}
                          >
                            {selectedItem === `service-${index}` ? "Selected" : "Select"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="programs" className="mt-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">School Training Programs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {programs.map((program, index) => (
                      <div 
                        key={index} 
                        className={`p-6 rounded-xl border ${selectedItem === `program-${index}` ? 'border-primary bg-primary/5' : 'border-border bg-card'} hover:shadow-md transition-all cursor-pointer`}
                        onClick={() => setSelectedItem(`program-${index}`)}
                      >
                        <h3 className="text-lg font-medium">{program.title}</h3>
                        <p className="mt-2 text-muted-foreground">{program.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-primary flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {program.duration}
                          </span>
                          <Button 
                            size="sm" 
                            variant={selectedItem === `program-${index}` ? "default" : "outline"}
                          >
                            {selectedItem === `program-${index}` ? "Selected" : "Select"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-3">Select School Level</h3>
                    <div className="flex flex-wrap gap-3">
                      <Form {...form}>
                        <FormField
                          control={form.control}
                          name="programLevel"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-wrap gap-4"
                                >
                                  {schoolLevels.map((level, index) => (
                                    <FormItem key={index} className="flex items-center space-x-2">
                                      <FormControl>
                                        <RadioGroupItem value={level} />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        {level}
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </Form>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Contact form */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Enter your phone number" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about what you're looking for"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={!selectedItem}
                    >
                      Request Booking
                    </Button>
                    
                    <p className="text-sm text-center text-muted-foreground">
                      We'll contact you within 24 hours to confirm your booking and schedule a specific time.
                    </p>
                  </form>
                </Form>
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
