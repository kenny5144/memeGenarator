import "./Meme.css";
const Meme = () => {
  const handleInp = () => {
    console.log("hello my name is kenny ");
  };
  return (
    <>
      <div>
        <span className="info">
          <span >
            <label htmlFor="">Top text</label>
            <br/>

            <input
              onChange={handleInp}
              type="text"
              id=""
              placeholder="Top Text"
            />
          </span>
          <span className="input">
            <label htmlFor="">Bottom text</label>
            <br />
            <input
              onChange={handleInp}
              type="text"
              id=""
              placeholder="Bottom text"
            />
          </span>
        </span>
        <br />

        <button className="mainBtn"> Get a new meme image 🖼 </button>
      </div>
    </>
  );
};

export default Meme;
