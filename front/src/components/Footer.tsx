"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathName = usePathname()

    if (pathName === "/") return null;

    return (
        <footer className="bg-black/50 backdrop-blur-md text-white py-4 flex flex-col items-center gap-2">
            <p className="text-xs">&copy; 2025 Candela Villaverde. All rights reserved.</p>

            <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/candela-villaverde/" target="_blank">
                    <Image
                        src="/icons/linkedin.gif"
                        alt="LinkedIn Icon"
                        width={24}
                        height={24}
                        className="hover:scale-110 transition-transform"
                    />
                </Link>

                <Link href="https://github.com/C4nd3l-m" target="_blank">
                    <Image
                        src="/icons/github.gif"
                        alt="GitHub Icon"
                        width={24}
                        height={24}
                        className="hover:scale-110 transition-transform"
                    />
                </Link>

                <Link href="mailto:c4nd3l.m@gmail.com">
                    <Image
                        src="/icons/gmail.gif"
                        alt="Gmail Icon"
                        width={24}
                        height={24}
                        className="hover:scale-110 transition-transform"
                    />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
