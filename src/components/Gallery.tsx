import { useState, useEffect, useCallback } from 'react';
import { useInView } from '../hooks/useInView';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2070&auto=format&fit=crop",
    alt: "Pro Courts",
    category: "Sport"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    alt: "Social Community",
    category: "Social"
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop",
    alt: "Wellness Studio",
    category: "Wellness"
  },
  {
    src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop",
    alt: "Match Point",
    category: "Sport"
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
    alt: "Evening Event",
    category: "Social"
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    alt: "Performance Training",
    category: "Sport"
  }
];

export default function Gallery() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage, closeLightbox]);

  return (
    <>
      <section ref={ref} className="py-24 bg-background-light dark:bg-background-dark overflow-hidden" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
              Life at OSSO
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Where competitive spirit meets social sophistication. capture the moments that define our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl h-80 cursor-pointer transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with icon */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="material-icons-outlined text-white text-4xl transform scale-50 group-hover:scale-100 transition-all duration-300">
                    fullscreen
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-white font-display text-xl">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <span className="material-icons-outlined text-4xl">close</span>
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-4"
            onClick={prevImage}
          >
            <span className="material-icons-outlined text-4xl md:text-6xl">chevron_left</span>
          </button>

          <button 
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-4"
            onClick={nextImage}
          >
            <span className="material-icons-outlined text-4xl md:text-6xl">chevron_right</span>
          </button>

          {/* Main Image Container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] mx-4 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[currentIndex].src} 
              alt={galleryImages[currentIndex].alt}
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl animate-scale-in"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
              <h3 className="text-xl font-display font-bold">{galleryImages[currentIndex].alt}</h3>
              <p className="text-accent text-sm uppercase tracking-wider">{galleryImages[currentIndex].category}</p>
            </div>
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
