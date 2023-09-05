"use client";

import ButtonStyledLink from "@/app/ButtonStyledLink";
import { Accordion, BodyShort, Heading } from "@navikt/ds-react";
import AccordionItem from "../AccordionItem";
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
          Task 1: React Testing Library
        </Heading>
        <Accordion>
          <AccordionItem header="findByRole">
            <BodyShort spacing>
              One of the most basic functions provided by React Testing Library is the <code>findByRole</code> function.
              It is also one of the most powerful and genius parts of this testing library.
            </BodyShort>
            <BodyShort spacing>
              The primary lookup of &quot;findByRole&quot; is (suprise, surprise!): the role.
              Often, this can be enough. We require the input field, the one button in the component, the navigation element or a list.
              By using this function, we do not have to add a test-id, and we also enforce that the primary function of the component is preserved through future refactorings.
              Finally, we make sure screen reader users are informed of the role, which says a lot about how the component works.
            </BodyShort>
            <BodyShort spacing>
              For this first task, look up <code>ToggleButton.text.tsx</code>.
              In the first test (&quot;renders correctly&quot;), use the findByRole function to look up the ToggleButton component, and check that it exists.
              If you are unsure how to use findByRole, have a look in the <a href="#documentation">documentation</a>.
            </BodyShort>
          </AccordionItem>
          <AccordionItem header="findByRole with accessible name">
            <BodyShort spacing>
              If multiple elements with the same role exist, then role will not be sufficient for lookup.
              In that case, the normal method to test will be to also check the <abbr title="the text communicated to assistive technology">accessible name</abbr>.
              For a second argument, <code>findByRole</code> takes an options-object. Pass in the &quot;name&quot; property to use both role and name as lookup.
            </BodyShort>
            <BodyShort spacing>
              Try looking up both toggle buttons in the second test.<br />
              Then click &quot;Toggle 1&quot; and check that it gets the attribute &quot;aria-pressed&quot; set to &quot;true&quot; (string);
              Also check that &quot;Toggle 2&quot; still has &quot;aria-pressed&quot; set as &quot;false&quot; (string);
            </BodyShort>
          </AccordionItem>
          <AccordionItem header="findByRole with accessible name and state='pressed'">
            <BodyShort spacing>
              If you used <code>button.getAttribute(...)</code> to look up the pressed-state in the last task, let us have a look at a better way.
              Using the options object, we can check whether the button is pressed at the same time as checking accessible name and role.
              Give it a go, and then let us move on to using &quot;jest-axe&quot;.
            </BodyShort>
          </AccordionItem>
          <AccordionItem header="Jest axe">
            Finally, we can use the <code>axe</code> function on the <code>container</code> returned by RTL render function.
            This will return a results object, which we can use like this: <code>expect(results).toHaveNoViolations()</code>. Try copying the previous test, and run axe every time the UI updates.">
          </AccordionItem>
        </Accordion>
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
