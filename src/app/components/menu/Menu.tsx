import { Button } from "@navikt/ds-react"
import MenuHamburgerIcon from "./MenuHamburgerIcon"
import { createRef, useState } from "react"
import styles from "./Menu.module.css"
import Link from "next/link";

export default function Menu () {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = createRef<HTMLDivElement>();

    return (
        <>
            { /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */ }
           {isOpen && <div className={styles.MenuOverlay} onClick={(event) => menuRef.current !== event.target && setIsOpen(false)} />}
            <div className={styles.Menu} ref={menuRef}>
                <Button onClick={() => setIsOpen(!isOpen)} icon={<MenuHamburgerIcon />} variant={isOpen ? "secondary" : "tertiary"}>
                Menu
                </Button>
                {isOpen && (
                    <>
                    { /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ }
                    <nav className={styles.MenuDropDown} onKeyUp={(event) => event.key === "Escape" && setIsOpen(false)}>
                        <ul>
                            <li><Link href="/oppgaver/1-linting">Task 1: Linting</Link></li>
                            <li><Link href="/oppgaver/2-enhetstesting">Task 2: Unit testing</Link></li>
                            <li><Link href="/oppgaver/3-ende-til-ende-testing">Task 3: End-to-end testing</Link></li>
                        </ul>
                    </nav>
                    </>
                )}
            </div>
        </>
    )
}