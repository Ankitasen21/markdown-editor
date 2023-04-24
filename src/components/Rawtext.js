import React, { useState } from "react";
import styles from "../UI/Rawtext.module.css";

function Rawtext(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    props.onStateChange(event.target.value);
  };
  return (
    <div className={styles.container}>
      <label className={styles.heading}>Editor</label>
      <textarea
        className={styles.rawtext}
        value={input}
        onChange={handleChange}
      />
    </div>
  );
}

export default Rawtext;
