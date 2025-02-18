"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname()

    if (pathName === "/") return null;
    return (
        <div className="fixed top-0 w-full bg-black text-white p-4 flex gap-6 justify-center items-center">

            <Link href={"/"} className="flex flex-col items-center">
                <Image
                    src="/icons/home.png"
                    alt="Home Icon"
                    width={24}  
                    height={24} 
                />
                <span>Home</span>
            </Link>

            <Link href={"/about"} className="flex flex-col items-center">
                <Image
                    src="/icons/about.png"
                    alt="About Icon"
                    width={24}  
                    height={24}
                />
                <span>About Me</span>
            </Link>

            <Link href={"/projects"} className="flex flex-col items-center">
                <Image
                    src="/icons/projects.png"
                    alt="Projects Icon"
                    width={24}  
                    height={24}
                />
                <span>Projects</span>
            </Link>

            <Link href={"/contact"} className="flex flex-col items-center">
                <Image 
                    src="/icons/contact.png"
                    alt="Contact Icon"
                    width={24}  
                    height={24}
                />
                <span>Contact</span>
            </Link>
        </div>
    )
}

export default NavBar;