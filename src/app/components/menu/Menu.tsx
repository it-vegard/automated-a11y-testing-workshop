import { Button } from "@navikt/ds-react"
import MenuHamburgerIcon from "./MenuHamburgerIcon"

export default function Menu () {
    return (
        <Button icon={<MenuHamburgerIcon />} variant="tertiary">
          Meny
        </Button>
    )
}