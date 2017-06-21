import React from 'react'
import { animateStyles, getStrokeData } from '../util'

const Drawing = ({ data }) => {
  const { lenTotal, strokes } = getStrokeData(data.drawing)
  const css = animateStyles(lenTotal)

  return (
    <svg className="border rounded" width="300" height="300">
      <g transform="translate(22, 22)">
        {strokes.map((s, i) => (
          <path
            key={i}
            d={s.d}
            fill="none"
            stroke="#000"
            strokeWidth="4"
            style={css(i, s.len, s.lenPre)}
          />
        ))}
      </g>
    </svg>
  )
}

export default Drawing
