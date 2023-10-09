import MovingText from "@/components/movingText";
import Head from "next/head";

export default function Experience() {
    return (
        <>
            <Head>
                <title
                >
                    Om meg
                </title>
                <meta
                    name="description"
                    content="Her finner du er oversikt over koderelaterte ting jeg har lært på vei inn i kodingens verden."
                />
                <meta name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            {/* Header section with animated text */}
            <header
                className="pb-8 mx-auto font-bold text-center"
            >
                <h1>
                    <MovingText
                        text="Om meg"
                        textSize="text-xl md:text-3xl"
                    />
                </h1>
                <h2 className="font-bold text-center mt-2">
                    <MovingText
                        text="Min vei inn i koding"
                        textSize="text-l md:text-2xl"
                    />
                </h2>
            </header>
            <main>
                <section
                    className="mx-10 xxs:mx-14 md:w-[620px] md:mx-auto md:text-lg"
                >
                    <p
                        className="mt-4"
                    >
                        Mitt navn er Ole Håvard Furuseth Bergan, og jeg er en frontend utvikler med en lidenskap for å skape flotte, brukervennlige nettsider. Selv om jeg ikke har en formell utdanning innenfor feltet, har jeg nylig fullført intensivkurset Kodehode, hvor jeg har lært og praktisert ferdigheter innen HTML, CSS, JavaScript, React.js og mye mer.
                    </p>
                    <p
                        className="mt-2"
                    >
                        Jeg har allerede en betydelig erfaring med webutvikling, fra å jobbe med alt fra statiske nettsider til komplekse CMS-løsninger. En av mine styrker er min forståelse for CSS, noe som gjør at jeg kan skape vakre og responsive brukergrensesnitt.
                    </p>
                    <p
                        className="mt-2"
                    >
                        På siste praksisplass min fikk jeg rollen som techlead, hvor jeg var ansvarlig for opplæring av praksiskandidater, implementering av Next.js og bugfiksing. Jeg har også en dyp forståelse for universell utforming og ønsker å gjøre nettet tilgjengelig for alle.
                    </p>
                    <p
                        className="mt-2"
                    >
                        Jeg er alltid sulten på å lære og forbedre meg, og jeg jobber kontinuerlig med å utvide min kunnskap og mine ferdigheter. Mitt mål er å fortsette å vokse som utvikler og etter hvert utforske fullstack-utvikling.
                    </p>
                </section>
                <section
                    className="pt-2 mx-10 xxs:mx-14 md:text-lg"
                >
                    <h2
                        className="mt-2 text-xl font-medium text-center md:text-2xl"
                    >
                        Skills
                    </h2>
                    <p
                        className="mb-8 md:text-center"
                    >
                        Her er en liste over noen av tingene i kodeverden jeg behersker.
                    </p>
                    <div
                        className="mx-auto block w-64 py-6 px-14 bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]"
                    >
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>SASS</li>
                            <li>Tailwind CSS</li>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>Strapi CMS</li>
                            <li>Sanity.io</li>
                            <li>Firebase</li>
                            <li>Styled Components</li>
                            <li>Google Maps API</li>
                            <li>PostgreSQL</li>
                            <li>Python</li>
                            <li>Wix</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}