import React from 'react'
import { animateStyles, getStrokeData } from '../util'

const Drawing = ({ color = '#000', data, size = 100 }) => {
  const { lenTotal, strokes } = getStrokeData(data.drawing)
  const css = animateStyles(lenTotal)

  return (
    <svg
      className="align-bottom"
      width={size}
      height={size}
      viewBox="0 0 300 300"
    >
      <g transform="translate(22, 22)">
        {strokes.map((s, i) => (
          <path
            key={i}
            d={s.d}
            fill="none"
            stroke={color}
            strokeWidth="8"
            style={css(i, s.len, s.lenPre)}
          />
        ))}
      </g>
    </svg>
  )
}

export default Drawing
