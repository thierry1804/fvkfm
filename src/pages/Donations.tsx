import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHandHoldingHeart, FaChurch, FaUsers, FaHeart, FaPrayingHands } from 'react-icons/fa';

const Donations = () => {
  const { t } = useTranslation();
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for payment processing logic
    alert(`Merci pour votre don ${donationType === 'one-time' ? 'unique' : 'mensuel'} de ${amount}€ !`);
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
              {t('donations_title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('donations_intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl shadow-soft p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandHoldingHeart className="text-white text-3xl" />
                </div>
                <h2 className="text-3xl font-bold text-secondary-800 mb-4">Faites un don</h2>
                <p className="text-secondary-600">Choisissez le type de don qui vous convient</p>
              </div>

              <form onSubmit={handleDonate} className="space-y-6">
                {/* Donation Type */}
                <div className="flex justify-center">
                  <div className="flex bg-white rounded-xl shadow-soft overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`px-8 py-3 font-semibold transition-all duration-300 ${
                        donationType === 'one-time' 
                          ? 'bg-accent-500 text-white shadow-medium' 
                          : 'bg-white text-secondary-600 hover:bg-accent-50'
                      }`}
                    >
                      {t('one_time_donation')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`px-8 py-3 font-semibold transition-all duration-300 ${
                        donationType === 'monthly' 
                          ? 'bg-accent-500 text-white shadow-medium' 
                          : 'bg-white text-secondary-600 hover:bg-accent-50'
                      }`}
                    >
                      {t('monthly_donation')}
                    </button>
                  </div>
                </div>

                {/* Amount Input */}
                <div>
                  <label htmlFor="amount" className="block text-sm font-bold mb-3 text-secondary-800">
                    {t('donation_amount')} (€)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors duration-300"
                    placeholder="50"
                    required
                  />
                </div>

                {/* Secure Payment Placeholder */}
                <div className="p-4 border-2 border-secondary-200 rounded-xl bg-secondary-50">
                  <div className="flex items-center justify-center text-secondary-600">
                    <FaHeart className="mr-2 text-accent-500" />
                    <span>Paiement sécurisé - Intégration à venir</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold py-4 rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-medium"
                >
                  {t('donate_button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              {t('projects_title')}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Découvrez les projets que vous pouvez soutenir
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white p-8 rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChurch className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">{t('project_1_title')}</h3>
              <p className="text-secondary-600 leading-relaxed">{t('project_1_text')}</p>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">{t('project_2_title')}</h3>
              <p className="text-secondary-600 leading-relaxed">{t('project_2_text')}</p>
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
              Merci pour votre générosité
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Chaque don, peu importe sa taille, nous aide à poursuivre notre mission et à servir notre communauté.
            </p>
            <div className="flex items-center justify-center">
              <FaPrayingHands className="text-4xl opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations; 