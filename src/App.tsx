import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustIndicators } from "./components/TrustIndicators";
import { WhatIDo } from "./components/WhatIDo";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { TeachingSection } from "./components/TeachingSection";
import { CertificationsAndSkills } from "./components/CertificationsAndSkills";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "what-i-do",
      "projects",
      "experience",
      "ai-teaching",
      "skills",
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

        {/* 3. Professional Trust Indicators */}
        <TrustIndicators />

        {/* 4. What I Do Section */}
        <WhatIDo />

        {/* 5. Featured Projects Section */}
        <FeaturedProjects />

        {/* 6. Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* 7. AI Teaching Section */}
        <TeachingSection />

        {/* 8. Certifications and Skills */}
        <CertificationsAndSkills />

        {/* 9. Contact Call-to-Action */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
