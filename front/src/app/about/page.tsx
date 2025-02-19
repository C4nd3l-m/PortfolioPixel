import Image from "next/image";

const About = () => {
    return (
        <>
        <div className="flex center mt-40">
            <p>
                Desarrolladora web Full-Stack con especialización en frontend,
                apasionada por la creación de experiencias web funcionales y atractivas.
                Tengo experiencia en React, Next.js, Node.js, Express, TypeScript, SQL y MongoDB, así como en el uso de herramientas como Git, GitHub y metodologías ágiles (Scrum).

                Hablo español nativo y tengo un nivel de inglés intermedio (B1).
            </p>
        </div>

            <div className="flex gap-16 mt-14">
                <Image
                    src="/logos/css.gif"
                    alt="CSS"
                    width={90}
                    height={90}
                    className="hover:scale-110 transition-transform"
                />

                <Image
                    src="/logos/git.gif"
                    alt="Git"
                    width={90}
                    height={90}
                    className="hover:scale-110 transition-transform"
                />

                <Image
                    src="/logos/html.gif"
                    alt="HTML"
                    width={90}
                    height={90}
                    className="hover:scale-110 transition-transform"
                />

                <Image
                    src="/logos/mongodb.gif"
                    alt="MongoDB"
                    width={90}
                    height={90}
                    className="hover:scale-110 transition-transform"
                />

                <Image
                    src="/logos/node.gif"
                    alt="Node"
                    width={90}
                    height={90}
                    className="hover:scale-110 transition-transform"
                />

                <Image
                    src="/logos/react.gif"
                    alt="React"
                    width={90}
                    height={90}
                    className="hover:scale-110 transition-transform"
                />

                <Image
                    src="/logos/sql.gif"
                    alt="SQL"
                    width={90}
                    height={90}
                    className="hover:scale-110 transition-transform"
                />

                <Image
                    src="/logos/tailwind.gif"
                    alt="Tailwind"
                    width={90}
                    height={90}
                    className="hover:scale-110 transition-transform"
                />
            </div>
        </>
    )
}
export default About;