"use client"
import Head from "next/head";
import {useSearchParams} from "next/navigation";
import PortfolioDetails1 from "@/components/portfolio/PortfolioDetails1";
import PortfolioDetails2 from "@/components/portfolio/PortfolioDetails2";
import PortfolioDetails3 from "@/components/portfolio/PortfolioDetails3";
import ErrorDark from "@/app/error/page";
import RootLayout from "../../../components/common/layout/RootLayout";
import PortfolioDetails4 from "@/components/portfolio/PortfolioDetails4";
import PortfolioDetails5 from "@/components/portfolio/PortfolioDetails5";

const PortfolioDetails = ({params}) => {
    const searchParams = useSearchParams();
    // const component = searchParams.get('component');
    const {component} = params

    console.log('searchParams' , searchParams)
    console.log('component' , component)

    const renderComponent = () => {
        // debugger
        switch (component){
            case 'case_1' : return  <PortfolioDetails1/>
            case 'case_2' : return  <PortfolioDetails2 />
            case 'case_3' : return  <PortfolioDetails3 />
            case 'case_4' : return  <PortfolioDetails4 />
            case 'case_5' : return  <PortfolioDetails5 />
            default : return <ErrorDark/>
        }
    }
    return (
        <>
            <Head>
                <title>Portfolio Details Dark</title>
                <meta name="description" content="Portfolio Details Dark Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <RootLayout header="header3" footer="footer1">
                    {renderComponent()}
                </RootLayout>
            </main>
        </>
    );
};

export default PortfolioDetails;