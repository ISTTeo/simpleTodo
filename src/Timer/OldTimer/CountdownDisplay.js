import React from 'react'

class CountdownDisplay extends React.Component {
  render() {
    return(
      <div>
      {this.props.min}:{this.props.sec}
      </div>
    )
  }
}

export default CountdownDisplay
