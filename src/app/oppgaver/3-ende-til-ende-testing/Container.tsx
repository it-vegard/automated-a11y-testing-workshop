import styles from "./page.module.css";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
