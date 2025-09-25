import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Phone, MapPin, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ]

  const services = [
    { name: "WordPress Development", href: "#services" },
    { name: "React Development", href: "#services" },
    { name: "Data Analysis", href: "#services" },
    { name: "Video Editing", href: "#services" },
  ]

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      text: "sajawalyash0892@gmail.com",
      href: "mailto:sajawalyash0892@gmail.com",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      text: "+92 317 0892660",
      href: "tel:+923170892660",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: "Karachi, Pakistan",
      href: "https://maps.google.com/?q=Karachi,Pakistan",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/sajawalyash",
      label: "GitHub",
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "http://www.linkedin.com/in/sajawal-yash",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/sajawal_yash?s=09",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:sajawalyash0892@gmail.com",
      label: "Email",
      color: "hover:bg-red-500",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text mb-4 inline-block"
              >
                Sajawal
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Full-Stack Web Developer, Data Analyst &amp; WordPress Expert creating modern, responsive websites and applications that drive business growth.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-800 text-gray-300 transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-4 mb-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                  >
                    <div className="p-2 rounded-full bg-gray-800 mr-3 group-hover:bg-purple-600 transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-3 text-white">Stay Updated</h4>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-r-none focus:border-purple-500"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700 rounded-l-none px-4">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                <span>&copy; {currentYear} Sajawal. Made with</span>
                <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
                <span>in Pakistan. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="https://sajawalresume.tiiny.site/" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
