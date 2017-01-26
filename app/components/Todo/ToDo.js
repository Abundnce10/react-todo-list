import React, { PropTypes } from 'react'
import { todoContainer, checkbox, todoLabel, completed } from './styles.css'

export default function ToDo (props) {
  if (props.finished) {
    return (
      <li className={todoContainer}>
        <input 
          onChange={props.clickHandler.bind(this, props.createdAt)} 
          type="checkbox" 
          checked="checked"
          className={checkbox}>
        </input>
        <label className={completed}>{props.description}</label>
      </li>
    )
  } else {
    return (
      <li className={todoContainer}>
        <input 
          onChange={props.clickHandler.bind(this, props.createdAt)} 
          type="checkbox" 
          className={checkbox}>
        </input>
        <label className={todoLabel}>{props.description}</label>
      </li>
    )
  }
}
