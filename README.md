# Jenna's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features a clean design with smooth animations, internationalization support, and a contact form.

## 🚀 Live Demo

[View Live Portfolio](https://jennaportfolio.netlify.app/)

## ✨ Features

- **Modern Design**: Clean, minimalist design with beautiful blur effects and animations
- **Responsive**: Fully responsive design that works on all devices
- **Internationalization**: Multi-language support (English/Korean)
- **Interactive Elements**: Smooth hover effects, loading animations, and transitions
- **Contact Form**: Functional contact form for project inquiries
- **Project Showcase**: Dynamic project gallery with detailed views
- **Social Links**: Easy access to GitHub, LinkedIn, and email

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Router 6** - Client-side routing
- **TailwindCSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations
- **React i18next** - Internationalization

### Backend & Deployment
- **Express.js** - Server framework
- **Vite** - Fast build tool and dev server
- **Netlify** - Hosting and serverless functions
- **Vitest** - Testing framework

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI component library
│   │   ├── Header.tsx     # Navigation header
│   │   └── LoadingAnimation.tsx
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Home page
│   │   ├── About.tsx      # About page
│   │   ├── Contact.tsx    # Contact page
│   │   └── ProjectDetail.tsx
│   ├── hooks/             # Custom React hooks
│   ├── i18n/              # Internationalization
│   ├── lib/               # Utility functions
│   └── main.tsx           # App entry point
├── server/                # Express backend
│   ├── routes/            # API routes
│   └── index.ts           # Server setup
├── shared/                # Shared types
└── netlify/               # Netlify functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:client # Build client only
npm run build:server # Build server only
npm start           # Start production server
npm test            # Run tests
npm run typecheck   # TypeScript validation
npm run format.fix  # Format code with Prettier
```

## 🎨 Design Features

### Color Palette
- **Primary**: Pink (#ec4899)
- **Background**: White with subtle blur effects
- **Text**: Gray scale for optimal readability
- **Accents**: Yellow highlights for emphasis

### Typography
- Clean, modern font stack
- Responsive text sizing
- Proper line heights for readability

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Loading animations
- Blur effects for depth

## 🌐 Internationalization

The portfolio supports multiple languages:

- **English** (default)
- **Korean** (한국어)

Language files are located in `client/i18n/locales/`. To add a new language:

1. Create a new JSON file in `client/i18n/locales/`
2. Add translations for all keys
3. Update the i18n configuration

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build:client`
   - Publish directory: `dist/spa`
3. **Deploy** - Netlify will automatically deploy on git push

### Other Platforms

The portfolio can be deployed to any static hosting service:

- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload `dist/spa` folder
- **Firebase Hosting**: Use Firebase CLI

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: Add any environment variables here
VITE_APP_TITLE=Jenna's Portfolio
```

### Customization

1. **Colors**: Update `tailwind.config.ts` and `client/global.css`
2. **Content**: Modify pages in `client/pages/`
3. **Styling**: Update components in `client/components/`
4. **Images**: Replace images in `public/` folder

## 📝 Content Management

### Adding Projects

1. Update the `projects` array in `client/pages/Index.tsx`
2. Add project images to `public/` folder
3. Create detailed project pages if needed

### Updating About Section

1. Edit `client/pages/About.tsx`
2. Update translation files in `client/i18n/locales/`
3. Modify social links as needed

### Contact Form

The contact form is currently set up for client-side handling. To make it functional:

1. Add a serverless function (Netlify Functions)
2. Configure email service (EmailJS, Formspree, etc.)
3. Update form submission logic

## 🧪 Testing

```bash
npm test            # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:ui     # Run tests with UI
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: ruaaa1307@gmail.com
- **GitHub**: [@dev-ming](https://github.com/dev-ming)
- **LinkedIn**: [민지 김](https://www.linkedin.com/in/%EB%AF%BC%EC%A7%80-%EA%B9%80-8b606125a/)
- **Resume**: [View Resume](https://mingee-resume.vercel.app/ko)

## 🙏 Acknowledgments

- Built with [Fusion Starter](https://github.com/your-repo/fusion-starter) template
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Styling with [TailwindCSS](https://tailwindcss.com/)

---

⭐ If you found this portfolio helpful, please give it a star!
