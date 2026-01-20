import { Facebook, Instagram, MapPin, Mail, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark text-primary-foreground">
      <div className="container-wide py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Founders Toastmasters Club Logo" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold text-lg">Founders Toastmasters Club</p>
                <p className="text-sm text-primary-foreground/70">Where Leaders Are Made</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-md mb-6">
              A member of Toastmasters International, District 41, Division D, Area C1. 
              Building confident communicators and leaders in Kathmandu, Nepal.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/FoundersToastmastersClub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/founderstoastmastersclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#meetings" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Our Meetings
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Rooster Logic Pvt. Ltd., Gairidhara, Naxal</span>
              </li>
              <li>
                <a 
                  href="mailto:founderstoastmastersclub@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} />
                  founderstoastmastersclub@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.toastmasters.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <ExternalLink size={16} />
                  Toastmasters International
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Founders Toastmasters Club, Nepal. All rights reserved.</p>
            <p>
              Part of{" "}
              <a 
                href="https://www.toastmasters.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-primary-foreground transition-colors"
              >
                Toastmasters International
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
