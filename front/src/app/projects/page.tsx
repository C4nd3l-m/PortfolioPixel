import Image from "next/image";
import Link from "next/link";
import arrProjects from "@/helpers/projects";

const Projects = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 mx-auto max-w-5xl">
                {arrProjects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-lg 
            hover:scale-105 transition-transform hover:bg-gray-700">
                        <Link href={project.href} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={project.src}
                                width={200}
                                height={200}
                                alt={project.alt}
                                className="rounded-md object-contain"
                            />
                        </Link>
                        <h3 className="text-white text-lg font-bold mt-4">{project.alt}</h3>
                    </div>
                ))}
            </div>

        </>
    )
}
export default Projects;