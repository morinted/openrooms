import occupiedByDate from 'json!./activities.json'
import roomIsLab from 'json!./roomislab.json'
import { hmToString
       , parseTime
       , addMinutes
       } from './util'

const checkDate = (day, hour, minute) => {
  const givenTime = hmToString(hour, minute)
  const timesByDay = occupiedByDate[day]
  const stringAdd = (time, minutes) => {
    const parsed = parseTime(time)
    const [ h, m ] = addMinutes(parsed, minutes)
    return hmToString(h, m)
  }
  const removeOnce = stringAdd(givenTime, -10)
  const removeTwice = stringAdd(givenTime, -20)
  const removeThrice = stringAdd(givenTime, -30)
  const latestOnce = stringAdd(givenTime, 30)
  const latestTwice = stringAdd(givenTime, 20)
  const latestThrice = stringAdd(givenTime, 10)

  const open = Object.keys(timesByDay).map(room => {
    const roomtimes = timesByDay[room]
    if (roomtimes[givenTime]) return false
    const closes =
      roomtimes[removeOnce] ? latestOnce :
        roomtimes[removeTwice] ? latestTwice :
          roomtimes[removeThrice] ? latestThrice :
            false
    if (!closes) return false
    const [ until = 'tomorrow' ] =
      Object.keys(roomtimes)
        .filter(time =>
          time.localeCompare(givenTime) > 0
        )
        .sort()
    if (until === closes) return false
    return [ room, closes, until, roomIsLab[room] ]
  }).filter(x => x) // removes 'false's
    .sort()
  return open
}

export default checkDate
