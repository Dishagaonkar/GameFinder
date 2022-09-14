import styles from "./App.module.css";
import Chip from "./components/Chip";
import Header from "./components/Header/header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { testpage } from "./testpage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const videoGameList = [
  {
    image:
      "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
    title: "Breath of the Wild",
    subTitle: "Nintendo",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3yf3wByGOOVCAy43UBYHodoauHg3HQ9vpw&usqp=CAU",
    title: "Animal Crossing: New Horizions",
    subTitle: "Nintendo",
  },
  {
    image:
      "https://assets-prd.ignimgs.com/2020/09/04/super-mario-galaxy-1-button-1599258841533.jpg",
    title: "Super Mario Galaxy",
    subTitle: "Nintendo",
  },
];

const App = () => {
  const [videoGames, setVideoGames] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=bf50085b05154dbc963eb021160a16b6&genres=action`
      );
      console.log(response);
    })();
  }, []);
  return (
    <div>
      <Header />

      <div className={styles.flexContainer}>
        {videoGameList.map((videoGame, index) => (
          <Chip
            image={videoGame.image}
            title={videoGame.title}
            subTitle={videoGame.subTitle}
          />
        ))}
        <Routes>
          <Route path="/testpage" element={<testpage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
