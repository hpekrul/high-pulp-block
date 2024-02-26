<?php
function hp_add_borders( $block_content = '', $block = [] ) {
	// get the attributes while setting some defaults
	$defaults = ['borderStyle' => 'none',
		'borderPadding' => 10,
		'borderWidth' => 10,
		'borderRadius' => 10,
		'borderColor' => 'black'];
	$attrs = array_merge($defaults, $block['attrs']);


	// TODO: create wrapper
	//only do this for blocks that have borders
	if($attrs['borderStyle'] !== 'none'){
		$style = "
		border-style:  {$attrs['borderStyle']};
		padding: {$attrs['borderPadding']}px;
		border-width: {$attrs['borderWidth']}px;
		border-radius: {$attrs['borderRadius']}px;
		border-color: {$attrs['borderColor']};
		";
		return '<div style="' . $style . '">' . $block_content . '</div>';
	}

	// else, return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'hp_add_borders', 10, 2 );
