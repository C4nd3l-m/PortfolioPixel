import Image from "next/image";
import techLogos from "@/helpers/logos";

const About = () => {
    return (
        <>
        <div className="flex center mt-40 p-6">
            <p>
                Desarrolladora web Full-Stack con especialización en frontend,
                apasionada por la creación de experiencias web funcionales y atractivas.
                Tengo experiencia en React, Next.js, Node.js, Express, TypeScript, SQL y MongoDB, así como en el uso de herramientas como Git, GitHub y metodologías ágiles (Scrum).

                Hablo español nativo y tengo un nivel de inglés intermedio (B1).
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
