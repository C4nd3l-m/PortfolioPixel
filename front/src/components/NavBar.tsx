"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname() 

    if(pathName === "/") return null;
    return(
        <div> 
            <Link href={"/"}>Home</Link>

            <Link href={"/about"}>About</Link>

            <Link href={"/projects"}>Projects</Link>

            <Link href={"/contact"}>Contact</Link>
        </div>
    )
}

export default NavBar;