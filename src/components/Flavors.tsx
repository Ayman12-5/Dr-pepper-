import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

const flavors = [
  {
    id: 'original',
    name: 'Dr Pepper',
    tag: 'The Original',
    notes: '23 Signature Flavors',
    color: 'bg-dp-red',
    textColor: 'text-dp-cream',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'zero',
    name: 'Zero Sugar',
    tag: 'Zero Sugar',
    notes: 'Same 23 Flavors, Zero Sugar',
    color: 'bg-dp-black',
    textColor: 'text-dp-cream',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop&grayscale=1'
  },
  {
    id: 'cherry',
    name: 'Cherry',
    tag: 'Fan Favorite',
    notes: 'A Kiss of Cherry',
    color: 'bg-[#9E1B32]',
    textColor: 'text-dp-cream',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04d84b4f1c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'strawberries-cream',
    name: 'Strawberries & Cream',
    tag: 'New',
    notes: 'Smooth & Sweet',
    color: 'bg-[#EFA4B4]',
    textColor: 'text-dp-red',
    image: 'https://images.unsplash.com/photo-1615486171448-4af42c650b28?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Flavors() {
  return (
    <section id="flavors" className="py-24 bg-dp-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl text-dp-red mb-4">Find Your Flavor</h2>
            <p className="text-xl text-dp-dark/80 font-medium">
              From the original 23 flavors to our newest bold creations. There's a Pepper for everyone.
            </p>
          </div>
          <a href="#all-flavors" className="hidden md:flex items-center space-x-2 font-bold text-dp-red hover:text-dp-red-dark transition-colors uppercase tracking-wider mt-6 md:mt-0">
            <span>View All Products</span>
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-3xl overflow-hidden shadow-xl cursor-pointer ${flavor.color} ${flavor.textColor}`}
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center">
                {flavor.tag === 'Fan Favorite' && <Star size={12} className="mr-1 fill-current" />}
                {flavor.tag}
              </div>

              {/* Image Container */}
              <div className="relative h-80 w-full p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
                <img 
                  src={flavor.image} 
                  alt={flavor.name} 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 relative z-0"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 bg-gradient-to-t from-black/80 to-transparent -mt-20 pt-20">
                <h3 className="text-3xl mb-1">{flavor.name}</h3>
                <p className="text-sm opacity-90 font-medium mb-6">{flavor.notes}</p>
                
                <button className={`w-full py-3 rounded-full font-display text-lg uppercase tracking-wider transition-colors ${
                  flavor.textColor === 'text-dp-red' 
                    ? 'bg-dp-red text-dp-cream hover:bg-dp-red-dark' 
                    : 'bg-dp-cream text-dp-red hover:bg-white'
                }`}>
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="#all-flavors" className="inline-flex items-center space-x-2 font-bold text-dp-red hover:text-dp-red-dark transition-colors uppercase tracking-wider">
            <span>View All Products</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
