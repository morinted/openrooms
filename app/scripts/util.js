export const parseTime = time => {
  return time
    .split(':')
    .map(x => parseInt(x, 10))
    .reduce((p, c) => p.concat([ c ]), [])
}

export const zeroPad = (num, places) => {
  const zero = places - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join('0') + num
}

export const hmToString = (h, m) => `${zeroPad(h, 2)}:${zeroPad(m, 2)}`

export const addMinutes = ([ h, m ], x) => {
  let y = 0
  const absX = Math.abs(x)
  if (absX >= 60) {
    y = x / 60
    x = x < 0 ? -(-x % 60) : x % 60
  }
  const newM = (m + x + 60) % 60
  const newH = x > 0 ?
    newM === 0 && x !== 0 ?
        h + 1 + y :
        h + y :
    newM === 50 && x !== 0 ?
        h - 1 + y :
        h + y
  return [ newH, newM ]
}
