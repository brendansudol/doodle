import React, { Component } from 'react'

import Drawing from './Drawing'
import { categories, sample } from '../util'

class App extends Component {
  state = { animate: 1, category: 'cookie', doodles: null }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/doodles.json`)
      .then(response => response.json())
      .then(doodles => this.setState({ doodles }))
  }

  changeCategory = e => {
    this.setState({ animate: 0, category: e.target.value }, this.animate)
  }

  refresh = () => {
    this.setState({ animate: 0 }, this.animate)
  }

  animate = () => {
    this.setState({ animate: 1 })
  }

  render() {
    const { animate, category, doodles } = this.state
    const data = doodles && doodles[category]

    return (
      <div className="p3 container">
        {!data
          ? <p>Loading...</p>
          : <div>
              <div className="mb2">
                <select
                  className="mr1"
                  onChange={this.changeCategory}
                  value={category}
                >
                  {categories.map(c => <option key={c}>{c}</option>)}
                </select>
                <button type="button" onClick={this.refresh}>
                  more!
                </button>
              </div>
              {animate &&
                [...Array(30)].map((_, i) => (
                  <Drawing key={i} data={sample(data)} />
                ))}
            </div>}
      </div>
    )
  }
}

export default App
