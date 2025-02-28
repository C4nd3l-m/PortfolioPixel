import Image from "next/image";
import Link from "next/link";
import arrProjects from "@/helpers/projects";

const Projects = () => {
    return (
        <>
            <div>
                {arrProjects.map((project, index) => (
                    <div key={index}>
                        <Link href={project.href}>
                            <Image className="mt-40 ml-20 mb-10 mr-5"
                                src={project.src}
                                width={200}
                                height={200}
                                alt={project.alt}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Projects;