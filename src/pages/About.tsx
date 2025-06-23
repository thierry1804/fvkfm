import { useTranslation } from 'react-i18next';
import { FaHeart, FaUsers, FaAward, FaLightbulb, FaThLarge, FaCross, FaPrayingHands, FaBible } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              {t('about_title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('about_intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Les principes qui guident notre foi et notre action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeart className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Amour</h3>
              <p className="text-secondary-600 leading-relaxed">
                Nous vivons l'amour de Dieu en aimant notre prochain comme nous-mêmes.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Communauté</h3>
              <p className="text-secondary-600 leading-relaxed">
                Nous formons une famille spirituelle unie dans la foi et le service.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-secondary-50 to-secondary-100 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaCross className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Foi</h3>
              <p className="text-secondary-600 leading-relaxed">
                Nous marchons par la foi, confiant en la grâce et la miséricorde de Dieu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              {t('history_title')}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Notre parcours de foi à travers les années
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-500 to-primary-500"></div>
            
            <div className="space-y-12">
              {/* History Item 1 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-accent-600 mb-2">{t('history_item_1_year')}</h3>
                    <p className="text-secondary-600 leading-relaxed">{t('history_item_1_text')}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-500 rounded-full border-4 border-white shadow-medium"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* History Item 2 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-medium"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">{t('history_item_2_year')}</h3>
                    <p className="text-secondary-600 leading-relaxed">{t('history_item_2_text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              {t('vision_mission_title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="group bg-gradient-to-br from-primary-50 to-primary-100 p-10 rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <FaLightbulb className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-800">{t('vision_title')}</h3>
              </div>
              <p className="text-lg text-secondary-600 leading-relaxed">{t('vision_text')}</p>
            </div>

            {/* Mission Card */}
            <div className="group bg-gradient-to-br from-accent-50 to-accent-100 p-10 rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <FaThLarge className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-800">{t('mission_title')}</h3>
              </div>
              <p className="text-lg text-secondary-600 leading-relaxed">{t('mission_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Verse Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('verse_title')}</h2>
            <blockquote className="text-2xl md:text-3xl italic mb-8 leading-relaxed">
              <p className="mb-6">"{t('verse_text')}"</p>
              <cite className="block text-right not-italic text-xl opacity-90">
                — {t('verse_reference')}
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 