import styles from "../CSS/Input.module.css";
import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} className={styles.input} {...props} />;
});

export default Input;