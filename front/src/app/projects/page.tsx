import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return(
        <>
        <div>
            <Link href={"https://e-commerce-nextbyte.vercel.app/"}>
                
                <Image
                    src={"/nextByte.jpeg"}
                    width={20}
                    height={20}
                    alt="nextByte"
                />
            </Link>
        </div>
        </>
    )
}
export default Projects;