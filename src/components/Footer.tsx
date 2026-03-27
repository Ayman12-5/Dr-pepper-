import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dp-black text-dp-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="font-display text-4xl tracking-wider italic text-dp-red mb-6 inline-block">
              Dr Pepper
            </a>
            <p className="text-dp-cream/60 font-medium text-sm mb-6">
              The oldest major soft drink in America. A unique blend of 23 flavors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dp-cream/60 hover:text-dp-red transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-dp-cream/60 hover:text-dp-red transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-dp-cream/60 hover:text-dp-red transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-dp-cream/60 hover:text-dp-red transition-colors"><Youtube size={24} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6">Products</h4>
            <ul className="space-y-3 text-dp-cream/70 font-medium text-sm">
              <li><a href="#" className="hover:text-dp-red transition-colors">All Flavors</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Zero Sugar</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Diet Dr Pepper</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Cherry</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Strawberries & Cream</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3 text-dp-cream/70 font-medium text-sm">
              <li><a href="#" className="hover:text-dp-red transition-colors">Pepper Perks</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Tuition Giveaway</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Merch Store</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Brand Story</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Store Locator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3 text-dp-cream/70 font-medium text-sm">
              <li><a href="#" className="hover:text-dp-red transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-dp-red transition-colors">Do Not Sell My Info</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-dp-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-dp-cream/40 font-medium">
          <p>&copy; {new Date().getFullYear()} Dr Pepper/Seven Up, Inc. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">DR PEPPER is a registered trademark of Dr Pepper/Seven Up, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
