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



// 3 state di react js



class App extends Component {
  render() {
  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      );
    }
}

export default App;
