import React, { Component } from 'react'

import doodle from '../doodle.json'
import { getStrokeData } from '../util'

const data = getStrokeData(doodle.drawing)
console.log(data)

const style = (i, len, secs = 2) => ({
  strokeDasharray: len,
  strokeDashoffset: len,
  animation: `dash ${secs}s linear forwards`,
  animationDelay: `${i * secs}s`
})

class App extends Component {
  render() {
    return (
      <div style={{ padding: 32 }}>
        <svg width="256" height="256">
          {data.strokes.map((s, i) => (
            <path
              key={i}
              d={s.d}
              fill="none"
              stroke="#000"
              strokeWidth="4"
              style={style(i, s.len)}
            />
          ))}
        </svg>
      </div>
    )
  }
}

export default App
