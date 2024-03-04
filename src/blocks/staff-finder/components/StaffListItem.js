import React from "react";
export default class StaffListItem extends React.Component {
	render() {
		const {person} = this.props;

		return (
			<li>
				{person.title.rendered}
			</li>
		)
	}
}
