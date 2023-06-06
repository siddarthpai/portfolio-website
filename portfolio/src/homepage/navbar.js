import { useState } from "react"; 
import S from "./images/s.png"
import './navbar.css';
import { NavLink } from "react-router-dom";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
    <div className="flex items-center justify-between  py-8 text-white ml-10 mr-10 lg:ml-28 mr-28">
      <a href="/">
        <img src={S} alt="logo"/>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 x-3 ml-25"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 color-white"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-black ">
              <li className="border-b border-gray-400 my-8 font-bold text-white">
                <a href="/about" class="left" >~./about</a>
              </li>
              <li className="border-b border-gray-400 my-8 font-bold text-white">
                <a href="/portfolio" class="left">~./blog</a>
              </li>
              <li className="border-b border-gray-400 my-8 font-bold text-white">
                <a href="/contact" class="left">~./contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex m-4 p-8 text-2xl">
          <li>
            <a href="{About}" class="left">~./about</a>
          </li>
          <li>
            <a href="/portfolio" class="left">~./blog</a>
          </li>
          <li>
            <a href="/contact" class="left">~./contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.2); 
        backdrop-filter: blur(6px); 
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}