import styles from "./chat.module.scss";
import { MessageChip } from "@components/Chat/MessageChip";
import { MessageField } from "./MessageField";
import { useAppSelector } from "@store/hooks";
import { selectMessage } from "@store/slice";
import { useEffect, useRef } from "react";

export const Chat = () => {
  const messages = useAppSelector(selectMessage);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = ref.current;

    if (scrollElement) {
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div ref={ref} className={styles.chatBoard}>
          {messages.map(({ text, messageType }, index) => (
            <MessageChip messageType={messageType} text={text} key={index} />
          ))}
        </div>
      </div>
      <MessageField />
    </div>
  );
};
