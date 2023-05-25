import { Button } from "@navikt/ds-react";
import Link from "next/link";

export default function ButtonStyledLink({ href, text, variant }: { href: string, text: string, variant?: "primary" | "secondary" | "tertiary" }) {
    return (
        <Link href={href} passHref legacyBehavior>
            <Button as="a" variant={variant}>{text}</Button>
        </Link>
    )
}