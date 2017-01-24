import React from 'react'
import { FormControl } from 'react-bootstrap'
import { ToDosContainer } from 'containers'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temporaryInput: "",
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

    this.handleFormOnChange = this.handleFormOnChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormOnChange(event) {
    this.setState({temporaryInput: event.target.value});
  }

  handleFormSubmit(event) {
    let items = this.state.items
    // add temporary to items array
    items.unshift({finished: false, description: this.state.temporaryInput})
    // setState (reset tempoorary to empty string )
    this.setState({items: items, temporaryInput: ""})
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">  
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div>
              <h1 className="text-center">todos</h1>

              <form onSubmit={this.handleFormSubmit} className="text-center">
                <FormControl type="text" style={{fontSize: "1.6em", padding: "20px"}} value={this.state.temporaryInput} onChange={this.handleFormOnChange} placeholder={'What needs to be done?'} />
              </form>

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
