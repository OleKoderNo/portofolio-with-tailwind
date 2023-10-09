import MovingText from "@/components/movingText";
import Head from "next/head";

function ExperienceItem({ title, date, description }) {
    return (
        <div
            className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]"
        >
            <h3
                className="text-lg font-medium text-pinkText md:text-xl"
            >
                {title}
            </h3>
            <p
                className="my-2 text-blueText"
            >
                <em>{date}</em>
            </p>
            <p>{description}</p>
        </div>
    );
}

export default function Experience() {
    const workExperience = [
        {
            title: "Kodeverket Bergen",
            date: "28.10.22 - 31.05.23",
            description:
                "Jeg var i praksis som techlead hos Kodeverket, en startup som startet høsten 2022. Jeg var ansvarlig for opplæring av praksiskandidater, implementeringen av Next.js, og feilretting. Vi utviklet alt fra statiske nettsider til komplekse CMS-løsninger for kundene våre.",
        },
        {
            title: "Bjørnafjorden Næringsråd",
            date: "20.09.22-31.10.22",
            description:
                "Hos Bjørnafjorden Næringsråd utarbeidet jeg et forslag til nytt design på hjemmesiden dems i Wix.",
        },
        {
            title: "Octaos",
            date: "20.06.22-20.09.22",
            description:
                "Hos Octaos var jeg i praksis og her laget jeg en kundeoversikt, som er lett å bruke, og oppdateres automatisk når man legger til eller sletter informasjon. Her ble det brukt ReactJS, Google maps API og Firebase.",
        },
    ];

    const courses = [
        {
            title: "Kodehode",
            date: "06.01.22-06.01.23",
            description:
                "I Januar 2022 startet jeg min nye reise som webutvikler. Jeg startet på et kurs som heter Kodehode. Her har jeg deltatt og fullført et intensivt teorikurs. I teoridelen av kurset har jeg lært HTML, CSS, JavaScript og React.",
        },
        {
            title: "Universell utforming av IKT for utviklere og testledere",
            date: "31.01.23",
            description:
                "Jeg har tatt DFØ sitt kurs i universell utforming av IKT for utviklere og testledere på læringsplattformen sine nettsider.",
        },
        {
            title: "Universell utforming. E-læringskurs for nettredaktører",
            date: "13.02.23",
            description:
                "Jeg har tatt DFØ sitt universell utforming e-læringskurs for nettredaktører på læringsplattformen sine nettsider.",
        },
    ];

    return (
        <>
            <Head>
                <title>Ole sine erfaringer</title>
                <meta
                    name="description"
                    content="Ole Håvard Furuseth Bergan er en dyktig frontend utvikler med erfaring fra forskjellige steder, inkludert Kodeverket Bergen, og kunnskap om universell utforming."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <header
                className="pb-8 mx-auto font-bold text-center"
            >
                <h1>
                    <MovingText
                        text="Mine erfaringer"
                        textSize="text-xl md:text-3xl"
                    />
                </h1>
                <h2>
                    <MovingText
                        text="Her er mine tidligere erfaringer og informasjon rundt disse."
                        textSize="mt-2 text-l md:text-2xl"
                    />
                </h2>
            </header>
            <main
                className="max-w-6xl mx-auto text-greyText md:text-lg"
            >
                <section>
                    <h2
                        className="mt-2 text-xl text-center md:text-2xl text-[#000] font-bold mb-5"
                    >
                        Arbeidserfaring
                    </h2>
                    <div
                        className="flex flex-wrap justify-center gap-16"
                    >
                        {workExperience.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                {...experience}
                            />
                        ))}
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
                    <div
                        className="flex flex-wrap justify-center gap-16"
                    >
                        {courses.map((course, index) => (
                            <ExperienceItem
                                key={index}
                                {...course}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}