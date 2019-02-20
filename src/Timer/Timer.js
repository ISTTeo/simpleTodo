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
    const minutes = event.target.value //TimerInput
    if (minutes<10) {
      this.setState({
        min: '0' + minutes //Just making it look a bit nicer
      })
    } else {
      this.setState({
        min: minutes
      })
    }
  }

  startCountdown() {
    this.intervalHandle = setInterval(this.tick, 1000)
    let time = this.state.min
    this.setState({
      secRemaining: time*60
    })
  }
  tick() {
    //TODO: Mechanism to "count" time
    console.log("h")
  }

  render() {
    return(
      <div>
        <TimerInput handleChange={this.handleChange}/>
        <CountdownDisplay min={this.state.min} sec={this.state.sec}/>
        <StartButton startCountdown={this.startCountdown}/>
      </div>
    )
  }
}
export default Timer
