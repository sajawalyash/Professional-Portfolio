"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  const resumeLink = "https://sajawalresume.tiiny.site/"

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            Sajawal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="text-white hover:text-purple-300 hover:bg-white/10 font-medium"
                  asChild
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-medium bg-transparent"
              asChild
            >
              <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className="w-full justify-start hover:text-purple-600 hover:bg-white/10 dark:hover:bg-purple-900/30 my-1 font-medium"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
            <Button
              variant="outline"
              className="w-full justify-start border-white text-white hover:bg-white hover:text-purple-600 font-medium bg-transparent"
              onClick={() => setIsOpen(false)}
              asChild
            >
              <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
