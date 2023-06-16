"use client";

import { Heading } from "@navikt/ds-react";
import ButtonRow from "../ButtonRow";
import ButtonStyledLink from "@/app/ButtonStyledLink";
import styles from "./page.module.css";
import Container from "./Container";

export default function Oppgave1() {
  return (
    <>
      <Heading level="1" size="large">
        Oppgave 3: Ende-til-ende-testing
      </Heading>
      <ButtonRow>
        <ButtonStyledLink
          href="/oppgaver/2-enhetstesting"
          text="Tilbake til oppgave 2: Enhetstesting"
          variant="secondary"
        />
      </ButtonRow>
      <p className={styles.containerText}>
        Denne teksten validerer mot hvit bakgrunn
      </p>
      <Container>
        <p className={styles.containerText}>
          Denne teksten validerer ikke mot mørkere bakgrunn
        </p>
      </Container>
    </>
  );
}
