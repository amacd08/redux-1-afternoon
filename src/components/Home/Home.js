import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, {RESET_RECIPE_INFO} from '../../store'

class Home extends Component {
  constructor(props) {
    const reduxState = store.getState()
    super(props);
    this.state = {
      recipes: reduxState.recipeList
    };
  }

  componentDidMount(){
    const reduxState = store.getState()
    this.setState({
      recipes:reduxState.recipeList
      })
    }
  
  resetRecipeInfo = () => {
    store.dispatch({
      type:RESET_RECIPE_INFO
    })
    
  }

  render() {
    console.log()
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button onClick={this.resetRecipeInfo}>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
