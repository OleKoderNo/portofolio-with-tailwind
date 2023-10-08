import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const NavBar = () => {

  const router = useRouter()
  const [navbar, setNavbar] = useState(false)
  return (
    <nav
      className={`w-full bg-cardBG text-pinkText mb-4 ${navbar ? "bg-black md:bg-transparent" : "bg-transparent"
        }`
      }
    >
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8 max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="flex items-center  sm:mb-0">
              <p className="self-center  whitespace-nowrap text-blueText uppercase font-bold">
                Ole sin portofolio
              </p>
            </Link>
            <div className="md:hidden">
              <button
                aria-label=" navigasjons knapp"
                className="p-2 text-gray-900 rounded-md outline-none focus:border-gray-900 focus:border"
                onClick={() => {
                  setNavbar(!navbar)
                }}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8  md:block md:pb-0 md:mt-0 bg-black md:bg-transparent ${navbar ? "block" : "hidden"
              }`}
          >
            <ul
              className="relative items-center justify-center space-y-8 text-center md:flex md:text-lg md:space-x-6 md:space-y-0"
              onClick={() => {
                setNavbar(!navbar)
              }}
            >
              <li
                className="hover:text-blueText"
              >
                <Link
                  href="/"
                >
                  Forsiden
                </Link>
              </li>
              <li
                className="hover:text-blueText"
              >
                <Link
                  href="/om-meg"
                >
                  Om meg
                </Link>
              </li>
              <li
                className="hover:text-blueText"
              >
                <Link
                  href="/mine-prosjekter"
                >
                  Mine prosjekter
                </Link>
              </li>
              <li
                className="hover:text-blueText"
              >
                <Link
                  href="/mine-erfaringer"
                >
                  Mine erfaringer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar