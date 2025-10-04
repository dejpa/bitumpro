"use client";

import { usePathname } from "next/navigation";
import { FaUser, FaGraduationCap, FaGlobe, FaTrophy, FaBuilding, FaArrowRight, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function ExecutiveTeam() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const leadershipTeam = [
    {
      name: "Vahid Sheikhi",
      position: "Chief Executive Officer",
      positionFr: "Directeur Général",
      image: "/vahid-sheikhi.jpeg",
      bio: "With over 25 years of experience in team leadership and petroleum products value creation, Vahid Sheikhi leads Bitumpro with a vision of sustainable infrastructure development. He specializes in producing high-value petroleum products and environmentally friendly petroleum derivatives through team building for innovation in valuable petroleum product development.",
      bioFr: "Avec plus de 25 ans d'expérience en leadership d'équipe et création de valeur des produits pétroliers, Vahid Sheikhi dirige Bitumpro avec une vision de développement d'infrastructure durable. Il se spécialise dans la production de produits pétroliers à haute valeur et de dérivés pétroliers respectueux de l'environnement grâce à la construction d'équipe pour l'innovation dans le développement de produits pétroliers précieux.",
      achievements: [
        "25 years of team leadership in petroleum products value creation",
        "Expertise in producing high-value petroleum products and environmentally friendly petroleum derivatives",
        "Team building for innovation in valuable petroleum product development",
        "Creating wealth in the oil chain through knowledge, experience, and collective creativity"
      ],
      achievementsFr: [
        "25 ans de leadership d'équipe dans la création de valeur des produits pétroliers",
        "Expertise dans la production de produits pétroliers à haute valeur et de dérivés pétroliers respectueux de l'environnement",
        "Construction d'équipe pour l'innovation dans le développement de produits pétroliers précieux",
        "Création de richesse dans la chaîne pétrolière grâce à la connaissance, l'expérience et la créativité collective"
      ],
      education: "Advanced Business Management and Leadership",
      educationFr: "Gestion d'Entreprise Avancée et Leadership",
      experience: "25+ years in petroleum products value creation",
      experienceFr: "25+ ans dans la création de valeur des produits pétroliers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/leadership-cover.webp')" }}
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
              {t("leadership.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("leadership.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("leadership.meetOurTeam")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("leadership.executiveTeam")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("leadership.executiveTeamDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="glass-card p-8 hover-lift group animate-slide-up">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-2 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to icon if image fails to load
                            e.currentTarget.style.display = 'none';
                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center" style={{display: 'none'}}>
                          <FaUser className="w-24 h-24 text-primary-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Profile Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold gradient-text mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-xl text-accent-400 mb-6">
                      {currentLocale === 'fr' ? leader.positionFr : leader.position}
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {currentLocale === 'fr' ? leader.bioFr : leader.bio}
                    </p>
                    
                    {/* Education & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <FaGraduationCap className="text-primary-400 w-5 h-5" />
                        <span className="text-gray-300">
                          {currentLocale === 'fr' ? leader.educationFr : leader.education}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaBuilding className="text-accent-400 w-5 h-5" />
                        <span className="text-gray-300">
                          {currentLocale === 'fr' ? leader.experienceFr : leader.experience}
                        </span>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-primary-400 mb-3 flex items-center gap-2">
                        <FaTrophy className="w-5 h-5" />
                        {t("leadership.keyAchievements")}
                      </h4>
                      <ul className="space-y-2">
                        {(currentLocale === 'fr' ? leader.achievementsFr : leader.achievements).map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Contact Links */}
                    <div className="flex gap-4 justify-center lg:justify-start">
                      <button className="glass-button px-4 py-2 text-sm rounded-lg hover:shadow-glow transition-all duration-300 hover-cursor-expand">
                        <FaEnvelope className="w-4 h-4" />
                      </button>
                      <button className="glass-button px-4 py-2 text-sm rounded-lg hover:shadow-glow transition-all duration-300 hover-cursor-expand">
                        <FaLinkedin className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("leadership.leadershipValues")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("leadership.leadershipValuesDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 hover-lift group animate-scale-in text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaGlobe className="text-primary-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-3">
                {t("leadership.globalVision")}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("leadership.globalVisionDescription")}
              </p>
            </div>

            <div className="glass-card p-6 hover-lift group animate-scale-in [animation-delay:0.2s] text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaBuilding className="text-accent-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-3">
                {t("leadership.industryExpertise")}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("leadership.industryExpertiseDescription")}
              </p>
            </div>

            <div className="glass-card p-6 hover-lift group animate-scale-in [animation-delay:0.4s] text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaUser className="text-primary-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-3">
                {t("leadership.ethicalLeadership")}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("leadership.ethicalLeadershipDescription")}
              </p>
            </div>

            <div className="glass-card p-6 hover-lift group animate-scale-in [animation-delay:0.6s] text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaTrophy className="text-accent-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-3">
                {t("leadership.innovation")}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("leadership.innovationDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-lg">
              {t("leadership.joinOurVision")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("leadership.joinOurVisionDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("leadership.contactLeadership")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href={`/${currentLocale}/about-us`}
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                {t("leadership.learnMoreAboutUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
