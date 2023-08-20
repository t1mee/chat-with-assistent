import React, { FC } from "react";
import "./TextField.module.scss";

type Props = {
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  value?: string;
};

export const TextField: FC<Props> = ({
  value = "",
  className,
  onChange,
  placeholder,
}) => (
  <input
    onChange={({ target: { value } }) => onChange(value)}
    className={className}
    placeholder={placeholder}
    value={value}
  />
);
