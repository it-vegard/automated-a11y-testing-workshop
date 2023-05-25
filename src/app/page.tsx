"use client"

import { BodyShort, Heading, List } from '@navikt/ds-react'
import ButtonStyledLink from './ButtonStyledLink'

export default function Home() {
  return (
    <>
      <Heading level="1" size="large">Velkommen til workshop i automatisert uu-testing!</Heading>
      <BodyShort>
        I dag skal vi lære tre måter å teste for universell utforming på:
      </BodyShort>
      <List>
        <List.Item>Linting</List.Item>
        <List.Item>Enhetstesting</List.Item>
        <List.Item>Ende-til-ende testing / integrasjonstesting</List.Item>
      </List>
      <ButtonStyledLink href="/oppgaver/1-linting" text="Start her" />
    </>
  )
}
