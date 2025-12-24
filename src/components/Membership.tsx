import { useInView } from '../hooks/useInView';

export default function Membership() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-primary relative overflow-hidden" id="join">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Animated background circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 
          className={`font-display text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Become part of the OSSO Family
        </h2>
        <p 
          className={`text-accent text-lg mb-10 max-w-2xl mx-auto transition-all duration-700 delay-150 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Join a community that values sportsmanship and social connection. Members enjoy priority booking, exclusive events, and discounts.
        </p>
        <div 
          className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-white transition-all duration-300 shadow-lg cursor-pointer hover:-translate-y-1 hover:shadow-xl">
            View Membership Plans
          </button>
          <button className="border border-accent text-accent px-8 py-4 rounded-lg font-bold hover:bg-accent hover:text-primary transition-all duration-300 cursor-pointer hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
