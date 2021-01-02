import React, {useState} from 'react'
import style from './App.module.scss'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'



function App() {
  
  const [percentage, setPercentage] = useState(80)

  const handleChange = () => {
    setPercentage(prevPercentage => {
      console.log(prevPercentage);
      return prevPercentage + 1
    })

  }
  return (
    <div className={style.container}>
      <h1>pomodoro</h1>
      <p>pomodoro   short break   long break</p>
      <CircularProgressbar
        className={style.progressBar}
        value={percentage === 100 ? setPercentage(0) : percentage}
        text={`${percentage}`}
        strokeWidth={3}
        styles={buildStyles({
          pathColor: `rgba(255, 255, 255, ${percentage/100})`,
          trailColor: 'red',
        })}
        />
      <p>Cog Image</p>
      <button onClick={handleChange}>Change #</button>
    </div>
  )
}

export default App


