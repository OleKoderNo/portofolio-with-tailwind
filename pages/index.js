import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Selfie from "../public/pic_of_ole.jpg";
import FornyDesktop from "@/images/FornyNorge.png";
import BAWDesktop from "@/images/BergenArmwrestling.png";
import KVBDesktop from "@/images/KodeverketBergen.png";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [fornyCard, setFornyCard] = useState(true);
  const [bawCard, setBawCard] = useState(false);
  const [kvbCard, setKvbCard] = useState(false);

  function DeactivateState() {
    setFornyCard(false);
    setBawCard(false);
    setKvbCard(false);
  }

  return (
    <>
      <Head>
        <title
        >
          Ole sin portofolio
        </title>
        <meta
          name="description"
          content="Ole Håvard Furuseth Bergan er en dyktig frontend utvikler som har tilnærmet seg masse kunnskap og har godt kjennskap til moderne rammeverk."
        />
        <meta name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <header
        className="pb-8 mx-auto font-bold text-center"
      >
        <h1
          className="text-xl md:text-3xl"
        >
          Ole Håvard Furuseth Bergan
        </h1>
        <h2
          className="mt-2 text-l md:text-2xl"
        >
          Frontend utvikler
        </h2>
      </header>
      <main
        className="mx-auto max-w-7xl"
      >
        <div
          className="justify-around md:flex"
        >
          <section

          >
            <div
              className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)] max-h-[420px]"
            >

              <p>
                &lt;
                <span
                  className=" text-pinkText"
                >
                  Developer
                </span>
              </p>
              <p
                className="pl-3 "
              >
                id=
              </p>
              <p
                className="pl-3 text-blueText"
              >
                "Ole Håvard
              </p>
              <p
                className="pl-3 text-blueText"
              >
                Furuseth Bergan"
              </p>
              <p
                className="pl-3"
              >
                className=
              </p>
              <p
                className="pl-3 text-blueText"
              >
                "Frontend Developer"
              </p>
              <p>&gt;</p>
              <p className="pl-3">
                &lt;
                <span
                  className=" text-pinkText"
                >
                  img
                </span>
                &gt;
              </p>
              <Image
                className="pl-6 drop-shadow-[0px_0_20px_rgba(20,205,200,0.4)]"
                src={Selfie}
                width={146}
                alt="Svart hvit portrettbilde av Ole"
              />
              <p
                className="pl-3"
              >
                &lt;/
                <span
                  className=" text-pinkText"
                >
                  img
                </span>
                &gt;
              </p>
              <p>
                &lt;/&nbsp;
                <span
                  className=" text-pinkText"
                >
                  Developer
                </span>
                &gt;
              </p>
            </div>
            <div
              className="flex flex-col items-center gap-4 pt-10 text-[#000000] h-"
            >
              <Link
              href="/om-meg"
              >
              <button
                className="w-[152px] h-10 rounded-2xl shadow-[0px_0px_40px_rgba(55,59,61,0.4)]"
                >
                Om meg
              </button>
                </Link>
              <Link
                href="/mine-prosjekter"
              >
                <button
                  className="w-[152px] h-10  rounded-2xl shadow-[0px_0px_40px_rgba(55,59,61,0.4)]"
                >
                  Mine prosjekter
                </button>
              </Link>
              <Link
                href="/mine-erfaringer"
              >
                <button
                  className="w-[152px] h-10 rounded-2xl shadow-[0px_0px_40px_rgba(55,59,61,0.4)]"
                >
                  Mine erfaringer
                </button>
              </Link>
            </div>
          </section>
          <section
            className="hidden w-1/2 md:block shadow-[0px_0_10px_rgba(0,0,0,0.8)] h-fit rounded-tl-[20px] rounded-tr-[20px]"
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
              className="border divide-y-[1px]"
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
              <div className={` px-8 ${kvbCard ? "content" : "hidden"}`}>
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
        </div>
      </main>
    </>
  );
}
