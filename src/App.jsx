import { useState } from "react";
import "./App.css";
import Meme from "./component/Main/Meme";
import Header from "./component/header/Header";

function App() {
  return (
    <>
      <div className="mainDiv">
        <span>
          <Header />
          <Meme />
        </span>
      </div>
    </>
  );
}

export default App;
