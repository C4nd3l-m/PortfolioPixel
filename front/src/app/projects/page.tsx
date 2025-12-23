import Image from "next/image";
import Link from "next/link";
import arrProjects from "@/helpers/projects";

const Projects = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-40 mb-20 mx-auto max-w-5xl">
                {arrProjects.map((project, index) => (
                    <div key={index} className={`flex flex-col items-center rounded-lg p-4 shadow-lg ${project.isConfidential ? '' : 'hover:scale-105'} transition-transform`}>
                        {project.isConfidential ? (
                            <Image
                                src={project.src}
                                width={200}
                                height={200}
                                alt={project.alt}
                                className="rounded-md object-contain grayscale opacity-60"
                            />
                        ) : (
                            <Link href={project.href} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={project.src}
                                    width={200}
                                    height={200}
                                    alt={project.alt}
                                    className="rounded-md object-contain"
                                />
                            </Link>
                        )}
                        <h3 className="text-white text-lg font-bold mt-4">{project.alt}</h3>
                        <p className="text-gray-300 text-sm mt-2 text-center">{project.description}</p>
                        {project.isConfidential && (
                            <span className="text-xs font-mono text-kuromi-pink mt-2 uppercase tracking-widest bg-kuromi-pink/10 px-2 py-1 rounded">Confidential</span>
                        )}
                    </div>
                ))}
            </div>

        </>
    )
}
export default Projects;