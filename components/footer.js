import Link from "next/link"
// import Logo from "@/images/layout/footer/Jobbjakt_logo.svg"
import Image from "next/image"
// import Mail from "@/images/layout/footer/mail.png"
// import Phone from "@/images/layout/footer/phone.png"


export default function Footer() {
    return (
        <footer
        className="py-5 mt-10 text-center bg-cardBG text-pinkText decor"
        >
            <div
            className="w-[200px] flex justify-between mx-auto md:w-[250px]"
            >

            <p>
                Epost: 
            </p>
                <p className=" text-blueText">
                    ohfb96@gmail.com
                </p>
                </div>
            <div
            className="w-[200px] flex justify-between mx-auto md:w-[250px]"
                >
            <p>
                Telefon: 
            </p>
                <p className="text-blueText">
                    96912304
                </p>
                </div>
            <div
                className="flex justify-around underline"
            >
                <p
                    className=" hover:text-blueText"
                >
                    <a
                        href="https://github.com/OleKodehode"
                    >
                        GitHub
                    </a>
                </p>
                <p
                    className=" hover:text-blueText"
                >
                    <a
                    href="https://www.linkedin.com/in/ole-h%C3%A5vard-furuseth-bergan-2a1209255/"
                    >
                        LinkedIn
                    </a>
                </p>
            </div>
        </footer>
    );
}