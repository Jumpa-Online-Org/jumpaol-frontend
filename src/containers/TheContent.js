import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
// import { CContainer, CFade } from '@coreui/react'

import './style.css'

// routes config
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <main className="c-main">
      <div>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              )
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </div>
    </main>
  )
}

export default React.memo(TheContent)
