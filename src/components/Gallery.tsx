import { motion } from "framer-motion";
import { Camera, Heart, Users, Mic, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-speaking.jpg";
import groupMeetingImage from "@/assets/group-meeting.jpg";
import tableTopicsImage from "@/assets/table-topics.jpg";
import evaluationImage from "@/assets/evaluation.jpg";
import leadershipImage from "@/assets/leadership.jpg";

const galleryImages = [
  {
    src: heroImage,
    alt: "Dynamic speaking session",
    title: "In Action",
    desc: "Members delivering powerful presentations",
    icon: Mic,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: groupMeetingImage,
    alt: "Group celebration",
    title: "Community",
    desc: "Celebrating achievements together",
    icon: Users,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: tableTopicsImage,
    alt: "Table Topics excitement",
    title: "Impromptu",
    desc: "Thinking on your feet",
    icon: Heart,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: evaluationImage,
    alt: "Evaluation session",
    title: "Growth",
    desc: "Constructive feedback in action",
    icon: Trophy,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: leadershipImage,
    alt: "Leadership meeting",
    title: "Leadership",
    desc: "Developing tomorrow's leaders",
    icon: Camera,
    span: "md:col-span-1 md:row-span-1",
  },
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="w-full py-20 md:py-24 lg:py-28 bg-gradient-to-b from-cool-grey/5 to-white"
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
            <Camera size={16} />
            Our Story in Pictures
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Capturing
            <br />
            <span className="text-accent">Memorable Moments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From nervous first speeches to triumphant victories, every moment at
            Founders Toastmasters tells a story of growth and connection.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative overflow-hidden rounded-3xl shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 ${image.span}`}
            >
              <div className="aspect-square md:aspect-auto overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <image.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-xl">
                    {image.title}
                  </h3>
                </div>
                <p className="text-white/90 text-sm">{image.desc}</p>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <image.icon className="text-accent" size={20} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 max-w-2xl mx-auto">
            <Camera className="text-accent mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Be in Our Next Photo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join us at our next meeting and become part of the Founders
              Toastmasters story. Every member starts somewhere - let us capture
              your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="block sm:inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300"
              >
                Visit as Guest
              </a>
              <a
                href="https://www.instagram.com/founderstoastmastersclub"
                target="_blank"
                rel="noopener noreferrer"
                className="block sm:inline-flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
