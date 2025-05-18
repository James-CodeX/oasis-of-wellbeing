
import React from "react";
import { LeafIcon } from "./icons/LeafIcon";

const Footer = () => {
  return (
    <footer className="bg-oasis-50 py-12 mt-16 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LeafIcon className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg font-bold">Oasis of Wellbeing</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              A sanctuary for mental health and personal growth through professional
              counselling and mentorship programs.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">
                  School Programs
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Individual Counselling
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Group Counselling
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Family & Couple Counselling
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Anxiety Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Charles: +254798084914
              </li>
              <li className="text-muted-foreground">
                oasisofwellbeing.c@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oasis of Wellbeing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
