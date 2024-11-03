'use client';
import {useRef} from "react";
import Preloader from "../../../components/preloader/Preloader";
import CommonAnimation from "../CommonAnimation";
import ScrollSmootherComponents from "../ScrollSmootherComponents";
import CursorAnimation from "../CursorAnimation";
import ScrollTop from "../ScrollTop";
import Footer1 from "../../../components/footer/Footer1";
import Header3 from "../../../components/header/Header3";

export default function RootLayout({
  children,
}) {
  const cursor2 = useRef();
  return (
    <>
      <CommonAnimation>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        <div className="cursor" id="team_cursor">
          Drag
        </div>

        <Preloader />
        <CursorAnimation cursor2={cursor2} />
        <ScrollTop />
        <Header3  />
        <div id="smooth-wrapper">
          <div id="smooth-content" >
            {children}
            <Footer1 />
          </div>
        </div>
      </CommonAnimation>
    </>
  );
}
