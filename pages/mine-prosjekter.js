import Head from "next/head";
import { Client } from "@/lib/client";
// import { Modal } from 'flowbite-react';
// import { useState } from "react";

export async function getServerSideProps() {
    const data = await Client.fetch(`*[_type == 'project']{title, urlDesc, description, tag[]->}`)
    return {
        props: {
            data,
        },
    }
}

export default function Projects({ data }) {
    // const [openModal, setOpenModal] = useState(false)

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
                    {/* For later deployment */}
                    {/* {data.map((item) => {
                        return (
                            <>
                                <div className="py-6 flex flex-col justify-between px-8 mx-5 w-[300px] bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)]">
                                    <h3
                                        className="text-lg font-medium text-pinkText"
                                    >
                                        {item.title}
                                    </h3>
                                    <div className=" flex justify-between">
                                        <ul>
                                            {item.tag.map((list) => {
                                                console.log(list);
                                                return (
                                                    <li>{list.name}</li>
                                                )
                                            })}
                                        </ul>
                                        <div className="flex items-end">
                                        <button
                                            className=" bg-blueText text-cardBG py-1 px-2 text-l font-medium"
                                        >
                                            Les mer
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })} */}
                    {data.map((item) => {
                        console.log(item);
                        return (
                            <>
                                <div className="py-6 flex flex-col justify-between px-8 mx-5 max-w-[400px] bg-cardBG text-greyText rounded-[20px] shadow-[0px_0_10px_rgba(0,0,0,0.8)] ">

                                    <div>
                                        <h3
                                            className="text-lg font-medium text-pinkText"
                                        >
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <a
                                            className="underline cursor-pointer text-blueText hover:text-pinkText"
                                            href={item.url}
                                            target="blank"
                                        >
                                            <p>
                                                {item.title}
                                            </p>
                                        </a>
                                        <ul>
                                            {item.tag.map((list) => {
                                                console.log(list);
                                                return (
                                                    <li>{list.name}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </section>
            </main>
        </>
    )
}