import React from "react";
import StarRating from "../../../components/StarRating";

export default class AddRecipeForm extends React.Component {
	state = {
		title: '',
		details: '',
		rating: 0,
		link: '',
		image_id: '',

	};

	addRecipe(e) {
		e.preventDefault();

		const newRecipe = {
			title: this.state.title,
			content: this.state.details,
			acf: {
				recipe_rating: parseInt(this.state.rating) || 0,
				//recipe_image: this.state.image,
				recipe_url: this.state.link
			},
			featured_media: this.state.image_id,

			// maybe you should validate better before doing this?
			status: 'publish',
		}


		// we can't assume any props are provided
		// ?. only calls the method if it exists
		this.props.addRecipe?.(newRecipe);

		//clear the form
		this.setState({title: '', details: '', rating: 0, link: '', image_id: '',})
	}

		pickImage(){
			var image = wp.media({
				title: 'Upload Image',
				type: 'image',
				multiple: false,
				button: {
					text: 'Done'
				}
			}).open()

			image.on('select', (e) =>{
				var uploaded_image = image.state().get('selection').first();
				var image_id = uploaded_image.toJSON().id;
				// $('input#image-id').val(image_id);
				this.setState({image_id: image_id})
			});


		}






	render() {
		return (
			<form
				className="new-recipe-form"
				onSubmit={e => this.addRecipe(e)}
			>
				<div>
					<button type="button"
						onClick={e => this.pickImage()}
					>Upload Image</button>
				</div>
				<div>
					<label>
						Recipe Name:
						<input type="text"
							   value={this.state.title}
							   onInput={e => this.setState({title: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Recipe Details:
						<textarea
							value={this.state.details}
							onInput={e => this.setState({details: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Recipe Link:
						<input
							type="text"
							value={this.state.link}
							onInput={e => this.setState({link: e.target.value})}
						/>

					</label>
				</div>

				<div>
					<label>
						Overall Rating:
						{/*<input type="number"*/}
						{/*	   value={this.state.rating}*/}
						{/*	   onInput={e => this.setState({rating: e.target.value})}*/}
						{/*/>*/}
						<StarRating rating={this.state.rating} setRating={rating => this.setState({rating})} />
					</label>
				</div>



				<button type="submit">Add Recipe</button>
			</form>
		);
	}

};
