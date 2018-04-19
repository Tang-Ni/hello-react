import React, { Component } from 'react';

//数据类型校验
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
      homeLink: "change link"
    };
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
  }
  handGreet() {
    this.props.greet(this.state.age)
  }
  /**
   * 组件之间的通信
   * @memberof Home
   */
  onChangeHeaderLink() {
    this.props.changeLink(this.state.homeLink)
  }
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            {/*<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">click me</button>*/}
            <button onClick={() => { this.onMakeOlder()}} className="btn btn-primary">click me</button>
            <h2>your name is {this.props.name},your age is {this.state.age}</h2>
            <h3>hobbies:</h3>
            <ul>
            {this.props.user.hobbies.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button onClick={this.handGreet.bind(this)} className="btn btn-primary">click me</button><br/>
            <button onClick={this.onChangeHeaderLink.bind(this)} className="btn btn-primary">change header link</button>

          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  age: PropTypes.number,
  children: PropTypes.element.isRequired,
  greet: PropTypes.func
};

