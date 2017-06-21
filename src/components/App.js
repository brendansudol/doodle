import React, { Component } from 'react'

import Drawing from './Drawing'
import doodles from '../doodles'
import { sample } from '../util'

class App extends Component {
  state = { doodles, animate: 1 }

  refresh = () => {
    this.setState({ animate: 0 }, () => this.setState({ animate: 1 }))
  }

  render() {
    const { doodles, animate } = this.state

    return (
      <div className="p2">
        <button className="block mb1" type="button" onClick={this.refresh}>
          Draw!
        </button>
        {animate && <Drawing data={sample(doodles)} />}
      </div>
    )
  }
}

export default App
