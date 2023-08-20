import { useAppDispatch } from "@store/hooks";
import { addMessage, updateMessage } from "@store/slice";
import { MESSAGE_TYPE } from "@ts/common";
import { useEffect, useState } from "react";
const tx = new TextDecoder("utf-8");

export const useAssistent = () => {
  const [text, setText] = useState<string>();
  const [isLoading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleUpdateMessage = (text: string) => dispatch(updateMessage(text));

  const hanleRequest = () => {
    if (text) {
      setLoading(true);

      dispatch(
        addMessage({
          text,
          messageType: MESSAGE_TYPE.REQUEST,
        }),
      );

      dispatch(
        addMessage({
          text: "",
          messageType: MESSAGE_TYPE.RESPONSE,
        }),
      );
    }
  };

  const handleSendMessage = async (message: string) => {
    const response = await fetch(
      "http://185.46.8.130/api/v1/chat/send-message",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      },
    );

    if (!response.ok || !response.body) {
      setLoading(false);
      throw response.statusText;
    }

    const reader = response.body.getReader();

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { value: content, done } = await reader.read();

      const res = tx.decode(content);

      res
        .match(/{.*?}/g)
        ?.forEach((item) => handleUpdateMessage(JSON.parse(item).value ?? ""));

      if (done || !content) {
        setLoading(false);
        setText("");
        break;
      }
    }
  };

  useEffect(() => {
    if (isLoading && text) {
      handleSendMessage(text);
    }
  }, [text, isLoading]);

  return { hanleRequest, setText, text };
};
