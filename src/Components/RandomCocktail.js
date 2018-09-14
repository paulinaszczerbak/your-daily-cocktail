import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import '../App.css';


class RandomCocktail extends Component {

    static initialstate = () => ({
        image: '',
        name: '',
        ingredients: [],
        measures: [],
        instruction: ''
    });

    state = RandomCocktail.initialstate();
    resetCocktail = () => {
        this.setState(RandomCocktail.initialstate());
        this.getRandomCocktail();
    }


    getRandomCocktail = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(resp => {
            this.setState({
                image: resp.data.drinks[0].strDrinkThumb,
                name: resp.data.drinks[0].strDrink,
                instruction: resp.data.drinks[0].strInstructions
            });
            this.getIngredients(resp);
            console.log(resp.data.drinks[0]);
        })
    }

    getIngredients = (resp) => {
        let ingr = 'strIngredient';
        let measure ='strMeasure'; 
        for(let i=1; resp.data.drinks[0][ingr + i] !== ""; i++){
            this.setState(prevState => ({
                ingredients: prevState.ingredients.concat(resp.data.drinks[0][ingr + i]),
                measures: prevState.measures.concat(resp.data.drinks[0][measure + i])
            }))
        }
    }

    componentDidMount() {
        return this.getRandomCocktail();
    }

    render() {
      return (
        <div className="flex-parent col-5" >
               <img className="img" src={this.state.image}></img>
               <Recipe name={this.state.name} ingredients={this.state.ingredients} measures={this.state.measures} instruction={this.state.instruction} />
               <button className="btn btn-success" onClick={this.resetCocktail}>CLICK </button>
        </div>
      );
    }
  }
  
  export default RandomCocktail;