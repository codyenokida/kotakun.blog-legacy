import { SetStateAction } from "react";

import styles from "./TextInput.module.scss";

type TextInputProps = {
  value: string;
  setValue: (value: SetStateAction<string>) => void;
  labelText: string;
  placeholder?: string;
};

export default function TextInput({
  value,
  setValue,
  labelText,
  placeholder,
}: TextInputProps) {
  return (
    <div className={styles.container}>
      {labelText && <label>{labelText}</label>}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
