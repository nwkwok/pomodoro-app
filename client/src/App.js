import React, {useState, useEffect} from 'react'
import style from './App.module.scss'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

function App() {
  const [time, setTime] = useState(15)
  const [second, setSecond] = useState(0)

  
//Todo #1: 
  // Get current date
  // Get a then date to set time difference 
  // Create function that takes in a time value 
  // Create setInterval in useEffect
  // Use setTime to countdown the state of time every second
  
  /////// Configuring timer ///////
  // const now = new Date();
  // const getTime = now.getTime();
  // const hours = now.getHours();
  // const minutes = now.getMinutes();
  // const seconds = now.getSeconds();
  // console.log({now, hours, minutes, seconds, getTime})

// Todo #2:
  // Create data-time attribute for 'Pomodoro' 'SB' 'LB'
  // Set data-time to the # of minutes 
  // Have onClick of each element setTime to its data-time value
  
// Todo #3
  // Design and create modal using usePortal
  // Need to decide between props and useContext.
  // Probably props since it's only one component.
  // Configure state management for modal

// Todo #4
  // Work on React Circular Progress Bar functionality
  // Figure out how to progress bar every second



  const handleChange = () => {
    setTime(prevTimer => {
      console.log(prevTimer);
      return prevTimer + 1
    })

  }
  return (
    <div className={style.container}>
      <h1>pomodoro</h1>
      <p>pomodoro   short break   long break</p>
      <CircularProgressbar
        className={style.progressBar}
        value={time}
        text={`${time}`}
        strokeWidth={2}
        />
      <p>Cog Image</p>
      <button onClick={handleChange}>Change #</button>
    </div>
  )
}

export default App


