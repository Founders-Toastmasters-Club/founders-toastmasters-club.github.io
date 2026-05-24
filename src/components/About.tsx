import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Users,
  Award,
  Sparkles,
  BookOpen,
  Mic2,
} from "lucide-react";
import groupMeetingImage from "@/assets/team-meeting-group.png";
import { clubConfig } from "@/config/club";

const values = [
  {
    icon: Mic2,
    title: "Master Public Speaking",
    description:
      "Overcome fear and deliver compelling presentations with confidence.",
    color: "bg-loyal-blue/10 text-loyal-blue",
  },
  {
    icon: Users,
    title: "Build Leadership Skills",
    description:
      "Develop the ability to inspire, motivate, and guide teams effectively.",
    color: "bg-maroon/10 text-maroon",
  },
  {
    icon: Heart,
    title: "Foster Lasting Connections",
    description: "Join a supportive community of like-minded professionals.",
    color: "bg-happy-yellow/20 text-maroon",
  },
  {
    icon: Award,
    title: "Achieve Personal Growth",
    description: "Track your progress and celebrate milestones along the way.",
    color: "bg-cool-grey/10 text-cool-grey-dark",
  },
];

const journey = [
  {
    year: "2019",
    event: "Club Founded",
    desc: "Started with 12 passionate members",
  },
  {
    year: "2020",
    event: "Virtual Adaptation",
    desc: "Seamlessly transitioned to online meetings",
  },
  {
    year: "2022",
    event: "15+ Members",
    desc: "Grew to become Nepal's largest club",
  },
  {
    year: "2024",
    event: "Excellence Awards",
    desc: "Recognized for outstanding performance",
  },
];

export const About = () => {
  return (
    <section id="about" className="w-full py-20 md:py-24 lg:py-28 bg-gradient-to-b from-loyal-blue/5 to-white">
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
            <Sparkles size={16} />
            About {clubConfig.shortName}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where Dreams
            <br />
            <span className="text-accent">Meet Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in {clubConfig.foundedYear}, we've been Nepal's premier platform for developing
            world-class communication and leadership skills through the proven
            Toastmasters methodology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={groupMeetingImage}
                alt="Founders Toastmasters Club meeting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-2 bg-white rounded-2xl p-2 shadow-card border hidden sm:block"
            >
              <BookOpen className="text-accent" size={20} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -right-4 bg-accent text-white px-3 py-1 rounded-xl shadow-card text-sm hidden sm:block"
            >
              <p className="font-bold text-sm">{clubConfig.stats.yearsActive}+ Years</p>
              <p className="text-xs opacity-90">of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {clubConfig.name} stands as {clubConfig.location.city}'s most dynamic
                community for personal and professional development. As proud
                members of Toastmasters International District {clubConfig.district}, we combine
                time-tested methodologies with modern approaches to help you
                excel in public speaking and leadership.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our diverse membership includes entrepreneurs, educators,
                healthcare professionals, and young leaders - all united by the
                desire to communicate effectively and lead with purpose. Whether
                you're taking your first steps in public speaking or refining
                executive presence, our supportive environment ensures your
                success.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{clubConfig.stats.members}+</div>
                <div className="text-sm text-muted-foreground">
                  Active Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{clubConfig.stats.meetingsHeld}+</div>
                <div className="text-sm text-muted-foreground">
                  Meeting Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{clubConfig.stats.leadershipRoles}</div>
                <div className="text-sm text-muted-foreground">
                  Leadership Roles
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Makes Us Special
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon size={28} />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
