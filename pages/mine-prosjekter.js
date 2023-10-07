import Head from "next/head";
import { Client } from "@/lib/client";
import { useState } from "react";

export async function getServerSideProps() {
    const data = await Client.fetch(`*[_type == 'project']{title, urlDesc, url, description, tag[]->}`)
    return {
        props: {
            data,
        },
    }
}

export default function Projects({ data }) {


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
                    {data.map((item) => {
                        console.log(item);
                        const [cardModal, setCardModal] = useState(false);
                        const openCardModal = () => setCardModal(true);
                        const closeCardModal = () => setCardModal(false);
                        return (
                            <>
                                <div className="py-6 flex flex-col justify-between px-8 mx-5 w-[80%] md:w-[40%] lg:w-1/4 bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)] ">

                                    <div>
                                        <h3
                                            className="text-lg font-medium text-pinkText"
                                        >
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="mt-5">
                                        <p>
                                            <a
                                                className="underline cursor-pointer text-blueText hover:text-pinkText"
                                                href={item.url}
                                                target="blank"
                                            >
                                                {item.title}
                                            </a>
                                        </p>
                                        <ul className="flex flex-wrap mt-5">
                                            {item.tag.map((list) => {
                                                console.log(list);
                                                return (
                                                    <li className=" mr-5">{list.name}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={openCardModal}
                                        aria-label="Les mer om dette prosjektet"
                                        className="text-gray-300 hover:text-white mt-5"
                                    >
                                        Les mer
                                    </button>
                                    {cardModal === true && (
                                        <div 
                                            className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full text-greyText backdrop-blur-[5px]"
                                        >
                                            <div 
                                                className="grid gap-8 relative z-30 lg:w-[70%] md:w-2/3 w-[90%] lg:p-24 xs:p-8 p-2 bg-cardBG rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)] max-h-fit"
                                            >
                                                <h2 
                                                    className="text-lg font-medium text-pinkText mt-5 mx-2"
                                                >
                                                    {item.title}
                                                </h2>
                                                <p className="mx-3">
                                                    {item.description}
                                                </p>
                                                <p className="mx-3">
                                                    <a href={item.url}
                                                        target="_blank"
                                                        className=" text-blueText underline"
                                                    >

                                                        Se prosjektet
                                                    </a>
                                                </p>
                                                <ul className="flex flex-wrap mx-3 mb-5">
                                                    {item.tag.map((list) => {
                                                        console.log(list);
                                                        return (
                                                            <li 
                                                                className="mr-5"
                                                            >
                                                                {list.name}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                                <button
                                                    className="absolute rounded-full top-6 right-6 text-3xl"
                                                    onClick={closeCardModal}
                                                    aria-label="Lukk"
                                                >
                                                    x
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )
                    })}
                </section>
            </main>
        </>
    )
}