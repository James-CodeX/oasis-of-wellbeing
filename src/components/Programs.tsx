
import React from "react";
import { Button } from "@/components/ui/button";
import { School, User, BookOpen } from "lucide-react";

const Programs = () => {
  return (
    <section id="programs" className="oasis-section wave-bg">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            School <span className="text-primary">Mentorship</span> Programs
          </h2>
          <p className="text-muted-foreground">
            Comprehensive programs designed to support students' mental well-being
            and personal development from primary through senior secondary levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-border p-6 shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-3xl"></div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <School className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Career Guidance</h3>
            <p className="text-muted-foreground mb-6">
              Help students discover their passions and plan their educational and
              career paths with confidence and clarity.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Individual career assessments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Industry exposure workshops</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Educational path planning</span>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white border border-border p-6 shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-3xl"></div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <User className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Substance Abuse Awareness</h3>
            <p className="text-muted-foreground mb-6">
              Educational programs to help students understand the risks of substance
              abuse and develop healthy coping mechanisms.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Age-appropriate education</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Peer support training</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Recovery resources</span>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white border border-border p-6 shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-3xl"></div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Leadership Training</h3>
            <p className="text-muted-foreground mb-6">
              Develop confident, ethical leaders through comprehensive training in
              communication, decision-making, and team building.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Public speaking workshops</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Conflict resolution training</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                <span>Ethical leadership principles</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-serif font-bold mb-4">Available for all school levels</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-secondary px-4 py-2 rounded-full text-sm font-medium">Primary School</div>
            <div className="bg-secondary px-4 py-2 rounded-full text-sm font-medium">Junior Secondary</div>
            <div className="bg-secondary px-4 py-2 rounded-full text-sm font-medium">Senior Secondary</div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Request School Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
