import { Code, Globe, Layout, Video, Palette, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ServicesSection = () => {
  const services = [
    {
      title: "WordPress Development",
      description:
        "Custom WordPress websites tailored to your specific needs, with responsive design and SEO optimization.",
      icon: <Globe className="h-10 w-10" />,
    },
    {
      title: "Custom React Websites",
      description: "Modern, fast, and interactive websites built with React and the latest frontend technologies.",
      icon: <Code className="h-10 w-10" />,
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive conversions for your business.",
      icon: <Layout className="h-10 w-10" />,
    },
    {
      title: "Graphic Design",
      description: "Eye-catching graphics, logos, and visual elements that enhance your brand identity.",
      icon: <Palette className="h-10 w-10" />,
    },
    {
      title: "Video Editing",
      description: "Professional video editing services to create engaging content for your website or social media.",
      icon: <Video className="h-10 w-10" />,
    },
    {
      title: "Content Writing",
      description: "SEO-optimized content that engages your audience and improves your search engine rankings.",
      icon: <FileText className="h-10 w-10" />,
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a range of services to help businesses establish a strong online presence and achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
