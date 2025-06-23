import { useTranslation } from 'react-i18next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPrayingHands } from 'react-icons/fa';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
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
              {t('contact_title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('contact_intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl shadow-soft p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPrayingHands className="text-white text-3xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary-800 mb-2">Envoyez-nous un message</h2>
                  <p className="text-secondary-600">Nous serions ravis d'avoir de vos nouvelles</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-3 text-secondary-800">
                      {t('contact_name')}
                    </label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors duration-300"
                      placeholder="Votre nom complet"
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-1 block">Ce champ est requis</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-3 text-secondary-800">
                      {t('contact_email')}
                    </label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors duration-300"
                      placeholder="votre.email@exemple.com"
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1 block">Une adresse email valide est requise</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-3 text-secondary-800">
                      {t('contact_message')}
                    </label>
                    <textarea
                      {...register('message', { required: true })}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Votre message..."
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-sm mt-1 block">Ce champ est requis</span>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold py-4 rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-medium"
                  >
                    {t('contact_send')}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl shadow-soft p-8">
                <h2 className="text-3xl font-bold text-secondary-800 mb-8">{t('contact_info_title')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-1">Adresse</h3>
                      <p className="text-secondary-600">{t('contact_address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-1">Téléphone</h3>
                      <p className="text-secondary-600">{t('contact_phone')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-1">Email</h3>
                      <p className="text-secondary-600">
                        <a href={`mailto:${t('contact_email_info')}`} className="text-accent-600 hover:text-accent-700 transition-colors duration-200">
                          {t('contact_email_info')}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-1">Horaires d'ouverture</h3>
                      <p className="text-secondary-600">
                        Dimanche: 10:00 - 12:00<br />
                        Mercredi: 19:00 - 20:30<br />
                        Vendredi: 18:00 - 19:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.722839249964!2d47.52495801489849!3d-18.90769198719001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e0a0f0d5e2b%3A0x4e6e6a4b1b3b1b3b!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sen!2sus!4v1624732168939!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Google Maps Location"
                  className="rounded-3xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 