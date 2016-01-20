/*@flow*/
import * as Actions from './types'
import { cols } from '../constants'
import checkDate from '../scripts/checkDate'

export const getRooms = (day, hour, minute, col) => {
  const iCol = cols.indexOf(col)
  const roomCol = cols.indexOf('room')
  console.log(col)
  const openRooms =
    checkDate(day, hour, minute)
      .sort((a, b) => {
        if (col === roomCol) {
          return a[iCol].localeCompare(b[iCol])
        } else {
          const compare = a[iCol].localeCompare(b[iCol])
          return compare !== 0 ? compare :
            a[roomCol].localeCompare(b[roomCol])
        }
      }
        )
  return { type: Actions.FIND_OPEN_ROOMS
         , day
         , hour
         , minute
         , openRooms
         , col
         }
}
