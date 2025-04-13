import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/CCRAFTLOGO.svg";
import TelegramIcon from "../../../public/assets/imgs/logo/telegram-circle-blue-logo.svg";
import WhatsAppIcon from "../../../public/assets/imgs/logo/whatsapp-logo-.svg";
import EmailIcon from "../../../public/assets/imgs/logo/mail.svg";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";




const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const menuList = [
    {title : "CONTACTS", link : `/contact`},
    {title : "ABOUT US" , link : `/about`},
    {title : "PRIVACY POLICY" , link : `/privacy-policy`},
    {title : "TERM & CONDITIONS" , link : `/terms-and-conditions`},
  ]

  const getInTouch = [
    {icon : TelegramIcon ,    text : "@chaincraft_dev" , href : "https://t.me/chaincraft_dev"},
    {icon : WhatsAppIcon ,    text : "+44 7914640779" , href : "https://wa.me/447914640779" },
    {icon : EmailIcon ,       text : "chainccraft@outlook.com" , href : "mailto:chainccraft@outlook.com" },
  ]

  const [isClient, setIsClient] = useState(false)

  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  useEffect(() => {
    setIsClient(true)
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let rootParent = headerTitle.current.children;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className.includes("header_title")) {

              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] == " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);

  if (!isClient) {
    // Render a loading state or placeholder content during SSR
    return null;
  }

  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">


          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href={`/`}>
                <Image
                  priority
                  style={{  width : "140px" , height : "60px"}}
                  src={logoWhite2}
                  alt="ChainCraft Logo"
                />
              </Link>
            </div>
          </div>



          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                  {menuList.map((el,index) => (
                      <li key={index}>
                        <div className="header_title">
                          <Link href={el.link}>{el.title}</Link>
                        </div>
                      </li>
                  ))}

                </ul>
              </nav>
            </div>
          </div>


          <div className="offcanvas__right">

            <div className="offcanvas__contact">
              <h3>
                {/*{t('Связаться с нами')}*/}
                Contact us
              </h3>
              <ul >
                {
                  getInTouch.map((el,index) => (
                      <li key={index}>
                        <a  href={el.href}  target="_blank"  className={"contact-list"}>
                          <Image
                              priority
                              width={40}
                              height={40}
                              src={el.icon}
                              alt={"contact icon"}
                          />
                          <div>
                            {el.text}
                          </div>
                        {/*<a href={""}  >{el.text}</a>*/}
                        </a>
                      </li>
                  ))
                }
                <li style={{marginTop : "20px"}} >40 Avocet Grove, Soham, Ely, United Kingdom, CB7 5GN</li>
              </ul>
            </div>
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape11}
              alt="shape"
              className="shape-1"
            />
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape12}
              alt="shape"
              className="shape-2"
            />
          </div>


          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>


        </div>
      </div>
    </>
  );
};

export default Canvas;
