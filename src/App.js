// import React, { useContext } from 'react';
// import { ComputerContext } from './context/'
// // import logo from './logo.svg';
// import './App.css';

// function App() {




//   const test = [];
//   // products.forEach((val) => {
//   //   console.log(val.category);
//   //   if (!test.includes(val.category)) test.push(val.category)
//   // })
//   // const prodImage = {}
//   const test2 = products.reduce((acc, val) => {
//     const cat = val.category
//     if (!acc.a.includes(cat)) {
//       acc.a.push(cat)
//       acc.b.push({ cat: val.image })
//     }
//     return acc;
//   }, { "a": [], "b": [] })

//   // const test3 = products.reduce((acc, val) => {

//   // }, [])

//   // const test3 = products.reduce((acc, val) => {
//   //   console.log(Object.keys(acc));
//   //   console.log(val);
//   //   const arr = Object.keys(acc)


//   //   if (!arr.includes(val.category)) acc.push(val.category)
//   //   return acc;
//   // }, { "a": 1, "b": 2 })

//   console.log(test);
//   console.log(test2);
//   // console.log(test3);

//   return test2.b.map((val) =>
//     <div>  <h3>{val.category}</h3>
//       <div>        <img
//         src={require('../../img/' + val.image)}
//         alt={val.category}
//         className={styles.img}
//       /></div>
//     </div>

//   )
// }

// // return (
// // <div className="App">
// //   <header className="App-header">
// //     <img src={logo} className="App-logo" alt="logo" />
// //     <p>
// //       Edit <code>src/App.js</code> and save to reload.
// //     </p>
// //     <a
// //       className="App-link"
// //       href="https://reactjs.org"
// //       target="_blank"
// //       rel="noopener noreferrer"
// //     >
// //       Learn React
// //     </a>
// //   </header>
// // </div>
// //);
// //}

// export default App;
