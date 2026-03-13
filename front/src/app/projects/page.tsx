import Image from "next/image";
import Link from "next/link";
import arrProjects from "@/helpers/projects";

const Projects = () => {
    // Definimos el tipo localmente para evitar errores en strict mode, ya que projects.ts no exporta el tipo
    const caseStudies = arrProjects.filter((p: any) => p.isCaseStudy);
    const miniProjects = arrProjects.filter((p: any) => !p.isCaseStudy);

    return (
        <div className="min-h-screen w-full bg-cyber-gradient overflow-x-hidden pb-10">
            <div className="flex flex-col gap-12 mt-32 mx-auto max-w-5xl px-4 lg:px-8">
                
                {/* Header Case Studies */}
                <div className="text-center mb-4">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-metal-white">Case Studies</h2>
                    <p className="text-metal-red mt-4 font-mono">Plataformas, Interfaces & Workflows</p>
                </div>

                {/* Lista de Case Studies */}
                <div className="flex flex-col gap-12">
                    {caseStudies.map((project: any, index: number) => (
                        <div key={index} className="bento-card border border-metal-red/30 p-6 md:p-8 bg-metal-black/60 shadow-[0_0_20px_rgba(255,113,206,0.1)]">
                            <h3 className="text-2xl font-orbitron font-bold text-metal-red mb-4">{project.title}</h3>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-4 font-mono text-sm text-metal-white/80">
                                    <p><strong className="text-metal-white">Rol:</strong> {project.role}</p>
                                    <p><strong className="text-metal-white">Problema:</strong> {project.problem}</p>
                                    <p><strong className="text-metal-white">Solución:</strong> {project.solution}</p>
                                    <p><strong className="text-metal-white">Tecnologías:</strong> {project.technologies?.join(" · ")}</p>
                                    <p><strong className="text-metal-white">Impacto:</strong> {project.impact}</p>
                                    
                                    <div className="pt-4 flex flex-wrap items-center gap-4 text-xs">
                                        <Link href={project.demo || "#"} target="_blank" className="bg-metal-red/20 px-3 py-1.5 rounded border border-metal-red/50 text-metal-red hover:bg-metal-red hover:text-metal-black transition-colors">
                                            Live Demo
                                        </Link>
                                        <Link href={project.github || "#"} target="_blank" className="bg-metal-white/20 px-3 py-1.5 rounded border border-metal-white/50 text-metal-white hover:bg-metal-white hover:text-white transition-colors">
                                            GitHub
                                        </Link>
                                        <Link href={project.video || "#"} target="_blank" className="text-metal-white/60 hover:text-white underline">
                                            Video (60s)
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-start bg-metal-gray/10 rounded-lg p-4 md:p-6 border border-metal-white/20">
                                    <div className="w-full aspect-video relative rounded overflow-hidden bg-metal-black/50 border border-metal-white/10 flex items-center justify-center">
                                        {project.src && project.src !== "/appsLogos/n8n-workflow-placeholder.png" && !project.src.includes("placeholder") ? (
                                            <Image src={project.src} alt={project.alt || project.title || "Project Image"} fill className="object-cover" />
                                        ) : (
                                            <div className="text-center px-4">
                                                <p className="text-metal-white/30 text-xs font-mono border border-dashed border-metal-white/20 p-8 rounded-lg">
                                                    [Diagrama de Arquitectura / n8n Workflow GIF]
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="mt-6 w-full text-xs font-mono text-metal-white/60 space-y-3 border-t border-metal-white/20 pt-4">
                                        <p><strong className="text-metal-white/80">Endpoints/Webhooks:</strong> Integración en tiempo real.</p>
                                        <p><strong className="text-metal-white/80">Logs & Monitoring:</strong> Trazabilidad completa y alertas vía Slack.</p>
                                        <p className="text-metal-red italic mt-6 text-center">"Si querés ver una demo en 10 minutos, coordinamos una llamada y te muestro el workflow en vivo."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Header Mini Proyectos */}
                <div className="text-center mt-16 mb-8 border-t border-metal-white/10 pt-16">
                    <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-metal-white">Mini-Proyectos & UI</h2>
                    <p className="text-metal-white mt-2 font-mono">Demos, UI clones e integraciones simples.</p>
                </div>

                {/* Lista Mini Proyectos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {miniProjects.map((project: any, index: number) => (
                        <div key={index} className={`flex flex-col items-center rounded-lg p-5 shadow-lg border border-metal-gray/20 bg-metal-black/40 ${project.isConfidential ? '' : 'hover:-translate-y-2 hover:border-metal-white/50'} transition-all duration-300 group`}>
                            <div className="relative w-full aspect-video bg-metal-black/60 rounded-md overflow-hidden mb-4">
                                {project.isConfidential ? (
                                    <Image
                                        src={project.src}
                                        fill
                                        alt={project.alt || "Project Image"}
                                        className="object-cover grayscale opacity-60"
                                    />
                                ) : (
                                    <Link href={project.href || "#"} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                        <Image
                                            src={project.src}
                                            fill
                                            alt={project.alt || "Project Image"}
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </Link>
                                )}
                            </div>
                            <h3 className="text-white text-base font-orbitron font-bold text-center group-hover:text-metal-red transition-colors">{project.alt}</h3>
                            <p className="text-metal-white/60 text-xs font-mono mt-3 text-center line-clamp-3 leading-relaxed">{project.description}</p>
                            {project.isConfidential && (
                                <span className="text-[10px] font-mono text-metal-red mt-4 uppercase tracking-widest bg-metal-red/10 border border-metal-red/20 px-3 py-1.5 rounded-full">
                                    Confidential
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer simple para cerrar */}
                <div className="mt-20 text-center font-mono text-xs text-metal-white/40">
                    <p>Candela Villaverde © 2024</p>
                </div>
            </div>
        </div>
    )
}
export default Projects;