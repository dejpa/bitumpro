"use client";

import { usePathname } from "next/navigation";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import { useState } from "react";
import { SocialMediaIcons } from "../../components/SocialMediaIcon";

const locales = ["en", "fr"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: t("contact.address"),
      details: t("contact.addressValue"),
      color: "from-primary-500/20 to-primary-600/20",
      iconColor: "text-primary-400"
    },
    {
      icon: FaPhone,
      title: t("contact.phone"),
      details: t("contact.phoneValue"),
      color: "from-accent-500/20 to-accent-600/20",
      iconColor: "text-accent-400"
    },
    {
      icon: FaEnvelope,
      title: t("contact.email"),
      details: t("contact.emailValue"),
      color: "from-primary-500/20 to-accent-500/20",
      iconColor: "text-primary-400"
    },
    {
      icon: FaClock,
      title: t("contact.businessHours"),
      details: t("contact.hoursValue"),
      color: "from-accent-500/20 to-accent-600/20",
      iconColor: "text-accent-400"
    }
  ];

  // Social links are now handled by the SocialMediaIcons component

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/contact-cover.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl floating"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl floating [animation-delay:2s]"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary-400/30 rounded-full blur-lg floating [animation-delay:4s]"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 px-6">
          <div className="animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 gradient-text text-shadow-lg leading-tight">
              {t("contact.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("contact.heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-card p-8 hover-lift">
              <h2 className="text-3xl font-bold gradient-text mb-8">{t("contact.formTitle")}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {t("contact.fullName")} {t("contact.required")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300"
                      placeholder={t("contact.placeholders.fullName")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t("contact.emailAddress")} {t("contact.required")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300"
                      placeholder={t("contact.placeholders.email")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      {t("contact.company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300"
                      placeholder={t("contact.placeholders.company")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      {t("contact.phoneNumber")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300"
                      placeholder={t("contact.placeholders.phone")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.subject")} {t("contact.required")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300"
                  >
                    <option value="">{t("contact.selectSubject")}</option>
                    <option value="general">{t("contact.generalInquiry")}</option>
                    <option value="quote">{t("contact.requestQuote")}</option>
                    <option value="product">{t("contact.productInfo")}</option>
                    <option value="support">{t("contact.technicalSupport")}</option>
                    <option value="partnership">{t("contact.partnership")}</option>
                    <option value="other">{t("contact.other")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.message")} {t("contact.required")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50 transition-all duration-300 resize-none"
                    placeholder={t("contact.placeholders.message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-button px-8 py-4 text-lg font-semibold text-white rounded-xl hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="h-5 w-5" />
                      {t("contact.sendMessage")}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-8">{t("contact.contactInfo")}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {t("contact.contactDescription")}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const isPhone = item.title === t("contact.phone");
                  const isEmail = item.title === t("contact.email");
                  
                  return (
                    <div key={index} className="glass-card p-6 hover-lift group">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                          {isPhone ? (
                            <a 
                              href="tel:+16043383474" 
                              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover-cursor-glow leading-relaxed"
                            >
                              {item.details}
                            </a>
                          ) : isEmail ? (
                            <a 
                              href="mailto:info@company.com" 
                              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover-cursor-glow leading-relaxed"
                            >
                              {item.details}
                            </a>
                          ) : (
                            <p className="text-gray-300 leading-relaxed">{item.details}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{t("contact.followUs")}</h3>
                <SocialMediaIcons size="md" spacing="normal" className="justify-center" />
              </div>

              {/* Quick Response Promise */}
              <div className="glass-card p-6 border-l-4 border-primary-500">
                <h3 className="text-lg font-semibold text-primary-400 mb-2">{t("contact.quickResponse")}</h3>
                <p className="text-gray-300 text-sm">
                  {t("contact.quickResponseText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">{t("contact.findUs")}</h2>
            <p className="text-xl text-gray-300">{t("contact.findUsDescription")}</p>
          </div>
          
          <div className="glass-card p-8">
            <div className="bg-gray-700 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{t("contact.googleMaps")}</h3>
                <p className="text-gray-300 mb-6">
                  {t("contact.addressValue")}
                </p>
                <a
                  href="https://maps.app.goo.gl/6n8wHk49kcokbTxn7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass-button px-6 py-3 text-white rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  <FaMapMarkerAlt className="h-5 w-5" />
                  {t("contact.openGoogleMaps")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
