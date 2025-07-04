import React ,{useState}from 'react'

const Toggel2 = () => {
   
  const [color, setColor] = useState('');


  const changeColorred = () => setColor('red');
  const changeColorblue = () => setColor('blue');
    return (
    <div>
      
         <button onClick={changeColorblue} style={{borderRadius:20,backgroundColor:'gray',color:'red'}}>blue</button>
      <button onClick={changeColorred} style={{borderRadius:20,backgroundColor:'gray',color:'blue'}}>red</button>
  

      <p style={{ color: color,}}>my work</p>
    </div>
  )
}


export default 
Toggel2