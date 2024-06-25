import { SetStateAction } from "react";
import styles from "./TextArea.module.scss";

type TextAreaProps = {
  value: string;
  setValue: (value: SetStateAction<string>) => void;
  labelText: string;
  placeholder?: string;
};

export default function TextArea({
  value,
  setValue,
  labelText,
  placeholder,
}: TextAreaProps) {
  return (
    <div className={styles.container}>
      {labelText && <label>{labelText}</label>}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
