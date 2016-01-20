/*@flow*/
/**
* Constants that are not action types.
* See "action/types" for constant action types.
*/

import WP from '../util/webpackConfig'
import { parseTime
       , addMinutes
       , hmToString
       } from '../scripts/util'

export const urlPrefix = WP.PATH
export const days =
  [ 'Sunday'
  , 'Monday'
  , 'Tuesday'
  , 'Wednesday'
  , 'Thursday'
  , 'Friday'
  , 'Saturday'
  ]
export const cols =
  [ 'room'
  , 'locks-at'
  , 'next-class'
  ]
const calcTimes = (start, end, list = []) => {
  if (start.localeCompare(end) >= 0) {
    return list
  }
  const [ nH, nM ] =
    addMinutes(
      parseTime(start), 10
    )
  return calcTimes(hmToString(nH, nM), end, list.concat([ start ]))
}
export const times = calcTimes('08:00', '23:00')
