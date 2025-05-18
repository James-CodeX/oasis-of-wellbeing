
import React from "react";

const Quote = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-teal-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 mx-auto mb-6 text-primary/30"
            fill="currentColor"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <blockquote className="relative">
            <p className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">
              There is hope, even when your brain tells you there isn't.
            </p>
            <footer className="text-muted-foreground">
              <cite className="not-italic">
                Oasis of Wellbeing
              </cite>
            </footer>
          </blockquote>
          
          <div className="mt-12 flex justify-center">
            <div className="h-1 w-24 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
