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
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-kuromi-neon-purple/40 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-lg shadow-kuromi-pink/20">
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
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-kuromi-pink rounded-full border-2 border-kuromi-black flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-3 h-3 bg-kuromi-white rounded-full"
                            />
                        </div>
                    </motion.div>

                    {/* Header Info */}
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-kuromi-white mb-2">
                            About Me
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 bg-kuromi-neon-purple/20 text-kuromi-neon-purple text-xs font-mono rounded-md border border-kuromi-neon-purple/30">
                                Frontend Developer
                            </span>
                            <span className="px-3 py-1 bg-kuromi-pink/20 text-kuromi-pink text-xs font-mono rounded-md border border-kuromi-pink/30">
                                React · Next.js · TypeScript
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
                    <p className="text-kuromi-white/90 text-sm md:text-base leading-relaxed">
                        Desarrolladora Web Full Stack trabajando en{" "}
                        <span className="text-kuromi-neon-purple font-semibold">Oberstaff</span> (Puerto Rico, remoto).
                        Especializada en{" "}
                        <span className="text-kuromi-pink font-semibold">React, Next.js 14, TypeScript y Astro</span>,
                        con experiencia en automatizaciones con n8n y despliegues en Coolify.
                    </p>

                    <p className="text-kuromi-white/80 text-sm leading-relaxed">
                        Actualmente ampliando mi stack hacia backend con{" "}
                        <span className="text-kuromi-neon-purple font-semibold">PHP y Laravel</span>.
                        Me especializo en crear interfaces limpias, accesibles y optimizadas, aplicando buenas prácticas,
                        versionado con Git y arquitectura modular.
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-kuromi-neon-purple rounded-full" />
                            <span className="text-kuromi-white/70 text-xs font-mono">🇦🇷 Argentina</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-kuromi-pink rounded-full" />
                            <span className="text-kuromi-white/70 text-xs font-mono">ES / EN (B1)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-kuromi-neon-purple rounded-full" />
                            <span className="text-kuromi-white/70 text-xs font-mono">Remote</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-kuromi-pink rounded-full" />
                            <span className="text-kuromi-white/70 text-xs font-mono">Part-time</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
