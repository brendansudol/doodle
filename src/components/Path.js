import React from 'react'

const Path = ({ d, len }) => {
  const sx = {
    strokeDasharray: len,
    strokeDashoffset: len,
    animation: 'dash 2s linear forwards',
    animationDelay: '1s'
  }

  return <path d={d} fill="none" stroke="#000" strokeWidth="2" style={sx} />
}

export default Path
