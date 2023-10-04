import Head from "next/head";

export default function Projects() {
    return (
        <>
            <Head>
                <title
                >
                    Ole sine prosjekter
                </title>
                <meta
                    name="description"
                    content="Oversikt over Ole Håvard Furuseth Bergan sine kodeprosjekter"
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
                    Mine prosjekter
                </h1>
                <h2
                    className="mt-2 text-xl md:text-2xl"
                >
                    Her er mine tidligere prosjekter!
                </h2>
            </header>
            <main
                className="max-w-6xl mx-auto mt-14 text-greyText"
            >
                <section
                    className="flex flex-wrap justify-center gap-16"
                >
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            JobbJakt.no
                        </h3>
                        <p>
                            {/* Forlag 1 */}
                            JobbJakt.no er en nettside som Kodeverket har bygget om fra scratch. Her har vi gitt nettsiden nytt design og bedre brukervennlighet, og tatt kunden bort fra Wordpress og over til Next.js. For å gjøre nettsiden mest mulig brukervennlig valgte vi å slå sammen flere av undersidene fra det orginale designet, til bokser du kan velge, for å fremmheve ønsket og relevant informasjon på. Dette gir en mye bedre brukeropplevelse, da det er mye mer oversiktlig. Her har mitt hovedansvar vært å bistå med Sanity løsningen, implementere denne til siden, og lage boksen vi kan hente ut informasjon fra. Samtidig som jeg også har sjekket siden før bugs, og feilmeldinger før launch.

                            {/* Forlag 2 */}
                            JobbJakt.no er en nettside som Kodeverket har bygget om fra scratch. Her har vi gitt nettsiden nytt design og bedre brukervennlighet, og tatt kunden bort fra Wordpress og over til Next.js. For å gjøre nettsiden mest mulig brukervennlig valgte vi å slå sammen flere av undersidene fra det orginale designet, til bokser du kan velge, for å fremmheve ønsket og relevant informasjon på. Dette gir en mye bedre brukeropplevelse, da det er mye mer oversiktlig. Her har mitt hovedansvar vært å bistå med Sanity løsningen, implementere denne til siden, og lage boksen vi kan hente ut informasjon fra. Samtidig som jeg også har sjekket siden før bugs, og feilmeldinger før launch. Har også bidratt en del på de andre områdene på nettsiden når det var behov.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://www.jobbjakt.no/"
                                target="blank"
                            >
                                JobbJakt.no
                            </a>
                        </p>
                    </div>
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            Forny Norge
                        </h3>
                        <p>
                            Forny Norge er en side jeg var med å utvikle hos Kodeverket Bergen. Denne er bygget med wordpress. Her hadde jeg hovedansvaret på å lage kategorisidene, produkt og kategorikomponenter, og flere av de statiske sidene med innhold.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://www.fornynorge.no/"
                                target="blank"
                            >
                                fornynorge.no
                            </a>
                        </p>
                    </div>
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            Bergen Armwrestling Club
                        </h3>
                        <p>
                            Bergen Armwrestling Club er en side jeg var med og utvikle hos Kodeverket Bergen. Denne siden er bygget opp hovedsaklig av Next.js, Tailwind CSS, i18n og Google Maps API. Her hadde jeg hovedansvaret for forsiden, påmeldingsiden, FAQ siden og oversettelse integrasjonen. Jeg har også veiledet på andre oppgaver dersom det har vært behov.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://bergenarmwrestling.no/"
                                target="blank"
                            >
                                bergenarmwrestling.no
                            </a>
                        </p>
                    </div>
                    {/*  */}
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            Passord generator
                        </h3>
                        <p>
                            Passord generatoren min er bygget opp med Next.js, javascript og CSS i modules. Her kan du velge hvor mange passord du vil ha, gi dem et navn, og laste det ned som en .txt fil. Dette var et utrolig spennede prosjekt hvor jeg hovedsaklig fokuserte på å lære mer javascript og få enda bedre grunnlegende forståelse innen det.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://passord-generator-navy.vercel.app/"
                                target="blank"
                            >
                                Min passord generator
                            </a>
                        </p>
                    </div>
                    {/*  */}
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            Kodeverket Bergen
                        </h3>
                        <p>
                            {/* forslag 1 */}
                            Kodeverket Bergen er hjemmesiden vår, og denne er bygget opp med Next.js og Tailwind CSS, og har gjennom tiden gått igjennom flere utviklingsfaser. Her har jeg hovedsaklig tilpasset nettsiden til å være mobilvennelig, og laget kort med informasjon om teamet som snur seg når man trykker på dem.

                            {/* forslag 2 */}
                            Dette er første utkastet til Kodeverket sin hjemmeside. Her fikk jeg i hovedoppgave å vidreutvikle noe som hadde blitt utviklet, og gjøre det mer mobilvenlig.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://www.kodeverketbergen.no/"
                                target="blank"
                            >
                                kodeverketbergen.no
                            </a>
                        </p>
                    </div>
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            Oppmøte prosent kalkulator
                        </h3>
                        <p>
                            Sammen med min gode venn Sander Tonheim, har jeg vært med å utvikle en oppmøte kalkulator, for Foks. Dette var et spennende og større javascript prosjekt, som basserer seg på mattematikk.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://www.obligatorisk.no/"
                                target="blank"
                            >
                                Oppmøte prosent kalkulator
                            </a>
                        </p>
                    </div>
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            One Piece
                        </h3>
                        <p>
                            Dette er et av de første prosjektene jeg jobbet på som utvikler. Her har jeg ved hjelp av vanilla HMTL og CSS laget en meget fin paralax nettside, som er responsive.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://olekoderno.github.io/parallax/"
                                target="blank"
                            >
                                Paralax nettside
                            </a>
                        </p>
                    </div>
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            Pokédex
                        </h3>
                        <p>
                            Dette prosjektet var et av mine første javascript prosjekter, og første prosjektet jeg har jobbet med API. Her har vi en Pokédex, som tar en igjennom de 895 første Pokémonene. På denne oppgaven fokuserte jeg mye mer på javascript og lære meg API enn jeg fokuserte på design.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://olekoderno.github.io/pokedex/"
                                target="blank"
                            >
                                Pokédex prosjekt
                            </a>
                        </p>
                    </div>
                    <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                        <h3
                            className="text-lg font-medium text-pinkText"
                        >
                            Min første portofolio
                        </h3>
                        <p>
                            Dette var det første prosjektet jeg bygget i React.js. Som man ser har jeg kommet langt på kort tid. Siden er også oversatt ved hjelp av i18n.
                        </p>
                        <p>
                            <a
                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                href="https://olekoderno.github.io/portofolio/"
                                target="blank"
                            >
                                Portofolio 2022
                            </a>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}