import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import LoadingAnimation from "@/components/LoadingAnimation";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
}

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Github, href: "https://github.com/dev-ming", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/%EB%AF%BC%EC%A7%80-%EA%B9%80-8b606125a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ruaaa1307@gmail.com", label: "Email" },
];

  const projects: Project[] = [
    {
      id: "nothing-stays-static",
      title: "Nothing Stays Static",
      description: "A creative portfolio website showcasing dynamic animations and interactive elements.",
      image: "/nothing-stays-static.png",
      techStack: ["React", "CSS", "Motion", "Tailwind"]
    },
    {
      id: "kingdom-story-reboot",
      title: "Kingdom Story Reboot",
      description: "킹덤스토리 창천 사전예약 페이지",
      image: "/kingdomstory-reboot.png",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"]
    },
    {
      id: "kingdom-heroes-war-marketplace",
      title: "Kingdom Heroes War Marketplace",
      description: "A marketplace platform for Kingdom Heroes War game featuring NFT trading and user management.",
      image: "/marketplace.png",
      techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "recoil", "SWR", "wagmi", "Web3", "NFT"]
    }
  ];


  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <LoadingAnimation />
      
      {/* Background Blur Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 rounded-full bg-blur-blue opacity-30 blur-[12px] left-10 top-20 mix-blend-multiply"></div>
        <div className="absolute w-72 h-72 rounded-full bg-blur-pink opacity-30 blur-[12px] right-20 top-40 mix-blend-multiply"></div>
        <div className="absolute w-72 h-72 rounded-full bg-blur-yellow opacity-30 blur-[12px] left-1/2 top-96 transform -translate-x-1/2 mix-blend-multiply"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blur-cream opacity-40 blur-[32px] left-0 top-[1872px] mix-blend-multiply"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blur-magenta opacity-40 blur-[32px] right-0 top-[2737px] mix-blend-multiply"></div>
        <div className="absolute w-80 h-80 rounded-full bg-blur-purple opacity-40 blur-[32px] left-0 top-[3250px] mix-blend-multiply"></div>
      </div>

      <Header />


      {/* Projects Gallery */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative pt-24 md:pt-32">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          {/* <div className="text-center mb-12 md:mb-16">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <h2 className="text-3xl md:text-5xl font-bold text-black">{t('projects.title')}</h2>
                <div className="relative">
                  <div className="w-full h-3 md:h-4 bg-primary/20 absolute -bottom-1"></div>
                  <h2 className="text-3xl md:text-5xl font-bold text-black">{t('projects.subtitle')}</h2>
                </div>
                <div className="text-3xl md:text-5xl font-bold text-transparent absolute">
                  {t('projects.favorite')}
                </div>
              </div>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('projects.description')}{" "}
                <span className="relative whitespace-nowrap">
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-200 opacity-30"></span>
                  <span className="relative font-medium">{t('projects.highlight')}</span>
                </span>{" "}
                {t('projects.description2')}
              </p>
            </div>
          </div> */}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
              {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm md:text-base px-4">{project.description}</p>
                  </div>
                </div>
              </div>

                {/* Project Info */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p> */}
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm"
                      >
                        {tech}
                    </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer Spacer */}
      <div className="h-20"></div>
    </div>
  );
}
