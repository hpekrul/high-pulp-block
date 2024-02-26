<?php
function hp_add_borders( $block_content = '', $block = [] ) {
	// get the attributes while setting some defaults
	$defaults = ['borderStyle' => 'none',
		'borderPadding' => 10];
	$attrs = array_merge($defaults, $block['attrs']);


	// TODO: create wrapper
	//only do this for blocks that have borders
	if($attrs['borderStyle'] !== 'none'){
		$style = "
		border-style:  {$attrs['borderStyle']};
		padding: {$attrs['borderPadding']}px;
		";
		return '<div style="' . $style . '">' . $block_content . '</div>';
	}

	// else, return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'hp_add_borders', 10, 2 );
