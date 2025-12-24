import { useInView } from '../hooks/useInView';

export default function Footer() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <footer ref={ref} className="bg-surface-dark text-white pt-20 pb-10 border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div 
            className={`col-span-1 md:col-span-1 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a className="inline-block mb-6 group" href="#">
              <span className="font-display text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">OSSO</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premium padel and social hub designed for the modern athlete and socialite.
            </p>
            <div className="flex space-x-4">
              <a className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110" href="#">
                <span className="material-icons-outlined">facebook</span>
              </a>
              <a className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110" href="#">
                <span className="material-icons-outlined">smart_display</span>
              </a>
              <a className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110" href="#">
                <span className="material-icons-outlined">alternate_email</span>
              </a>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="font-bold text-lg mb-6 text-accent">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a className="hover:text-white transition-colors animated-underline" href="#">About Us</a></li>
              <li><a className="hover:text-white transition-colors animated-underline" href="#">Our Courts</a></li>
              <li><a className="hover:text-white transition-colors animated-underline" href="#">Coaching Programs</a></li>
              <li><a className="hover:text-white transition-colors animated-underline" href="#">Tournaments</a></li>
              <li><a className="hover:text-white transition-colors animated-underline" href="#">The Cafe</a></li>
            </ul>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="font-bold text-lg mb-6 text-accent">Visit Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3 group">
                <span className="material-icons-outlined text-accent text-base mt-0.5 group-hover:scale-110 transition-transform">place</span>
                <span>123 Padel Avenue,<br/>Sports City, SC 90210</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-icons-outlined text-accent text-base group-hover:scale-110 transition-transform">phone</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-icons-outlined text-accent text-base group-hover:scale-110 transition-transform">email</span>
                <span>hello@ossosportshub.com</span>
              </li>
            </ul>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="font-bold text-lg mb-6 text-accent">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for tournament news and offers.</p>
            <form className="space-y-2">
              <input 
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 hover:border-white/20" 
                placeholder="Email Address" 
                type="email"
              />
              <button className="w-full bg-tertiary hover:bg-accent text-white hover:text-primary font-bold py-2 rounded text-sm transition-all duration-300 cursor-pointer hover:-translate-y-0.5" type="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div 
          className={`border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p>© 2023 OSSO Sports Hub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
