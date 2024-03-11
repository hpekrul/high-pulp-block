import React from "react";
import AddRecipeForm from "./AddRecipeForm";
import RecipeList from "./RecipeList";

export default class BlockApp extends React.Component {
	state = {
		recipes: [],
		loggedIn: null,
	};

	addRecipe(newRecipe){
		const recipe = new wp.api.models.Recipe(newRecipe);
		recipe.save()
			.done(data => {
				console.log('saved!', data);
				this.getRecipes();
			}).fail(jqXHR => {
				console.error('failed', jqXHR)
		})
	}

	addMedia(newMedia){
		const media = new wp.api.models.Media(newMedia);
		media.save()
			.done(data => {
				console.log('saved', data);
			})
	}
	getRecipes(){
		// by default, this gives us 10
		const recipeCollection = new wp.api.collections.Recipe();
		recipeCollection.fetch()
			.done(data => {
				console.log('recipes!', data, recipeCollection);
				// store the models in our state
				this.setState({recipes: recipeCollection.models})
			})
			.fail(jxXHR => {
				console.error('failed!', jxXHR)
			})
	}

	getLoggedInUser(){
		const user = new wp.api.models.UsersMe(); //get logged in user
		user.fetch()
			.done(user =>{
				//logged in
				this.setState({loggedIn: true});
			})
			.fail(jqXHR => {
				//not logged in
				this.setState({loggedIn: false});
			})
	}

	//when page loads
	componentDidMount(){
		this.getRecipes();
		this.getLoggedInUser(); //get logged in user when page loads.
	}

	render() {
		return (
			<div>
				<h3>Latest Recipes</h3>
				<RecipeList recipes={this.state.recipes}/>
				<hr />
				<h3>Submit a Recipe</h3>
				{this.state.loggedIn === true && <AddRecipeForm addRecipe={recipeObj => this.addRecipe(recipeObj)} />}
				{this.state.loggedIn === false && <div className="error-msg">You must be logged in to submit a review.</div>}
			</div>
		);
	}
}
