import { motion } from "framer-motion";
import { Mic, MessageCircle, ThumbsUp, Clock, Award, Users } from "lucide-react";
import tableTopicsImage from "@/assets/table-topics.jpg";
import evaluationImage from "@/assets/evaluation.jpg";

const meetingParts = [
  {
    icon: Mic,
    title: "Prepared Speeches",
    description: "Members deliver speeches from the Pathways curriculum, working on specific skills.",
  },
  {
    icon: MessageCircle,
    title: "Table Topics",
    description: "Impromptu speaking session where members respond to surprise questions on the spot.",
  },
  {
    icon: ThumbsUp,
    title: "Evaluations",
    description: "Constructive feedback from fellow members to help speakers improve their skills.",
  },
  {
    icon: Award,
    title: "Awards",
    description: "Recognition for best speaker, evaluator, and table topics participant of the day.",
  },
];

const benefits = [
  "Build confidence in public speaking",
  "Develop leadership and communication skills",
  "Network with professionals from diverse fields",
  "Receive constructive feedback in a safe space",
  "Progress through structured learning paths",
  "Participate in speech contests and events",
];

export const Meetings = () => {
  return (
    <section id="meetings" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Our Meetings
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Happens at a Meeting?
          </h2>
          <p className="text-muted-foreground text-lg">
            Every Wednesday, we gather for an engaging 90-minute session filled with speaking 
            opportunities, learning, and growth. Here's what to expect as a guest.
          </p>
        </motion.div>

        {/* Meeting Details */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src={tableTopicsImage}
                alt="Table Topics session"
                className="w-full h-auto rounded-xl shadow-card object-cover"
              />
              <div className="bg-primary text-primary-foreground p-5 rounded-xl">
                <Clock size={24} className="mb-2" />
                <p className="font-bold text-lg">Every Wednesday</p>
                <p className="opacity-80 text-sm">6:00 PM - 7:40 PM</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-secondary text-secondary-foreground p-5 rounded-xl">
                <Users size={24} className="mb-2" />
                <p className="font-bold text-lg">Guests Welcome</p>
                <p className="opacity-80 text-sm">No prior experience needed</p>
              </div>
              <img
                src={evaluationImage}
                alt="Evaluation session"
                className="w-full h-auto rounded-xl shadow-card object-cover"
              />
            </div>
          </motion.div>

          {/* Meeting Parts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Meeting Structure</h3>
            <div className="space-y-4">
              {meetingParts.map((part, index) => (
                <motion.div
                  key={part.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <part.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{part.title}</h4>
                    <p className="text-sm text-muted-foreground">{part.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Benefits of Joining
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur rounded-lg p-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
