import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 h-20">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="text-2xl font-bold text-transparent">Jenna</div>
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h1 className="text-[60px] font-bold text-black leading-[75px]">
              Hi, I'm
            </h1>
            <h2 className="text-[60px] font-bold text-primary leading-[75px]">
              Mingee Kim
            </h2>
            <div className="text-[20px] text-black max-w-2xl mx-auto relative leading-[28px] mt-8">
              but you can call me{" "}
              <span className="relative">
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary/30 rounded-full"></span>
                <span className="relative font-medium">Jenna</span>
              </span>
            </div>
            <div className="text-[30px] text-black max-w-lg mx-auto leading-[36px] mt-8">
              I craft{" "}
              <span className="relative font-semibold">
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-gray-100 rounded-full opacity-40"></span>
                <span className="relative">beautiful digital experiences</span>
              </span>
            </div>
            <div className="text-[18px] text-black max-w-2xl mx-auto leading-[29.25px] mt-8">
              Specializing in front-end development with a passion for{" "}
              <span className="font-bold relative">
                clean code
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-primary/25 rounded-full"></span>
              </span>
              , intuitive design, and seamless user interactions that bring
              ideas to life.
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
              <button className="w-[189px] h-[60px] bg-primary text-white rounded-full font-medium text-[16px] shadow-lg hover:shadow-xl transition-shadow">
                View My Work
              </button>
              <button className="w-[189px] h-[60px] border-2 border-primary text-primary rounded-full font-medium text-[16px] hover:bg-primary/5 transition-colors">
                Let's Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-8 mt-16">
              <a
                href="#"
                className="text-black hover:text-primary transition-colors"
              >
                <svg width="28" height="28" viewBox="0 0 28 29" fill="none">
                  <g clipPath="url(#clip0_linkedin)">
                    <path
                      d="M23.8548 24.6617H19.7085V18.1645C19.7085 16.6152 19.677 14.6214 17.5478 14.6214C15.386 14.6214 15.0558 16.3072 15.0558 18.0502V24.6617H10.9095V11.301H14.8925V13.1222H14.9462C15.5027 12.0722 16.856 10.9639 18.8778 10.9639C23.079 10.9639 23.856 13.7289 23.856 17.328L23.8548 24.6617ZM6.2265 9.47286C4.89183 9.47286 3.81967 8.39253 3.81967 7.06369C3.81967 5.73603 4.893 4.65686 6.2265 4.65686C7.5565 4.65686 8.6345 5.73603 8.6345 7.06369C8.6345 8.39253 7.55533 9.47286 6.2265 9.47286ZM8.3055 24.6617H4.1475V11.301H8.3055V24.6617ZM25.9292 0.801025H2.06617C0.924 0.801025 0 1.70403 0 2.81819V26.7839C0 27.8992 0.924 28.801 2.06617 28.801H25.9257C27.0667 28.801 28 27.8992 28 26.7839V2.81819C28 1.70403 27.0667 0.801025 25.9257 0.801025H25.9292Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_linkedin">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(0 0.801025)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="#"
                className="text-black hover:text-primary transition-colors"
              >
                <svg width="28" height="28" viewBox="0 0 28 29" fill="none">
                  <g clipPath="url(#clip0_github)">
                    <path
                      d="M14 0.801025C6.26967 0.801025 0 7.06953 0 14.801C0 20.9867 4.011 26.2344 9.57483 28.0859C10.2737 28.2154 10.5 27.7814 10.5 27.4127V24.8064C6.60567 25.6534 5.79483 23.1544 5.79483 23.1544C5.15783 21.5362 4.23967 21.1057 4.23967 21.1057C2.96917 20.2365 4.3365 20.2552 4.3365 20.2552C5.74233 20.3532 6.482 21.6984 6.482 21.6984C7.73033 23.838 9.75683 23.2197 10.556 22.8615C10.6808 21.9574 11.0437 21.339 11.445 20.9902C8.33583 20.6344 5.06683 19.4339 5.06683 14.0707C5.06683 12.5412 5.614 11.2929 6.50883 10.3129C6.36417 9.95936 5.88467 8.53486 6.64533 6.60753C6.64533 6.60753 7.82133 6.23186 10.4965 8.04253C11.613 7.73219 12.81 7.57703 14 7.57119C15.19 7.57703 16.3882 7.73219 17.507 8.04253C20.1798 6.23186 21.3535 6.60753 21.3535 6.60753C22.1153 8.53603 21.6358 9.96053 21.4912 10.3129C22.3895 11.2929 22.932 12.5424 22.932 14.0707C22.932 19.4479 19.6572 20.632 16.5398 20.9785C17.0415 21.4125 17.5 22.2642 17.5 23.5709V27.4127C17.5 27.7849 17.724 28.2224 18.4345 28.0847C23.9937 26.2309 28 20.9844 28 14.801C28 7.06953 21.7315 0.801025 14 0.801025Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_github">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(0 0.801025)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="#"
                className="text-black hover:text-primary transition-colors"
              >
                <svg width="28" height="28" viewBox="0 0 28 29" fill="none">
                  <path
                    d="M27.9452 6.13263C26.8969 6.59417 25.7864 6.89883 24.6493 7.0368C25.8465 6.31726 26.7428 5.18885 27.1728 3.85996C26.0633 4.50746 24.8337 4.9788 23.5247 5.2413C22.6611 4.3178 21.5167 3.70529 20.2693 3.49888C19.0218 3.29248 17.7411 3.50372 16.6261 4.09982C15.511 4.69592 14.624 5.64351 14.1027 6.79544C13.5815 7.94738 13.4551 9.2392 13.7433 10.4703C8.97167 10.2451 4.74483 7.95263 1.91333 4.48996C1.39859 5.36475 1.13011 6.36249 1.13633 7.37746C1.13633 9.37246 2.15133 11.126 3.689 12.1561C2.77767 12.1271 1.88647 11.8807 1.08967 11.4375V11.5075C1.08915 12.8333 1.54731 14.1184 2.38642 15.1448C3.22554 16.1713 4.39391 16.8759 5.69333 17.139C4.85135 17.3646 3.96948 17.3985 3.11267 17.2381C3.48148 18.3791 4.19727 19.3766 5.16018 20.0912C6.12309 20.8059 7.28508 21.2021 8.484 21.2246C6.45345 22.8182 3.94622 23.6832 1.365 23.6805C0.91 23.6805 0.456167 23.6536 0 23.6023C2.63166 25.2873 5.6916 26.1818 8.8165 26.1795C19.3783 26.1795 25.1475 17.4341 25.1475 9.86363C25.1475 9.61863 25.1475 9.37363 25.13 9.12863C26.257 8.31764 27.2291 7.31075 28 6.15596L27.9452 6.13263Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image and decorative elements */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10 rounded-3xl transform rotate-1 opacity-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-red-200 opacity-20 blur-[12px]"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-primary opacity-20 blur-[12px]"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/015358185d8f770563590403b8e82ee12511a3f8?width=1082"
                  alt="Jenna Kim"
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform rotate-1"
                />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Right: About content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-5xl font-bold text-black">About</h2>
                  <div className="flex-1 h-4 bg-primary/30 rounded-full opacity-30 mt-2"></div>
                  <h2 className="text-5xl font-bold text-black">Me</h2>
                </div>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate front-end developer who believes that{" "}
                  <span className="font-semibold">
                    great design meets functionality
                  </span>{" "}
                  in every pixel. With a keen eye for detail and a love for
                  clean, efficient code, I transform creative visions into
                  interactive digital experiences.
                </p>
                <p>
                  My journey in web development started with curiosity and has
                  evolved into a deep appreciation for{" "}
                  <span className="font-semibold">user-centered design</span>{" "}
                  and modern development practices. I specialize in React,
                  TypeScript, and creating responsive interfaces that work
                  beautifully across all devices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest
                  design trends, contributing to open-source projects, or
                  experimenting with new animation libraries to bring more{" "}
                  <span className="font-semibold">life and personality</span> to
                  the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">✨</div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-700 to-primary rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <h2 className="text-5xl font-bold text-black">My</h2>
                <div className="w-48 h-4 bg-primary/20 rounded-full opacity-20"></div>
                <h2 className="text-5xl font-bold text-black">Projects</h2>
                <div className="text-5xl font-bold text-transparent absolute">
                  Favorite
                </div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here are some projects that make my heart happy! Each one is
                crafted with{" "}
                <span className="relative">
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-200 rounded-full opacity-30"></span>
                  <span className="relative font-medium">love, creativity</span>
                </span>{" "}
                and lots of coffee ☕
              </p>
            </div>
          </div>

          {/* Featured Project */}
          <div className="bg-pink-50/50 rounded-3xl p-8 lg:p-12 shadow-2xl relative">
            {/* Decorative emojis */}
            <div className="absolute top-6 right-6 text-3xl">💖</div>
            <div className="absolute top-6 left-6 text-3xl">🌟</div>
            <div className="absolute bottom-6 right-6 text-3xl">🎨</div>
            <div className="absolute bottom-6 left-6 text-3xl">✨</div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="relative">
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee2a35dbe62aedaef43bfde930c6fe352d3eba2f?width=928"
                    alt="Interactive Dashboard"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl">
                    🚀
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-3xl font-bold text-black">
                    Interactive Dashboard
                  </h3>
                </div>

                <div className="border-2 border-primary rounded-2xl p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A modern analytics dashboard with smooth animations,
                    real-time data visualization, and responsive design. Built
                    with React and D3.js for seamless user experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🛠️</span>
                    <h4 className="text-lg font-semibold text-black">
                      Tech Stack
                    </h4>
                  </div>
                  <div className="flex gap-4">
                    <span className="px-6 py-2 bg-primary text-white rounded-full text-lg shadow-md">
                      React
                    </span>
                    <span className="px-6 py-2 bg-primary text-white rounded-full text-lg shadow-md">
                      Next.js
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-primary-700 to-primary text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2">
                    View Live Site <span className="text-xl">🌐</span>
                  </button>
                  <button className="flex-1 border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                    View Code <span className="text-xl">💻</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between items-center mt-12">
              <button className="w-15 h-15 border-2 border-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/5 transition-colors">
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
              <button className="w-15 h-15 border-2 border-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/5 transition-colors">
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
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white border-2 border-black rounded-full px-10 py-4 shadow-lg">
              <span className="text-2xl">🎉</span>
              <span className="text-lg font-medium">
                Want to see more? Let's chat!
              </span>
              <span className="text-2xl">💬</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">💌</div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 relative">
                <h2 className="text-5xl font-bold text-black">Let's Create</h2>
                <div className="w-96 h-4 bg-primary/20 rounded-full opacity-20 absolute"></div>
                <h2 className="text-5xl font-bold text-transparent">
                  Something Magical
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to bring your ideas to life? I'd love to hear about your
                project and discuss how we can create something{" "}
                <span className="relative">
                  <span className="absolute -bottom-1 left-0 w-52 h-3 bg-primary/30 rounded-full"></span>
                  <span className="relative">extraordinary together</span>
                </span>
                <span className="ml-2">✨</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">
                  Project Details <span className="text-primary">*</span>
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-700 to-primary text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  Send Message ✨
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20"></div>
    </div>
  );
}
