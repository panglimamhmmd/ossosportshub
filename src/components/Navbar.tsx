import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    // Trigger entrance animation
    setTimeout(() => setIsLoaded(true), 100);

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Courts', href: '#courts' },
    { name: 'Programs', href: '#programs' },
    { name: 'Cafe', href: '#cafe' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 dark:border-white/10 ${
        isScrolled ? 'shadow-lg' : ''
      } ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#" className="flex flex-col items-start group">
              <span className="font-display text-4xl font-bold tracking-tight text-primary dark:text-accent leading-none transition-transform duration-300 group-hover:scale-105">OSSO</span>
              <span className="text-[0.6rem] tracking-[0.2em] font-bold text-tertiary dark:text-gray-400 uppercase mt-1 group-hover:text-primary dark:group-hover:text-white transition-colors">Sports Hub</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={item.name}
                href={item.href} 
                className={`text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 animated-underline ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <button 
              className={`bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-tertiary transition-all duration-300 shadow-lg shadow-primary/20 dark:shadow-none transform hover:-translate-y-0.5 hover:shadow-xl cursor-pointer ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              Book Court
            </button>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 text-primary dark:text-accent cursor-pointer hover:rotate-180 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: '400ms' }}
              aria-label="Toggle Dark Mode"
            >
              <span className="material-icons-outlined text-xl block">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-primary dark:text-white cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <span className="material-icons-outlined text-2xl transition-transform duration-300" style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}>
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with slide animation */}
      <div 
        className={`md:hidden bg-background-light dark:bg-background-dark border-t border-primary/10 dark:border-white/10 px-4 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="space-y-1">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className={`w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : '0ms' }}
          >
            <span className="material-icons-outlined text-xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}
