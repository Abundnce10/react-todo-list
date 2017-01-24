import React, { PropTypes } from 'react'
import { completed } from './styles.css'

export default function ToDo (props) {
  const isFinished = props.finished;
  if (isFinished) {
    return (
      <li>
        <input type="checkbox" checked="checked"></input>
        <label className={completed}>{props.description}</label>
      </li>
    )
  } else {
    return (
      <li>
        <input type="checkbox"></input>
        <label>{props.description}</label>
      </li>
    )
  }
}
