import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaUsers, FaPrayingHands, FaChurch } from 'react-icons/fa';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-800"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">FVKFM</span>
              <span className="block text-3xl md:text-4xl font-light mt-2 opacity-90">
                {t('welcome_message')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Fiangonan'ny Vondrona Kristianin'ny Fanahy Masina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-white text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-50 transition-all duration-300 transform hover:scale-105 shadow-large"
              >
                Découvrir notre église
              </Link>
              <Link 
                to="/donations" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-accent-600 transition-all duration-300 transform hover:scale-105"
              >
                Nous soutenir
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-accent-600 mb-2">25+</div>
              <div className="text-secondary-600">Années de foi</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-secondary-600">Fidèles</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-accent-600 mb-2">1000+</div>
              <div className="text-secondary-600">Vies touchées</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-secondary-600">Ministères</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Nos Activités
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Découvrez nos cultes, études bibliques et activités communautaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChurch className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Cultes Dominical</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Rejoignez-nous chaque dimanche pour célébrer ensemble la parole de Dieu.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaPrayingHands className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Études Bibliques</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Approfondissez votre foi à travers nos études bibliques hebdomadaires.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors duration-200"
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Ministères</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Participez à nos différents ministères et groupes de soutien communautaire.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-700 transition-colors duration-200"
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Soutenez notre mission
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Votre don nous aide à continuer notre travail essentiel dans la communauté et à répandre l'amour de Dieu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/donations" 
                className="bg-white text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-50 transition-all duration-300 transform hover:scale-105 shadow-large"
              >
                <FaHandHoldingHeart className="inline mr-2" />
                Faire un don
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-accent-600 transition-all duration-300 transform hover:scale-105"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 