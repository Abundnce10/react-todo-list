import React from 'react'
import { ToDosContainer } from 'containers'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          finished: false,
          description: "Finish this app"
        },
        {
          finished: true,
          description: "Start this app"
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">  
          <div className="col-sm-8 col-sm-offset-2">
            <div className="text-center">
              <h1>To Do List</h1>
              <h3>Form</h3>
              <ToDosContainer items={this.state.items} />
              <h4>Filters</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
