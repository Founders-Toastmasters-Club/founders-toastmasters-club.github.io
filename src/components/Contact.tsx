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
import { clubConfig, formatMeetingSchedule, formatMeetingTime } from "@/config/club";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: clubConfig.location.venue,
    subvalue: clubConfig.location.fullAddress,
    color: "bg-loyal-blue/10 text-loyal-blue",
  },
  {
    icon: Calendar,
    label: "Meeting Day",
    value: formatMeetingSchedule(),
    subvalue: "Consistent weekly schedule",
    color: "bg-happy-yellow/20 text-maroon",
  },
  {
    icon: Clock,
    label: "Time",
    value: formatMeetingTime(),
    subvalue: `${clubConfig.meeting.duration} minutes of inspiration`,
    color: "bg-cool-grey/10 text-cool-grey-dark",
  },
  {
    icon: Mail,
    label: "Email",
    value: clubConfig.contact.email,
    subvalue: "Drop us a message anytime",
    color: "bg-maroon/10 text-maroon",
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

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-cool-grey/5"
    >
      <div className="container-wide px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-loyal-blue/10 text-loyal-blue font-medium text-xs md:text-sm mb-3 md:mb-4">
            <Send size={14} className="md:w-4 md:h-4" />
            Join Our Community
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Your Journey
            <br className="hidden sm:block" />
            <span className="text-maroon">Starts Here</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            Ready to transform your communication skills? Visit us as a guest
            and discover the power of Toastmasters in a supportive, welcoming
            environment.
          </p>
        </motion.div>

        {/* Mobile-first layout: Stack on mobile, side-by-side on larger screens */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          {/* CTA Section - Prominent on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Guest Experience Card */}
            <div className="bg-gradient-to-br from-loyal-blue/5 to-loyal-blue/10 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-loyal-blue/20 shadow-card mb-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-loyal-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={18} />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                  Guest Experience
                </h3>
              </div>

              <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                As a guest, you'll observe a complete Toastmasters meeting and
                have the option to participate. No preparation needed - just
                bring your enthusiasm!
              </p>

              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {[
                  "Warm welcome from our members",
                  "Observe prepared speeches and evaluations",
                  "Optional Table Topics participation",
                  "Networking with like-minded professionals",
                  "Free - no commitment required",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-loyal-blue rounded-full flex-shrink-0 mt-1.5"></div>
                    <span className="text-foreground text-sm md:text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="primary" className="w-full py-3 md:py-4 text-sm md:text-base lg:text-lg rounded-xl flex items-center justify-center gap-2">
                <Mail size={16} />
                <a
                  href={`mailto:${clubConfig.contact.email}?subject=Guest Visit Inquiry`}
                  className="inline-block"
                >
                  Email to Visit as Guest
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-soft border border-gray-100 text-center hover:shadow-card transition-shadow duration-300">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-loyal-blue mb-1">0</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Fee to Visit
                </div>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-soft border border-gray-100 text-center hover:shadow-card transition-shadow duration-300">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-loyal-blue mb-1">{clubConfig.meeting.duration}</div>
                <div className="text-xs md:text-sm text-muted-foreground">Minutes</div>
              </div>
            </div>

            {/* Pro tip */}
            <div className="text-center bg-loyal-blue/5 rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 border border-loyal-blue/10">
              <p className="text-muted-foreground text-sm md:text-base">
                <span className="font-medium text-loyal-blue">Pro tip:</span> Just show up!
                Guests are always welcome at our meetings.
              </p>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=""
          >
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4 lg:mb-6">
                Find Us & Connect
              </h3>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
                Located in the heart of Kathmandu, our meetings bring together
                professionals from all walks of life. Whether you're a complete
                beginner or looking to refine your skills, you'll find a
                welcoming community here.
              </p>
            </div>

            <div className="grid gap-3 md:gap-4 lg:grid-cols-1">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground font-medium mb-1">
                        {info.label}
                      </p>
                      <p className="font-semibold text-foreground text-sm md:text-base lg:text-lg leading-tight">
                        {info.value}
                      </p>
                      <p className="text-muted-foreground text-xs md:text-sm leading-tight">
                        {info.subvalue}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
