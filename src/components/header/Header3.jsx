'use client';
import {useEffect, useRef, useState} from "react";
import Canvas from "../canvas/Canvas";
import Link from "next/link";
import LogoCCraft from "../../../public/assets/imgs/logo/CCRAFTLOGO.svg";
import TelegramIcon from "../../../public/assets/imgs/logo/telegram-circle-blue-logo.svg";
import WhatsAppIcon from "../../../public/assets/imgs/logo/whatsapp-logo-.svg";
import MailIcon from "../../../public/assets/imgs/logo/mail.svg";
import MenuWhite from "../../../public/assets/imgs/icon/menu-white.png";
import Image from "next/image";
import LanguageButton from "../../components/language/LanguageButton";

const contactIcons = [
  {href : "https://t.me/petja666" , icon : TelegramIcon , alt : "Telegram Icon"},
  {href : "https://wa.me/447834898962" , icon : WhatsAppIcon , alt : "WhatsApp icon"},
  {href : "mailto:chainccraft@outlook.com" , icon : MailIcon , alt : "EmailIcon"},
]

export default function Header3() {
  const [topScroll, setTopScroll] = useState(0);

  const ofCanvasArea = useRef();
  const headerArea = useRef();

  const handleTopScroll = () => {
    const position = window.pageYOffset;
    setTopScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTopScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);
  if (typeof window !== "undefined") {
    let device_width = window.innerWidth;
    if (device_width < 1365) {
      let header_bg = headerArea.current;
      if (header_bg) {
        if (topScroll > 20) {
          header_bg.style.background = "#121212";
          header_bg.style.setProperty("mix-blend-mode", "unset");
        } else {
          header_bg.style.background = "transparent";
          header_bg.style.setProperty("mix-blend-mode", "exclusion");
        }
      }
    }
  }
  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
    let header_bg = headerArea.current;
    header_bg.style.setProperty("mix-blend-mode", "unset");
  };
  return (
    <>
      <header className="header__area" ref={headerArea}>
        <div className="header__inner">
          <div className="header__logo">
            <Link href={"/"}>
              <Image
                priority
                width={140}
                height={180}
                style={{transform: "rotate(-90deg)"}}
                className="logo-primary"
                src={LogoCCraft}
                alt="Site Logo"
              />

              <Image
                priority
                width={140}
                height={60}
                className="logo-secondary"
                src={LogoCCraft}
                alt="Moibile Logo"
              />
              </Link>

          </div>
          <div className="header__nav-icon">

            {/*<LanguageButton className={"language-btn-header"}/>*/}

            <button onClick={openCanvas} id="open_offcanvas">
              <Image
                priority
                width={22}
                height={22}
                src={MenuWhite}
                alt="Menubar Icon"
              />
            </button>
          </div>


          <div className="header__support" >
            {/*<LanguageButton />*/}
            {contactIcons.map((el,index) => (
                <a href={el.href}  target="_blank" key={index} className={"contact-list-wrapper"}>
                  <Image
                      style={{marginTop : "20px"}}
                      priority
                      width={50}
                      height={50}
                      src={el.icon}
                      alt={el.alt}
                  />
                </a>
            ))}
          </div>


        </div>
        <Canvas bladeMode={headerArea.current} ofCanvasArea={ofCanvasArea} />
      </header>
    </>
  );
}
