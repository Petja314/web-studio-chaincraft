import Head from "next/head";
import RootLayout from "@/app/layout";
import PrivacyPolicyDocs from "@/components/legal/PrivacyPolicyDocs";

const FaqDark = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Faq Dark Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <RootLayout header="header3" footer="footer1" defaultMode="dark">
                    <PrivacyPolicyDocs />
                </RootLayout>
            </main>
        </>
    );
};

export default FaqDark;
