import { BodyShort } from "@navikt/ds-react";

const MyImage = ({ alt, src }: { alt?: string; src: string }) => (
  <img alt={alt} src={src} />
);

const ImagesExample = () => (
  <>
    <BodyShort spacing>
      All non-text content require an alternative text (WCAG 1.1.1). For images,
      this is implemented using the `alt` attribute.
    </BodyShort>
    <BodyShort spacing>
      Of the following, only the first has an alternative text. Check in{" "}
      <code>/src/app/tasts/1-linting/examples/images.tsx</code> to see how the{" "}
      <code>img</code> tag is marked with a red, squiggly underline.
    </BodyShort>
    <img src="https://www.nav.no/dekoratoren/media/nav-logo-red.svg?ts=1" />
    <img
      src="https://www.nav.no/dekoratoren/media/nav-logo-red.svg?ts=1"
      alt="NAV's logo"
    />
    <br />
    <br />
    <BodyShort spacing>
      By default, the jsx-ally plugin will check all instances of the img tag.
      However, it is also possible to tell it to check any custom images, e.g.
      third party components or wrappers inside of the project.
    </BodyShort>
    <BodyShort spacing>
      In <code>.eslintrc.json</code>, add &quot;MyImage&quot; to the components
      array under the &quot;alt-text&quot; rule to force the MyImage component
      to be checked as well.
    </BodyShort>
    <MyImage src="https://www.nav.no/dekoratoren/media/nav-logo-red.svg?ts=1" />
    <br />
    <br />

    <BodyShort spacing>
      In addition to checking for the presence of an alternative text, ESLint
      can be told to check the quality, by reporting on instances where the
      alternative text contains keywords like &quot;image&quot;,
      &quot;picture&quot;, etc. These words are redundant, as a screen reader
      will already announce an img tag as &quot;image&quot;. The following image
      fails this criterion.
    </BodyShort>
    <BodyShort spacing>
      Try adding another image with a keyword you want to avoid (check the
      &quot;jsx-a11y/img-redundant-alt&quot; rule in .eslintrc).
    </BodyShort>
    <MyImage
      src="https://www.nav.no/dekoratoren/media/nav-logo-red.svg?ts=1"
      alt="Image of NAV logo"
    />
  </>
);

export default ImagesExample;
