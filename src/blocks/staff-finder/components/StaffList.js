import React from "react";
import StaffListItem from "./StaffListItem";
export default class StaffList extends React.Component {
	render() {
		return (
			<div>
				{this.props.staff.map(person =>(
					<StaffListItem person={person} />
				))}

			</div>
		)
	}
}
