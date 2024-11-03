import Link from "next/link";
import {useRouter} from "next/navigation";

const LocalLink = ({ href, children, ...props }) => {
    const { locale } = useRouter();
    return (
        <Link href={`/${locale}${href}`} {...props}>
            {children}
        </Link>
    );
};

export default LocalLink;