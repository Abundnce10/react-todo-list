import React from 'react'
import { ToDo } from 'components'
import { todoContainer } from './styles.css'

export default function ToDosContainer (props) {
  console.log(props.items)
  return (
    <div className={todoContainer}>
      <ul style={{listStyleType: "none", paddingLeft: "0px"}}>
        {props.items.map((item, i) => {
          console.log(item);
          return <ToDo key={i} description={item.description} finished={item.finished} />
        })}
      </ul>
    </div>
  )
}
