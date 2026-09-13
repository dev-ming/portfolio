import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

const projects = {
  "fanista": {
    title: { ko: "Fanista", en: "Fanista" },
    longDescription: {
      ko: "라틴아메리카 K-pop 팬들이 아티스트를 팔로우하고 소식을 나누며, 광고 캠페인과 청원에 함께 참여할 수 있는 모바일 중심 팬덤 플랫폼입니다. 초기에는 Hono API와 Prisma 데이터 모델을 포함한 풀스택 개발을 담당했고, 이후 사용자 웹과 운영툴 프론트엔드를 중심으로 디자인 시스템, 다국어 운영, 인증 안정화와 데이터 흐름을 개선했습니다.",
      en: "A mobile-first fandom platform where K-pop fans across Latin America can follow artists, share updates, and participate in advertising campaigns and petitions. I initially worked across the Hono API and Prisma data layer, then focused on the user and admin frontends, improving the design system, localization workflow, authentication reliability, and data handling."
    },
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "TanStack Query", "next-intl", "Hono", "Prisma", "PostgreSQL", "Firebase Auth", "Bun", "Turborepo", "Playwright", "Storybook", "Sentry"],
    liveUrl: "https://fanista.app/",
    githubUrl: "",
    image: "/fanista-login.jpg",
    features: {
      ko: ["아티스트 팔로우와 개인화 홈 피드", "팬 메모·댓글·좋아요 기반 커뮤니티", "포인트 및 좋아요로 참여하는 광고 캠페인", "시즌과 국가 경쟁 구조를 갖춘 팬 청원", "뉴스·미디어·알림·포인트·마이페이지", "영어·스페인어·포르투갈어 다국어 지원", "사용자 웹과 관리자 운영툴을 포함한 모노레포", "Playwright·Sentry·Storybook 기반 품질 관리"],
      en: ["Artist follows and a personalized home feed", "Fan Memos, comments, and likes", "Advertising campaigns funded with points and likes", "Seasonal fan petitions with country races", "News, media, notifications, points, and profile tools", "English, Spanish, and Portuguese localization", "Monorepo containing the user app and admin tools", "Quality workflows with Playwright, Sentry, and Storybook"]
    }
  },
  "blackpink-deadline-event": {
    title: { ko: "K-pop 팝업 이벤트 사이트 - BLACKPINK", en: "K-pop Pop-up Event Site - BLACKPINK" },
    longDescription: {
      ko: "BLACKPINK DEADLINE 리마 팝업 이벤트를 소개하는 스페인어 웹사이트입니다. React와 Vite를 기반으로 화면 크기에 맞춘 포스터 히어로, 행사 정보, MD 상품 안내, 팬 게스트북을 구현했습니다. Firebase 소셜 로그인과 모바일 인증 리다이렉트 이슈에 대응하고, SEO 이미지와 사이트맵을 적용했습니다.",
      en: "A Spanish-language website for the BLACKPINK DEADLINE pop-up event in Lima. Built with React and Vite, it features a responsive poster hero, event details, merchandise, and a fan guestbook. It also includes Firebase social authentication, mobile redirect handling, SEO images, and a sitemap."
    },
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "shadcn/ui", "Firebase", "React Hook Form", "Zod", "Framer Motion"],
    liveUrl: "",
    githubUrl: "",
    image: "/blackpink-deadline-event.png",
    features: {
      ko: ["화면 크기에 따라 전환되는 반응형 포스터 히어로", "팝업 이벤트 일정·장소 및 MD 상품·가격 안내", "팬 메시지를 남길 수 있는 게스트북", "Firebase Google·Facebook 소셜 로그인 및 모바일 인증 대응", "이벤트 팝업과 오늘 하루 보지 않기", "Framer Motion 기반 애니메이션", "SEO 이미지·사이트맵 및 약관·개인정보 페이지"],
      en: ["Responsive poster hero for each screen size", "Event schedule, location, merchandise, and pricing", "Guestbook for fan messages", "Firebase Google and Facebook authentication with mobile redirect handling", "Event pop-up with a hide-for-today option", "Animations powered by Framer Motion", "SEO images, sitemap, terms, and privacy pages"]
    }
  },
  "nothing-stays-static": {
    title: { ko: "Nothing Stays Static", en: "Nothing Stays Static" },
    longDescription: {
      ko: "다양한 애니메이션 라이브러리와 기법을 탐구하는 애니메이션 연습 갤러리입니다. 부드러운 전환과 창의적인 레이아웃, 여러 모션 표현을 통해 정적인 콘텐츠에 생동감을 더하는 방법을 실험했습니다.",
      en: "Nothing Stays Static is an animation practice gallery that explores various animation libraries and techniques. It features smooth transitions, creative layouts, and different approaches that bring static content to life."
    },
    techStack: ["React", "CSS", "Motion", "Tailwind"],
    liveUrl: "https://nothing-stays-static.netlify.app/",
    githubUrl: "https://github.com/dev-ming/nothing-stays-static",
    image: "/nothing-stays-static.png",
    features: {
      ko: ["역동적인 애니메이션과 화면 전환", "인터랙티브 사용자 인터페이스", "반응형 디자인", "현대적인 웹 기술 활용", "창의적인 모션 디자인"],
      en: ["Dynamic animations and transitions", "Interactive user interface", "Responsive design", "Modern web technologies", "Creative motion design"]
    }
  },
  "kingdom-story-reboot": {
    title: { ko: "Kingdom Story Reboot", en: "Kingdom Story Reboot" },
    longDescription: {
      ko: "킹덤스토리 창천의 사전예약 페이지입니다. 반응형 디자인과 애니메이션을 적용해 다양한 기기에서 자연스러운 프로모션 경험을 제공했습니다.",
      en: "A pre-registration campaign page for Kingdom Story Reboot, designed with responsive layouts and animations for a smooth experience across devices."
    },
    techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    liveUrl: "https://reboot.kingdom-story.com/",
    githubUrl: "",
    image: "/kingdomstory-reboot.png",
    features: {
      ko: ["몰입감 있는 프로모션 경험", "게임 콘셉트에 맞춘 인터페이스", "모바일 친화적인 반응형 디자인", "React와 TypeScript 기반 구현", "부드러운 애니메이션과 화면 전환"],
      en: ["Interactive storytelling experience", "Immersive user interface design", "Responsive and mobile-friendly", "Modern React with TypeScript", "Smooth animations and transitions"]
    }
  },
  "kingdom-heroes-war-marketplace": {
    title: { ko: "Kingdom Heroes War Marketplace", en: "Kingdom Heroes War Marketplace" },
    longDescription: {
      ko: "사용자가 NFT를 거래하고 게임 자산을 관리할 수 있는 Kingdom Heroes War 마켓플레이스입니다. Web3 지갑과 사용자 인증, 실시간 거래 상태를 연동하고 처음 이용하는 사용자도 쉽게 이해할 수 있는 거래 인터페이스를 구현했습니다.",
      en: "A marketplace where users can trade NFTs and manage assets in the Kingdom Heroes War ecosystem. It combines Web3 wallet integration, authentication, real-time transaction states, and an intuitive trading interface."
    },
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "recoil", "SWR", "wagmi", "Web3", "NFT"],
    liveUrl: "https://marketplace.kingdomheroeswar.io/",
    githubUrl: "",
    image: "/marketplace.png",
    features: {
      ko: ["NFT 거래 마켓플레이스", "Web3 지갑 연동", "사용자 인증 시스템", "게임 자산 관리 인터페이스", "반응형 디자인", "실시간 거래 상태 업데이트"],
      en: ["NFT trading marketplace", "Web3 wallet integration", "User authentication system", "Asset management interface", "Responsive design", "Real-time transaction updates"]
    }
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "ko";
  
  const project = projects[projectId as keyof typeof projects];
  const isBlackpinkProject = projectId === "blackpink-deadline-event";
  const blackpinkGallery = [
    {
      image: "/blackpink-popup.png",
      title: { ko: "이벤트 팝업", en: "Event Pop-up" },
      description: {
        ko: "방문 직후 진행 중인 구매 혜택을 안내하고, 오늘 하루 보지 않기 상태를 저장합니다.",
        en: "Highlights the current purchase benefit on entry and remembers the hide-for-today preference."
      }
    },
    {
      image: "/blackpink-event-info.png",
      title: { ko: "행사 정보", en: "Event Information" },
      description: {
        ko: "주소, 운영 시간, 입장 조건을 모바일에서도 빠르게 확인할 수 있도록 카드로 정리했습니다.",
        en: "Presents the address, opening hours, and admission details in mobile-friendly cards."
      }
    },
    {
      image: "/blackpink-md.png",
      title: { ko: "공식 MD 목록", en: "Official Merchandise" },
      description: {
        ko: "컬렉션별 필터와 상품 이미지, 옵션, 현지 가격을 한 화면에서 탐색할 수 있습니다.",
        en: "Lets visitors browse product images, options, and local prices with collection filters."
      }
    },
    {
      image: "/blackpink-guestbook.png",
      title: { ko: "팬 게스트북", en: "Fan Guestbook" },
      description: {
        ko: "픽셀 아트 휴대폰 UI 안에서 팬 메시지를 읽고 남길 수 있도록 구현했습니다.",
        en: "A pixel-art phone interface where fans can read and leave messages."
      }
    }
  ];
  const fanistaGallery = [
    {
      image: "/fanista-home.jpg",
      title: { ko: "개인화 홈", en: "Personalized Home" },
      description: {
        ko: "팔로우한 아티스트, Spotlight, 최신 미디어와 Fan Memo를 한 피드에서 탐색할 수 있습니다.",
        en: "Brings followed artists, Spotlight, the latest media, and Fan Memos into one feed."
      }
    },
    {
      image: "/fanista-artists.jpg",
      title: { ko: "아티스트 탐색과 팔로우", en: "Artist Discovery & Follows" },
      description: {
        ko: "인기 아티스트를 탐색하고 최대 5팀을 팔로우해 홈과 콘텐츠를 개인화할 수 있습니다.",
        en: "Fans can discover trending artists and follow up to five groups to personalize their home and content."
      }
    },
    {
      image: "/fanista-spotlight.jpg",
      title: { ko: "Spotlight 캠페인", en: "Spotlight Campaigns" },
      description: {
        ko: "팬들이 포인트와 좋아요를 모아 아티스트 광고 프로젝트를 완성하는 캠페인 기능입니다.",
        en: "Lets fans pool points and likes to complete advertising projects for their artists."
      }
    },
    {
      image: "/fanista-campaign-detail.jpg",
      title: { ko: "캠페인 상세와 후원", en: "Campaign Detail & Support" },
      description: {
        ko: "목표와 달성률, 남은 기간, 캠페인 취지와 광고 게재 위치를 확인하고 바로 후원할 수 있습니다.",
        en: "Shows the goal, progress, deadline, campaign story, and display location with a direct support action."
      }
    },
    {
      image: "/fanista-petition.jpg",
      title: { ko: "팬 청원", en: "Fan Petitions" },
      description: {
        ko: "팬이 직접 청원을 만들고 지지를 모으며, 시즌별 국가 경쟁과 결과를 확인할 수 있습니다.",
        en: "Allows fans to create petitions, gather support, and follow seasonal country races and results."
      }
    },
    {
      image: "/fanista-petition-detail.jpg",
      title: { ko: "청원 상세와 투표", en: "Petition Detail & Voting" },
      description: {
        ko: "청원의 배경과 작성자, 기간, 목표 달성률을 한 화면에 정리하고 팬 투표와 공유를 연결했습니다.",
        en: "Combines the petition story, author, schedule, and progress with voting and sharing actions."
      }
    },
    {
      image: "/fanista-media.jpg",
      title: { ko: "K-pop 미디어", en: "K-pop Media" },
      description: {
        ko: "카테고리와 정렬, 검색을 지원하는 뉴스·미디어 피드로 팬덤 소식을 전달합니다.",
        en: "A searchable and sortable news feed that organizes K-pop updates by category."
      }
    },
    {
      image: "/fanista-media-detail.jpg",
      title: { ko: "미디어 상세", en: "Media Detail" },
      description: {
        ko: "팬덤 캠페인의 실제 결과를 이미지와 본문으로 전달하고 좋아요·댓글·공유 기능을 제공합니다.",
        en: "Tells the story behind a completed fandom campaign with rich media, likes, comments, and sharing."
      }
    },
    {
      image: "/fanista-community.jpg",
      title: { ko: "커뮤니티 피드", en: "Community Feed" },
      description: {
        ko: "캠페인과 미디어, 팬 게시글이 자연스럽게 이어지는 모바일 중심 커뮤니티 경험을 설계했습니다.",
        en: "A mobile-first community experience connecting campaigns, media, and fan posts in one continuous flow."
      }
    }
  ];
  const projectGallery = isBlackpinkProject
    ? blackpinkGallery
    : projectId === "fanista"
      ? fanistaGallery
      : [];

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{t("projectDetail.notFound")}</h1>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            {t("projectDetail.backHome")}
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
            {t("projectDetail.back")}
          </button>

          {/* Project Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-black mb-6 leading-tight">
              {project.title[language]}
            </h1>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {project.longDescription[language]}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <img 
              src={project.image} 
              alt={project.title[language]}
              className={`w-full h-auto shadow-sm ${isBlackpinkProject ? "rounded-none md:rounded-2xl" : "rounded-lg"}`}
            />
            
            {/* Action Links */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-800 hover:text-primary transition-colors text-sm"
                >
                  <span>{t("projectDetail.viewLive")}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-800 hover:text-primary transition-colors text-sm"
                >
                  <span>{t("projectDetail.viewCode")}</span>
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
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">{t("projectDetail.techStack")}</h3>
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
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">{t("projectDetail.keyFeatures")}</h3>
              <div className="space-y-2">
                {project.features[language].map((feature, index) => (
                  <div key={index} className="text-gray-800">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {projectGallery.length > 0 && (
            <div className="mt-24 space-y-24 md:space-y-32">
              {projectGallery.map((item) => (
                <section key={item.image} className="space-y-5">
                  <div className="max-w-3xl">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                      Case Study
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl">
                      {item.title[language]}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                      {item.description[language]}
                    </p>
                  </div>
                  <div className="overflow-hidden bg-black shadow-xl md:rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title[language]}
                      className="block h-auto w-full"
                      loading="lazy"
                    />
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
