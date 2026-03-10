import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Mail,
  Facebook,
  Instagram,
  ExternalLink,
  Send,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Rooster Logic Pvt. Ltd.",
    subvalue: "Gairidhara, Naxal, Kathmandu",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Calendar,
    label: "Meeting Day",
    value: "Every Wednesday",
    subvalue: "Consistent weekly schedule",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Clock,
    label: "Time",
    value: "6:00 PM - 7:40 PM",
    subvalue: "90 minutes of inspiration",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "founderstoastmastersclub@gmail.com",
    subvalue: "Drop us a message anytime",
    color: "bg-purple-50 text-purple-600",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/FoundersToastmastersClub",
    color: "hover:bg-[#1877F2] hover:text-white",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/founderstoastmastersclub",
    color:
      "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white",
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            <Send size={16} />
            Join Our Community
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Journey
            <br />
            <span className="text-accent">Starts Here</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your communication skills? Visit us as a guest
            and discover the power of Toastmasters in a supportive, welcoming
            environment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Find Us & Connect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Located in the heart of Kathmandu, our meetings bring together
                professionals from all walks of life. Whether you're a complete
                beginner or looking to refine your skills, you'll find a
                welcoming community here.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium mb-1">
                        {info.label}
                      </p>
                      <p className="font-semibold text-foreground text-lg">
                        {info.value}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.subvalue}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Guest Experience */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 border border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Guest Experience
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a guest, you'll observe a complete Toastmasters meeting and
                have the option to participate. No preparation needed - just
                bring your enthusiasm!
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Warm welcome from our members",
                  "Observe prepared speeches and evaluations",
                  "Optional Table Topics participation",
                  "Networking with like-minded professionals",
                  "Free - no commitment required",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-white py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                <Mail size={20} className="mr-2" />
                <a
                  href="mailto:founderstoastmastersclub@gmail.com?subject=Guest Visit Inquiry"
                  className="inline-block text-sm"
                >
                  Email to Visit as Guest
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 text-center">
                <div className="text-3xl font-bold text-accent mb-1">0</div>
                <div className="text-sm text-muted-foreground">
                  Fee to Visit
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 text-center">
                <div className="text-3xl font-bold text-accent mb-1">90</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                <span className="font-medium">Pro tip:</span> Just show up!
                Guests are always welcome at our meetings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
