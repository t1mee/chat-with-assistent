import React, { FC } from "react";
import "./TextField.module.scss";

type Props = {
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  value?: string;
  onSubmit: () => void;
};

export const TextField: FC<Props> = ({
  value = "",
  className,
  onChange,
  placeholder,
  onSubmit,
}) => (
  <input
    onKeyDown={({ key }) => key === "Enter" && onSubmit()}
    onChange={({ target: { value } }) => onChange(value)}
    className={className}
    placeholder={placeholder}
    value={value}
  />
);
