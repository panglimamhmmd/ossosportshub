import { useInView } from '../hooks/useInView';

export default function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    { num: '01', label: 'Competition', bg: 'bg-primary', text: 'text-accent', groupText: 'text-accent' },
    { num: '02', label: 'Training', bg: 'bg-tertiary', text: 'text-background-light', groupText: 'text-background-light' },
    { num: '03', label: 'Social', bg: 'bg-accent', text: 'text-primary', groupText: 'text-primary' },
    { num: '04', label: 'Relaxation', bg: 'bg-background-dark', text: 'text-white', groupText: 'text-white' },
  ];

  return (
    <section ref={ref} className="grid grid-cols-2 md:grid-cols-4 h-48 md:h-64">
      {stats.map((item, index) => (
        <div 
          key={index} 
          className={`${item.bg} flex flex-col items-center justify-center p-4 text-center group cursor-pointer transition-all duration-500 hover:scale-105 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <span 
            className={`font-display text-3xl md:text-4xl ${item.text} opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}
          >
            {item.num}
          </span>
          <span 
            className={`${item.groupText} text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </section>
  );
}
