import React from "react";
import styles from "../UI/Markdown.module.css";
import { marked } from "marked";

function MarkdownText(props) {
  const markdownText = props.sharedState;
  const markdownOutput = marked.parse(markdownText);

  return (
    <div className={styles.container}>
      <label className={styles.heading}> Markdown Text </label>
      <div
        dangerouslySetInnerHTML={{ __html: markdownOutput }}
        className={styles.textarea}
      ></div>
    </div>
  );

}


export default MarkdownText;
