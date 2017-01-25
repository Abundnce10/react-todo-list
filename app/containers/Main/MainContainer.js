import React from 'react'
import { FormControl, Grid, Row, Col } from 'react-bootstrap'
import { ToDosContainer } from 'containers'
import { pluralize } from 'helpers/utils'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temporaryInput: "",
      items: [
        {
          finished: false,
          description: "Finish this app",
          createdAt: Date.now()
        },
        {
          finished: true,
          description: "Start this app",
          createdAt: (Date.now() + 1)
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
    items.unshift({finished: false, description: this.state.temporaryInput, createdAt: Date.now()})
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

              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col xs={3} className="text-left">
                    <i>{this.state.items.filter(x => !x.finished).length} {pluralize('item',this.state.items.filter(x => !x.finished).length)} left</i>
                  </Col>
                  <Col xs={6} className="text-center">
                    <span style={{padding: ".2em 1em", border: "1px solid black"}}>All</span>
                    <span style={{padding: ".2em 1em"}}>Active</span>
                    <span style={{padding: ".2em 1em"}}>Complete</span>
                  </Col>
                  <Col xs={3} className="text-right">
                    <span>Clear Completed</span>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
