import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/hero-animation"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import ResumeSection from "@/components/resume-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroBackground />
        </div>
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                Sajawal
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl leading-relaxed">
              Full-Stack Developer, Data Analyst &amp; WordPress Expert crafting modern web solutions with clean code and innovative design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-700 hover:bg-gray-100 font-medium px-8 py-3 text-lg">
                <Link href="#projects" className="flex items-center">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover:text-white font-medium px-8 py-3 text-lg bg-transparent"
                asChild
              >
                <a
                  href="https://sajawalresume.tiiny.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Resume Section */}
      <ResumeSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
