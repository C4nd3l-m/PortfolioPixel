"use client"

import { motion } from "framer-motion";

export default function StatusBlock() {
    return (
        <div className="bento-card h-full flex flex-col items-start justify-between cursor-skull min-h-[200px]">
            <div className="w-full">
                <h3 className="text-xl md:text-2xl font-orbitron font-bold text-metal-white mb-2">
                    Availability
                </h3>
                <p className="text-metal-white/60 text-xs font-mono mb-4">
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
                    <div className="w-3 h-3 bg-metal-red rounded-full" />
                    <div className="absolute inset-0 bg-metal-red rounded-full animate-glow" />
                </motion.div>

                <div>
                    <p className="text-metal-white text-sm font-mono font-semibold">
                        Open to Work
                    </p>
                    <p className="text-metal-white/50 text-xs font-mono">
                        Remote • Part-time • Freelance
                    </p>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="w-full pt-4 border-t border-metal-white/10 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-metal-black border border-metal-white/20 text-[10px] text-metal-white/80 font-mono rounded">
                    Disponible remoto
                </span>
                <span className="px-2 py-1 bg-metal-black border border-metal-white/20 text-[10px] text-metal-white/80 font-mono rounded">
                    Trabajo con n8n en producción
                </span>
                <span className="px-2 py-1 bg-metal-black border border-metal-white/20 text-[10px] text-metal-white/80 font-mono rounded">
                    Certificaciones en curso
                </span>
            </div>

            {/* Contact Info */}
            <div className="w-full pt-4 border-t border-metal-white/10 space-y-1">
                <a
                    href="mailto:c4nd3l.m@gmail.com?subject=Oferta%20%7C%20Automation%20Developer"
                    className="text-metal-white/60 hover:text-metal-red text-xs font-mono block transition-colors"
                >
                    📧 c4nd3l.m@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/candelavillaverde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-metal-white/60 hover:text-metal-white text-xs font-mono block transition-colors"
                >
                    💼 LinkedIn Profile
                </a>
            </div>
        </div>
    );
}
