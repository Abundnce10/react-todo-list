import React from 'react'
import { FormControl, Grid, Row, Col } from 'react-bootstrap'
import { ToDo } from 'components'
import { todoContainer, footerButton, buttonBorder } from './styles.css'
import { pluralize } from 'helpers/utils'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temporaryInput: "",
      allFilterSelected: true,
      activeFilterSelected: false,
      completeFilterSelected: false,
      items: [
        {
          finished: false,
          description: "Finish this app",
          createdAt: Date.now(),
          show: true
        },
        {
          finished: false,
          description: "Eat some lunch",
          createdAt: Date.now() + 1,
          show: true
        }
      ]
    }

    this.handleFormOnChange = this.handleFormOnChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleToDoClick = this.handleToDoClick.bind(this);
    this.handleToDoFilterAll = this.handleToDoFilterAll.bind(this);
    this.handleToDoFilterActive = this.handleToDoFilterActive.bind(this);
    this.handleToDoFilterComplete = this.handleToDoFilterComplete.bind(this);
  }

  handleToDoFilterAll() {
    console.log('Handle ToDo Filter ALL Clicked');
    const items = this.state.items.map((item) => {
      return {...item, show: true};
    });
    this.setState({items, allFilterSelected: true, activeFilterSelected: false, completeFilterSelected: false});
  }

  handleToDoFilterActive() {
    console.log('Handle ToDo Filter ACTIVE Clicked');
    const items = this.state.items.map((item) => {
      if (!item.finished) {
        return {...item, show: true};
      } else {
        return {...item, show: false};
      } 
    });
    this.setState({items, activeFilterSelected: true, allFilterSelected: false, completeFilterSelected: false});
  }

  handleToDoFilterComplete() {
    console.log('Handle ToDo Filter COMPLETE Clicked');
    const items = this.state.items.map((item) => {
      if (!item.finished) {
        return {...item, show: false};
      } else {
        return {...item, show: true};
      } 
    });
    this.setState({items, completeFilterSelected: true, allFilterSelected: false, activeFilterSelected: false});
  }

  handleToDoClick(createdAt) {
    const items = this.state.items.map((item) => {
      if (item.createdAt === createdAt) return {...item, finished: !item.finished};
      return item;
    });

    this.setState({items});
  }

  handleFormOnChange(event) {
    this.setState({temporaryInput: event.target.value});
  }

  handleFormSubmit(event) {
    let items = this.state.items
    // add temporary to items array
    items.unshift({finished: false, description: this.state.temporaryInput, createdAt: Date.now(), show: true})
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

              <div className={todoContainer}>
                <ul style={{listStyleType: "none", paddingLeft: "0px"}}>
                  {this.state.items.map((item, i) => {
                    if (item.show) {
                      return <ToDo 
                              {...item}
                              key={item.createdAt}
                              clickHandler={this.handleToDoClick} /> 
                    }
                  })}
                </ul>
              </div>

              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col xs={3} className="text-left" style={{paddingLeft: "0px"}}>
                    <i>{this.state.items.filter(x => !x.finished).length} {pluralize('item',this.state.items.filter(x => !x.finished).length)} left</i>
                  </Col>
                  <Col xs={6} className="text-center">
                    <span className={this.state.allFilterSelected? buttonBorder : footerButton} onClick={this.handleToDoFilterAll.bind(this)}>All</span>
                    <span className={this.state.activeFilterSelected? buttonBorder : footerButton} onClick={this.handleToDoFilterActive.bind(this)}>Active</span>
                    <span className={this.state.completeFilterSelected? buttonBorder : footerButton} onClick={this.handleToDoFilterComplete.bind(this)}>Complete</span>
                  </Col>
                  <Col xs={3} className="text-right" style={{paddingRight: "0px"}}>
                    <span className={footerButton}><small>Clear Completed</small></span>
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
