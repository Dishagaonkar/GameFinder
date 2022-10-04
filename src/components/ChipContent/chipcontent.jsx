import styles from "./chipcontent.module.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ChipContent = (props) => {
  return (
    <div className={`${styles.chipContentContainer} ${styles.chipRaised} `}>
      <img
        className={styles.chipContentmage}
        src={props.image}
        alt={props.title}
      />
      <p className={styles.chipContentTitle}>{props.title}</p>
      <p className={styles.chipContentSubTitle}>{props.subTitle}</p>
      <p className={styles.chipContentGenre}> {props.genre}</p>
      <p className={styles.chipContentSummary}>{props.summary}</p>
      <p className={styles.chipContentPlatform}> {props.platform}</p>
    </div>
  );
};

export default ChipContent;
