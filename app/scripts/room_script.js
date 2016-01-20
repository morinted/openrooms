import fs from 'fs'
import { parseTime
       , hmToString
       } from './util'

fs.readFile('./activities.csv', 'utf8', (err, csv) => {
  const rooms =
    csv
      .split('\n')
      .map(x => x.split(','))
      .map((
        [ // type
        , // number
        , course
        , // semester
        , day = 'none'
        , start = '00:00'
        , end = '00:00'
        , room = ''
        ]) => (
          { course
          , day
          , start
          , end
          , room
          })
      )
      .filter(({ room = '' } = {}) => {
        if (!room) return false
        const lcRoom = room.toLowerCase()
        return [ 'online', 'consult', 'course' ]
          .every(x =>
            !lcRoom.includes(x)
          )
      })
  const occupiedByDate =
    rooms.reduce(
      (p, { day
          , start
          , end
          , room
          }) => {
        const times = (p, [ cH, cM ], [ lH, lM ]) => {
          if (cH >= lH &&
              cM >= lM) {
            return p
          }
          const newP = Object.assign(
            p, { [hmToString(cH, cM)]: true }
          )
          const newC = addTenMinutes([ cH, cM ])
          return times( newP
                      , newC
                      , [ lH, lM ]
                      )
        }
        const occupied =
          times({}, parseTime(start), parseTime(end))
        const pDay = p[day] || {}
        const pRoom = pDay[room] || {}
        return Object.assign(p,
          { [day]:
            Object.assign(pDay,
              { [room]: Object.assign(pRoom,
                  occupied
                )
              }
            )
          }
        )
      }, {})

  fs.writeFile('activities.json', JSON.stringify(occupiedByDate), err => {
    if (err) throw err
    console.log('Wrote activities.json')
  })
})

const addTenMinutes = ([ h, m ]) => {
  const newM = (m + 10) % 60
  const newH = newM === 0 ? h + 1 : h
  return [ newH, newM ]
}
