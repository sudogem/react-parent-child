"use strict";
import React from 'react';
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
}

module.exports = ParentComponent;
