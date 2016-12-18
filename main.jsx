// https://jsfiddle.net/sudogem/6mvrsvaq/
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './public/src/child.jsx';
import ParentComponent from './public/src/parent.jsx';

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


