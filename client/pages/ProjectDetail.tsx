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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 rounded-full bg-blur-blue opacity-30 blur-[12px] left-10 top-20 mix-blend-multiply"></div>
        <div className="absolute w-72 h-72 rounded-full bg-blur-pink opacity-30 blur-[12px] right-20 top-40 mix-blend-multiply"></div>
        <div className="absolute w-72 h-72 rounded-full bg-blur-yellow opacity-30 blur-[12px] left-1/2 top-96 transform -translate-x-1/2 mix-blend-multiply"></div>
      </div>

      <Header />

      <div className="pt-24 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto rounded-xl md:rounded-2xl"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-primary-700 to-primary text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow text-center flex items-center justify-center gap-2"
                >
                  View Live Site <span className="text-lg">🌐</span>
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors text-center flex items-center justify-center gap-2"
                >
                  View Code <span className="text-lg">💻</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
