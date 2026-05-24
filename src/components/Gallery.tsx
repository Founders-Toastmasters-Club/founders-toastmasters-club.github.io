import { motion } from "framer-motion";
import { Camera, Heart, Users, Mic, Trophy, Star, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import milestone200Meeting from "@/assets/200th-meeting.jpeg";
import groupPhoto from "@/assets/Group-photo.jpeg";
import jointMeetingAIN from "@/assets/Joint-meeting-with-AIN.jpeg";
import jointMeetingSagarmatha from "@/assets/Joint-meeting-with-Sagarmatha.jpeg";
import maghiGroupPhoto from "@/assets/Maghi-group-photo.jpeg";
import meetingGlimpses from "@/assets/Meeting-glimpses.jpeg";
import tableTopicContest from "@/assets/Table-topic-contest-2026.jpeg";

const galleryImages = [
  // Row 1: 200th Meeting - Full width banner
  {
    src: milestone200Meeting,
    alt: "200th Meeting Celebration",
    title: "200th Meeting",
    desc: "A historic milestone celebration",
    icon: Trophy,
    span: "md:col-span-4",
    aspect: "aspect-[21/9]",
  },
  // Row 2: Own club meetings - Community spans 2 rows, portrait images stacked
  {
    src: groupPhoto,
    alt: "Group photo of members",
    title: "Community",
    desc: "Our vibrant Toastmasters family",
    icon: Users,
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    src: maghiGroupPhoto,
    alt: "Maghi festival celebration",
    title: "Maghi Celebration",
    desc: "Embracing culture and traditions",
    icon: PartyPopper,
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    src: meetingGlimpses,
    alt: "Meeting glimpses",
    title: "Meeting Glimpses",
    desc: "Moments from our regular sessions",
    icon: Camera,
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  // Row 3: Joint meetings stacked on left, Contest independent on right
  {
    src: jointMeetingAIN,
    alt: "Joint meeting with AIN Toastmasters",
    title: "AIN Joint Meet",
    desc: "Collaboration across clubs",
    icon: Heart,
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    src: tableTopicContest,
    alt: "Table Topic Contest 2026",
    title: "Contest 2026",
    desc: "Impromptu speaking at its finest",
    icon: Mic,
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    src: jointMeetingSagarmatha,
    alt: "Joint meeting with Sagarmatha Toastmasters",
    title: "Sagarmatha Meet",
    desc: "Building bridges together",
    icon: Star,
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-loyal-blue/10 text-loyal-blue font-medium text-sm mb-4">
            <Camera size={16} />
            Our Story in Pictures
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Capturing
            <br />
            <span className="text-maroon">Memorable Moments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From nervous first speeches to triumphant victories, every moment at
            Founders Toastmasters tells a story of growth and connection.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 auto-rows-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative overflow-hidden rounded-3xl shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 ${image.span}`}
            >
              <div className={`${image.aspect} overflow-hidden`}>
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
                <image.icon className="text-loyal-blue" size={20} />
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
            <Camera className="text-loyal-blue mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Be in Our Next Photo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join us at our next meeting and become part of the Founders
              Toastmasters story. Every member starts somewhere - let us capture
              your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="px-6 py-3 rounded-xl">
                <a href="#contact">Visit as Guest</a>
              </Button>
              <Button variant="primaryOutline" className="px-6 py-3 rounded-xl">
                <a
                  href="https://www.instagram.com/founderstoastmastersclub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
