/* Store open rooms */
import * as Actions from '../action/types'

export default function rooms (
    state = { openRooms: [] }
    , action: Object
  ): Object {
  switch (action.type) {
    case Actions.FIND_OPEN_ROOMS:
      const { openRooms, col } = action
      return { openRooms, col }
    default:
      return state
  }
}
