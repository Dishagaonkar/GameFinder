import styles from "./chip.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Chip = (props) => {
  return (
    <div
      className={`${styles.chipContainer} ${styles.chipRaised} ${styles.chipClickable} ${styles.chipHoverable}`}
    >
      <img className={styles.chipImage} src={props.image} alt={props.title} />
      <p className={styles.chipTitle}>{props.title}</p>
      <p className={styles.chipSubTitle}>{props.subTitle}</p>
    </div>
  );
};

export default Chip;
