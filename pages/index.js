import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Selfie from "../public/pic_of_ole.jpg";
import Link from "next/link";
import ProjectsCardComponents from "@/components/projectsCardComponent";
import MovingText from "@/components/movingText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>
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

      {/* Header section with animated text */}
      <header
        className="pb-8 mx-auto font-bold text-center"
      >
        <h1>
          <MovingText
            text="Ole Håvard Furuseth Bergan"
            textSize="text-xl md:text-3xl"
          />
        </h1>
        <h2>
          <MovingText
            text="Frontend utvikler"
            textSize="mt-2 text-l md:text-2xl"
          />
        </h2>
      </header>
      
      <main
        className="mx-auto max-w-7xl md:text-lg"
      >
        <div
          className="justify-around md:flex"
        >
          <section>

            {/* Information card */}
            <div
              className="md:mx-0 block w-64 py-6 px-8 mx-auto bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)] max-h-[420px] md:max-h-[500px]"
            >
              <p
                aria-hidden="true"
              >
                &lt;
                <span
                  className=" text-pinkText"
                >
                  Developer
                </span>
              </p>
              <p
                className="pl-3"
                aria-hidden="true"
              >
                id=
              </p>
              <p
                className="pl-3 text-blueText"
                aria-hidden="true"
              >
                "Ole Håvard
              </p>
              <p
                className="pl-3 text-blueText"
                aria-hidden="true"
              >
                Furuseth Bergan"
              </p>
              <p
                className="pl-3"
                aria-hidden="true"
              >
                className=
              </p>
              <p
                className="pl-3 text-blueText"
                aria-hidden="true"
              >
                "Frontend Developer"
              </p>
              <p aria-hidden="true">
                &gt;
              </p>
              <p
                className="pl-3"
                aria-hidden="true"
              >
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
                aria-hidden="true"
              >
                &lt;/
                <span
                  className=" text-pinkText"
                >
                  img
                </span>
                &gt;
              </p>
              <p aria-hidden="true">
                &lt;/&nbsp;
                <span
                  className=" text-pinkText"
                >
                  Developer
                </span>
                &gt;
              </p>
            </div>

            {/* Button links */}
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

          {/* Some of my project cards. Only visable on 768px and up */}
          <ProjectsCardComponents />
        </div>
      </main>
    </>
  );
}
