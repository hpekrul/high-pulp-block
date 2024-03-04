import React from "react";
export default class StaffListItem extends React.Component {
	render() {
		const {person} = this.props;
console.log(person._embedded['wp:featuredmedia']['0'])
		return (
			<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img src={person._embedded['wp:featuredmedia']['0']?.media_details?.sizes?.thumbnail?.source_url} />

				</div>
				<div className="flip-card-back">
					<h2>{person.title.rendered}</h2>
					<p>{person.acf.staff_position}</p>

				</div>
			</div>
			</div>
		)
	}
}
