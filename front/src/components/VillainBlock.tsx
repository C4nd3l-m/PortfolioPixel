"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function VillainBlock() {
    return (
        <div className="bento-card h-full flex flex-col justify-between cursor-skull group relative overflow-hidden">
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(157, 78, 221, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(157, 78, 221, 0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }} />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                    {/* Profile Image */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative flex-shrink-0"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-metal-white/20 overflow-hidden shadow-lg shadow-black/40">
                            <Image
                                src="/profile.jpg"
                                alt="Candela Villaverde"
                                width={128}
                                height={128}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        {/* Status indicator */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-metal-red rounded-full border-2 border-metal-black flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-3 h-3 bg-metal-white rounded-full"
                            />
                        </div>
                    </motion.div>

                    {/* Header Info */}
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-metal-white tracking-widest uppercase mb-2">
                            SYSTEM ARCHITECT
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 bg-metal-white/10 text-metal-white text-xs font-mono rounded-md border border-metal-white/20">
                                Fullstack Developer
                            </span>
                            <span className="px-3 py-1 bg-metal-white/10 text-metal-white text-xs font-mono rounded-md border border-metal-white/20">
                                n8n · Next.js · Node.js
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                >
                    <p className="text-metal-white/90 text-sm md:text-base leading-relaxed font-mono tracking-wide uppercase">
                        I architect and deploy digital ecosystems that don&apos;t sleep.
                    </p>

                    <p className="text-metal-white/70 text-sm leading-relaxed font-mono">
                        Estructuro el caos operativo mediante arquitecturas backend sólidas, interfaces precisas en <span className="text-metal-red font-bold">React/Next.js</span> y flujos de automatización implacables con <span className="text-metal-red font-bold">n8n</span>. Optimizo lo ineficiente y construyo lo que escala.
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-metal-white rounded-full" />
                            <span className="text-metal-white/70 text-xs font-mono">🇦🇷 Argentina</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-metal-red rounded-full" />
                            <span className="text-metal-white/70 text-xs font-mono">ES / EN (B1)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-metal-white rounded-full" />
                            <span className="text-metal-white/70 text-xs font-mono">Remote</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-metal-red rounded-full" />
                            <span className="text-metal-white/70 text-xs font-mono">Part-time</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
