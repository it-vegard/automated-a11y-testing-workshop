/* eslint-disable @next/next/no-img-element */
"use client"

import ButtonStyledLink from "@/app/ButtonStyledLink";
import { BodyShort, Button, Heading } from "@navikt/ds-react";
import ButtonRow from "../ButtonRow";
import TaskStep from "../TaskStep";

export default function Oppgave1() {
    return (
        <>
            <Heading level="1" size="large">Oppgave 1: Linting</Heading>
            <TaskStep>
                <BodyShort>I denne oppgaven skal vi lære om linting av universell utforming.<br /> Vi baserer oss på eslint-pakken &quot;eslint-plugin-jsx-a11y&quot;.</BodyShort>
            </TaskStep>
            <TaskStep>
                <Heading size="medium" level="2">Steg 1</Heading>
                <BodyShort>Installer eslint-plugin-jsx-a11y: <code>npm install eslint-plugin-jsx-a11y --save-dev</code></BodyShort>
            </TaskStep>
            <TaskStep>
                <Heading size="medium" level="2">Steg 2</Heading>
                <BodyShort>
                    I <code>.eslintrc</code>, legg til <code>&quot;plugins&quot;: [&quot;jsx-a11y&quot;]</code>.
                </BodyShort>
            </TaskStep>
            <TaskStep>
                <Heading size="medium" level="2">Steg 3</Heading>
                <BodyShort>
                    <div style={{ margin: "1rem 0" }}>
                        <img src="https://www.nav.no/dekoratoren/media/nav-logo-red.svg?ts=1"/>
                    </div>
                    Sjekk i <code>src/app/oppgaver/1-linting/page.tsx</code>, sjekk at img-taggen for NAV-logoen klager over manglende alternativ tekst.
                    Legg til en alternativ tekst, og se at feilmeldingen forsvinner.
                </BodyShort>
            </TaskStep>
            <TaskStep>
                <Heading size="medium" level="2">Oppsummering</Heading>
                Linting hjelper oss med å raskt se mangler i koden vår. 
                Samtidig er reglene ofte avhengig av å sjekke native html-elementer, og vil dermed ikke evaluere tredjeparts React-komponenter.
                De samme reglene vil testes i seinere oppgaver, men jo tidligere vi fanger feilene, jo mer tid sparer vi.
            </TaskStep>
            <ButtonRow>
                <ButtonStyledLink href="/" text="Tilbake til forsiden" variant="secondary" />
                <ButtonStyledLink href="/oppgaver/2-enhetstesting" text="Fortsett til oppgave 2: Enhetstesting" />
            </ButtonRow>
        </>
    )
}