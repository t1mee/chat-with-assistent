import styles from "./chat.module.scss";
import { MessageChip } from "@components/Chat/MessageChip";
import { MessageField } from "./MessageField";
import { useAppSelector } from "@store/hooks";
import { selectMessage } from "@store/slice";

export const Chat = () => {
  const messages = useAppSelector(selectMessage);

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.chatBoard}>
          {messages.map(({ text, messageType }, index) => (
            <MessageChip messageType={messageType} text={text} key={index} />
          ))}
        </div>
      </div>
      <MessageField />
    </div>
  );
};
