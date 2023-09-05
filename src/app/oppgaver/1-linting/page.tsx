"use client";

import ButtonStyledLink from "@/app/ButtonStyledLink";
import {Accordion, BodyShort, Heading} from "@navikt/ds-react";
import AccordionItem from "../AccordionItem";
import ButtonRow from "../ButtonRow";
import TaskStep from "../TaskStep";
import FormsExample from "./examples/forms";
import LinksExample from "./examples/links";
import ImagesExample from "./examples/images";
import styles from "./examples/examples.module.css";

export default function Oppgave1() {
  return (
    <>
      <Heading level="1" size="large">
        Task 1: Linting
      </Heading>
      <TaskStep>
        <BodyShort>
          The first level of automatic testing for accessibility is linting. That is static code-checking which reports errors directly in your IDE.
          We will use ESLint with the popular plugin <code>eslint-plugin-jsx-a11y</code>.
        </BodyShort>
      </TaskStep>
      <TaskStep>
        <Heading size="medium" level="2">
          Prerequisites
        </Heading>
        <BodyShort>
          Both ESLint and the &quot;jsx-a11y&quot;-plugin have been pre-installed in this repo.
          But you should check that you have your IDE set up to support ESLint as well.
        </BodyShort>
        <BodyShort spacing>
          In Visual Studio Code, you should install the &quot;ESLint&quot; extension. <br/>
          In IntelliJ/Webstorm should probably just need to activate ESLint in the IDEA through <code>Settings &gt; Languages & Frameworks &gt; JavaScript &gt; Code Quality Tools &gt; ESLint</code> (select &quot;Automatic ESLint configuration&quot;).
        </BodyShort>
      </TaskStep>
      <TaskStep>
        <Heading size="medium" level="2">
          Tasks
        </Heading>
        <Accordion className={styles.SpacingBottom}>
          <AccordionItem header="Images">
            <ImagesExample />
          </AccordionItem>
          <AccordionItem header="Forms">
            <FormsExample />
          </AccordionItem>
          <AccordionItem header="Links">
            <LinksExample />
          </AccordionItem>
        </Accordion>
      </TaskStep>
      <TaskStep>
        <Heading size="medium" level="2">
          Summary
        </Heading>
        <BodyShort>
          Linting is a low-cost and quick feedback mechanism to check for common accessibility bugs.
          Although the examples in this task may seem &quot;obvious&quot;, they also frequent the top-10 most common bugs found world-wide.
        </BodyShort>
        <BodyShort>
          However, it will only check static code, which does not account for state, conditional rendering, composed views, etc.
          The linter also usually work only on native HTML, and we have to &quot;help&quot; it to check custom components.
          Finally, since linting only checks static code, it will not find contrast issues and other visual accessibility issues.
          For that, we need to test the rendered DOM, which we will begin in the next task.
        </BodyShort>
      </TaskStep>
      <ButtonRow>
        <ButtonStyledLink
          href="/"
          text="Back to Home"
          variant="secondary"
        />
        <ButtonStyledLink
          href="/oppgaver/2-enhetstesting"
          text="Continue to task 2: Unit testing"
        />
      </ButtonRow>
    </>
  );
}
