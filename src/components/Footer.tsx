import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  ExternalLink,
  Heart,
  Users,
  Mic,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { clubConfig } from "@/config/club";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Meetings", href: "#meetings" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: clubConfig.location.venue,
      subvalue: clubConfig.location.fullAddress,
      color: "bg-loyal-blue/10 text-loyal-blue",
      link: clubConfig.location.mapUrl,
    },
    {
      icon: Mail,
      label: "Email",
      value: clubConfig.contact.email,
      subvalue: "Drop us a message",
      color: "bg-happy-yellow/20 text-maroon",
      link: `mailto:${clubConfig.contact.email}`,
    },
    {
      icon: ExternalLink,
      label: clubConfig.name,
      value: `District ${clubConfig.district}, Division ${clubConfig.division}, Area ${clubConfig.area}`,
      subvalue: `Club No. ${clubConfig.clubNumber}`,
      color: "bg-maroon/10 text-maroon",
      link: clubConfig.toastmastersUrl,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: clubConfig.social.facebook,
      color: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: clubConfig.social.instagram,
      color:
        "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-cool-grey/10 to-white border-t border-cool-grey/20">
      <div className="container-wide py-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src={logo}
                  alt="Founders Toastmasters Club Logo"
                  className="w-14 h-14 rounded-full ring-2 ring-loyal-blue/20"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-loyal-blue rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={12} />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl text-foreground">
                  {clubConfig.shortName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {clubConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building confident communicators and leaders in {clubConfig.location.city}, {clubConfig.location.country}.
              A proud member of Toastmasters International, District {clubConfig.district}.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white border-2 border-gray-200 text-foreground p-3 rounded-xl hover:border-transparent transition-all duration-300 ${social.color} shadow-soft hover:shadow-card`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:justify-self-center"
          >
            <h4 className="font-semibold text-lg text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-loyal-blue transition-colors duration-300 text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg text-foreground mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-4 shadow-soft border border-gray-100 hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${info.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a
                        href={info.link}
                        target="_blank"
                        className="text-sm text-muted-foreground hover:text-loyal-blue transition-colors duration-300"
                      >
                        <p className="text-sm font-medium text-foreground">
                          {info.label}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          {info.value}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          {info.subvalue}
                        </p>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-loyal-blue/10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Users className="text-loyal-blue" size={24} />
            </div>
            <div className="text-2xl font-bold text-loyal-blue">{clubConfig.stats.members}+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Mic className="text-maroon" size={24} />
            </div>
            <div className="text-2xl font-bold text-maroon">{clubConfig.stats.meetingsHeld}+</div>
            <div className="text-sm text-muted-foreground">
              Meetings Completed
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-loyal-blue/10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Award className="text-loyal-blue" size={24} />
            </div>
            <div className="text-2xl font-bold text-loyal-blue">{clubConfig.stats.yearsActive}+</div>
            <div className="text-sm text-muted-foreground">
              Years of Excellence
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Heart className="text-maroon" size={24} />
            </div>
            <div className="text-2xl font-bold text-maroon">100%</div>
            <div className="text-sm text-muted-foreground">
              Passionate Community
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground mb-4">
            <p>
              © {currentYear} Founders Toastmasters Club, Nepal. All rights
              reserved.
            </p>
            <p>
              Proudly part of{" "}
              <a
                href="https://www.toastmasters.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-loyal-blue hover:text-loyal-blue/80 transition-colors duration-300 font-medium underline"
              >
                Toastmasters International
              </a>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-xs text-muted-foreground/70 max-w-4xl mx-auto">
            <p>
              The information on this website is for the sole use of
              Toastmasters' members, for Toastmasters business only. It is not
              to be used for solicitation and distribution of non-Toastmasters
              material or information.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
