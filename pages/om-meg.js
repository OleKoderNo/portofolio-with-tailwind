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
        <header 
            className="pb-8 mx-auto font-bold text-center"
            >
                <h1
                    className="text-xl md:text-3xl"
                >
                    Om meg
                </h1>
            </header>
        <main>
            <section
            className="mx-10 xxs:mx-14 md:w-[620px] md:mx-auto"
            >
                <h2
                className="mt-2 text-xl font-medium text-center md:text-2xl"
                >
                    Min vei inn i koding
                </h2>
                <p
                className="mt-4"
                >
                    Min fot inn i kodingens verden startet da jeg ble med i kurset Kodehode. Dette var noe som fant stor interesse for meg. Allerede før jeg begynte på kurset hadde jeg tatt et hurtig crashcourse via YouTube. Dette falt utrolig fort i smak, og koding ble en stor del av hverdagen min, også på fritiden.
                </p>
                <p
                className="mt-2"
                >
                    Jeg har lært utrolig mye nytt å spennende, og har et enormt ønske om å lære enda mer, og vidre utvikle meg. På den korte tiden jeg var på kurset, har jeg oppdaget en ny hobby, som gir meg enormt med glede og mestringsfølelse.
                </p>
            </section>
            <section
            className="pt-2 mx-10 xxs:mx-14"
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
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            SASS
                        </li>
                        <li>
                            Tailwind CSS
                        </li>
                        <li>
                            React.js
                        </li>
                        <li>
                            Next.js
                        </li>
                        <li>
                            Strapi CMS
                        </li>
                        <li>
                            Sanity.io
                        </li>
                        <li>
                            Firebase
                        </li>
                        <li>
                            Styled Components
                        </li>
                        <li>
                            Google Maps API
                        </li>
                        <li>
                            Wix
                        </li>
                        <li>
                            Wordpress
                        </li>
                        <li>
                            Python
                        </li>
                    </ul>
                </div>
            </section>
        </main>
        </>
    )
}