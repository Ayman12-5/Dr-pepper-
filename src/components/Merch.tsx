import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const merchItems = [
  {
    id: 'hoodie',
    name: 'Classic Logo Hoodie',
    price: '$55.00',
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cap',
    name: 'Vintage Snapback',
    price: '$25.00',
    tag: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cooler',
    name: 'Retro Cooler',
    price: '$85.00',
    tag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tee',
    name: 'Est. 1885 Tee',
    price: '$30.00',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Merch() {
  return (
    <section id="merch" className="py-24 bg-dp-red text-dp-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dp-red-dark/30 skew-x-12 translate-x-1/4 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl mb-4">Wear The Flavor</h2>
            <p className="text-xl text-dp-cream/80 font-medium">
              Exclusive apparel and accessories for the ultimate Pepper. Limited drops, grab them before they're gone.
            </p>
          </div>
          <a href="#shop-all" className="hidden md:flex items-center space-x-2 font-bold hover:text-dp-cream-dark transition-colors uppercase tracking-wider mt-6 md:mt-0">
            <span>Shop All Merch</span>
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-dp-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                {/* Tag */}
                <div className={`absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  item.tag === 'Low Stock' ? 'bg-red-500 text-white' : 
                  item.tag === 'Exclusive' ? 'bg-dp-dark text-dp-cream' : 
                  'bg-dp-red text-dp-cream'
                }`}>
                  {item.tag}
                </div>
                
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-dp-red text-dp-cream p-3 rounded-full hover:bg-dp-red-dark transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <ShoppingBag size={24} />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 text-dp-dark">
                <h3 className="text-xl font-bold mb-1 truncate">{item.name}</h3>
                <p className="text-dp-red font-display text-lg tracking-wider">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="#shop-all" className="inline-flex items-center space-x-2 font-bold hover:text-dp-cream-dark transition-colors uppercase tracking-wider">
            <span>Shop All Merch</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
