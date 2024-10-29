"use client";

import { Heading } from "@navikt/ds-react";
import ButtonRow from "../ButtonRow";
import ButtonStyledLink from "@/app/ButtonStyledLink";
import styles from "./page.module.css";
import Container from "./Container";
import Form from "./components/Form";

export default function Oppgave1() {
  return (
    <>
      <Heading level="1" size="large">
        Task 3: End-to-end testing
      </Heading>
      <ButtonRow>
        <ButtonStyledLink
          href="/oppgaver/2-enhetstesting"
          text="Back to task 2: Unit testing"
          variant="secondary"
        />
      </ButtonRow>
      <p className={styles.containerText}>
        This text validates against a white background.
      </p>
      <Container>
        <p className={styles.containerText}>
          This text does not validate against a dark background.
        </p>
      </Container>
      <Form />
    </>
  );
}
