import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

export default function Index() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Github, href: "https://github.com/dev-ming", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/%EB%AF%BC%EC%A7%80-%EA%B9%80-8b606125a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ruaaa1307@gmail.com", label: "Email" },
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-6 relative pt-16 md:pt-0">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-[60px] font-bold text-black leading-tight md:leading-[75px]">
              {t('hero.greeting')}
            </h1>
            <h2 className="text-4xl md:text-[60px] font-bold text-primary leading-tight md:leading-[75px]">
              {t('hero.name')}
            </h2>
            <div className="text-base md:text-[20px] text-black max-w-2xl mx-auto relative leading-relaxed md:leading-[28px] mt-6 md:mt-8">
              {t('hero.nickname')}{" "}
              <span className="relative">
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary/30 opacity-40"></span>
                <span className="relative font-medium">Jenna</span>
              </span>
            </div>
            <div className="text-xl md:text-[30px] text-black max-w-lg mx-auto leading-relaxed md:leading-[36px] mt-6 md:mt-8">
              {t('hero.title')}
            </div>
            <div className="text-sm md:text-[18px] text-black max-w-2xl mx-auto leading-relaxed md:leading-[29.25px] mt-6 md:mt-8 px-4">
              {t('hero.description')}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 md:mt-16">
              <button 
              className="w-full sm:w-[189px] h-[50px] md:h-[60px] bg-primary text-white rounded-full font-medium text-sm md:text-[16px] shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  const headerHeight = 40; // 헤더 높이 /2 
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
              >
                {t('hero.viewWork')}
              </button>
              <button className="w-full sm:w-[189px] h-[50px] md:h-[60px] border-2 border-primary text-primary rounded-full font-medium text-sm md:text-[16px] hover:bg-primary/5 transition-colors">
                {t('hero.letsConnect')}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-8 pt-12">
              {socialLinks.map((link) => (
                <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label} className="text-black hover:text-primary transition-colors">
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* <div className="text-4xl md:text-6xl mb-6 md:mb-8">✨</div> */}
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
          </div>

          {/* Featured Project */}
          <div className="bg-pink-50/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center">
              {/* Project Image */}
              <div className="relative mb-6 md:mb-0">
                <div className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl">
                  <div className="w-full h-48 md:h-96 rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                    <img 
                      src="/nothing-stays-static.png" 
                      alt="Nothing Stays Static - Animation Practice Gallery" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-lg md:text-xl">
                    🚀
                  </div> */}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-xl md:text-3xl">🎨</span>
                  <h3 className="text-xl md:text-3xl font-bold text-black">
                    Nothing Stays Static
                  </h3>
                </div>

                <div className="border-2 border-primary rounded-xl md:rounded-2xl p-4 md:p-6">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    A creative portfolio website showcasing dynamic animations and interactive elements. Built with modern web technologies to demonstrate the power of motion design and user engagement.
                  </p>
                </div>

                <div className="space-y-2 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-lg md:text-2xl">🛠️</span>
                    <h4 className="text-base md:text-lg font-semibold text-black">
                      {t('projects.featured.techStack')}
                    </h4>
                  </div>
                  <div className="flex gap-2 md:gap-4 flex-wrap">
                    <span className="px-4 md:px-6 py-1.5 md:py-2 bg-primary text-white rounded-full text-base md:text-lg shadow-md">
                      React
                    </span>
                    <span className="px-4 md:px-6 py-1.5 md:py-2 bg-primary text-white rounded-full text-base md:text-lg shadow-md">
                      CSS
                    </span>
                    <span className="px-4 md:px-6 py-1.5 md:py-2 bg-primary text-white rounded-full text-base md:text-lg shadow-md">
                      Motion
                    </span>
                    <span className="px-4 md:px-6 py-1.5 md:py-2 bg-primary text-white rounded-full text-base md:text-lg shadow-md">
                      Tailwind
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a 
                    href="https://nothing-stays-static.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-primary-700 to-primary text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 text-base md:text-lg"
                  >
                    {t('projects.featured.viewLive')} <span className="text-lg md:text-xl">🌐</span>
                  </a>
                  <button
                    onClick={() => {
                      window.open('https://github.com/dev-ming/nothing-stays-static', '_blank');
                    }}
                   className="flex-1 border-2 border-primary text-primary px-4 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 text-base md:text-lg">
                    {t('projects.featured.viewCode')} <span className="text-lg md:text-xl">💻</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between items-center mt-6">
              <button className="w-12 md:w-20 h-12 md:h-20 border-2 border-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/5 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 19L8 12L15 5"
                    stroke="#BE185D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="w-12 md:w-20 h-12 md:h-20 border-2 border-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/5 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="#BE185D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA Banner */}
          {/* <div className="text-center mt-12 md:mt-16">
            <button className="hover:bg-gray-100 transition-colors inline-flex flex-wrap items-center gap-2 md:gap-4 bg-white border-2 border-black rounded-full px-6 md:px-10 py-3 md:py-4 shadow-lg text-base md:text-lg">
              <span className="text-base md:text-2xl">🎉</span>
              <span className="font-medium md:text-base text-sm">
                {t('projects.cta')}
              </span>
              <span className="text-base md:text-2xl">💬</span>
            </button>
          </div> */}
        </div>
      </section>


      {/* Footer Spacer */}
      <div className="h-20"></div>
    </div>
  );
}
