import { Chat } from "./components/Chat";
import styles from "./styles/app.module.scss";

export const App = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>bot Chat</h1>
    <h2 className={styles.subtitle}>AI-based service</h2>

    <main className={styles.content}>
      <Chat />
    </main>
  </div>
);
