import { Mail, Github, Linkedin, FileText } from "lucide-react";
import Header from "@/components/Header";

export default function About() {

  const socialLinks = [
    { icon: Github, href: "https://github.com/dev-ming", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/%EB%AF%BC%EC%A7%80-%EA%B9%80-8b606125a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ruaaa1307@gmail.com", label: "Email" },
    { icon: FileText, href: "https://mingee-resume.vercel.app/ko", label: "Resume" },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
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

      {/* About Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative pt-24 md:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <h2 className="text-3xl md:text-[48px] font-bold text-black leading-tight md:leading-[48px]">
                  About
                </h2>
                <h2 className="text-3xl md:text-[48px] font-bold text-black leading-tight md:leading-[48px] relative whitespace-nowrap">
                  Me
                  <div className="absolute -bottom-1 left-0 w-full h-3 md:h-4 bg-primary/30 opacity-30"></div>
                </h2>
              </div>
              <div className="w-12 md:w-16 h-1 bg-primary rounded-full mx-auto"></div>
            </div>

            <div className="space-y-4 md:space-y-6 text-sm md:text-[18px] text-black leading-relaxed md:leading-[29.25px] max-w-3xl mx-auto">
              <p>
                I'm a passionate front-end developer who believes that{" "}
                <span className="font-semibold relative whitespace-nowrap">
                  great design meets functionality
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-200 opacity-30"></span>
                </span>{" "}
                in every pixel. With a keen eye for detail and a love for
                clean, efficient code, I transform creative visions into
                interactive digital experiences.
              </p>
              <p>
                My journey in web development started with curiosity and has
                evolved into a deep appreciation for{" "}
                <span className="font-semibold relative whitespace-nowrap">
                  user-centered design
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-200 opacity-30"></span>
                </span>{" "}
                and modern development practices. I specialize in React,
                TypeScript, and creating responsive interfaces that work
                beautifully across all devices.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest
                design trends, contributing to open-source projects, or
                experimenting with new animation libraries to bring more{" "}
                <span className="font-semibold relative">
                  life and personality
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-200 opacity-30"></span>
                </span>{" "}
                to the web.
              </p>
            </div>

            {/* Resume CTA */}
            <div className="pt-8">
              <p className="text-gray-600 mb-6">Want to know more about my professional journey?</p>
              <a 
                href="https://mingee-resume.vercel.app/ko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow text-sm md:text-base"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                View My Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-8 pt-8">
              {socialLinks.map((link) => (
                <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label} className="text-black hover:text-primary transition-colors">
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20"></div>
    </div>
  );
}
