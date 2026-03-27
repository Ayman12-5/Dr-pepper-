import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const campaigns = [
  {
    id: 'tuition',
    title: 'Tuition Giveaway',
    subtitle: 'Win $100,000 for College',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    cta: 'Enter Now',
    color: 'bg-dp-red'
  },
  {
    id: 'pro-zone',
    title: 'Pepper Perks',
    subtitle: 'Unlock Exclusive Rewards',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    cta: 'Join For Free',
    color: 'bg-dp-dark'
  },
  {
    id: 'collab',
    title: 'Limited Edition Drop',
    subtitle: 'Dr Pepper x Your Favorite Brand',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
    cta: 'Shop The Collab',
    color: 'bg-[#5A191E]'
  }
];

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-24 bg-dp-cream-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-dp-red mb-4">More Than A Soda</h2>
          <p className="text-xl text-dp-dark/80 font-medium max-w-2xl mx-auto">
            Join the community. Win tuition, score exclusive merch, and unlock Pepper Perks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden shadow-2xl h-96 ${campaign.color}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-dp-cream">
                <span className="text-sm font-bold uppercase tracking-widest text-dp-cream/80 mb-2">
                  {campaign.subtitle}
                </span>
                <h3 className="text-4xl md:text-5xl mb-6 leading-none">
                  {campaign.title}
                </h3>
                
                <a 
                  href={`#${campaign.id}`}
                  className="inline-flex items-center space-x-2 font-display text-xl uppercase tracking-wider hover:text-dp-red-light transition-colors w-max"
                >
                  <span>{campaign.cta}</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
