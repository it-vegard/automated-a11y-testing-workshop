"use client"

import ButtonStyledLink from "@/app/ButtonStyledLink";
import { Heading } from "@navikt/ds-react";
import ButtonRow from "../ButtonRow";

export default function Oppgave2() {
    return (
        <>
            <Heading level="1" size="large">Oppgave 2: Enhetstesting</Heading>
            <ButtonRow>
                <ButtonStyledLink href="/oppgaver/1-linting" text="Tilbake til oppgave 1: Linting" variant="secondary" />
                <ButtonStyledLink href="/oppgaver/3-ende-til-ende-testing" text="Fortsett til oppgave 3: Ende-til-ende-testing" />
            </ButtonRow>
        </>
    )
}