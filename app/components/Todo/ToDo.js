import React, { PropTypes } from 'react'
import { todoContainer, checkbox, todoLabel, completed } from './styles.css'

export default function ToDo (props) {
  return (
    <li className={todoContainer}>
      <input 
        onChange={props.clickHandler.bind(this, props.createdAt)} 
        type="checkbox" 
        checked={props.finished? true : false}
        className={checkbox}>
      </input>
      <label className={props.finished? completed : todoLabel}>{props.description}</label>
    </li>
  )
}
