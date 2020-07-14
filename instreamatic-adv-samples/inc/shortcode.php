<?php
// This file enqueues a shortcode.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'We\'re sorry, but you can not directly access this file.' );
}

add_shortcode( 'instreamatic_adv_samples', function( $atts ) {
  $default_atts = array();
  $args = shortcode_atts( $default_atts, $atts );

  return "<div id='caseStudiesApp'></div>";
});