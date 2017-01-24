import React from 'react'
import { color } from './styles.css'

const MainContainer = React.createClass({
  render () {
    return (
      <p className={color}>{'React To Do List'}</p>
    )
  },
})

export default MainContainer
