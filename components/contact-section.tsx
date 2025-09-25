"use client"
import { useActionState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { sendContactEmail } from "@/app/actions/contact"

const ContactSection = () => {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null)

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "sajawalyash0892@gmail.com",
      link: "mailto:sajawalyash0892@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+92 317 0892660",
      link: "tel:+923170892660",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Karachi, Pakistan",
      link: "https://maps.google.com/?q=Karachi,Pakistan",
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      link: "http://www.linkedin.com/in/sajawal-yash",
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      link: "https://github.com/sajawalyash",
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <CardContent className="p-6">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-purple-600 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                      aria-label={item.title}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-none shadow-md bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

                {state && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      state.success
                        ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800"
                        : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800"
                    }`}
                  >
                    {state.message}
                  </div>
                )}

                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        disabled={isPending}
                        className="border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        disabled={isPending}
                        className="border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      disabled={isPending}
                      className="border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      disabled={isPending}
                      className="border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
                  >
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
