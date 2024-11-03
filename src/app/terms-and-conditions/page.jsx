import Head from "next/head";
import RootLayout from "@/app/layout";
import TermsConditionsDocs from "@/components/legal/TermsConditionsDocs";
const TermsAndConditions = () => {
    return (
        <>
            <Head>
                <title>Terms and Conditions</title>
                <meta name="description" content="Faq Dark Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <RootLayout header="header3" footer="footer1" defaultMode="dark">
                    <TermsConditionsDocs />
                </RootLayout>
            </main>
        </>
    );
};

export default TermsAndConditions;

