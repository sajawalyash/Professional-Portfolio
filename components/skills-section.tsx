"use client"

import { useState } from "react"
import { Code, Database, Laptop, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("all")

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      id: "cms",
      name: "CMS & Tools",
      icon: <Laptop className="h-5 w-5" />,
      skills: [
        { name: "WordPress", level: 95 },
        { name: "Canva", level: 85 },
        { name: "Video Editing", level: 80 },
        { name: "Elementor", level: 90 },
        { name: "WooCommerce", level: 85 },
      ],
    },
    {
      id: "database",
      name: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "SQL", level: 85 },
        { name: "PowerBI", level: 75 },
      ],
    },
    {
      id: "other",
      name: "Other Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "MS Office", level: 90 },
        { name: "Git", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Adobe Premiere", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's what I bring to the table.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All Skills
              </TabsTrigger>
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category) => (
                <Card key={category.id} className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div
                              className="bg-purple-600 h-2.5 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card className="border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default SkillsSection
