const { ceil, sqrt } = Math

// calculate distance between two points on a plane
const distance = (p1, p2) => {
  const [dy, dx] = [p1.y - p2.y, p1.x - p2.x]
  return sqrt(dx * dx + dy * dy) // pythagoras
}

// compute total length of pounts
const getLength = pts =>
  pts.reduce((total, pt, i, pts) => {
    if (i) return distance(pts[i - 1], pt) + total
    return total
  }, 0)

// reduce points to a string for plotting (d attribute of svg path)
const pathD = pts =>
  pts.map(({ x, y }, i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join('')

export const getStrokeData = drawData => {
  let lenTotal = 0

  const strokes = drawData.map(([xPts, yPts]) => {
    const pts = xPts.map((x, i) => ({ x, y: yPts[i] }))
    const d = pathD(pts)
    const len = ceil(getLength(pts))
    const lenPre = lenTotal
    lenTotal += len
    return { pts, d, len, lenPre }
  })

  return { strokes, lenTotal }
}
