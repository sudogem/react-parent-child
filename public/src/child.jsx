"use strict";
import React from 'react';
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

module.exports = ChildComponent;
