import { BodyShort } from "@navikt/ds-react";
import styles from "./examples.module.css";

const FormsExample = () => (
  <>
    <BodyShort spacing>
      Forms are among the more complex content types to make accessible. It is
      important that the name/label of each input is communicated through
      assistive technology, but also type of input, role (how can it be
      interacted with) and state (does the input have a value/is checked,
      etc.?). Incorrect use of ARIA in forms is also among the more common
      accessibility bugs found during audits.
    </BodyShort>
    <BodyShort spacing>
      Luckily, ESLint can help with several of these types of errors. Let us
      start by taking a look at connecting the label to the input field.
    </BodyShort>
    <BodyShort spacing>
      Each label needs to be connected to the corresponding input field for it
      to be read out by a screen reader. This is done by adding a{" "}
      <code>for</code> attribute (&quot;htmlFor&quot; in React) matching the
      value of the id attribute of the input field.
    </BodyShort>
    <BodyShort spacing>
      It is easy to test this connection manually, by clicking the label. If
      correctly implemented, focus should be put on the input element.
    </BodyShort>
    <form>
      <label htmlFor="input-with-label" className={styles.Label}>
        Input with a label
      </label>
      <input
        type="text"
        id="input-with-label"
        className={styles.SpacingBottom}
      />
    </form>
    <BodyShort spacing>
      But ESLint can discover a missing connection far quicker. Try removing the
      &quot;htmlFor&quot; attribute on line 21 of{" "}
      <code>oppgaver/1-linting/examples/forms.tsx</code>. Check that ESLint
      complains, and also that clicking the label in the browser no longer
      works.
    </BodyShort>
    <BodyShort spacing>
      One common mistake with input elements (and other interactive elements) is
      trying to force a specific focus order. Try clicking in the input above
      and then using the `Tab` key to move focus to the following input fields.
    </BodyShort>
    <div className={styles.SpacingBottom}>
      <form>
        <label className={styles.Label}>
          Second input
          <input className={styles.TextInput} type="text" tabIndex={2} />
        </label>
        <label className={styles.Label}>
          First input
          <input className={styles.TextInput} type="text" tabIndex={1} />
        </label>
        <label className={styles.Label}>
          Third input
          <input className={styles.TextInput} type="text" tabIndex={3} />
        </label>
      </form>
    </div>
    <BodyShort>
      Chances are you skipped from the &quot;Input with a label&quot; and
      straight past the next three inputs. The reason is the presence of the
      &quot;tabIndex&quot; attribute. This should rarely be used, and then only
      with two possible values:
      <ul>
        <li className={styles.SpacingBottom}>
          <code>tabIndex=&quot;0&quot;</code>:
          <BodyShort spacing>
            Used for making a custom element interactive with a keyboard. E.g.
            if making a custom button out of a <code>div</code>.{" "}
          </BodyShort>
          <BodyShort>
            Just remember this requires at adding more attributes for
            communicating role and possibly state, as well as correct event
            listeners for keyboard interaction. It is better, easier and quicker
            to just use a <code>button</code> and style it properly.
          </BodyShort>
        </li>
        <li className={styles.SpacingBottom}>
          <code>tabIndex=&quot;-1&quot;</code>:
          <BodyShort spacing>
            Used for elements receiving programmatic focus, which should not be
            in the actual tab order.
          </BodyShort>
          <BodyShort>
            An example is the main tag, a modal container, or a heading with an
            id that should be possible to deep link to.
          </BodyShort>
        </li>
      </ul>
    </BodyShort>
  </>
);

export default FormsExample;
