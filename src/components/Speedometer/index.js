import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      console.log(speed)
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speed-img"
        />
        <h1 className="current-speed">Speed is {speed}mph</h1>
        <p className="desc-condition">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="btn-accelerate"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="btn-brake" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
