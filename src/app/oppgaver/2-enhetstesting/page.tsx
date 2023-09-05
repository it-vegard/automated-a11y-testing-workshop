"use client";

import ButtonStyledLink from "@/app/ButtonStyledLink";
import { BodyShort, Heading } from "@navikt/ds-react";
import ButtonRow from "../ButtonRow";
import TaskStep from "../TaskStep";

export default function Oppgave2() {
  return (
    <>
      <Heading level="1" size="large">
        Task 2: Unit testing
      </Heading>
      <TaskStep>
        <BodyShort spacing>
          In this task, we will try out frontend unit testing. 
          This is a nice way to test specific controls, test details, 
          make sure components use semantic code and only correct aria-roles and states.
        </BodyShort>
        <BodyShort spacing>
          We will be using React Testing Library (RTL) and Jest-Axe for unit testing.
          Both these libraries provide powerful functionality for testing accessibility.
        </BodyShort>
        <BodyShort spacing>
          <abbr title="React Testing Library">RTL</abbr> does a good job of encouraging tests to be written to test like a real user, 
          looking up elements by the <abbr title="the textual representation of the element">accessible name</abbr>, role and state, 
          resulting in implicit validation of what is communicated to assistive technology.
        </BodyShort>
        <BodyShort>
          Jest-axe, on the other hand, is usually really easy to run (once you have set it up), and will test a snapshot of your application.
          The performance hit is negligible, meaning you can run it after every action resulting in a changed UI if you want.
        </BodyShort>
      </TaskStep>
      <TaskStep>
        <Heading size="medium" level="2" spacing>
          Step 1
        </Heading>
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
      <TaskStep>
        <Heading size="medium" level="2" spacing>
          Summary
        </Heading>
        <BodyShort spacing>
          Unit testing components for accessibility can be very useful for design systems and other projects that create re-usable components.
          It also makes sense for when you want to test how a component is rendered based on several different arguments/props.
          Running the tests are fairly quick, and you get to test a close-to-real rendering of the component.
        </BodyShort>
        <BodyShort>
          However, unit testing is not a complete check for a component being universally designed.
          Contrast issues will often require composing larger views to discover.
          Other visual bugs like overlapping elements, responsive design, etc. is better suited for other tests.
          Also, bugs like duplicate IDs will ususally only be found while rendering the full application in a real environment.
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
