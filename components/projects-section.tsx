"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-featured online store built with React and Node.js",
      image: "/images/project-ecommerce.jpg",
      category: "react",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "http://resiliotiles.com.au/",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Blogging Website",
      description: "Professional blogging platform with custom WordPress theme",
      image: "/images/project-corporate.jpg",
      category: "wordpress",
      tags: ["WordPress", "PHP", "MySQL", "Custom Theme"],
      demoLink: "https://ibextimes.com/",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Clean and modern portfolio template with React",
      image: "/images/project-portfolio.jpg",
      category: "react",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://hflfdn.com/",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "WordPress site with online ordering system",
      image: "/images/project-restaurant.jpg",
      category: "wordpress",
      tags: ["WordPress", "WooCommerce", "Elementor"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Task Management App",
      description: "React application for managing tasks and projects",
      image: "/images/project-task.jpg",
      category: "react",
      tags: ["React", "Firebase", "Redux"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Landing Page Design",
      description: "Modern landing page design for a SaaS product",
      image: "/images/project-landing.jpg",
      category: "design",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents my skills and expertise in different areas.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="react" onClick={() => setActiveTab("react")}>
                React
              </TabsTrigger>
              <TabsTrigger value="wordpress" onClick={() => setActiveTab("wordpress")}>
                WordPress
              </TabsTrigger>
              <TabsTrigger value="design" onClick={() => setActiveTab("design")}>
                Design
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="react" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wordpress" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="design" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-none"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 px-4" asChild>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <ExternalLink className="mr-1 h-4 w-4" /> Demo
          </a>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-4 bg-transparent"
          asChild
        >
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="mr-1 h-4 w-4" /> Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectsSection
