import { Button } from "@ui/Button";
import { TextField } from "@ui/TextField";
import styles from "./messageField.module.scss";
import { useAssistent } from "@api/useAssistent";

export const MessageField = () => {
  const { hanleRequest, text, setText } = useAssistent();

  const handleChange = (value: string) => setText(value);

  return (
    <div className={styles.messageField}>
      <TextField
        onSubmit={hanleRequest}
        value={text}
        placeholder="Start typing here..."
        onChange={handleChange}
      />
      <Button className={styles.submit} onClick={hanleRequest} />
    </div>
  );
};
