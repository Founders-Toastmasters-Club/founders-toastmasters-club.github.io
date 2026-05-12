import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Mic,
  Trophy,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-speaking.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-loyal-blue/20 via-blissful-blue/15 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-maroon/10 via-accent/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blissful-blue/10 via-loyal-blue/5 to-accent/10 blur-3xl"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004165' fill-opacity='1'%3E%3Cpath d='M0 0h60v60H0V0zm1 1h58v58H1V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container-wide pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-loyal-blue font-medium text-sm border border-loyal-blue/10 shadow-lg shadow-loyal-blue/5"
              >
                <MapPin size={16} className="text-maroon" />
                Kathmandu, Nepal • District 41
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Craft Your Voice,
                <br />
                <span className="text-maroon">Shape Your Future</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Join Nepal's premier Toastmasters club where passionate
                individuals transform into confident leaders through the art of
                communication.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Join Our Community
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                variant="primaryOutline"
                size="lg"
                className="bg-white/50 backdrop-blur-sm"
              >
                <a href="#about">Discover More</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm">
                <div className="text-2xl font-bold text-loyal-blue">15+</div>
                <div className="text-sm text-muted-foreground">
                  Active Members
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm">
                <div className="text-2xl font-bold text-loyal-blue">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Strong
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm">
                <div className="text-2xl font-bold text-loyal-blue">200+</div>
                <div className="text-sm text-muted-foreground">
                  Meetings Completed
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg shadow-loyal-blue/10 border border-white/60 z-10 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-loyal-blue/10 rounded-lg flex items-center justify-center">
                    <Mic className="text-loyal-blue" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Public Speaking</div>
                    <div className="text-xs text-muted-foreground">
                      Master the art
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg shadow-loyal-blue/10 border border-white/60 z-10 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-maroon/10 rounded-lg flex items-center justify-center">
                    <Trophy className="text-maroon" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Leadership</div>
                    <div className="text-xs text-muted-foreground">
                      Lead with confidence
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Image */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-loyal-blue/10 border border-white/60 overflow-hidden">
                <img
                  src={heroImage}
                  alt="Toastmasters speaking event"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-maroon rounded-full flex items-center justify-center">
                      <Heart className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Founders Toastmasters</div>
                      <div className="text-sm text-muted-foreground">
                        Building leaders since 2019
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Meeting Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-loyal-blue/5 border border-white/60"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-loyal-blue/10 rounded-xl flex items-center justify-center">
                <Calendar className="text-loyal-blue" size={24} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Every Wednesday</p>
                <p className="text-muted-foreground text-sm">
                  6:00 PM - 7:30 PM
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center">
                <MapPin className="text-maroon" size={24} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Rooster Logic Pvt. Ltd.</p>
                <p className="text-muted-foreground text-sm">
                  Gairidhara, Kathmandu
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-loyal-blue/10 rounded-xl flex items-center justify-center">
                <Users className="text-loyal-blue" size={24} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">
                  Division C, Area C1
                </p>
                <p className="text-muted-foreground text-sm">District 41</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
