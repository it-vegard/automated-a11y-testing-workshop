import { Accordion } from "@navikt/ds-react";

const AccordionItem = ({ children, header }: { children: any, header: any }) => (
    <Accordion.Item>
      <Accordion.Header>
        {header}
      </Accordion.Header>
      <Accordion.Content>
        {children}
      </Accordion.Content>
    </Accordion.Item>
)

export default AccordionItem