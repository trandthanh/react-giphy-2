// const Hello = (props) => {
// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello, {name}
//     </div>
//   );
// };

class Hello extends Component { // rewrite the Hello component using the class way
  constructor(props) {
    super(props);

    this.state = { // info that may change
      clicked: false, // changed to true to get red color text
      counter: 0
    }
  }

    // method
    handleClick = () => { // arrow function to bound this correctly
      // TODO: change the state!
      // this.state.clicked = !this.state.clicked; // cannot be done, must use setState
      this.setState({ // calls in the render method again
        clicked: !this.state.clicked,
        counter: this.state.counter + 1
      });
    }

  render() {
    // goal of render method build and return HTML for the component
    return (
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name} {this.state.counter}
      </div> // class notation, we need this
    )
  }
}

// Hello, {props.name}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root); // attach component to the DOM
}

