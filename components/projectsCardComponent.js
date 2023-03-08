import { useState } from "react";
import Image from "next/image";
import FornyDesktop from "@/images/FornyNorge.png";
import BAWDesktop from "@/images/BergenArmwrestling.png";
import KVBDesktop from "@/images/KodeverketBergen.png";

const ProjectsCardComponents = () => {
    const [fornyCard, setFornyCard] = useState(true);
  const [bawCard, setBawCard] = useState(false);
  const [kvbCard, setKvbCard] = useState(false);

  function DeactivateState() {
    setFornyCard(false);
    setBawCard(false);
    setKvbCard(false);
  }
    return(
        <section
            className="hidden w-1/2 md:block shadow-[0px_0_10px_rgba(0,0,0,0.8)] h-fit rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]"
          >
            <div
              className=" border rounded-tl-[20px] rounded-tr-[20px] bg-cardBG "
            >
              <h2
                className="my-4 text-2xl text-center text-pinkText"
              >
                Noen av mine prosjekter
              </h2>
              <nav
                className=" bg-cardBG"
              >
                <ul
                  className="py-4 pl-8 text-2xl font-bold leading-10 text-greyText"
                >
                  <li
                    className={` cursor-pointer w-fit ${fornyCard ? "underline" : " no-underline"}`}
                    onClick={() => {
                      DeactivateState();
                      setFornyCard(true);
                    }}
                  >
                    Forny Norge
                  </li>
                  <li
                    className={` cursor-pointer w-fit ${bawCard ? "underline" : " no-underline"}`}
                    onClick={() => {
                      DeactivateState();
                      setBawCard(true);
                    }}
                  >
                    Bergen Armwrestling Club
                  </li>
                  <li
                    className={` cursor-pointer w-fit ${kvbCard ? "underline" : " no-underline"}`}
                    onClick={() => {
                      DeactivateState();
                      setKvbCard(true);
                    }}
                  >
                    Kodeverket Bergen
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="border divide-y-[1px] rounded-bl-[20px] rounded-br-[20px]"
            >
              <div className={`px-8 ${fornyCard ? "content" : "hidden"}`}>
                <h3
                  className="my-4 text-xl font-bold "
                >
                  Forny Norge
                </h3>
                <p>
                  På Forny Norge har jeg vært med på å redesigne hele nettsiden
                  i wordpress.
                </p>
                <div
                  className=""
                >
                  <a
                    href="https://www.fornynorge.no/"
                  >
                    <Image
                      src={FornyDesktop}
                      priority
                      className=""
                      alt="Illustrasjon som viser hvordan forny norge sin hjemmeside ser ut"
                    />
                  </a>
                </div>
                <p className="my-4 text-center underline">
                  <a href="https://fornynorge.no/">www.fornynorge.no</a>
                </p>
              </div>
              <div
                className={`px-8 ${bawCard ? "content" : "hidden"}`}
              >
                <h3
                  className="my-4 text-xl font-bold "
                >
                  Bergen Armwrestling Club
                </h3>
                <p>
                  På Bergen Armwrestling Club har jeg vært med å lage nettsiden
                  fra scratch. Her har vi hovedsaklig brukt Next.js og Tailwind
                  CSS.
                </p>
                <div>
                  <a
                    href="https://www.bergenarmwrestling.no/"
                  >
                    <Image
                      src={BAWDesktop}
                      alt="Illustrasjon som viser hvordan bergen armwrestling sin hjemmeside ser ut"
                    />
                  </a>
                </div>
                <p
                  className="my-4 text-center underline"
                >
                  <a
                    href="https://bergenarmwrestling.no/"
                  >
                    www.bergenarmwrestling.no
                  </a>
                </p>
              </div>
              <div className={` px-8 rounded-bl-[20px] rounded-br-[20px] ${kvbCard ? "content" : "hidden"}`}>
                <h3
                  className="my-4 text-xl font-bold"
                >
                  Kodeverket Bergen
                </h3>
                <p>
                  På Kodeverket Bergen har jeg hovedsaklig stått for mobile first designet på siden. Siden er bygget opp med Next.js og Tailwind CSS
                </p>
                <div>
                  <a
                    href="https://www.kodeverketbergen.no/"
                  >
                    <Image
                      src={KVBDesktop}
                      alt="Illustrasjon som viser hvordan kodeverket bergen sin hjemmeside ser ut"
                    />
                  </a>
                </div>
                <p
                  className="my-4 text-center underline"
                >
                  <a
                    href="https://www.kodeverketbergen.no/"
                  >
                    www.kodeverketbergen.no
                  </a>
                </p>
              </div>
            </div>
          </section>
    )
}

export default ProjectsCardComponents;