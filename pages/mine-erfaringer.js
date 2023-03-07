export default function Experience() {
    return (
        <>
        <Head>
        <title
        >
          Ole sine erfaringer
        </title>
        <meta
          name="description"
          content="Ole Håvard Furuseth Bergan er en dyktig frontend utvikler som vært litt forskjellige steder, blandt annet hos kodeverket bergen. Han har også kunnskap om universell utforming."
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
                    Mine erfaringer
                </h1>
                <h2
                    className="mt-2 text-xl md:text-2xl"
                >
                    Her er mine tidligere erfaringer og informasjon rundt disse.
                </h2>
            </header>
            <main
                className="max-w-6xl mx-auto text-greyText"
            >
                <section
                >
                    <h2
                        className="mt-2 text-xl text-center md:text-2xl text-[#000] font-bold mb-5"
                    >
                        Arbeidserfaring
                    </h2>
                    <div className="flex flex-wrap justify-center gap-16">
                        <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                            <h3
                                className="text-lg font-medium text-pinkText"
                            >
                                Octaos
                            </h3>
                            <p
                            className="my-2 text-blueText"
                            >
                                <em>

                                20.06.22-20.09.22
                                </em>
                            </p>
                            <p>
                                Hos Octaos var jeg i praksis og her laget jeg en kundeoversikt, som er lett  å bruke, og oppdateres automatsik når man legger, eller sletter informasjon. Her ble det brukt ReactJS, Google maps API og Firebase.

                            </p>
                        </div>
                        <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                            <h3
                                className="text-lg font-medium text-pinkText"
                            >
                                Bjørnafjorden Næringsråd
                            </h3>
                            <p
                            className="my-2 text-blueText"
                            >
                                <em>
                                    20.09.22-31.10.22
                                </em>
                            </p>
                            <p>
                                Hos Bjørnafjorden Næringsråd utarbeidet jeg et forslag til nytt design på hjemmesiden dems i Wix.
                            </p>
                        </div>
                        <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                            <h3
                                className="text-lg font-medium text-pinkText"
                            >
                                Kodeverket Bergen
                            </h3>
                            <p
                            className="my-2 text-blueText"
                            >
                                <em>
                                    28.10.22- Jobber her pr d.d
                                    </em>
                            </p>
                            <p>
                                Kodeverket er en helt ny startup, som ble startet i år og er laget i samarbeid med Kodehode. Vi jobber med å lage alt fra statiske, til komplekse nettsider som bruker CMS løsninger. Min hovedoppgave her er å være techlead, og hjelpe alle med det faglige rundt koding, og forbedre kodeferdighetene sine.
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className="mt-16"
                >
                    <h2
                        className="mt-2 text-xl text-center md:text-2xl text-[#000] font-bold mb-5"
                    >
                        Kurs og sertifiseringer
                    </h2>
                    <div className="flex flex-wrap justify-center gap-16">
                        <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                            <h3
                                className="text-lg font-medium text-pinkText"
                            >
                                Kodehode
                            </h3>
                            <p
                            className=" text-blueText"
                            >
                                06.01.22-06.01.23
                            </p>
                            <p>
                                I Januar 2022 startet jeg min nye reise som webutvikler. Jeg startet på et kurs som heter Kodehode. Her har jeg deltatt og fullført et intensivt teorikurs. I teori delen av kurset har jeg lært HTML, CSS, JavaScript og React.
                            </p>
                        </div>
                        <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                            <h3
                                className="text-lg font-medium text-pinkText"
                            >
                                Universell utforming av IKT for utviklere og testledere
                            </h3>
                            <p
                            className="my-2 text-blueText"
                            >
                                31.01.23
                            </p>
                            <p>
                                Jeg har tatt DFØ sitt kurs i universell utforming av IKT for utviklere og testledere på læringsplatformen sine nettsider.
                            </p>
                        </div>
                        <div className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                            <h3
                                className="text-lg font-medium text-pinkText"
                            >
                                Universell utforming. E-læringskurs for nettredaktører
                            </h3>
                            <p
                            className="my-2 text-blueText"
                            >
                                13.02.23
                            </p>
                            <p>
                            Jeg har tatt DFØ sitt universell utforming e-læringskurs for nettredaktører på læringsplatformen sine nettsider.
                            </p>
                        </div>       
                    </div>
                </section>

            </main>
        </>
    )
}