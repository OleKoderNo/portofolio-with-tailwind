export default function Footer() {
    return (
        <footer
            className="py-5 mt-10 text-center bg-cardBG text-pinkText "
        >
            {/* Contact email */}
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

            {/* Contact number */}
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

            {/* Some links */}
            <div
                className="flex justify-between mx-auto max-w-[200px] md:max-w-4xl"
            >
                <p
                    className=" hover:text-blueText underline"
                >
                    <a
                        href="https://github.com/OleKoderNo"
                        target="_blank"
                    >
                        GitHub
                    </a>
                </p>
                <p
                    className=" hover:text-blueText underline"
                >
                    <a
                        href="https://www.linkedin.com/in/ole-h%C3%A5vard-furuseth-bergan-2a1209255/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </p>
            </div>
        </footer>
    );
}