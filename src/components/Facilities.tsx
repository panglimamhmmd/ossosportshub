import { useInView } from '../hooks/useInView';

export default function Facilities() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const facilities = [
    {
      title: 'Indoor Courts',
      desc: 'Climate controlled environment for year-round play with professional lighting.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB61hDz1QRr23WMy9PAM9Uum5RTovFXUrpX7P-sF9Ezqph48-N7m-mDFfNTV3tAAq7k9echXKEdoilzW3oNkoDqyF1shzpTBjbmlCHWH38eGzB3MgaqtxY-GPupSCuhyGAQcog9l93kk-_5DeiF9LidDqgSotBd3tIWZNOAzp1z8qUuX9g8iH95KintRkZM9Y7ampwl2lnwzu4846eEuZ2TkNC-KaYWEtlSOoZK3NJvnaJ_0BAdodthjtgkAKUTY65tGbl7mj8CraY',
      btn: 'Book Now',
    },
    {
      title: 'The Social Cafe',
      desc: 'Specialty coffee, healthy smoothies, and a comfortable lounge to recap the match.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBxYkrXoolv2YrLkBSI_r9WZYSWtfsgIPB--LUeHMVdHK3jzF3hX2zmceyMTokNis4P9lMe9GSOyuRxB-UmabBjb7aYtO2AVoz_QjmQQJvJSXUKpxbWvKYgs49qSriPV6I3U8u89d2JGbEAkmKhkKlEZAWiKSQZy75ibu81MdwSjrqkayFShMec9gpB5oOnmrTmW9wtNkoqVF7lCobDq2Y9OilI8ZTG-OFwrOSOhZiJ3WqrJ273ui0M_iyJoBZAFNFWKCB_UabS14',
      btn: 'View Menu',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background-light dark:bg-background-dark" id="courts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex flex-col md:flex-row justify-between items-end mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h2 className="font-display text-4xl font-bold text-primary dark:text-white mb-2">Our Facilities</h2>
            <p className="text-gray-600 dark:text-gray-400">World-class courts for a world-class experience.</p>
          </div>
          <a className="hidden md:flex items-center text-tertiary hover:text-primary dark:hover:text-white font-medium transition-colors mt-4 md:mt-0 animated-underline" href="#">
            View all facilities <span className="material-icons-outlined ml-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl h-80 md:h-96 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <img 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={item.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-300 group-hover:from-primary/95"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">{item.title}</h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
                <button className="text-white border-b border-white pb-1 text-sm uppercase tracking-wider hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer opacity-80 group-hover:opacity-100">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a className="inline-flex items-center text-tertiary hover:text-primary dark:hover:text-white font-medium transition-colors" href="#">
            View all facilities <span className="material-icons-outlined ml-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
