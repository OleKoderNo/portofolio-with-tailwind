import Link from "next/link";
// import Logo from "@/images/layout/footer/Jobbjakt_logo.svg"
import Image from "next/image";
// import Mail from "@/images/layout/footer/mail.png"
// import Phone from "@/images/layout/footer/phone.png"


export default function Footer() {
    return (
        <footer
            className="mt-20 py-5  bg-[#050C11] text-center text-[#fff]"
        >
            <p>
                Epost: ohfb96@gmail.com
            </p>
            <p>
                Telefon: 96912304
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