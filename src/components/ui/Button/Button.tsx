import React, { FC } from "react";
import styles from "./button.module.scss";
import { ReactComponent as PlaneSvg } from "@assets/plane.svg";

type Props = {
  onClick: () => void;
  className?: string;
};

export const Button: FC<Props> = ({ className, onClick }) => (
  <button onClick={onClick} className={className}>
    <div className={styles.svg}>
      <PlaneSvg />
    </div>
  </button>
);
