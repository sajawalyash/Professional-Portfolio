import { GraduationCap, Briefcase, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const AboutSection = () => {
  const timelineItems = [
    {
      year: "2020 - Present",
      title: "WordPress Developer",
      description: "Freelance WordPress development for various clients",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "2024 - Present",
      title: "Full-Stack Developer",
      description: "Building modern web applications with React and Node.js",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "2022 - In Progress",
      title: "Iqra University",
      description: "Bachelor's Degree in Computer Science",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ]

  const funFacts = [
    { fact: "Edited 100+ videos", icon: "🎬" },
    { fact: "Built 20+ WordPress Sites", icon: "🌐" },
    { fact: "Completed 50+ freelance projects", icon: "💼" },
    { fact: "Worked with clients from 5+ countries", icon: "🌍" },
  ]

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg mb-6">
              I'm a passionate Full-Stack Web Developer, Data Analyst and WordPress Expert with a strong background in
              creating responsive, user-friendly websites and applications. I’m currently pursuing a Bachelor's degree
              in Computer Science at Iqra University and have over 5 years of experience in web development.
            </p>
            <p className="text-lg mb-6">
              My journey in tech started with a fascination for design and problem-solving, which led me to explore
              various aspects of web development. I enjoy the challenge of turning complex problems into simple,
              beautiful, and intuitive designs.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy video editing, exploring new technologies, and contributing to open-source
              projects.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sajawal-profile.png"
                alt="Sajawal - Full Stack Developer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center">
            Fun Facts <Heart className="ml-2 h-5 w-5 text-red-500" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <Card key={index} className="border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{fact.icon}</div>
                  <p className="font-medium">{fact.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8">My Journey</h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-600 before:via-purple-400 before:to-purple-300">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 pb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 z-10">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">{item.year}</span>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
