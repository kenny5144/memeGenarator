import "./Meme.css"
const Meme = () => {
  const handleInp =()=>{
    console.log("hello my name is kenny ")
  }
  return (
    <>
      <div>
        <span   className="info">
          <label htmlFor="">Top text</label>

        <input onChange={handleInp} type="text"  id="" placeholder='Top Text'/>
        <label htmlFor="">Bottom text</label>
        
        <input onChange={handleInp} type="text"  id="" placeholder='Bottom text' />
        </span>
        <br />

        <button className='mainBtn'> Get a new meme image 🖼 </button>

      </div>
    </>
  )
}

export default Meme
