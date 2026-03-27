import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section className="py-32 bg-dp-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop" 
                alt="Vintage Dr Pepper" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-dp-red rounded-3xl z-0 transform -rotate-6"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-8xl text-dp-red mb-6 leading-[0.85]">
              BORN IN <br />
              <span className="text-dp-dark">1885.</span>
            </h2>
            
            <div className="space-y-6 text-xl text-dp-dark/80 font-medium">
              <p>
                Before cola, there was Dr Pepper. Created in Waco, Texas by a pharmacist named Charles Alderton, it's the oldest major soft drink in America.
              </p>
              <p>
                We didn't set out to be a cola. We didn't set out to be a fruit flavor. We set out to be exactly what we are: a unique blend of 23 flavors that defies categorization.
              </p>
              <p className="text-2xl text-dp-red font-bold italic">
                It's not an apple. It's not an orange. It's a Pepper.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
