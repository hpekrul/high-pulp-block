import React from "react";
import StarRating from "../../../components/StarRating";

export default class RecipeCard extends React.Component {
	render(){
		let {title, details, rating, link, image_id} = this.props;
		return (
				<div className="col pt-4">
			<div className="card">
				<img src={image_id} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text" dangerouslySetInnerHTML={{__html: details}}></p>
						<StarRating rating={rating} readonly />
						<a href={link} className="btn btn-primary mt-5">Recipe Details</a>

					</div>
			</div>
			</div>
		)
	}

}
