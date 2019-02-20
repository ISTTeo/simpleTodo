import React from 'react'
import CountdownDisplay from './CountdownDisplay'
import TimerInput from './TimerInput'
import StartButton from './StartButton'

class Timer extends React.Component {
  constructor() {
    super()
    this.state ={
      min: '00',
      sec: '00',
      secRemaining: 0
    }
    this.startCountdown = this.startCountdown.bind(this)
    this.tick = this.tick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    //TODO: Change CountdownDisplay
  }

  startCountdown() {
    //TODO: When button is pressed starts countdown
  }
  tick() {
    //TODO: Mechanism to "count" time
  }

  render() {
    return(
      <div>
        <TimerInput />
        <CountdownDisplay />
        <StartButton />
      </div>
    )
  }
}
export default Timer
