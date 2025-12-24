import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 });

  const cards = [
    {
      icon: 'diversity_1',
      title: 'Social Accessibility',
      desc: "Open to various wide range of users. Whether you're a seasoned pro or picking up a racket for the first time, you belong here.",
      highlight: false,
    },
    {
      icon: 'volunteer_activism',
      title: 'Warm Hospitality',
      desc: 'Our hue of brown signifies strength and warmth. We pride ourselves on service that makes you feel like family from the moment you walk in.',
      highlight: true,
    },
    {
      icon: 'spa',
      title: 'Holistic Wellness',
      desc: 'Beyond the court, enjoy our wellness programs and healthy cafe options designed to fuel your body and mind.',
      highlight: false,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-surface-dark transition-colors" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-tertiary font-bold tracking-widest uppercase text-sm mb-2 block">Our Philosophy</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-6">More Than Just a Game</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We believe in the power of sport to bring people together. OSSO is designed to be inclusive, warm, and distinctly premium.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl transition-all duration-500 border border-transparent 
                ${card.highlight 
                  ? 'bg-primary shadow-xl transform md:-translate-y-4' 
                  : 'bg-background-light dark:bg-background-dark hover:shadow-lg hover:border-accent/30 group hover-lift'
                }
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                  ${card.highlight 
                    ? 'bg-accent text-primary' 
                    : 'bg-primary text-white group-hover:bg-tertiary group-hover:scale-110'
                  }`}
              >
                <span className="material-icons-outlined text-3xl">{card.icon}</span>
              </div>
              <h3 className={`font-display text-2xl font-bold mb-3 ${card.highlight ? 'text-white' : 'text-primary dark:text-white'}`}>
                {card.title}
              </h3>
              <p className={`leading-relaxed ${card.highlight ? 'text-accent/90' : 'text-gray-600 dark:text-gray-400'}`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
