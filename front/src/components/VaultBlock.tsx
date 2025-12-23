"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arrProjects from "@/helpers/projects";

export default function VaultBlock() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <div className="bento-card h-full cursor-skull">
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-kuromi-white mb-2">
                    Featured Projects
                </h2>
                <p className="text-kuromi-white/60 text-sm font-mono">
                    Recent work and contributions
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {arrProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        onHoverStart={() => setHoveredProject(index)}
                        onHoverEnd={() => setHoveredProject(null)}
                        className="relative group"
                    >
                        <div className="block">
                            <motion.div
                                whileHover={project.isConfidential ? {} : {
                                    y: -4,
                                    transition: { type: "spring", stiffness: 400, damping: 15 },
                                }}
                                className={`bg-kuromi-purple/20 rounded-xl border border-kuromi-neon-purple/20 ${project.isConfidential ? '' : 'hover:border-kuromi-pink/50'} overflow-hidden transition-all duration-300 h-full`}
                            >
                                {/* Project Image */}
                                <div className="relative w-full aspect-video bg-kuromi-black/60 overflow-hidden">
                                    <Image
                                        src={project.src}
                                        alt={project.alt}
                                        fill
                                        className={`object-cover ${project.isConfidential ? '' : 'group-hover:scale-105'} transition-transform duration-500`}
                                    />
                                    {/* Overlay gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-kuromi-black/80 via-transparent to-transparent opacity-0 ${project.isConfidential ? '' : 'group-hover:opacity-100'} transition-opacity duration-300`} />
                                </div>

                                {/* Project Info */}
                                <div className="p-4">
                                    <h3 className={`text-kuromi-white font-orbitron font-bold text-base mb-2 ${project.isConfidential ? '' : 'group-hover:text-kuromi-pink'} transition-colors`}>
                                        {project.alt}
                                    </h3>
                                    <p className="text-kuromi-white/60 text-xs font-mono line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* View project indicator */}
                                    <div className={`mt-3 flex items-center gap-2 ${project.isConfidential ? 'text-kuromi-white/40' : 'text-kuromi-neon-purple group-hover:text-kuromi-pink'} transition-colors`}>
                                        {project.isConfidential ? (
                                            <span className="text-xs font-mono opacity-60">Confidential Project</span>
                                        ) : (
                                            <>
                                                <Link
                                                    href={project.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs font-mono flex items-center gap-2"
                                                >
                                                    View Project
                                                    <motion.span
                                                        animate={{ x: hoveredProject === index ? 4 : 0 }}
                                                        transition={{ type: "spring", stiffness: 400 }}
                                                    >
                                                        →
                                                    </motion.span>
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
