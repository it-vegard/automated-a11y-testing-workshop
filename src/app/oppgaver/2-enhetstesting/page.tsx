"use client";

import ButtonStyledLink from "@/app/ButtonStyledLink";
import { BodyShort, Heading } from "@navikt/ds-react";
import ButtonRow from "../ButtonRow";
import TaskStep from "../TaskStep";

export default function Oppgave2() {
  return (
    <>
      <Heading level="1" size="large">
        Oppgave 2: Enhetstesting
      </Heading>
      <TaskStep>
        <BodyShort>
          I denne oppgaven skal vi se på enhetstesting. Det er en fin måte å
          teste detaljer i hvordan komponentene oppfører seg, og sikre at koden
          innehar riktig semantisk kode, aria-roller og tilstander.
        </BodyShort>
      </TaskStep>
      <TaskStep>
        <BodyShort>
          Det er derimot ikke en fullstendig sjekk for at komponenten er
          universelt utformet. Kontrast er for eksempel noe som vanskelig kan
          testes i enhetstester, da fargene må sjekkes mot bakgrunnen de
          plasseres på. Om elementer vil overlappe andre er også noe som
          vanskelig kan testes i en enhetstest.
        </BodyShort>
      </TaskStep>
      <TaskStep>
        <Heading size="medium" level="2">
          Steg 1
        </Heading>
        <BodyShort>
          For enhetstesting vil vi støtte oss på React Testing Library og
          Jest-Axe.
        </BodyShort>
      </TaskStep>
      {/*<TaskStep>
        <Heading size="medium" level="2">
          Steg 2
        </Heading>
        <BodyShort></BodyShort>
      </TaskStep>*/}
      <TaskStep>
        <BodyShort>
          Prøv å kjøre Jest-Axe etter rendring av komponenten:
          <code></code>
        </BodyShort>
      </TaskStep>
      <ButtonRow>
        <ButtonStyledLink
          href="/oppgaver/1-linting"
          text="Tilbake til oppgave 1: Linting"
          variant="secondary"
        />
        <ButtonStyledLink
          href="/oppgaver/3-ende-til-ende-testing"
          text="Fortsett til oppgave 3: Ende-til-ende-testing"
        />
      </ButtonRow>
    </>
  );
}
