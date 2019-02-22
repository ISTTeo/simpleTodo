import React, { Component } from 'react';
import StartButton from './StartButton'
import TimerInput from './TimerInput'
import Timer from './Timer'
class TimerApp extends Component {

  constructor() {
    super()
    this.state = {
      seconds: '00',
      value: '00',
      secondsRemaining: 0,
      running:false
    }


    this.startCountDown = this.startCountDown.bind(this)
    this.tick = this.tick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const min =  event.target.value
    if (min < 10) {
      this.setState({
        value: '0' + min
      })
    } else {
      this.setState({
        value:min
      })
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

  startCountDown() {
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
  render() {
    return (
      <div className="App">
        <TimerInput minutes={this.state.minutes} handleChange={this.handleChange}/>
        <Timer minutes={this.state.value} seconds = {this.state.seconds}/>
        <StartButton startCountDown = {this.startCountDown}/>
      </div>
    );
  }
}

export default TimerApp;
