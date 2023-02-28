import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countOne: 0, countTwo: 0}

  eatMango = () => {
    this.setState(prevState => ({countOne: prevState.countOne + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({countTwo: prevState.countTwo + 1}))
  }

  render() {
    const {countOne, countTwo} = this.state
    return (
      <div className="yellow-container">
        <div className="white-container">
          <h1 className="header">
            Bob ate <span>{countOne}</span> mangoes <span>{countTwo} </span>
            bananas
          </h1>
          <div className="pic-container">
            <div>
              <img
                className="fruits"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="btn-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.eatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                className="fruits"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="btn-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.eatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
