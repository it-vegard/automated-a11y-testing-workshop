import styles from "./ButtonRow.module.css";

export default function ButtonRow({ children }: { children: any }) {
  return (
    <nav aria-label="Oppgavenavigasjon" className={styles["button-row"]}>
      {children}
    </nav>
  );
}
