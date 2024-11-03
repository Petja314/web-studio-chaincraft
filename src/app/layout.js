import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss"
import "../styles/extra.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Kanit} from "@next/font/google";
import Head from "next/head";



const kanit = Kanit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export default async function LocaleLayout({ children }) {

    return (
        <html  >
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                rel="stylesheet"
            />
            <link
                rel="icon"
                type="image/x-icon"
                href="/assets/imgs/logo/favicon-32x32.png"
            />
        </Head>
        <body  suppressHydrationWarning={true} className="dark">
            {children}
        </body>
        </html>
    );
}
