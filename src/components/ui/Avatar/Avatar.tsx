import React, { FC } from "react";
import { ReactComponent as BotAvatar } from "@assets/bot_avatar.svg";
import styles from "./avatar.module.scss";
import cn from "clsx";
import { MESSAGE_TYPE } from "@ts/common";

type Props = {
  messageType: MESSAGE_TYPE;
};

export const Avatar: FC<Props> = ({ messageType }) => (
  <div className={cn(styles.main, styles[messageType])}>
    {messageType === MESSAGE_TYPE.REQUEST ? <span>T</span> : <BotAvatar />}
  </div>
);
