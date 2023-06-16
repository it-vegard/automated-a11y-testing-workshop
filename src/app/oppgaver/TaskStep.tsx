import styles from "./TaskStep.module.css";

export default function TaskStep({ children }: { children: any }) {
  return <div className={styles.step}>{children}</div>;
}
