import { useState, useEffect } from "react";
import "./Meme.css";
const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  },[]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  console.log(meme.topText)
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      
      randomImage: url,
    }));
  }
  const handleInp = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
    console.log(meme)
  };
  return (
    <>
      <div>
        <span className="info">
          <span>
            <label htmlFor="">Top text</label>
            <br />

            <input
              onChange={handleInp}
              type="text"
              id=""
              name="topText"
              value={meme.topText}
              placeholder="Top Text"
            />
          </span>
          <span className="input">
            <label htmlFor="">Bottom text</label>
            <br />
            <input
              onChange={handleInp}
              type="text"
              name="bottomText"
              id=""
              value={meme.bottomText}
              placeholder="Bottom text"
            />
          </span>
        </span>
        <br />

        <button onClick={getMemeImage} className="mainBtn">
          {" "}
          Get a new meme image 🖼{" "}
        </button>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                {console.log(meme)}
                <h2 className="meme--text top">hello {meme.topText}</h2>
                <h2 className="meme--text bottom">hi {meme.bottomText}</h2>
            </div>
      </div>
    </>
  );
};

export default Meme;
