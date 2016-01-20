import rooms from './rooms'
import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'

const rootReducer =
  combineReducers(
    { router
    , rooms
    }
  )
export default rootReducer
