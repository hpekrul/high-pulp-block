import React from "react";
import StarRating from "../../../components/StarRating";

export default class ReviewCard extends React.Component {

	render(){
		let {title, review, rating} = this.props;

		return (
			<div className="review-card">
				<div className="review-title">{title}</div>
				{/*<div className="review-rating">{rating}</div>*/}
				<StarRating rating={rating} readonly />
				<div className="review-content" dangerouslySetInnerHTML={{__html: review}}></div>

			</div>
		)
	}

}
