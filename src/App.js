import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import List from './List';

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
// class Timer extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       time : props.start
//     }
//   }


//   // lifecycle
//   componentDidMount() {
//     this.addInterval = setInterval( () => this.increase(), 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.addInterval)
//   }

//   increase() {
//     // update state time setiap detik
//     this.setState( (state, props) => ({
//       time : parseInt(state.time) + 1
//     }))
//   }

//   render() {
//     return (
//       <div> {this.state.time} Detik </div>
//     )
//   }
// }




// // // event handler react js
// // menggunakan fuction component
// function Clicker() {
//   function handleClick(e) {
//     alert('berhasil diklik')
//     e.preventDefault();
//   }

//   return (
//     <a href="#" onClick={handleClick}>klik disini bro!</a>
//   )
// }

// // bikin on off tombol
// class Toggle extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toggleStatus : true
//     }
//     this.click = this.click.bind(this)
//   }

//   click() {
//     this.setState(state => ({
//       toggleStatus : !state.toggleStatus
//     }))
//   }

//   render() {
//     return (
//       <button onClick={this.click}>
//         {this.state.toggleStatus ? "ON" : "OFF"}
//       </button>
//     )
//   }
// }

// function Umur(props) {
//   return (
//     <span>dan umur saya {props.age} tahun.</span>
//   )
// }

// function Keterangan() {
//   return (
//     <p>Saya adalah seorang frontend developer. Saya sedang belajar teknologi React Js</p>
//   )
// }

// function Lengkap() {
//   return (
//     <p>lorem jnsoj f sdjvnjsvn djwoejnvwev jnsneiodsonvdsknvirw qoe efnjndsnvsnv jdcnjdvn skmef wokpekowefwrfkndfnjsd sjdnjrnrjngring jdnsjn kdjfj efjrgierniwor wkejfjwjkwrwpewpo skldvm.</p>
//   )
// }

// function Nama(props) {
//   return (
//     <p>Hallo, nama saya {props.nama} <Umur age={props.umur} /></p>
//   )
// }


// class App extends Component {

//   // constructor
//   constructor(props) {
//     super(props)
//     this.state = {
//       todoItem: '', //ketikan user
//       items: [] //untuk menampung todoItem
//     }
//   }

//   // event
//   handleSubmit = (event) => {
//     // mencegah sifat aslinya reload
//     event.preventDefault()
//     this.setState({
//       // penulisan dengan javascript biasa
//       // items: this.state.items.concat([this.state.todoItem])

//       // penulisan dengan es6 menggunakan spread object/operator
//       items: [...this.state.items, this.state.todoItem],
//       todoItem: '' 
//     })
//   }

//   handleChange = (event) => {
//     // mengubah state
//     this.setState({
//       todoItem: event.target.value //mengganti todoItem dengan inputan user
//     })
//   }


//   render() {
//   return (
//         // <div className="App">
//         //   <Toggle />
//         //   <header className="App-header">
//         //     <img src={logo} className="App-logo" alt="logo" />
//         //     <Nama nama='Riki Widiantoro' umur='22'/>
//         //     <Keterangan />
//         //     <Lengkap /> <Keterangan />
//         //     <Timer start='0'/>
//         //     <Timer start='8'/>
//         //   </header>
//         //   <Clicker />
//         // </div>



//         // todo list
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <input value={this.state.todoItem} onChange={this.handleChange} />
//             <button>Tambah</button>
//           </form>
//           <List items={this.state.items}/>
//         </div>
//       );
//     }
// }

class App extends Component {

  // API

  constructor(props) {
    super(props)
    this.state = {
      items : [],
      isLoading: true
    }
  }

  // lifecycle di react
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ items: data, isLoading: false }))
  }

  render() {

    const { items, isLoading } = this.state

    if( isLoading ) {
      return <p>Loading........</p>
    }

  return (
        <div>
          {/* <ul>
            {items.map((item, index) => <li key={index}> {item.name} </li>)}
          </ul> */}

          
        </div>
      );
    }
}

export default App;
