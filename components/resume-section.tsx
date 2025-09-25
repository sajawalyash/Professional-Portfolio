import { GraduationCap, Briefcase, Award, Download, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ResumeSection = () => {
  const personalInfo = {
    name: "SAJAWAL",
    email: "sajawal.g23170@iqra.edu.pk",
    phone: "0317-0892660 || 0339-0892660",
    address: "Flat# V-643 New Karimabad Colony F-B Area Karachi",
    github: "https://github.com/sajawalyash",
    linkedin: "www.linkedin.com/in/sajawal-yash",
    portfolio: "www.linkedin.com/in/sajawal-yash",
  }

  const objective =
    "I look forward to gathering some experience in my interest, Enhancing my professional skills, and benefiting the organization with my talent and abilities."

  const aboutMe =
    "I'm a passionate Full-Stack Web Developer and WordPress Expert with a strong background in creating responsive, user-friendly websites and applications. I am committed to delivering innovative solutions that drive business growth."

  const education = [
    {
      degree: "Bachelor of Computer Science (In Progress)",
      institution: "Iqra University Karachi",
      year: "2022 - Present",
      grade: "CGPA 3.1",
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "Jinnah Institute of Informatics and Commerce Rawalpindi",
      year: "2018 - 2020",
      grade: "",
    },
    {
      degree: "Matriculation in Science",
      institution: "KIU Board Gilgit Baltistan",
      year: "2016 - 2018",
      grade: "",
    },
  ]

  const experience = [
    {
      title: "Web Developer, WordPress Expert & Data Analyst",
      description: "WordPress Full Optimization and Customization",
      achievements: [
        "Expert in Elementor Pro and WP-Bakery Plugin",
        "Maintain three websites as a webmaster",
        "Created 7 Websites like e-commerce, blogging website, portfolio, etc",
      ],
    },
  ]

  const courses = [
    {
      title: "Web and Mobile App Development",
      institution: "Saylani MASS IT Program",
      duration: "1.5 years",
    },
    {
      title: "HTML and CSS",
      institution: "Saylani",
      duration: "2 months",
    },
    {
      title: "HTML, CSS, JavaScript, Bootstrap, and WordPress",
      institution: "NFTP Online",
      duration: "Complete Course",
    },
  ]

  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "WordPress", level: 85 },
    { name: "React JS", level: 65 },
    { name: "SQL", level: 60 },
    { name: "MS Excel", level: 70 },
    { name: "Data Analytics", level: 60 },
    { name: "PowerBI", level: 49 },
    { name: "Coding", level: 70 },
  ]

  const languages = [
    { name: "Shina", level: "Mother Tongue" },
    { name: "Urdu", level: "Fluent" },
    { name: "English", level: "Basic" },
  ]

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <div className="mt-6">
            <Button
              className="bg-white text-purple-600 border border-purple-600 hover:bg-purple-50 hover:text-purple-700"
              asChild
            >
              <a
                href="https://sajawalresume.tiiny.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mb-12">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-purple-600" />
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" /> {personalInfo.email}
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" /> {personalInfo.phone}
                    </p>
                    <p className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" /> {personalInfo.address}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Objective</h3>
                  <p className="text-gray-600 dark:text-gray-300">{objective}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 mr-3">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <Card key={index} className="border-purple-200 dark:border-purple-800">
                    <CardContent className="p-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="text-lg font-medium">{item.degree}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.year}</span>
                      </div>
                      <p className="text-purple-600 mb-2">{item.institution}</p>
                      {item.grade && <p className="text-gray-600 dark:text-gray-300">{item.grade}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 mr-3">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Courses</h3>
              </div>

              <div className="space-y-4">
                {courses.map((course, index) => (
                  <Card key={index} className="border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4">
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-purple-600">{course.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{course.duration}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <Card className="border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-gray-600 dark:text-gray-300">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            {/* Experience */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 mr-3">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <Card key={index} className="border-purple-200 dark:border-purple-800">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                      <p className="text-purple-600 mb-4">{item.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <Card className="border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
