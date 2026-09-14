import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import LoadingAnimation from "@/components/LoadingAnimation";

interface Project {
  id: string;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
  image: string;
  techStack: string[];
  category: { ko: string; en: string };
  year: string;
}

export default function Index() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "ko";

  const projects: Project[] = [
    {
      id: "zios",
      title: { ko: "ZiOS", en: "ZiOS" },
      description: {
        ko: "Codex 작업과 로컬 자동화 상태에 반응하는 Windows 데스크톱 펫입니다.",
        en: "A Windows desktop pet that reacts to Codex work and local automation events."
      },
      image: "/zios-hero.png",
      techStack: ["Tauri", "Rust", "React", "TypeScript", "Vite", "Windows"],
      category: { ko: "데스크톱 제품", en: "Desktop Product" },
      year: "2026"
    },
    {
      id: "mintlab",
      title: { ko: "Mintlab", en: "Mintlab" },
      description: {
        ko: "AI 도구와 프론트엔드 문제 해결 과정을 정리한 개발 기록 아카이브입니다.",
        en: "A developer archive for AI tools, frontend problem-solving, and practical technical guides."
      },
      image: "/mintlab-terminal.png",
      techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "MDX", "Vercel"],
      category: { ko: "개발 아카이브", en: "Developer Archive" },
      year: "2026"
    },
    {
      id: "fanista",
      title: { ko: "Fanista", en: "Fanista" },
      description: {
        ko: "라틴아메리카 K-pop 팬을 위한 커뮤니티·캠페인·청원 플랫폼입니다.",
        en: "A community, campaign, and petition platform for K-pop fans in Latin America."
      },
      image: "/fanista-seo.png",
      techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "TanStack Query", "Hono", "Prisma"],
      category: { ko: "팬덤 플랫폼", en: "Fandom Platform" },
      year: "2026"
    },
    {
      id: "blackpink-deadline-event",
      title: { ko: "K-pop 팝업 이벤트 사이트 - BLACKPINK", en: "K-pop Pop-up Event Site - BLACKPINK" },
      description: {
        ko: "BLACKPINK DEADLINE 리마 팝업 이벤트 안내와 MD 상품, 팬 게스트북을 제공하는 웹사이트입니다.",
        en: "A website for the BLACKPINK DEADLINE pop-up in Lima, featuring event details, merchandise, and a fan guestbook."
      },
      image: "/blackpink-deadline-event.png",
      techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Framer Motion"],
      category: { ko: "이벤트 경험", en: "Event Experience" },
      year: "2025"
    },
    {
      id: "nothing-stays-static",
      title: { ko: "Nothing Stays Static", en: "Nothing Stays Static" },
      description: {
        ko: "다양한 애니메이션과 인터랙션을 실험하고 기록한 창작 웹 갤러리입니다.",
        en: "A creative portfolio website showcasing dynamic animations and interactive elements."
      },
      image: "/nothing-stays-static.png",
      techStack: ["React", "CSS", "Motion", "Tailwind"],
      category: { ko: "모션 실험", en: "Motion Experiments" },
      year: "2024"
    },
    {
      id: "kingdom-story-reboot",
      title: { ko: "Kingdom Story Reboot", en: "Kingdom Story Reboot" },
      description: {
        ko: "킹덤스토리 창천의 사전예약을 위한 반응형 프로모션 페이지입니다.",
        en: "A responsive pre-registration campaign page for Kingdom Story Reboot."
      },
      image: "/kingdomstory-reboot.png",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      category: { ko: "게임 프로모션", en: "Game Promotion" },
      year: "2023"
    },
    {
      id: "kingdom-heroes-war-marketplace",
      title: { ko: "Kingdom Heroes War Marketplace", en: "Kingdom Heroes War Marketplace" },
      description: {
        ko: "NFT 거래와 게임 자산 관리를 지원하는 Kingdom Heroes War 마켓플레이스입니다.",
        en: "A marketplace platform for Kingdom Heroes War featuring NFT trading and game asset management."
      },
      image: "/marketplace.png",
      techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "recoil", "SWR", "wagmi", "Web3", "NFT"],
      category: { ko: "Web3 마켓플레이스", en: "Web3 Marketplace" },
      year: "2024"
    }
  ];

  const mediaStyles: Record<string, string> = {
    zios: "bg-[#17151d] object-contain",
    mintlab: "bg-[#11151b] object-contain",
    fanista: "bg-[#f5f2f7] object-cover object-top",
    "blackpink-deadline-event": "bg-black object-cover",
    "nothing-stays-static": "bg-[#f5f5f5] object-cover",
    "kingdom-story-reboot": "bg-[#141414] object-cover",
    "kingdom-heroes-war-marketplace": "bg-[#0b1017] object-cover",
  };

  const projectOrder = [
    "fanista",
    "kingdom-heroes-war-marketplace",
    "blackpink-deadline-event",
    "zios",
    "mintlab",
    "nothing-stays-static",
  ];
  const visibleProjects = projectOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));

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


      <section className="relative px-4 pb-20 pt-24 md:px-6 md:pb-32 md:pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 md:gap-y-20 lg:gap-x-10">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                role="link"
                tabIndex={0}
                aria-label={`${project.title[language]} ${language === "ko" ? "프로젝트 보기" : "View project"}`}
                className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-4"
                onClick={() => navigate(`/project/${project.id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    navigate(`/project/${project.id}`);
                  }
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f5f4] shadow-[0_14px_45px_rgba(17,17,24,0.08)] transition-shadow duration-500 group-hover:shadow-[0_24px_65px_rgba(17,17,24,0.14)]">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.025] ${mediaStyles[project.id]}`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="mt-5 border-t border-black/15 pt-4 md:mt-6">
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                    <span>{String(index + 1).padStart(2, "0")} · {project.category[language]}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-medium tracking-[-0.035em] text-gray-950 transition-colors duration-300 group-hover:text-primary md:text-[1.7rem]">
                      {project.title[language]}
                    </h2>
                    <ArrowUpRight className="mt-1 shrink-0 text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" size={18} />
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-[15px]">
                    {project.description[language]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                    {project.techStack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Footer Spacer */}
      <div className="h-20"></div>
    </div>
  );
}
