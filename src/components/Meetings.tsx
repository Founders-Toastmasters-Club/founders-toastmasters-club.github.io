import { motion } from "framer-motion";
import {
  Mic,
  MessageCircle,
  ThumbsUp,
  Clock,
  Award,
  Users,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";
import tableTopicsImage from "@/assets/table-topics.jpg";
import evaluationImage from "@/assets/evaluation.jpg";

const meetingFlow = [
  {
    time: "6:10 PM",
    title: "Welcome & Business",
    description: "Meeting opens with announcements and role assignments",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    time: "6:25 PM",
    title: "Prepared Speeches",
    description: "Members deliver planned speeches from Pathways curriculum",
    icon: Mic,
    color: "bg-green-50 text-green-600",
  },
  {
    time: "6:45 PM",
    title: "Table Topics",
    description: "Impromptu speaking - respond to surprise questions",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    time: "7:00 PM",
    title: "Evaluations",
    description: "Constructive feedback to help speakers improve",
    icon: ThumbsUp,
    color: "bg-purple-50 text-purple-600",
  },
  {
    time: "7:20 PM",
    title: "Awards & Close",
    description: "Recognition and meeting wrap-up",
    icon: Award,
    color: "bg-pink-50 text-pink-600",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Skill Development",
    desc: "Master public speaking through structured learning paths",
  },
  {
    icon: Lightbulb,
    title: "Confidence Building",
    desc: "Overcome fear and speak with authority in any situation",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Connect with professionals from diverse industries",
  },
  {
    icon: Award,
    title: "Recognition",
    desc: "Earn certifications and compete in speech contests",
  },
];

export const Meetings = () => {
  return (
    <section
      id="meetings"
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
            <Clock size={16} />
            Weekly Meetings
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience the
            <br />
            <span className="text-accent">Toastmasters Magic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us every Wednesday for an engaging 90-minute session where
            learning meets fun, and every member gets a chance to shine.
          </p>
        </motion.div>

        {/* Meeting Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            A Typical Meeting Flow
          </h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-accent/50"></div>

            <div className="space-y-8">
              {meetingFlow.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative flex items-center gap-6"
                >
                  {/* Time circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <item.icon size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex-1 hover:shadow-elevated transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-bold text-accent text-lg">
                        {item.time}
                      </span>
                      <h4 className="font-semibold text-foreground text-xl">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <img
                  src={tableTopicsImage}
                  alt="Table Topics session"
                  className="w-full h-48 object-cover rounded-2xl shadow-card"
                />
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl">
                  <Zap size={24} className="mb-2" />
                  <p className="font-bold text-lg">Table Topics</p>
                  <p className="text-sm opacity-90">Think on your feet!</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-12"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl">
                  <Mic size={24} className="mb-2" />
                  <p className="font-bold text-lg">Prepared Speeches</p>
                  <p className="text-sm opacity-90">Showcase your skills</p>
                </div>
                <img
                  src={evaluationImage}
                  alt="Evaluation session"
                  className="w-full h-48 object-cover rounded-2xl shadow-card"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Meeting Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Why Our Meetings Work
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our structured yet flexible format ensures everyone participates
                while learning at their own pace. From seasoned speakers to
                nervous beginners, every voice matters.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <Clock className="text-accent mb-3" size={32} />
                <h4 className="font-semibold text-foreground mb-1">
                  90 Minutes
                </h4>
                <p className="text-sm text-muted-foreground">
                  Efficient, engaging sessions
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <Users className="text-accent mb-3" size={32} />
                <h4 className="font-semibold text-foreground mb-1">
                  All Welcome
                </h4>
                <p className="text-sm text-muted-foreground">
                  No experience required
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Transform Your Life
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <benefit.icon className="text-accent" size={28} />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
