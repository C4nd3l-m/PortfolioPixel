"use client"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-kuromi-purple/30 backdrop-blur-md border-t border-kuromi-neon-purple/20 text-kuromi-white p-6 rounded-2xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Branding */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-orbitron font-bold text-kuromi-white mb-1">
                        Candela Villaverde
                    </h3>
                    <p className="text-xs text-kuromi-white/50 font-mono">
                        Full Stack Developer • Frontend Specialist
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 items-center">
                    <Link
                        href="https://github.com/C4nd3l-m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform cursor-skull opacity-80 hover:opacity-100"
                    >
                        <Image
                            src="/icons/github.gif"
                            alt="GitHub"
                            width={28}
                            height={28}
                            className="rounded-lg"
                            unoptimized={true}
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/candelavillaverde/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform cursor-skull opacity-80 hover:opacity-100"
                    >
                        <Image
                            src="/icons/linkedin.gif"
                            alt="LinkedIn"
                            width={28}
                            height={28}
                            className="rounded-lg"
                            unoptimized={true}
                        />
                    </Link>
                    <Link
                        href="mailto:c4nd3l.m@gmail.com"
                        className="hover:scale-110 transition-transform cursor-skull opacity-80 hover:opacity-100"
                    >
                        <Image
                            src="/icons/gmail.gif"
                            alt="Email"
                            width={28}
                            height={28}
                            className="rounded-lg"
                            unoptimized={true}
                        />
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right text-xs text-kuromi-white/40 font-mono">
                    <p>© 2025 All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
