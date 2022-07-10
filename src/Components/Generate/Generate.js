import React, { useEffect, useState } from 'react'
import"./Generate.css"


const Generate = () => {
  
  const[inputs,setInputs] = useState({
    oben:"",
    unter:"",
  })
  const [ramdomImg,setRandomImg] =useState("https://i.imgflip.com/1bij.jpg")
  const [imgData,setImgData] = useState([])

 useEffect(() =>{
  console.log("test run")
  fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => setImgData(response.data.memes))
 },[])

 const handleChange = (e) => {
       setInputs({...inputs,
      [e.target.name]: e.target.value})

 }

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log("fr")
   const randNum = Math.floor(Math.random() * imgData.length)
   const randMemeImgUrl =imgData[randNum].url
   setRandomImg(randMemeImgUrl)
 }

  return (
    <div className="generate">
        <form className="input-container" onSubmit={handleSubmit}>
           <div className="top-input">
            <input type="text" name="oben" value={inputs.oben} placeholder="...text einfügen"  onChange={handleChange}/>
           </div>
           <div className="botton-input">
           <input type="text" name="unter" value={inputs.unter} placeholder="...text einfügen"  onChange={handleChange}/>
           </div>
            <button>generate</button>
        </form>
        <div className="meme-content">
            <div  className="img">
            <img src={ramdomImg} alt="ramdomImg"/>
             <h2 className="oben">{inputs.oben}</h2>
             <h2 className="unten">{inputs.unter}</h2>
             </div>
        </div>

    </div>
  )
}

export default Generate;