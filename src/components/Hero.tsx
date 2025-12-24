import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Shapes with subtle animation */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary opacity-[0.03] dark:opacity-[0.15] -skew-x-12 transform translate-x-1/4 z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-tertiary opacity-[0.05] dark:opacity-[0.1] rounded-tr-full z-0"></div>
      
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div 
              className={`inline-flex items-center space-x-2 bg-accent/20 dark:bg-accent/10 px-3 py-1 rounded-full transition-all duration-700 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-accent animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-primary dark:text-accent">Padel & Social Club</span>
            </div>
            
            <h1 
              className={`font-display text-5xl lg:text-7xl font-bold leading-tight text-primary dark:text-white transition-all duration-700 delay-100 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              On-Court Sport.<br/>
              <span className="text-tertiary italic">Off-Court Social.</span>
            </h1>
            
            <p 
              className={`text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Experience the perfect blend of competition and community. OSSO is your premium destination for padel, wellness, and connection.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button className="bg-primary text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-tertiary transition-all shadow-xl shadow-primary/20 dark:shadow-none flex items-center justify-center gap-2 cursor-pointer hover-lift hover-glow">
                <span>Join the Club</span>
                <span className="material-icons-outlined text-sm">arrow_forward</span>
              </button>
              <button className="border border-primary/20 dark:border-white/20 bg-transparent text-primary dark:text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer hover-lift">
                <span className="material-icons-outlined">play_circle</span>
                <span>Watch Video</span>
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block h-[500px]">
            <div 
              className={`absolute top-0 right-0 w-3/4 h-3/4 bg-primary rounded-tr-[3rem] rounded-bl-[3rem] flex items-center justify-center shadow-2xl transition-all duration-1000 delay-200 ${
                heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="text-center">
                <h2 className="font-display text-8xl text-accent opacity-90">OSSO</h2>
                <p className="text-accent tracking-[0.3em] uppercase mt-2 font-light">Sports Hub</p>
              </div>
            </div>
            
            <div 
              className={`absolute bottom-0 left-8 w-1/2 h-1/2 bg-accent dark:bg-tertiary rounded-tl-[2rem] rounded-br-[2rem] shadow-xl flex items-center justify-center z-20 transition-all duration-1000 delay-400 ${
                heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <img 
                alt="Padel Racket Close up" 
                className="w-full h-full object-cover rounded-tl-[2rem] rounded-br-[2rem] opacity-90 mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv4ORuQBjMHAw-uN5JaVFcsJaE6B2cR7lL98PvPrYFQLBPreRiI4M7oPBtrZ8K3mFh4u3dlxiBZHhNn-lvpchVU300I2PokIMo29FloqDnTEvb6eqcn4uQs6lh3HUhiHbP419EltlhnBJgl6xp2Y8NxQOeoU3cFcrRqV_9_Xp7n36SoLmJBCuchg12L3K1G5YygVE0rF1fokStX-SvCPDoYQ5T_NCwO0fgFRC4WtYUpZK5-H_n18XIVJXg8i9EBrH8PKetHB9AnYQ"
              />
            </div>
            
            <div 
              className={`absolute bottom-12 right-12 w-1/3 h-1/3 bg-background-light dark:bg-surface-dark border border-primary/10 dark:border-white/10 rounded-xl shadow-lg z-30 p-6 flex flex-col justify-center animate-float transition-all duration-1000 delay-600 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="material-icons-outlined text-tertiary">star</span>
                <span className="font-bold text-primary dark:text-white">Premium</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Top-tier courts designed for professionals and beginners alike.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
