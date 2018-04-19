import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLink: "World!"
    }
  }
  /**
   *
   * @param {*} newName
   * 组件之间的通信
   */
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    })
  }
  onGreet(age) {
    alert(age)
  }
  render() {
    let user={name:"t",hobbies:["sing","reading"]}
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header homeLink={this.state.homeLink}/>

            {/* <Home name={"max"} age={12} user={user}/>*/}

            <Home name={"max"}
              age={12} user={user}
              changeLink={this.onChangeLinkName.bind(this)}
              greet={this.onGreet}>
               <p> I am child</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
