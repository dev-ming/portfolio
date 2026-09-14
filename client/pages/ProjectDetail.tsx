import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

const projects = {
  "zios": {
    title: { ko: "ZiOS", en: "ZiOS" },
    longDescription: {
      ko: "ZiOS는 화면 위에서 함께 움직이며 로컬 작업의 흐름을 알려주는 Windows 데스크톱 펫입니다. Tauri와 Rust로 투명·프레임리스·항상 위 창과 시스템 동작을 구현하고, 필요한 작업을 직접 코딩해 감시 대상으로 연결하면 React 기반 캐릭터 UI가 진행·검토·성공·오류 상태에 맞춰 반응하도록 설계했습니다. 민감한 내용 대신 필요한 상태 정보만 로컬에서 읽는 프라이버시 중심 구조를 적용했습니다.",
      en: "ZiOS is a Windows desktop pet that moves around the screen and keeps users aware of local work in progress. Tauri and Rust power its transparent, frameless, always-on-top window and native system behavior. Custom-coded local tasks can be connected as watchers, allowing the React character interface to respond to progress, review, success, and error states. Its privacy-first integration reads only the local status data it needs."
    },
    techStack: ["Tauri 2", "Rust", "React 19", "TypeScript", "Vite", "Windows API", "SQLite", "CSS Sprite Animation"],
    liveUrl: "",
    githubUrl: "https://github.com/dev-ming/zios",
    image: "/zios-hero.png",
    features: {
      ko: ["투명·프레임리스·항상 위 Windows 펫 창", "idle·달리기·작업·검토·성공·오류 캐릭터 애니메이션", "로컬 Codex 작업 상태의 읽기 전용 연동", "직접 코딩한 로컬 작업 감시기 연동", "화면 경계 안에서의 자율 이동과 위치 기억", "우클릭 메뉴와 시스템 트레이 복구", "Windows 로그인 시 자동 실행", "사용자 동의를 우선하는 로컬 설정과 권한 UX"],
      en: ["Transparent, frameless, always-on-top Windows pet", "Idle, running, working, review, success, and error animations", "Read-only integration with local Codex task status", "Integration with custom-coded local task watchers", "Autonomous roaming within screen bounds with position memory", "Context menu and system-tray recovery", "Optional launch at Windows login", "Consent-first local settings and permission UX"]
    }
  },
  "mintlab": {
    title: { ko: "Mintlab", en: "Mintlab" },
    longDescription: {
      ko: "Next.js, AI 자동화, 프론트엔드 개발 과정에서 마주친 문제와 해결 방법을 꾸준히 기록하는 개인 기술 아카이브입니다. Obsidian에서 작성한 글을 MDX로 동기화하는 발행 흐름을 구축하고, 검색과 카테고리 탐색, 다크 모드, 코드 하이라이팅과 수식 표현을 지원해 기술 문서를 편하게 읽고 관리할 수 있도록 만들었습니다.",
      en: "A personal technical archive documenting solutions and lessons from Next.js, AI automation, and frontend development. It includes an Obsidian-to-MDX publishing workflow, search and category navigation, dark mode, code highlighting, and math rendering for a comfortable reading and authoring experience."
    },
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "MDX", "next-mdx-remote", "Fuse.js", "Framer Motion", "KaTeX", "Bun", "Vercel"],
    liveUrl: "https://mintlab-nu.vercel.app/",
    githubUrl: "https://github.com/dev-ming/mintlab",
    image: "/mintlab-home.png",
    features: {
      ko: ["Obsidian 원문을 MDX 콘텐츠로 변환하는 동기화 워크플로", "AI·가이드·리뷰·개발 로그 카테고리 탐색", "Fuse.js 기반 게시글 검색", "코드 하이라이팅과 KaTeX 수식 렌더링", "라이트·다크 테마 지원", "동적 Open Graph 이미지와 사이트맵을 포함한 SEO 구성", "Vercel 기반 배포"],
      en: ["Obsidian-to-MDX content synchronization workflow", "AI, guide, review, and development-log categories", "Post search powered by Fuse.js", "Syntax highlighting and KaTeX math rendering", "Light and dark themes", "SEO with dynamic Open Graph images and a sitemap", "Deployment on Vercel"]
    }
  },
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

const projectStories = {
  zios: {
    year: "2026",
    role: { ko: "기획 · 디자인 · 풀스택 개발", en: "Product · Design · Full-stack" },
    type: { ko: "Windows 데스크톱 앱", en: "Windows Desktop App" },
    sections: [
      {
        title: { ko: "문제와 목표", en: "Problem & Goal" },
        body: {
          ko: "반복 실행되는 로컬 작업은 완료 여부를 확인하려고 계속 창을 전환해야 합니다. ZiOS는 이 상태를 화면 위의 작은 캐릭터로 전달해, 사용자가 흐름을 끊지 않고 결과를 알아차리게 하는 것을 목표로 했습니다.",
          en: "Repeated local tasks often force users to keep switching windows just to check whether work has finished. ZiOS turns that status into a small on-screen character, helping users notice results without breaking focus."
        }
      },
      {
        title: { ko: "구현 구조", en: "Implementation" },
        body: {
          ko: "Tauri와 Rust가 투명 창, 항상 위 표시, 시스템 트레이, 자동 실행, 파일 감시 같은 Windows 동작을 담당합니다. React는 설정과 말풍선, 작업 상태를 표현하고 CSS 스프라이트 애니메이션으로 캐릭터의 idle·작업·검토·성공·오류 모션을 전환합니다.",
          en: "Tauri and Rust handle Windows behavior such as the transparent always-on-top window, system tray, startup registration, and file watching. React renders settings, speech bubbles, and task state, while CSS sprite animation switches the character between idle, working, review, success, and error motions."
        }
      },
      {
        title: { ko: "기술적 결정", en: "Technical Decisions" },
        body: {
          ko: "네이티브 권한과 파일 시스템 접근은 Rust 경계 안에 두고 UI 상태와 표현은 React에 분리했습니다. Codex 연동도 대화 본문이 아닌 진행 중 작업 수만 읽도록 범위를 제한해, 로컬 도구의 편의성과 프라이버시를 함께 지키도록 설계했습니다.",
          en: "Native permissions and file-system access stay behind the Rust boundary, while presentation state remains in React. The Codex integration is deliberately limited to active-task counts rather than conversation content, balancing utility with privacy."
        }
      }
    ]
  },
  mintlab: {
    year: "2026",
    role: { ko: "기획 · 디자인 · 프론트엔드 개발", en: "Product · Design · Frontend" },
    type: { ko: "개발 지식 아카이브", en: "Developer Knowledge Archive" },
    sections: [
      {
        title: { ko: "문제와 목표", en: "Problem & Goal" },
        body: { ko: "개발 중 해결한 문제는 기록하지 않으면 다시 같은 조사 비용을 치르게 됩니다. 흩어진 Obsidian 메모를 검색하고 공유할 수 있는 공개 기술 아카이브로 전환하는 것이 목표였습니다.", en: "Solved engineering problems are easy to forget, creating the same research cost again later. The goal was to turn scattered Obsidian notes into a searchable, shareable technical archive." }
      },
      {
        title: { ko: "콘텐츠 파이프라인", en: "Content Pipeline" },
        body: { ko: "Obsidian을 원본으로 유지하고 동기화 스크립트가 폴더 구조와 메타데이터를 읽어 MDX 게시물로 변환합니다. Next.js App Router가 목록과 상세 페이지를 정적으로 구성하고, Fuse.js가 클라이언트 검색을 담당합니다.", en: "Obsidian remains the source of truth, while a sync script reads folder structure and metadata to produce MDX posts. Next.js App Router builds the archive and article pages, and Fuse.js powers client-side search." }
      },
      {
        title: { ko: "기술적 결정", en: "Technical Decisions" },
        body: { ko: "별도 CMS 대신 파일 기반 콘텐츠를 선택해 작성 흐름과 배포 구조를 단순화했습니다. next-mdx-remote, Shiki, KaTeX를 조합해 코드와 수식이 포함된 글을 지원하고, 동적 OG 이미지·사이트맵·canonical URL로 검색과 공유 품질을 보완했습니다.", en: "A file-based content model replaced the overhead of a separate CMS. next-mdx-remote, Shiki, and KaTeX support technical writing, while dynamic OG images, a sitemap, and canonical URLs improve discovery and sharing." }
      }
    ]
  },
  fanista: {
    year: "2026",
    role: { ko: "풀스택 · 프론트엔드 중심", en: "Full-stack · Frontend Focus" },
    type: { ko: "모바일 팬덤 플랫폼", en: "Mobile Fandom Platform" },
    sections: [
      { title: { ko: "제품 과제", en: "Product Challenge" }, body: { ko: "라틴아메리카 K-pop 팬이 아티스트 소식, 커뮤니티, 광고 캠페인과 청원을 여러 서비스로 나누지 않고 하나의 모바일 경험에서 사용할 수 있도록 구성했습니다.", en: "The product brings artist updates, community activity, advertising campaigns, and petitions into one mobile-first experience for K-pop fans across Latin America." } },
      { title: { ko: "프론트엔드 구조", en: "Frontend Architecture" }, body: { ko: "Next.js와 TypeScript 위에 TanStack Query로 서버 상태와 캐시 흐름을 관리하고, next-intl로 영어·스페인어·포르투갈어 운영을 분리했습니다. 사용자 웹과 관리자 도구는 Turborepo 안에서 공통 규칙과 컴포넌트를 공유합니다.", en: "Next.js and TypeScript form the application layer, TanStack Query manages server state and caching, and next-intl separates English, Spanish, and Portuguese operations. User and admin apps share conventions and components in a Turborepo." } },
      { title: { ko: "안정성과 품질", en: "Reliability & Quality" }, body: { ko: "초기 Hono API와 Prisma 모델 작업 이후 사용자·운영툴 프론트엔드에 집중했습니다. Firebase 인증 흐름과 데이터 처리를 안정화하고, Playwright·Storybook·Sentry를 통해 주요 사용자 경로, UI 상태, 운영 오류를 각각 검증하도록 구성했습니다.", en: "After early work on the Hono API and Prisma models, the focus shifted to the user and admin frontends. Firebase authentication and data flows were stabilized, with Playwright, Storybook, and Sentry covering user journeys, UI states, and production errors." } }
    ]
  },
  "blackpink-deadline-event": {
    year: "2025",
    role: { ko: "프론트엔드 개발", en: "Frontend Development" },
    type: { ko: "이벤트 프로모션 사이트", en: "Event Promotion Site" },
    sections: [
      { title: { ko: "제품 과제", en: "Product Challenge" }, body: { ko: "리마 팝업 방문자가 모바일에서 행사 일정·장소·입장 조건과 상품 정보를 빠르게 확인하고, 팬 메시지까지 남길 수 있는 스페인어 이벤트 허브가 필요했습니다.", en: "Visitors to the Lima pop-up needed a Spanish-language mobile hub for schedules, location, admission rules, merchandise, and fan messages." } },
      { title: { ko: "구현 방식", en: "Implementation" }, body: { ko: "React와 Vite로 가벼운 SPA를 구성하고 화면 크기에 따라 포스터가 바뀌는 반응형 히어로를 구현했습니다. Firebase 소셜 로그인과 게스트북 데이터를 연결하고 React Hook Form과 Zod로 입력 검증을 처리했습니다.", en: "React and Vite provide a lightweight SPA with a responsive poster hero that adapts by screen size. Firebase connects social authentication and guestbook data, while React Hook Form and Zod handle form validation." } },
      { title: { ko: "운영 고려사항", en: "Operational Decisions" }, body: { ko: "모바일 소셜 인증의 리다이렉트 흐름을 별도로 보완하고, 이벤트 팝업의 오늘 하루 보지 않기 상태를 저장했습니다. 검색 노출을 위한 SEO 이미지와 사이트맵, 약관·개인정보 페이지도 함께 구성했습니다.", en: "Mobile social-auth redirects received dedicated handling, and the event modal remembers the hide-for-today preference. SEO imagery, a sitemap, terms, and privacy pages support real-world operation." } }
    ]
  },
  "nothing-stays-static": {
    year: "2024",
    role: { ko: "크리에이티브 프론트엔드", en: "Creative Frontend" },
    type: { ko: "모션 실험 갤러리", en: "Motion Experiment Gallery" },
    sections: [
      { title: { ko: "탐구 목표", en: "Exploration Goal" }, body: { ko: "정적인 콘텐츠에 모션을 더할 때 어떤 전환과 반응이 사용 경험을 풍부하게 만드는지 작은 웹 실험을 통해 탐구했습니다.", en: "A collection of focused web experiments exploring which transitions and reactions make static content feel more expressive and alive." } },
      { title: { ko: "구현 방식", en: "Implementation" }, body: { ko: "React 컴포넌트 단위로 실험을 분리하고 CSS와 Motion을 조합해 진입, 이동, hover 반응을 구현했습니다. 각 장면은 독립적으로 조정하면서도 반응형 레이아웃 규칙은 공통으로 유지했습니다.", en: "Experiments are isolated as React components, combining CSS and Motion for entrances, movement, and hover responses. Each scene can be tuned independently while sharing responsive layout rules." } },
      { title: { ko: "배운 점", en: "What I Learned" }, body: { ko: "애니메이션의 양보다 타이밍과 위계가 중요하다는 점에 집중했습니다. 콘텐츠를 방해하는 장식은 줄이고, 사용자의 행동에 반응하거나 화면의 관계를 설명하는 모션을 우선했습니다.", en: "The work reinforced that timing and hierarchy matter more than the amount of animation. Decorative motion was reduced in favor of movement that responds to users or explains spatial relationships." } }
    ]
  },
  "kingdom-story-reboot": {
    year: "2023",
    role: { ko: "프론트엔드 개발", en: "Frontend Development" },
    type: { ko: "게임 사전예약 캠페인", en: "Game Pre-registration Campaign" },
    sections: [
      { title: { ko: "목표", en: "Goal" }, body: { ko: "게임의 세계관을 전달하면서도 다양한 기기에서 사전예약 행동까지 자연스럽게 이어지는 프로모션 페이지를 구현했습니다.", en: "The campaign page needed to communicate the game's world while guiding users naturally toward pre-registration across devices." } },
      { title: { ko: "구현 방식", en: "Implementation" }, body: { ko: "React와 TypeScript로 화면을 구성하고 Tailwind CSS로 반응형 레이아웃을 관리했습니다. Vite 기반의 가벼운 빌드 환경에서 섹션 전환과 프로모션 애니메이션을 구현했습니다.", en: "React and TypeScript structure the interface, Tailwind CSS manages responsive layouts, and Vite provides a lightweight build environment for section transitions and campaign animation." } },
      { title: { ko: "디자인 판단", en: "Design Decisions" }, body: { ko: "게임 비주얼이 중심이 되도록 인터페이스 장식을 절제하고, 모바일에서도 핵심 정보와 행동 버튼이 먼저 보이도록 콘텐츠 위계를 조정했습니다.", en: "Interface decoration stays restrained so the game artwork remains central, with content hierarchy adjusted to keep essential information and calls to action visible on mobile." } }
    ]
  },
  "kingdom-heroes-war-marketplace": {
    year: "2024",
    role: { ko: "프론트엔드 개발", en: "Frontend Development" },
    type: { ko: "Web3 게임 마켓플레이스", en: "Web3 Game Marketplace" },
    sections: [
      { title: { ko: "제품 과제", en: "Product Challenge" }, body: { ko: "지갑과 NFT 거래에 익숙하지 않은 사용자도 자산 상태와 거래 과정을 이해할 수 있는 게임 마켓플레이스 인터페이스가 필요했습니다.", en: "The marketplace needed to make wallet connection, asset state, and NFT transactions understandable even to users unfamiliar with Web3." } },
      { title: { ko: "프론트엔드 구조", en: "Frontend Architecture" }, body: { ko: "Next.js와 TypeScript를 기반으로 recoil이 클라이언트 상태를, SWR이 서버 데이터 갱신을 담당하도록 역할을 나눴습니다. wagmi를 통해 지갑 연결과 체인 상태를 UI 흐름에 통합했습니다.", en: "Next.js and TypeScript form the base, with recoil handling client state and SWR handling remote-data refresh. wagmi integrates wallet connection and chain state into the interface flow." } },
      { title: { ko: "거래 경험", en: "Transaction Experience" }, body: { ko: "거래 단계별 상태와 결과를 화면에 명확히 표시하고, 자산 목록과 상세 정보를 반응형으로 구성했습니다. 블록체인 처리 시간을 고려해 사용자가 현재 진행 상황을 놓치지 않도록 피드백을 제공했습니다.", en: "Transaction stages and outcomes are surfaced clearly, with responsive asset lists and details. Feedback accounts for blockchain processing time so users always understand what is happening." } }
    ]
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "ko";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [projectId]);
  
  const project = projects[projectId as keyof typeof projects];
  const story = projectStories[projectId as keyof typeof projectStories];
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
  const mintlabGallery = [
    {
      image: "/mintlab-terminal.png",
      title: { ko: "인터랙티브 터미널", en: "Interactive Terminal" },
      description: {
        ko: "실제 명령어를 입력하듯 아카이브를 탐색할 수 있는 터미널 인터페이스입니다. help, ls, cd 같은 익숙한 명령 체계를 활용해 카테고리와 게시글을 발견하고, 기록 수와 최근 동기화 상태도 한눈에 확인할 수 있도록 구성했습니다.",
        en: "A terminal interface for exploring the archive as if entering real commands. Familiar commands such as help, ls, and cd guide visitors through categories and posts while showing record counts and the latest sync status at a glance."
      }
    },
    {
      image: "/mintlab-posts.png",
      title: { ko: "개발 기록 아카이브", en: "Developer Knowledge Archive" },
      description: {
        ko: "Next.js와 AI 자동화, 프론트엔드 문제 해결 경험을 검색 가능한 기술 문서로 축적합니다. 전체 글 화면에서는 연도별 기록을 한눈에 살펴보고 가이드·AI·리뷰·로그 카테고리와 태그로 원하는 글을 빠르게 좁혀볼 수 있습니다.",
        en: "Mintlab turns lessons from Next.js, AI automation, and frontend problem-solving into a searchable technical archive. The complete archive organizes entries by year and lets readers quickly narrow them by guides, AI, reviews, logs, and tags."
      }
    },
    {
      image: "/mintlab-post-detail.png",
      title: { ko: "기술 문서 상세", en: "Technical Article Detail" },
      description: {
        ko: "글 상세 화면은 카테고리·작성일·읽기 시간·태그를 명확하게 제공하고, 긴 기술 문서도 편하게 따라갈 수 있도록 우측 목차를 배치했습니다. MDX 기반 본문에서 코드 블록과 수식, 링크 같은 기술 콘텐츠를 일관된 읽기 경험으로 제공합니다.",
        en: "Article pages clearly present the category, publication date, reading time, and tags, with a table of contents that makes long technical guides easy to navigate. MDX provides a consistent reading experience for code blocks, equations, links, and other technical content."
      }
    }
  ];
  const ziosGallery = [
    {
      image: "/zios-hero.png",
      title: { ko: "화면 위의 개발 동반자", en: "A Companion on Your Desktop" },
      description: {
        ko: "투명하고 프레임이 없는 작은 창이 다른 앱 위에 머물며, 지아와 검은 고양이 Noise가 현재 작업 상태를 자연스러운 모션과 말풍선으로 전달합니다. 쉬는 동안에는 현재 모니터의 경계 안에서 스스로 걷고, 사용자가 잡아 이동한 위치도 기억합니다.",
        en: "A small transparent, frameless window stays above other apps while Zia and the black cat Noise communicate the current work state through subtle motion and speech bubbles. When idle, the companion roams within the current monitor and remembers where the user leaves it."
      }
    },
    {
      image: "/zios-settings.png",
      title: { ko: "동의 기반 로컬 연동", en: "Consent-First Local Integration" },
      description: {
        ko: "Codex 연동, 자율 이동, 자동 실행, 작업 이벤트 파일 경로를 한곳에서 제어합니다. Codex 연동은 대화·프롬프트·응답을 읽지 않고 로컬 SQLite에서 진행 중인 작업 수만 읽는다는 범위를 설정 화면에서 명확하게 안내합니다.",
        en: "A single settings surface controls Codex integration, autonomous roaming, startup behavior, and the task-event file path. The interface clearly explains that the Codex integration reads only active-task counts from local SQLite—not conversations, prompts, or responses."
      }
    },
    {
      image: "/zios-event.png",
      title: { ko: "코딩한 작업을 지켜보는 캐릭터", en: "A Character That Watches Your Tasks" },
      description: {
        ko: "반복 확인이 필요한 작업을 감시하는 코드를 작성해 ZiOS에 연결할 수 있습니다. 작업이 완료되면 축하 애니메이션과 알림으로 결과를 알려주고, 오류가 발생하면 경고 모션과 상세 정보 UI를 제공해 사용자가 다음 행동을 빠르게 판단할 수 있게 합니다.",
        en: "Tasks that would otherwise require repeated checking can be monitored by custom code and connected to ZiOS. Completion triggers a celebration and notification, while errors surface a warning animation and detailed information so the user can quickly decide what to do next."
      }
    }
  ];
  const projectGallery = isBlackpinkProject
    ? blackpinkGallery
    : projectId === "fanista"
      ? fanistaGallery
      : projectId === "mintlab"
        ? mintlabGallery
        : projectId === "zios"
          ? ziosGallery
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
            {story && (
              <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400">
                <span className="text-primary">{story.year}</span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span>{story.type[language]}</span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span>{story.role[language]}</span>
              </div>
            )}
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

          {story && (
            <section className="mt-20 border-y border-gray-200">
              {story.sections.map((section, index) => (
                <div
                  key={section.title.en}
                  className="grid gap-4 border-b border-gray-200 py-9 last:border-b-0 md:grid-cols-[150px_1fr] md:gap-10 md:py-12"
                >
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-sm font-semibold text-gray-900">
                      {section.title[language]}
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                    {section.body[language]}
                  </p>
                </div>
              ))}
            </section>
          )}

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
