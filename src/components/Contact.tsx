import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Mail, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Rooster Logic Pvt. Ltd.",
    subvalue: "Gairidhara, Naxal, Kathmandu, Nepal",
  },
  {
    icon: Calendar,
    label: "Meeting Day",
    value: "Every Wednesday",
    subvalue: "Weekly meetings throughout the year",
  },
  {
    icon: Clock,
    label: "Time",
    value: "6:00 PM - 7:40 PM",
    subvalue: "Doors open 15 minutes early",
  },
  {
    icon: Mail,
    label: "Contact",
    value: "founderstoastmastersclub@gmail.com",
    subvalue: "Reach out for inquiries",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/FoundersToastmastersClub",
    color: "bg-[#1877F2]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/founderstoastmastersclub",
    color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Visit Us as a Guest
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to take the first step towards better communication and leadership? 
              We welcome guests at every meeting. Come see what Toastmasters is all about – 
              no obligation, just inspiration.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.subvalue}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="font-semibold text-foreground mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.label}</span>
                    <ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-10 text-primary-foreground h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Whether you want to conquer your fear of public speaking, advance in your career, 
                or simply connect with inspiring people, Founders Toastmasters Club is here to 
                support your growth.
              </p>

              <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 mb-8">
                <h4 className="font-bold text-lg mb-3">What to Expect as a Guest:</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    A warm welcome from our members
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Observe a full Toastmasters meeting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Optional participation in Table Topics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    No pressure – just come and experience
                  </li>
                </ul>
              </div>

              <Button variant="hero" size="xl" className="w-full" asChild>
                <a href="mailto:founderstoastmastersclub@gmail.com?subject=Guest Visit Inquiry - Founders Toastmasters Club">
                  <Mail size={20} className="mr-2" />
                  Contact to Visit
                </a>
              </Button>

              <p className="text-center text-sm text-primary-foreground/60 mt-4">
                Or simply show up at our next meeting – guests are always welcome!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
