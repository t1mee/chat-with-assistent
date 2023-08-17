import React, { FC } from "react";
import styles from "./messageChip.module.scss";
import { Avatar } from "@ui/Avatar";
import { MESSAGE_TYPE } from "@ts/common";
import cn from "clsx";

type Props = {
  messageType: MESSAGE_TYPE;
  text: string;
};

export const MessageChip: FC<Props> = ({ text, messageType }) => (
  <div className={cn(styles.message, styles[messageType])}>
    <Avatar messageType={messageType} />
    <div className={cn(styles.textCloud, styles[messageType])}>{text}</div>
  </div>
);
