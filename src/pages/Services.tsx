import { useTranslation } from 'react-i18next';
import { FaChurch, FaPrayingHands, FaUsers, FaCalendarAlt, FaClock, FaPhone, FaEnvelope, FaCross, FaBible, FaMusic, FaBookReader, FaBed } from 'react-icons/fa';
import ScheduleItem from '../components/ScheduleItem';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: FaChurch,
      title: "Cultes Dominical",
      description: "Rejoignez-nous chaque dimanche pour célébrer ensemble la parole de Dieu et partager la communion fraternelle.",
      features: ["Culte principal à 10h00", "Louange et adoration", "Prédication biblique", "Communion fraternelle"],
      color: "primary"
    },
    {
      icon: FaBible,
      title: "Études Bibliques",
      description: "Approfondissez votre foi et votre connaissance de la Bible à travers nos études hebdomadaires.",
      features: ["Étude biblique mercredi", "Groupes de discussion", "Formation spirituelle", "Questions-réponses"],
      color: "accent"
    },
    {
      icon: FaUsers,
      title: "Ministères & Activités",
      description: "Participez à nos différents ministères et activités communautaires pour servir et grandir ensemble.",
      features: ["Ministère des jeunes", "Groupe de prière", "Action sociale", "Événements communautaires"],
      color: "secondary"
    }
  ];

  const schedule = [
    { day: "Dimanche", time: "10:00 - 12:00", service: "Culte Principal", icon: FaChurch },
    { day: "Lundi", time: "19:00 - 20:00", service: "Chorale", icon: FaMusic },
    { day: "Mardi", time: "Fermé", service: "Jour de repos", icon: FaBed },
    { day: "Mercredi", time: "19:00 - 20:30", service: "Étude Biblique", icon: FaBible },
    { day: "Jeudi", time: "19:00 - 20:00", service: "École du Dimanche", icon: FaBookReader },
    { day: "Vendredi", time: "18:00 - 19:30", service: "Groupe de Prière", icon: FaPrayingHands },
    { day: "Samedi", time: "14:00 - 16:00", service: "Ministère des Jeunes", icon: FaUsers }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary-50 to-primary-100 bg-primary-500';
      case 'accent':
        return 'from-accent-50 to-accent-100 bg-accent-500';
      case 'secondary':
        return 'from-secondary-50 to-secondary-100 bg-secondary-500';
      default:
        return 'from-primary-50 to-primary-100 bg-primary-500';
    }
  };

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
              {t('services_title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Découvrez nos cultes, études bibliques et activités communautaires
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Nos Activités
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Des opportunités pour grandir dans la foi et servir la communauté
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br ${getColorClasses(service.color).split(' ')[0]} ${getColorClasses(service.color).split(' ')[1]} p-8 rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`w-20 h-20 ${getColorClasses(service.color).split(' ')[2]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-4">{service.title}</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-secondary-600">
                      <div className={`w-2 h-2 ${getColorClasses(service.color).split(' ')[2]} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Horaires des Activités
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Planifiez votre participation à nos activités hebdomadaires
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
              <div className="bg-gradient-to-r from-accent-600 to-primary-600 p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center">
                  <FaCalendarAlt className="mr-3" />
                  Programme Hebdomadaire
                </h3>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {schedule.map((item, index) => (
                    <ScheduleItem key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez-nous !
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contactez-nous pour plus d'informations sur nos activités ou pour nous rejoindre dans la prière.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+41212345678" 
                className="bg-white text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-50 transition-all duration-300 transform hover:scale-105 shadow-large flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Appelez-nous
              </a>
              <a 
                href="mailto:contact@fvkfm.ch" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-accent-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <FaEnvelope className="mr-2" />
                Envoyez un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 