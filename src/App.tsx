import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ChoosePath } from "./components/ChoosePath";
import { AboutAvailability } from "./components/AboutAvailability";
import { TrustIndicators } from "./components/TrustIndicators";
import { WhatIDo } from "./components/WhatIDo";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { TeachingSection } from "./components/TeachingSection";
import { CertificationsAndSkills } from "./components/CertificationsAndSkills";
import { CvSelectorSection } from "./components/CvSelectorSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "choose-path",
      "about",
      "what-i-do",
      "projects",
      "experience",
      "ai-teaching",
      "skills",
      "cvs",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg text-text-main font-sans antialiased selection:bg-accent/20 selection:text-accent">
      {/* 1. Responsive Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Layout Container with Natural Vertical Scroll */}
      <main className="w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Pathways: Choose What You're Here For */}
        <ChoosePath />

        {/* 4. Brand Positioning & Career Availability */}
        <AboutAvailability />

        {/* 5. Professional Trust Indicators */}
        <TrustIndicators />

        {/* 6. What I Do Section */}
        <WhatIDo />

        {/* 7. Featured Projects Section */}
        <FeaturedProjects />

        {/* 8. Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* 9. AI Teaching Section */}
        <TeachingSection />

        {/* 10. Certifications and Skills */}
        <CertificationsAndSkills />

        {/* 11. Professional CV Download Selector */}
        <CvSelectorSection />

        {/* 12. Contact Call-to-Action */}
        <ContactSection />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
