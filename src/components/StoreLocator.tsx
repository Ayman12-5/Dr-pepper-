import { motion } from 'motion/react';
import { MapPin, Search, ArrowRight } from 'lucide-react';

export default function StoreLocator() {
  return (
    <section id="store-locator" className="py-24 bg-dp-red text-dp-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MapPin size={48} className="mx-auto mb-6 text-dp-cream opacity-80" />
          <h2 className="text-5xl md:text-7xl mb-6">Find Your Fix</h2>
          <p className="text-xl text-dp-cream/80 font-medium mb-10 max-w-2xl mx-auto">
            Craving that 23-flavor blend? Enter your zip code to find Dr Pepper near you, or order online for delivery.
          </p>

          <div className="bg-white p-2 rounded-full flex items-center shadow-2xl max-w-xl mx-auto">
            <div className="pl-4 text-dp-dark/50">
              <Search size={24} />
            </div>
            <input 
              type="text" 
              placeholder="Enter Zip Code or City" 
              className="flex-1 px-4 py-4 bg-transparent text-dp-dark focus:outline-none font-medium text-lg"
            />
            <button className="bg-dp-red text-dp-cream font-display text-xl uppercase tracking-wider px-8 py-4 rounded-full hover:bg-dp-red-dark transition-colors">
              Search
            </button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <span className="text-dp-cream/60 font-bold uppercase tracking-widest text-sm">Or Buy Online:</span>
            <div className="flex items-center space-x-6">
              {/* Placeholder logos for retailers */}
              <div className="h-8 w-24 bg-dp-cream/20 rounded flex items-center justify-center text-xs font-bold">AMAZON</div>
              <div className="h-8 w-24 bg-dp-cream/20 rounded flex items-center justify-center text-xs font-bold">WALMART</div>
              <div className="h-8 w-24 bg-dp-cream/20 rounded flex items-center justify-center text-xs font-bold">TARGET</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
