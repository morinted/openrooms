import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import NotFoundPage from './containers/NotFoundPage'
import RoomPage from './containers/RoomPage'
import { urlPrefix } from './constants'

export default (
  <Route path={urlPrefix} component={ App }>
      <IndexRoute component={ RoomPage } />
      <Route path="rooms" component={ RoomPage }/>
      <Route path="*" component={ NotFoundPage }/>
  </Route>
)
