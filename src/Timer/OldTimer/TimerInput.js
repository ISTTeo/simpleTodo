import React from 'react'

class TimerInput extends React.Component {
  render() {
    return (
      <div>
        How long?
        <input type="number" min="0" required />
      </div>
    )
  }
}

export default TimerInput
