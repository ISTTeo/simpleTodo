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
      secRemaining: 0,
      running:false
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
    if (!this.state.running) {
      this.intervalHandle = setInterval(this.tick, 1000)
      let time = this.state.value
      this.setState({
        secondsRemaining: time*60,
        running:true
      })
      console.log("Running")
    } else {
      clearInterval(this.intervalHandle)

      this.setState({
        running:false,
        value:"00",
        seconds:"00"
      })
      console.log("Cancelled")

    }

  }
  tick() {
    var min = Math.floor(this.state.secondsRemaining / 60)
    var sec = this.state.secondsRemaining - (min*60)
    this.setState({
      value:min,
      seconds:sec
    })

    if (sec < 10) {
      this.setState({
        seconds:'0' + sec,
      })}

      if (min < 10) {
        this.setState({
          value:'0' + min,
        })}

    if (min==0 & sec == 0) {
      clearInterval(this.intervalHandle)
    }

    this.setState(prevState => ({
      secondsRemaining: prevState.secondsRemaining - 1
    }))
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
