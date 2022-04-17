import React,{useState} from 'react'
import './styles.css'
const App=()=>{
  const [city,setCity]=useState('')
  const [result,setResult]=useState('')
  const changeHandler=e=>{
    setCity(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault()
    fetch('https://api.openweathermap.org/data/2.5/weather?q=patiala&appid=df8805b218019cc28ee719f8c0d9667e').then(
      response=>response.json()
    ).then(data=>{
      const kelvin=data.main.temp;
      const celsius=kelvin -273.15;
      console.log(celsius)
      setResult("Temperature at"+" "+city+"\n"+Math.round(celsius)+"°C")
    setCity("")
    })
  }
  return(
    <center>
      <h1>Weather App</h1>
      <form onSubmit={submitHandler}>
     <input type="text" name="city" value={city} onChange={changeHandler}/><br/><br/>
     <input type="submit" value="Get Temperature"/>
      </form>
      <h4>{result}</h4>
      </center>
  )
}
export default App
