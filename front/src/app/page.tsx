"use client"

import { motion } from "framer-motion";
import VillainBlock from "@/components/VillainBlock";
import PotionsBlock from "@/components/PotionsBlock";
import VaultBlock from "@/components/VaultBlock";
import StatusBlock from "@/components/StatusBlock";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-cyber-gradient overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header */}
                    <motion.header
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        className="mb-12 md:mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-kuromi-white mb-3">
                            Candela <span className="text-kuromi-pink">Villaverde</span>
                        </h1>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                            <p className="text-lg md:text-xl text-kuromi-neon-purple font-mono">
                                Frontend Developer
                            </p>
                            <span className="hidden md:inline text-kuromi-neon-purple/50">|</span>
                            <p className="text-sm md:text-base text-kuromi-white/70 font-mono">
                                React · Next.js · TypeScript · Astro
                            </p>
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-xs md:text-sm text-kuromi-white/50 font-mono">
                            <span>🇦🇷 Argentina</span>
                            <span>•</span>
                            <a href="mailto:c4nd3l.m@gmail.com" className="hover:text-kuromi-pink transition-colors">
                                c4nd3l.m@gmail.com
                            </a>
                            <span>•</span>
                            <a
                                href="https://www.linkedin.com/in/candelavillaverde/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-kuromi-neon-purple transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </motion.header>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)] mb-12">
                        {/* The Villain Block - 2x2 */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 20 }}
                            className="lg:col-span-2 lg:row-span-2"
                        >
                            <VillainBlock />
                        </motion.div>

                        {/* Potions & Spells Block - 2x2 */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 20 }}
                            className="lg:col-span-2 lg:row-span-2"
                        >
                            <PotionsBlock />
                        </motion.div>

                        {/* Status Block - 4x1 or similar? Let's make it span the gap if any, 
                            but since Villain and Potions take 2x2 each, they fill the 4 cols for 2 rows. 
                            So Status will go below them. */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 150, damping: 20 }}
                            className="lg:col-span-4"
                        >
                            <StatusBlock />
                        </motion.div>

                        {/* The Vault Block - 4x2 */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 150, damping: 20 }}
                            className="lg:col-span-4 lg:row-span-2"
                        >
                            <VaultBlock />
                        </motion.div>
                    </div>

                    {/* Footer */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Footer />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
