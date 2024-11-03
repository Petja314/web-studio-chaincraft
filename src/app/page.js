"use client"
import {useEffect} from "react";
import {gsap} from "gsap";
import RootLayout from "../components/common/layout/RootLayout";
import DigitalAgencyHero from "../components/hero/DigitalAgencyHero";
import DigitalAgencyRoll from "@/components/roll/DigitalAgencyRoll";
import DigitalAgencyService from "@/components/service/DigitalAgencyService";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";
import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import DigitalAgencyPortfolio from "@/components/portfolio/DigitalAgencyPortfolio";
import DigitalAgencyAbout from "@/components/about/DigitalAgencyAbout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";



const DigitalAgency = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      playCursor();
    }
  }, []);

  function playCursor() {
    try {
      let client_cursor = document.getElementById("client_cursor");
      document.addEventListener("mousemove", (e) => {
        const target = e.target;
        let tHero = gsap.context(() => {
          let tl = gsap.timeline({
            defaults: {
              x: e.clientX,
              y: e.clientY,
            },
          });
          let t2 = gsap.timeline({
            defaults: {
              x: e.clientX,
              y: e.clientY,
            },
          });

          // Home Page Client Cursor
          if (target.closest(".testimonial__img")) {
            tl.to(
                client_cursor,
                {
                  opacity: 1,
                  ease: "power4.out",
                },
                "-=0.3"
            );
          } else {
            t2.to(
                client_cursor,
                {
                  opacity: 0,
                  ease: "power4.out",
                },
                "-=0.3"
            );
          }
        });
        return () => tHero.revert();
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
        <div>
          <Head>
            <title>Web 3.0 ChainCraft</title>
            <meta/>
            <meta name="description" content="ChainCraft web agency" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <main>
            <div className="cursor" id="client_cursor">
              Play
            </div>
            <RootLayout header="header3" footer="footer1">
              <DigitalAgencyHero />
              <DigitalAgencyRoll />
              {/*<DigitalAgencyAbout />*/}
              <DigitalAgencyService />
              <DigitalAgencyWorkflow />
              {/*<DigitalAgencyBrand />*/}
              <DigitalAgencyPortfolio />
              {/*<DigitalAgencyCTA />*/}
            </RootLayout>
          </main>
        </div>
  );
};


export default DigitalAgency;

