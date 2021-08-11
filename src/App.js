import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           REACT JS
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// // komponen - properties (props)

// function Umur(props) {
//   return <span>umurnya {props.age} tahun.</span>
// }

// function Ucapan(props) {
//   return <h2>Hallo {props.name} - <Umur age={props.umur}/> </h2>
// }



// // 3 state di react js
class Timer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time : props.start
    }
  }


  // lifecycle
  componentDidMount() {
    this.addInterval = setInterval( () => this.increase(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    // update state time setiap detik
    this.setState( (state, props) => ({
      time : parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div> {this.state.time} Detik </div>
    )
  }
}




// // event handler react js
// menggunakan fuction component
function Clicker() {
  function handleClick(e) {
    alert('berhasil diklik')
    e.preventDefault();
  }

  return (
    <a href="#" onClick={handleClick}>klik disini bro!</a>
  )
}

// bikin on off tombol
class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus : true
    }
    this.click = this.click.bind(this)
  }

  click() {
    this.setState(state => ({
      toggleStatus : !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.click}>
        {this.state.toggleStatus ? "ON" : "OFF"}
      </button>
    )
  }
}


class App extends Component {
  render() {
  return (
        <div className="App">
          <Toggle />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Riki Widiantoro</p>
            <Timer start='0'/>
            <Timer start='8'/>
          </header>
          <Clicker />
        </div>
      );
    }
}

export default App;
