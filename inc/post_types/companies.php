<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'We\'re sorry, but you can not directly access this file.' );
}
// Register Custom Company
function instreamatic_add_company_post_type_and_taxonomies()
{

  $labels = array(
    'name' => _x('Companies', 'Company General Name', 'kalium'),
    'singular_name' => _x('Company', 'Company Singular Name', 'kalium'),
    'menu_name' => __('Companies', 'kalium'),
    'name_admin_bar' => __('Company', 'kalium'),
    'archives' => __('Company Archives', 'kalium'),
    'attributes' => __('Company Attributes', 'kalium'),
    'parent_item_colon' => __('Parent Company:', 'kalium'),
    'all_items' => __('All Companies', 'kalium'),
    'add_new_item' => __('Add New Company', 'kalium'),
    'add_new' => __('Add New', 'kalium'),
    'new_item' => __('New Company', 'kalium'),
    'edit_item' => __('Edit Company', 'kalium'),
    'update_item' => __('Update Company', 'kalium'),
    'view_item' => __('View Company', 'kalium'),
    'view_items' => __('View Companies', 'kalium'),
    'search_items' => __('Search Company', 'kalium'),
    'not_found' => __('Not found', 'kalium'),
    'not_found_in_trash' => __('Not found in Trash', 'kalium'),
    'featured_image' => __('Featured Image', 'kalium'),
    'set_featured_image' => __('Set featured image', 'kalium'),
    'remove_featured_image' => __('Remove featured image', 'kalium'),
    'use_featured_image' => __('Use as featured image', 'kalium'),
    'insert_into_item' => __('Insert into item', 'kalium'),
    'uploaded_to_this_item' => __('Uploaded to this item', 'kalium'),
    'items_list' => __('Companies list', 'kalium'),
    'items_list_navigation' => __('Companies list navigation', 'kalium'),
    'filter_items_list' => __('Filter items list', 'kalium'),
  );
  $args = array(
    'label' => __('Company', 'kalium'),
    'description' => __('Company Description', 'kalium'),
    'labels' => $labels,
    'supports' => array('title','thumbnail', ),
    'taxonomies' => array(),
    'hierarchical' => false,
    'public' => true,
    'show_ui' => true ,
    'show_in_menu' => true,
    'show_in_rest' => true,
    'rest_base' => "companies",
    'menu_position' => 8,
    'menu_icon' => 'dashicons-controls-play',
    'show_in_admin_bar' => true,
    'show_in_nav_menus' => false,
    'can_export' => true,
    'has_archive' => false,
    'exclude_from_search' => true,
    'publicly_queryable' => false,
    'capability_type' => 'page',
    'rewrite' => false
  );
  register_post_type('company', $args);
}

add_action('init', 'instreamatic_add_company_post_type_and_taxonomies', 0);
