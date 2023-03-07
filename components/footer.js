import Link from "next/link"
// import Logo from "@/images/layout/footer/Jobbjakt_logo.svg"
import Image from "next/image"
// import Mail from "@/images/layout/footer/mail.png"
// import Phone from "@/images/layout/footer/phone.png"


export default function Footer() {
    return (
        <footer
            className="py-5 mt-10 text-center bg-cardBG text-pinkText"
        >
            <p>
                Epost: <span className=" text-blueText">
                    ohfb96@gmail.com
                    </span>
            </p>
            <p>
                Telefon: <span className="text-blueText">
                    96912304
                    </span>
            </p>
            <div
            className="flex justify-around"
            >
                <p>GitHub</p>
                <p>LinkedIn</p>
            </div>
        </footer>
    );
}