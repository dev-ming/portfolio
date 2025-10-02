import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

const projects = {
  "nothing-stays-static": {
    title: "Nothing Stays Static",
    description: "A creative portfolio website showcasing dynamic animations and interactive elements. Built with modern web technologies to demonstrate the power of motion design and user engagement.",
    longDescription: "Nothing Stays Static is an animation practice gallery that explores various animation libraries and techniques. This project demonstrates my passion for creating engaging user experiences through motion design and interactive elements. The website features smooth transitions, creative layouts, and showcases different animation approaches that bring static content to life.",
    techStack: ["React", "CSS", "Motion", "Tailwind"],
    liveUrl: "https://nothing-stays-static.netlify.app/",
    githubUrl: "https://github.com/dev-ming/nothing-stays-static",
    image: "/nothing-stays-static.png",
    features: [
      "Dynamic animations and transitions",
      "Interactive user interface",
      "Responsive design",
      "Modern web technologies",
      "Creative motion design"
    ]
  },
  "kingdom-story-reboot": {
    title: "Kingdom Story Reboot",
    description: "킹덤스토리 창천 사전예약 페이지",
    longDescription: "킹덤스토리 창천의 사전예약 페이지입니다. 반응형 디자인과 애니메이션을 사용하여 사용자 경험을 개선하였습니다.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    liveUrl: "https://reboot.kingdom-story.com/",
    githubUrl: "",
    image: "/kingdomstory-reboot.png",
    features: [
      "Interactive storytelling experience",
      "Immersive user interface design",
      "Responsive and mobile-friendly",
      "Modern React with TypeScript",
      "Smooth animations and transitions",
    ]
  },
  "kingdom-heroes-war-marketplace": {
    title: "Kingdom Heroes War Marketplace",
    description: "A marketplace platform for Kingdom Heroes War game featuring NFT trading and user management. Built with modern web technologies and Web3 integration.",
    longDescription: "Kingdom Heroes War Marketplace is a comprehensive platform that enables users to trade NFTs, manage their game assets, and interact with the Kingdom Heroes War ecosystem. This project demonstrates advanced Web3 integration, user authentication, and marketplace functionality. The platform features a clean, intuitive interface that makes NFT trading accessible to both beginners and experienced users.",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "recoil", "SWR", "wagmi", "Web3", "NFT"],
    liveUrl: "https://marketplace.kingdomheroeswar.io/",
    githubUrl: "",
    image: "/marketplace.png",
    features: [
      "NFT trading marketplace",
      "Web3 wallet integration",
      "User authentication system",
      "Asset management interface",
      "Responsive design",
      "Real-time transaction updates"
    ]
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Project not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="mb-12 flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            back
          </button>

          {/* Project Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-black mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              {project.longDescription}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-sm"
            />
            
            {/* Action Links */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-primary transition-colors text-sm"
              >
                <span>View Live Site</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-800 hover:text-primary transition-colors text-sm"
                >
                  <span>View Code</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center px-3 py-1 bg-primary text-white  text-sm font-medium"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Key Features</h3>
              <div className="space-y-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="text-gray-800">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
