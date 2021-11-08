import React from 'react'
import {
  TheHeader,
  TheContent
} from './index'
import TheFooter from './TheFooter'

const TheLayout = () => {

  return (
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter />
      </div>
  )
}

export default TheLayout
