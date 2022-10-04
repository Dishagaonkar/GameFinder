import React from "react";
import Chip from "./components/Chip";
import ChipContent from "./components/ChipContent/chipcontent";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/header";
import styles from "./App.module.css";

const videoGameInfo = [
  {
    image:
      "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
    title: "Breath of the Wild",
    subTitle: "Nintendo",
    summary:
      "blah blah blah efjel;agk.rjigeq;rh;orjgohqierlqjergoijgoioho;gtigtpjgoi",
    platform: "switch",
    genre: "RPG",
  },
];

const Testpage = (props) => {
  return (
    <div>
      <Header />
      <div className={styles.flexContainer}>
        {/* {videoGameInfo.map((videoContent, index) => ( */}
        <ChipContent
          image={props.videoContent.image}
          title={props.videoContent.title}
          subTitle={props.videoContent.subTitle}
          genre={props.videoContent.genre}
          summary={props.videoContent.summary}
          platform={props.videoContent.platform}
        />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Testpage;
