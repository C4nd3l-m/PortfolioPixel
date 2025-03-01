import Image from "next/image";
import techLogos from "@/helpers/logos";

const About = () => {
    return (
        <>
            <div className="flex flex-col items-center text-center mt-40 p-6">
                <h2 className="text-3xl font-bold text-white mb-4 animate-fadeIn">About Me</h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                    I am a <strong>Full-Stack Web Developer</strong> specializing in <strong>frontend development</strong>.
                    Passionate about crafting <span className="text-purple-400">functional</span> and
                    <span className="text-blue-400"> engaging</span> web experiences.
                </p>
                <p className="text-lg text-gray-300 max-w-2xl mt-4">
                    I speak <strong>native Spanish</strong> and have an <strong>intermediate level of English (B1)</strong>.
                </p>
                <p className="text-lg text-gray-300 max-w-2xl mt-6">
                    <span className="text-purple-400 font-semibold">My technologies and tools:</span>
                </p>
            </div>



            <div className="grid grid-cols-10 gap-10 mt-14 p-6">
                {techLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default About;
