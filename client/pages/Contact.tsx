import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/dev-ming", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/%EB%AF%BC%EC%A7%80-%EA%B9%80-8b606125a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ruaaa1307@gmail.com", label: "Email" },
  ];

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

      <Header />

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative pt-24 md:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-4xl md:text-6xl mb-6 md:mb-8">💌</div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative">
                <h2 className="text-3xl md:text-5xl font-bold text-black">{t('contact.title')}</h2>
                <div className="relative w-auto">
                  <div className="w-full -bottom-1 h-3 md:h-4 bg-primary/20 opacity-100 absolute"></div>
                  <h2 className="text-3xl md:text-5xl font-bold text-black">
                    {t('contact.subtitle')}
                  </h2>
                </div>
              </div>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('contact.description')}{" "}
                <span className="relative whitespace-nowrap">
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-200 opacity-30"></span>
                  <span className="relative">{t('contact.highlight')}</span>
                </span>
                {" "}
                <span className="ml-2">{t('contact.description2')}</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm md:text-base">
                    {t('contact.form.name')} <span className="text-primary">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm md:text-base">
                    {t('contact.form.email')} <span className="text-primary">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-medium text-sm md:text-base">
                  {t('contact.form.projectDetails')} <span className="text-primary">{t('contact.form.required')}</span>
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.projectPlaceholder')}
                  rows={5}
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:border-primary focus:outline-none transition-colors resize-none text-sm md:text-base"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-primary-700 to-primary text-white px-6 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  {t('contact.form.sendMessage')}
                </button>
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">{t('contact.directContact')}</p>
            <div className="flex justify-center items-center gap-8">
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
