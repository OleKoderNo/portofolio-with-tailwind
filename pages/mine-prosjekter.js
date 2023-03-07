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
                        Forny Norge
                    </h3>
                    <p>
                        Forny Norge er en side jeg var med å utvikle hos Kodeverket Bergen. Denne er bygget med wordpress.
                    </p>
                    <p>
                        <a
                        className="underline cursor-pointer text-blueText hover:text-pinkText"
                        href="https://www.fornynorge.no/"
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
                    Bergen Armwrestling Club er en side jeg var med og utvikle hos Kodeverket Bergen. Denne siden er bygget opp hovedsaklig av Next.js, Tailwind CSS, i18n og Google Maps API.
                </p>
                <p>
                    <a
                    className="underline cursor-pointer text-blueText hover:text-pinkText"
                    href="https://bergenarmwrestling.no/"
                    >
                        bergenarmwrestling.no
                    </a>
                </p>
                </div>
                <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                    <h3
                    className="text-lg font-medium text-pinkText"
                    >
                    Kodeverket Bergen
                    </h3>
                    <p>
                        Kodeverket Bergen er hjemmesiden vår, og denne er bygget opp med Next.js og Tailwind CSS
                    </p>
                    <p>
                        <a
                        className="underline cursor-pointer text-blueText hover:text-pinkText"
                        href="https://www.kodeverketbergen.no/"
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
                        Sammen med min gode venn Sander Tonheim, har jeg vært med å utvikle en oppmøte kalkulator, for Foks.
                    </p>
                    <p>
                        <a
                        className="underline cursor-pointer text-blueText hover:text-pinkText"
                        href="https://obligatorisk.vercel.app/"
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
                        Dette er et av de første prosjektene jeg jobbet på som utvikler. Her har jeg ved hjelp av vanilla HMTL og CSS laget en meget fin paralax nettside.
                    </p>
                    <p>
                        <a
                        className="underline cursor-pointer text-blueText hover:text-pinkText"
                        href="https://olekodehode.github.io/parallax/"
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
                        Dette prosjektet var et av mine første javascript prosjekter, og første prosjektet jeg har jobbet med API. Her har vi en Pokédex, som tar en igjennom de 895 første Pokémonene.
                    </p>
                    <p>
                        <a
                        className="underline cursor-pointer text-blueText hover:text-pinkText"
                        href="https://olekodehode.github.io/pokedex/"
                        >
                            Pokédex prosjekt
                        </a>
                    </p>
                </div>
            </section>
        </main>
        </>
    )
}