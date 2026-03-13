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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-metal-white mb-3 tracking-widest uppercase">
                            CANDELA <span className="text-metal-red">VILLAVERDE</span>
                        </h1>
                        
                        {/* Top-right "Contrátame" button (absolute positioning for md+ screens) */}
                        <div className="absolute top-8 right-4 md:right-8 lg:right-12 hidden md:block z-50">
                            <a href="mailto:c4nd3l.m@gmail.com?subject=Oferta%20%7C%20Automation%20Developer" className="px-5 py-2.5 bg-metal-red text-metal-black font-mono font-bold text-sm rounded-lg hover:bg-metal-white transition-colors shadow-[0_0_15px_rgba(255,113,206,0.4)]">
                                Contrátame
                            </a>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <p className="text-xl md:text-2xl text-metal-white font-mono font-bold tracking-wide uppercase">
                                Fullstack Developer · Automation & AI Workflows
                            </p>
                            <p className="text-sm md:text-base text-metal-white/70 font-mono max-w-2xl leading-relaxed mt-4">
                                Construyo plataformas web e integraciones automatizadas que escalan operaciones.<br/>
                                Reemplazo el caos manual con <span className="text-metal-red font-semibold">lógica estructurada</span> utilizando <span className="text-metal-white font-semibold">React/Next.js</span> y flujos <span className="text-metal-white font-semibold">n8n</span> desde el vacío.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4 mt-8 mb-4">
                            <a href="/projects" className="px-6 py-3 bg-metal-white hover:bg-metal-red text-metal-black hover:text-metal-white font-mono font-bold rounded shadow-[0_0_15px_rgba(136,8,8,0.2)] hover:shadow-[0_0_20px_rgba(136,8,8,0.5)] transition-all uppercase tracking-wider text-sm">
                                Ver Case Studies
                            </a>
                            <a href="/Candela_Villaverde_CV.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent hover:bg-metal-red/10 text-metal-white font-mono rounded transition-colors border border-metal-white/20 hover:border-metal-red uppercase tracking-wider text-sm">
                                Descargar CV
                            </a>
                            {/* Mobile Contrátame CTA */}
                            <a href="mailto:c4nd3l.m@gmail.com?subject=Oferta%20%7C%20Automation%20Developer" className="md:hidden px-6 py-3 bg-metal-red text-metal-white font-mono font-bold rounded uppercase tracking-wider transition-colors text-sm">
                                Contrátame
                            </a>
                        </div>
                        <div className="flex items-center gap-3 mt-6 text-xs md:text-sm text-metal-white/50 font-mono">
                            <span>🇦🇷 Argentina</span>
                            <span>•</span>
                            <a href="mailto:c4nd3l.m@gmail.com?subject=Contacto%20%7C%20Portfolio" className="hover:text-metal-red transition-colors">
                                c4nd3l.m@gmail.com
                            </a>
                            <span>•</span>
                            <a
                                href="https://www.linkedin.com/in/candelavillaverde/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-metal-white transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </motion.header>

                    {/* Services / Qué hago Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
                        <div className="bento-card border border-metal-white/10 hover:border-metal-red/40 bg-metal-black mt-2 shadow-lg transition-all duration-300">
                            <h3 className="text-lg font-orbitron font-bold text-metal-white tracking-widest uppercase mb-2">PERCEPTION</h3>
                            <p className="text-sm text-metal-white/70 font-mono mb-3">Interfaces precisas y de alto impacto visual. Forjadas con React, Next.js y TailwindCSS para dominar la presencia digital.</p>
                            <p className="text-xs text-metal-red font-bold font-mono tracking-widest uppercase">→ Inmersivo</p>
                        </div>
                        <div className="bento-card border border-metal-white/10 hover:border-metal-red/40 bg-metal-black mt-2 shadow-lg transition-all duration-300">
                            <h3 className="text-lg font-orbitron font-bold text-metal-white tracking-widest uppercase mb-2">CORE SYSTEMS</h3>
                            <p className="text-sm text-metal-white/70 font-mono mb-3">Arquitecturas sólidas e implacables. CRMs remotos, paneles integrales y APIs de alta seguridad (Node.js/Supabase).</p>
                            <p className="text-xs text-metal-red font-bold font-mono tracking-widest uppercase">→ Inquebrantable</p>
                        </div>
                        <div className="bento-card border border-metal-white/10 hover:border-metal-red/40 bg-metal-black mt-2 shadow-lg transition-all duration-300">
                            <h3 className="text-lg font-orbitron font-bold text-metal-white tracking-widest uppercase mb-2">AUTOMATION</h3>
                            <p className="text-sm text-metal-white/70 font-mono mb-3">Integración de ecosistemas en el vacío. Triggers en n8n y flujos LLM para escalar datos masivos sin pérdida operativa.</p>
                            <p className="text-xs text-metal-red font-bold font-mono tracking-widest uppercase">→ Cero Fricción</p>
                        </div>
                    </div>
                
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8 text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-metal-black/50 border border-metal-white/30 rounded-full text-xs font-mono text-metal-white/90">
                            <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2 animate-pulse"></span>
                            Disponible 100% remoto — contratos full-time / part-time
                        </span>
                    </motion.div>

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
