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
    console.log('ChildComponent n:',self.props.number);
    return (
      <div className="child" key={self.props.number}>
        <div className="contentData">
          <input type="text" defaultValue={"I am child " + self.props.number} />
        </div>
        <div className="actionBtn">
            <a href="#"><img src="public/img/save-ico.png"></img></a>
            <a href="#" onClick={self.props.deleteChild.bind(this, self.props.number)} ><img src="public/img/delete-ico.png"></img></a>
        </div>
      </div>
    );
  }
};


class AppComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      numChildren: 0,
      childIdx: 0
    };
  }

  onAddChild () {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
    this.setState({
      childIdx: this.state.childIdx + 1
    });
  }

  deleteChild(idx) {
    var ctr = 0;
    if (this.state.numChildren != 0) {
      ctr = this.state.numChildren - 1;
    }
    console.log('deleteChild..idx:',idx);

    this.setState({
      numChildren: ctr
    });
    this.setState({
      childIdx: idx
    });
    console.log('children :',children);
  }

  render() {
    const children = [];
    var self = this;
    // var index = children.indexOf(self.state.childIdx);
    // var index = self.state.childIdx;

    for (var i = 0; i < self.state.numChildren; i += 1) {
      children.push(<ChildComponent number={i} key={i} deleteChild={self.deleteChild.bind(this)} />);
    };

    return (
      <ParentComponent addChild={self.onAddChild.bind(this)}>
        {children}
      </ParentComponent>
    );
  }
};


ReactDOM.render(
  <AppComponent />,
  document.getElementById('container')
);


