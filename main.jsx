// https://jsfiddle.net/sudogem/6mvrsvaq/

class ParentComponent extends React.Component {
    render () {
      return(
        <div className="card calculator" >
            <span>Parent</span>
            <p><a href="#" onClick={this.props.addChild}>Add another child</a></p>
            <div id="children-pane">
              {this.props.children}
            </div>
        </div>
      );

    }
}

class ChildComponent extends React.Component {
    render () {
        return (
            <div key={this.props.number}>{"I am child " + this.props.number}</div>
        );
    }
}


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


}


ReactDOM.render(
  <AppComponent />,
  document.getElementById('container')
);


