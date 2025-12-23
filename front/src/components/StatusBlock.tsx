"use client"

import { motion } from "framer-motion";

export default function StatusBlock() {
    return (
        <div className="bento-card h-full flex flex-col items-start justify-between cursor-skull min-h-[200px]">
            <div className="w-full">
                <h3 className="text-xl md:text-2xl font-orbitron font-bold text-kuromi-white mb-2">
                    Availability
                </h3>
                <p className="text-kuromi-white/60 text-xs font-mono mb-4">
                    Current Status
                </p>
            </div>

            {/* Availability Indicator */}
            <div className="flex items-center gap-3 w-full">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative"
                >
                    <div className="w-3 h-3 bg-kuromi-pink rounded-full" />
                    <div className="absolute inset-0 bg-kuromi-pink rounded-full animate-glow" />
                </motion.div>

                <div>
                    <p className="text-kuromi-white text-sm font-mono font-semibold">
                        Open to Work
                    </p>
                    <p className="text-kuromi-white/50 text-xs font-mono">
                        Remote • Part-time • Freelance
                    </p>
                </div>
            </div>

            {/* Contact Info */}
            <div className="w-full pt-4 border-t border-kuromi-neon-purple/20 space-y-1">
                <a
                    href="mailto:c4nd3l.m@gmail.com"
                    className="text-kuromi-white/60 hover:text-kuromi-pink text-xs font-mono block transition-colors"
                >
                    📧 c4nd3l.m@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/candelavillaverde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kuromi-white/60 hover:text-kuromi-neon-purple text-xs font-mono block transition-colors"
                >
                    💼 LinkedIn Profile
                </a>
            </div>
        </div>
    );
}
