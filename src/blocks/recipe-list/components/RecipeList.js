import React from "react";
import RecipeCard from "./RecipeCard";

export default class RecipeList extends React.Component {
	render(){
		return (
			<div className="recipe-list">
				<div className="contaier">
					<div className="row">
				{this.props.recipes.map(recipe => (
					<RecipeCard title={recipe.attributes.title.rendered}
								details={recipe.attributes.content.rendered}
								rating={recipe.attributes.acf.recipe_rating}
								link={recipe.attributes.acf.recipe_url}
								image_id={recipe.attributes._embedded?.['wp:featuredmedia']['0']?.media_details?.sizes?.medium?.source_url}
								key={recipe.attributes.id}
					/>
				))}
					</div>
				</div>
			</div>
		)
	}

}
