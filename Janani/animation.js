import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 text-gray-800">
      {/* Hero Section */}
      <motion.div
        className="text-center pt-28"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold tracking-tight text-blue-600">
          Welcome to Janani
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Empowering maternal & infant health through AI and IoT
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8"
        >
          <Button className="rounded-full px-6 py-3 text-lg shadow-xl">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Feature Cards Section */}
      {showContent && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              title: "AI-Powered Assistance",
              desc: "Intelligent symptom tracking and alerts in native languages.",
            },
            {
              title: "IoT-Enabled Monitoring",
              desc: "Connect vital monitors for real-time health tracking.",
            },
            {
              title: "Doctor-Integrated Access",
              desc: "Secure doctor onboarding and patient history sharing.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

