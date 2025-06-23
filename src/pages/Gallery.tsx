import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaImages, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const allImages = [
  { src: '/assets/images/gallery/event1.jpg', category: 'events', title: 'Culte dominical' },
  { src: '/assets/images/gallery/community1.jpg', category: 'community', title: 'Groupe de prière' },
  // Placeholder images for demonstration
  { src: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Culte+Dominical', category: 'events', title: 'Culte dominical' },
  { src: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Étude+Biblique', category: 'community', title: 'Étude biblique' },
  { src: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Baptême', category: 'events', title: 'Baptême' },
  { src: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Action+Sociale', category: 'community', title: 'Action sociale' },
];

const filters = [
  { id: 'all', label: 'Tout', icon: FaImages },
  { id: 'events', label: 'Événements', icon: FaCalendarAlt },
  { id: 'community', label: 'Communauté', icon: FaUsers }
];

const Gallery = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const filteredImages = filter === 'all' 
    ? allImages 
    : allImages.filter(image => image.category === filter);

  const slides = filteredImages.map(img => ({ src: img.src }));

  const openLightbox = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
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
              {t('gallery_title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Découvrez les moments précieux de notre communauté de foi
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-secondary-100 rounded-2xl p-2 shadow-soft">
              {filters.map(f => {
                const IconComponent = f.icon;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      filter === f.id 
                        ? 'bg-white text-accent-600 shadow-medium' 
                        : 'text-secondary-600 hover:text-accent-600 hover:bg-white/50'
                    }`}
                  >
                    <IconComponent className="text-lg" />
                    <span>{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" 
                  onClick={() => openLightbox(idx)}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                      <p className="text-white/80 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaImages className="text-secondary-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">Aucune image trouvée</h3>
              <p className="text-secondary-600">Aucune image ne correspond au filtre sélectionné.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              Rejoignez-nous !
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Venez vivre ces moments de joie et de communion avec notre communauté de foi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-700 transition-all duration-300 transform hover:scale-105 shadow-medium"
              >
                Voir nos activités
              </a>
              <a 
                href="/contact" 
                className="border-2 border-accent-600 text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </div>
  );
};

export default Gallery; 