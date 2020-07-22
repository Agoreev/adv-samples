<?php 
/*
	Plugin Name: Instreamatic samples plugin
	Description: Adv samples 
	Version: 1.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'We\'re sorry, but you can not directly access this file.' );
}
define( 'INSTREAMATIC_PLUGIN_DIR', plugins_url('/',__FILE__) );
define( 'INSTREAMATIC_ASSET_MANIFEST', INSTREAMATIC_PLUGIN_DIR . '/asset-manifest.json' );

add_action( 'init', function() {

    add_filter( 'script_loader_tag', function( $tag, $handle ) {
      if ( ! preg_match( '/^advsamples-/', $handle ) ) { return $tag; }
      return str_replace( ' src', ' async defer src', $tag );
    }, 10, 2 );

    add_action('wp_enqueue_scripts', 'instreamatic_enqueue');
});

function instreamatic_enqueue()
{
    $asset_manifest = json_decode( file_get_contents( INSTREAMATIC_ASSET_MANIFEST ), true )['files'];

    if ( isset( $asset_manifest[ 'main.css' ] ) ) {
      wp_enqueue_style( 'advsamples', get_site_url() . $asset_manifest[ 'main.css' ] );
    }

    wp_enqueue_script( 'advsamples-runtime', get_site_url() . $asset_manifest[ 'runtime-main.js' ], array(), null, true );

    wp_enqueue_script( 'advsamples-main', get_site_url() . $asset_manifest[ 'main.js' ], array('advsamples-runtime'), null, true );

    foreach ( $asset_manifest as $key => $value ) {
      if ( preg_match( '@static/js/(.*)\.chunk\.js@', $key, $matches ) ) {
        if ( $matches && is_array( $matches ) && count( $matches ) === 2 ) {
          $name = "advsamples-" . preg_replace( '/[^A-Za-z0-9_]/', '-', $matches[1] );
          wp_enqueue_script( $name, get_site_url() . $value, array( 'advsamples-main' ), null, true );
        }
      }

      if ( preg_match( '@static/css/(.*)\.chunk\.css@', $key, $matches ) ) {
        if ( $matches && is_array( $matches ) && count( $matches ) == 2 ) {
          $name = "advsamples-" . preg_replace( '/[^A-Za-z0-9_]/', '-', $matches[1] );
          wp_enqueue_style( $name, get_site_url() . $value, array( 'advsamples' ), null );
        }
      }
    }
}


require_once('inc/post_types.php');
require_once('inc/meta_boxes.php');
require_once('inc/companies.php');
require_once('inc/shortcode.php');
