import React, { Component } from 'react';
import Cocktail from './Components/Cocktail';
import CocktailList from './Components/CocktailList';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="background-image"></div>
//         <div className="content flex-parent ">
//           <Cocktail random="true"/>
//           <CocktailList />
//       </div>
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  render() {
    return (
      <div className="content flex-parent ">
          <Cocktail random="true"/>
          <CocktailList />
      </div>
    );
  }
}

export default App;
