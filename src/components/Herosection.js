import React, { useState } from "react";
import Rawtext from "./Rawtext";

import styles from "../UI/Herosection.module.css";
import MarkdownText from "./MarkdownText";

function Herosection() {

  const [sharedState, setSharedState] = useState('');

  const handleStateChange = (newState) => {
    setSharedState(newState)
  }

  return (
    <div className={styles.container}>
      <Rawtext onStateChange={handleStateChange} />
      <MarkdownText sharedState ={sharedState}/>
    </div>
  );
}

export default Herosection;
