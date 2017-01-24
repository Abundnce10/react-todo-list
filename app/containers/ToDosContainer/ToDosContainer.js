import React from 'react'
import { ToDo } from 'components'

export default function ToDosContainer (props) {
  console.log(props.items)
  return (
    <div>
    {props.items.map((item, i) => {
      console.log(item);
      return <ToDo key={i} description={item.description} finished={item.finished} />
    })}
    </div>
  )
}
