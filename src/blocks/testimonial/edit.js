/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, RichText, PlainText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {SelectControl} from "@wordpress/components";
import StarRating from "../../components/StarRating";
import {BlockSettings} from "./BlockSettings";


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes }) {
	//const attributes = props.attributes;
	//const {attributes, setAttributes} = props;
	const divStyles = {
		borderColor: attributes.borderColor,
		color: attributes.textColor,
	}
	return (
		<div { ...useBlockProps({className: attributes.backgroundColorClass, style: divStyles}) } >
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />
			<div className="stars">
				{/*<SelectControl*/}
				{/*	label="Select a Rating"*/}
				{/*	value={attributes.stars}*/}
				{/*	onChange={stars => setAttributes({stars: parseInt(stars)})}*/}
				{/*	options={[*/}
				{/*		{value: 1, label: '★'},*/}
				{/*		{value: 2, label: '★★'},*/}
				{/*		{value: 3, label: '★★★'},*/}
				{/*		{value: 4, label: '★★★★'},*/}
				{/*		{value: 5, label: '★★★★★'}*/}
				{/*	]}*/}
				{/*	/>*/}
				<StarRating rating={attributes.stars}
							setRating={stars => setAttributes({stars: parseInt(stars)})}
				/>
			</div>
			<RichText
				className="quote"
				tagName="div"
				placeholder="I love cake."
				value={attributes.quote}
				//onChange={ ( content ) => setAttributes( { quote: content } ) }
				onChange={ ( quote ) => setAttributes( { quote } ) }
				/>
			{/*<div className="quote">I love cake.</div>*/}
			<div className="quote-profile">
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							onSelect={ file => {
								console.log(file);
								setAttributes({imgUrl: file.sizes.thumbnail.url});
							}
						}
							render={({open}) => <img src={attributes.imgUrl}
													 alt="upload a photo"
													 onClick={open}
								/>}
						></MediaUpload>
					</MediaUploadCheck>
				</div>
				<div className="text">
					<PlainText className="author"
							   placeholder="Eric Foreman"
							   value={attributes.author}
							   onChange={author => setAttributes({author})}
					/>
					<PlainText className="location"
							   placeholder="Point Place, WI"
							   value={attributes.location}
							   onChange={location => setAttributes({location})}
					/>
				</div>
			</div>
		</div>
	);
}
