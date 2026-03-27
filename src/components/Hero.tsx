import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dp-red overflow-hidden flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--color-dp-red-light)_0%,_var(--color-dp-red)_100%)]"></div>
        
        {/* Abstract curved shapes */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z" fill="var(--color-dp-red-dark)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] text-dp-cream mb-6 drop-shadow-2xl">
                BOLD. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dp-cream to-dp-cream-dark">DELICIOUS.</span> <br />
                ONE OF A KIND.
              </h1>
              
              <p className="text-xl md:text-2xl text-dp-cream/90 font-medium mb-10 max-w-xl mx-auto lg:mx-0">
                It's a Pepper thing. Experience the iconic 23 flavors that have been satisfying cravings since 1885.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="#store-locator"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-dp-cream text-dp-red font-display text-xl px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(244,239,234,0.3)]"
                >
                  <MapPin size={24} />
                  <span>Find Dr Pepper</span>
                </a>
                
                <a
                  href="#flavors"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 border-2 border-dp-cream text-dp-cream font-display text-xl px-8 py-4 rounded-full hover:bg-dp-cream hover:text-dp-red transition-all"
                >
                  <span>Explore Flavors</span>
                  <ArrowRight size={24} />
                </a>
              </div>
              
              {/* Trust Elements */}
              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm font-bold text-dp-cream/70 uppercase tracking-widest">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  Available Nationwide
                </div>
                <div className="hidden sm:flex items-center">
                  <span className="w-2 h-2 rounded-full bg-dp-cream mr-2"></span>
                  Official Store
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Product Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-10"
            >
              {/* Using a placeholder that looks like a soda can */}
              <div className="relative w-64 h-96 sm:w-80 sm:h-[30rem] mx-auto drop-shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dr Pepper Can" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-dp-red-light"
                  referrerPolicy="no-referrer"
                />
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-3xl pointer-events-none"></div>
              </div>
            </motion.div>
            
            {/* Background glow for product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dp-cream/20 blur-[100px] rounded-full z-0"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
