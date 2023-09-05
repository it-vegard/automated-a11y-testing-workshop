"use client";

import { BodyShort, Heading, List } from "@navikt/ds-react";
import ButtonStyledLink from "./ButtonStyledLink";

export default function Home() {
  return (
    <>
      <Heading level="1" size="large">
        Welcome to this workshop on automatic accessibility testing!
      </Heading>
      <BodyShort>
        Today, we will learn three different methods of testing for accessibility.
      </BodyShort>
      <List>
        <List.Item>Linting</List.Item>
        <List.Item>Unit testing</List.Item>
        <List.Item>End-to-end testing / integration testing</List.Item>
      </List>
      <ButtonStyledLink href="/oppgaver/1-linting" text="Start here" />
    </>
  );
}
