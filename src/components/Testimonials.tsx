import { useInView } from '../hooks/useInView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Elena Rodriguez",
    role: "Professional Padel Player",
    content: "OSSO isn't just a club; it's a sanctuary. The court quality is unmatched, and the post-match atmosphere is electric. It's raised the standard for sports clubs in the city.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Marcus Chen",
    role: "Founding Member",
    content: "The balance between 'sport' and 'social' is perfect here. I come for the game, but I stay for the people. The events team does a phenomenal job bringing us together.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Sarah Thompson",
    role: "Wellness Enthusiast",
    content: "Finally, a place that understands that recovery is as important as the workout. The wellness facilities are world-class, and the design is simply stunning.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "James Wilson",
    role: "Tennis Coach",
    content: "The coaching staff is top-tier. I've seen tremendous improvement in my game since joining. The community support is incredibly motivating.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Linda Kim",
    role: "Social Member",
    content: "I love the events! Whether it's a tournament or a casual Friday night mixer, there's always something happening. It's the best place to meet new friends.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden testimonial-slider">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl text-primary dark:text-white"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-primary/5 dark:bg-white/10 px-3 py-1 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-primary dark:text-accent text-xs font-bold uppercase tracking-wider">Community Voices</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-white">
            Member Stories
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16 px-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div 
                  className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-primary/5 dark:border-white/10 hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1 text-accent mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-icons-outlined text-sm">star</span>
                    ))}
                  </div>
                  
                  <blockquote className="font-body text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-grow">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <div className="font-bold text-primary dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-tertiary">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
