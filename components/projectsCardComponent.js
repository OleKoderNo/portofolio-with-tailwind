import { useState } from "react";
import Image from "next/image";
import FornyDesktop from "@/images/FornyNorge.png";
import BAWDesktop from "@/images/BergenArmwrestling.png";
import KVBDesktop from "@/images/KodeverketBergen.png";

const cardData = [
    {
        title: "Forny Norge",
        description:
            "På Forny Norge har jeg vært med på å redesigne hele nettsiden i wordpress.",
        url: "https://www.fornynorge.no/",
        image: FornyDesktop,
    },
    {
        title: "Bergen Armwrestling Club",
        description:
            "På Bergen Armwrestling Club har jeg vært med å lage nettsiden fra scratch. Her har vi hovedsaklig brukt Next.js og Tailwind CSS.",
        url: "https://www.bergenarmwrestling.no/",
        image: BAWDesktop,
    },
    {
        title: "Kodeverket Bergen",
        description:
            "På Kodeverket Bergen har jeg hovedsaklig stått for mobile first designet på siden. Siden er bygget opp med Next.js og Tailwind CSS.",
        url: "https://www.kodeverketbergen.no/",
        image: KVBDesktop,
    },
];

export default function ProjectsCardComponents() {
    const [activeCard, setActiveCard] = useState(0);

    const handleClick = (index) => {
        setActiveCard(index);
    };

    const extractDomain = (url) => {
        const hostname = new URL(url).hostname;
        return hostname.startsWith("www.") ? hostname.slice(4) : hostname;
    };

    return (
        <section
            className="hidden w-1/2 md:block shadow-[0px_0_10px_rgba(0,0,0,0.8)] h-fit rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]"
        >
            <div
                className="border rounded-tl-[20px] rounded-tr-[20px] bg-cardBG"
            >
                <h2
                    className="my-4 text-2xl text-center text-pinkText"
                >
                    Noen av mine prosjekter
                </h2>
                <nav
                    className="bg-cardBG"
                >
                    <ul
                        className="py-4 pl-8 text-2xl font-bold leading-10 text-greyText"
                    >
                        {cardData.map((card, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer w-fit ${activeCard === index ? "underline" : "no-underline"
                                    }`}
                                onClick={() => handleClick(index)}
                            >
                                {card.title}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div
                className="border divide-y-[1px] rounded-bl-[20px] rounded-br-[20px]"
            >
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`px-8 ${activeCard === index ? "content" : "hidden"}`}
                    >
                        <h3
                            className="my-4 text-xl font-bold "
                        >
                            {card.title}
                        </h3>
                        <p>
                            {card.description}
                        </p>
                        <div>
                            <a
                                href={card.url}
                            >
                                <Image
                                    src={card.image}
                                    priority
                                    alt={`Illustrasjon som viser hvordan ${card.title} sin hjemmeside ser ut`}
                                />
                            </a>
                        </div>
                        <p
                            className="my-4 text-center underline"
                        >
                            <a
                                className="text-blueText font-semibold hover:text-pinkText"
                                href={card.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {extractDomain(card.url)}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};