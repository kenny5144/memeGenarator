import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import "./Meme.css";

const Meme = () => {
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['picture'],
    queryFn: () =>
      fetch('https://api.imgflip.com/get_memes')
        .then((res) => res.json())
  });

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const handleInp = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const getMemeImage = () => {
    if (data && data.data && data.data.memes) {
      const allMemes = data.data.memes;
      const randomNumber = Math.floor(Math.random() * allMemes.length);
      const url = allMemes[randomNumber].url;
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
      }));
    }
  };

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

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
          <img src={meme.randomImage} className="meme--image" alt="meme" />
          <h2 className="meme--text top">hello {meme.topText}</h2>
          <h2 className="meme--text bottom">hi {meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
};

export default Meme;