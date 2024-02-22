import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPalette, ColorPicker, PanelBody, PanelRow, SelectControl} from "@wordpress/components";

export class BlockSettings extends React.Component {
	render(){
		const {attributes, setAttributes} = this.props;

		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
					<PanelRow>
						<SelectControl
							label="Quote Background Color"
							value={attributes.backgroundColorClass}
							onChange={backgroundColorClass => setAttributes({backgroundColorClass})}
							options={[
								{value: '', label: 'Default'},
								{value: 'bg-primary-blue', label: 'Primary Blue'},
								{value: 'bg-primary-red', label: 'Primary Red'},
							]}
						/>
					</PanelRow>
					<PanelRow>
						Border Color
					</PanelRow>
					<PanelRow>
						<ColorPalette
							colors={[
								{name: 'blue', color: '#0000FF'},
								{name: 'red', color: '#FF0000'},
								{name: 'lilac', color: '#B1B1F5'}
							]}
							value={attributes.borderColor}
							onChange={borderColor => setAttributes({borderColor})}
							disableCustomColors={true}
						/>
					</PanelRow>
					<PanelRow>
						Text Color
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.textColor}
							onChange={textColor => setAttributes({textColor})}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)
	}
}
