import { motion } from 'motion/react';
import { Gift, Ticket, Star } from 'lucide-react';

export default function Rewards() {
  return (
    <section id="rewards" className="py-24 bg-dp-dark text-dp-cream relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-dp-red/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-dp-red/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-dp-red-dark to-dp-red rounded-[3rem] p-8 md:p-16 shadow-2xl border border-dp-red-light/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-dp-dark/40 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                  <Star size={16} className="text-yellow-400" />
                  <span>Pepper Perks</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl mb-6 leading-none">
                  Get Rewarded For Being A Pepper
                </h2>
                
                <p className="text-xl text-dp-cream/90 font-medium mb-8">
                  Join Pepper Perks to earn points, unlock exclusive merch, get early access to new flavors, and enter to win tuition.
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center space-x-3 text-lg">
                    <div className="bg-dp-cream text-dp-red p-2 rounded-full">
                      <Gift size={20} />
                    </div>
                    <span>Earn points on every purchase</span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg">
                    <div className="bg-dp-cream text-dp-red p-2 rounded-full">
                      <Ticket size={20} />
                    </div>
                    <span>Exclusive sweepstakes entries</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            {/* Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dp-cream text-dp-dark p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-3xl mb-2 text-dp-red">Join The Club</h3>
              <p className="text-sm text-dp-dark/70 mb-6 font-medium">Sign up in seconds. It's free.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email Address" 
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-transparent focus:border-dp-red focus:outline-none transition-colors font-medium"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Phone Number (For SMS Drops)" 
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-transparent focus:border-dp-red focus:outline-none transition-colors font-medium"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-dp-red text-dp-cream font-display text-xl uppercase tracking-wider py-4 rounded-xl hover:bg-dp-red-dark transition-colors shadow-lg"
                >
                  Sign Me Up
                </button>
                
                <p className="text-xs text-center text-dp-dark/60 mt-4">
                  By joining, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
