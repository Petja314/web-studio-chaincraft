"use client"
import RootLayout from "../../components/common/layout/RootLayout";
import DigitalAgencyCTA from "../../components/cta/DigitalAgencyCTA";
import AboutHero from "../../components/hero/AboutHero";
import AboutStory from "../../components/story/AboutStory";
import Head from "next/head";

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content="About Dark Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <RootLayout footer="footer1" >
                    <AboutHero />
                    <AboutStory />
                    <DigitalAgencyCTA />
                </RootLayout>
            </main>
        </div>
    );
};

export default About;
