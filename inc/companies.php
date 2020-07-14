<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'We\'re sorry, but you can not directly access this file.' );
}
add_action('wp_enqueue_scripts', 'instreamatic_enqueue');

add_action('wp_ajax_nopriv_instreamatic_get_companies', 'wp_ajax_nopriv_instreamatic_get_companies_action');
add_action('wp_ajax_instreamatic_get_companies', 'instreamatic_get_companies_action');

function instreamatic_get_companies_action()
{
    check_ajax_referer('instreamatic-ajax-nonce', 'nonce_code', true);
    $res = array();
    $companies = get_posts(array("post_type" => "company"));
    foreach ($companies as $company) {
        $image_url = get_the_post_thumbnail_url($company->ID, "full");
        array_push($res, array($company->$ID => array("title" => $company->post_title, "image" => $image_url, "id" => $company->ID)));
    }

    echo $res;
    wp_die();
}

add_action('wp_ajax_nopriv_instreamatic_get_company', 'wp_ajax_nopriv_instreamatic_get_company_action');
add_action('wp_ajax_instreamatic_get_company', 'instreamatic_get_company_action');

function instreamatic_get_company_action()
{
    check_ajax_referer('instreamatic-ajax-nonce', 'nonce_code', true);

    $company_post_id = intval($_POST["company_post_id"]);
    $company_title = $_POST["company_title"];
    $company_image_url = get_the_post_thumbnail_url($company_post_id, "thumbnail");
    $json = get_post_meta($company_post_id, 'adv_json', true);

    $res = array(
        "title" => $company_title,
        "image" => $company_image_url,
        "json" => $json,
    );

    echo json_encode($res);
    wp_die();
}

add_action('rest_api_init', 'register_json_as_rest_field');

function register_json_as_rest_field() {
    register_rest_field('company', 'adv_json', array('get_callback' => 'get_json_meta_field', 'update_callback' => null, 'schema' => null));
};
function get_json_meta_field($object, $field_name, $value) {
    return get_post_meta($object['id'], $field_name, true);
};
