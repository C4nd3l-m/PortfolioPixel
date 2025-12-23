"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import techLogos from "@/helpers/logos";

export default function PotionsBlock() {
    return (
        <div className="bento-card h-full cursor-skull flex flex-col">
            <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-orbitron font-bold text-kuromi-white mb-2">
                    Tech Stack
                </h2>
                <p className="text-kuromi-white/60 text-xs font-mono">
                    Core Technologies
                </p>
            </div>

            {/* Tech Icons Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                {techLogos.map((logo, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: 0.01 * index,
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        }}
                        whileHover={{
                            scale: 1.1,
                            transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                        className="group relative"
                    >
                        <div className="w-full aspect-square bg-kuromi-purple/20 rounded-xl p-3 border border-kuromi-neon-purple/20 hover:border-kuromi-pink/50 hover:bg-kuromi-purple/30 transition-all duration-300 flex items-center justify-center group/icon">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={40}
                                height={40}
                                className={`object-contain transition-all duration-300 pointer-events-none group-hover/icon:scale-110 ${logo.invert ? "filter brightness-0 invert opacity-70 group-hover/icon:opacity-100" : "opacity-90 group-hover/icon:opacity-100"
                                    }`}
                            />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                            <div className="bg-kuromi-black/95 border border-kuromi-pink/40 px-2 py-1 rounded text-[11px] text-kuromi-pink whitespace-nowrap font-mono shadow-[0_0_15px_rgba(255,113,206,0.3)]">
                                {logo.name}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
