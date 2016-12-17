// https://jsfiddle.net/sudogem/6mvrsvaq/
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

class ParentComponent extends React.Component {
  render () {
    return(
      <div className="card calculator" >
          <span>Parent</span>
          <div>
              <span>more contents here...</span>
          </div>
          <p><a href="#" onClick={this.props.addChild}>Add another child</a></p>
          <div id="children-pane">
            {this.props.children}
          </div>
      </div>
    );

  }
};


class ChildComponent extends React.Component {
    
  render () {
    var self = this;
    console.log('ChildComponent n:',this.props.number);
    return (
      <div className="child" key={this.props.number}>
        {"I am child " + this.props.number}
        <div className="actionBtn">
            <a href="#"><img src="public/img/save-ico.png"></img></a>
            <a href="#" onClick={self.props.deleteChild} ><img src="public/img/delete-ico.png"></img></a>
        </div>
      </div>
    );
  }
};


class AppComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      numChildren: 0
    };
  }

  onAddChild () {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }

  render() {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent number={i} key={i} />);
    };

    return (
      <ParentComponent addChild={this.onAddChild.bind(this)}>
        {children}
      </ParentComponent>
    );
  }
};


ReactDOM.render(
  <AppComponent />,
  document.getElementById('container')
);


