const { ceil, floor, random, sqrt } = Math

const rand = (min, max) => floor(random() * (max - min + 1)) + min

export const sample = arr => arr[rand(0, arr.length - 1)]

export const animateStyles = (tot, ms = 2000) => (i, len, seen) => {
  const time = ms / tot
  return {
    strokeDasharray: len,
    strokeDashoffset: len,
    animation: `dash ${time * len}ms linear forwards`,
    animationDelay: `${time * seen}ms`
  }
}

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

export const categories = [
  'bear',
  'beard',
  'bird',
  'bowtie',
  'circle',
  'cookie',
  'crab',
  'dog',
  'dragon',
  'ear',
  'eye',
  'eyeglasses',
  'face',
  'hat',
  'headphones',
  'hot dog',
  'monkey',
  'moustache',
  'mouth',
  'necklace',
  'nose',
  'sandwich',
  'sock',
  'wine bottle',
  'wine glass',
  'zigzag'
]
