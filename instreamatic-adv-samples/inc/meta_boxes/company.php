<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'We\'re sorry, but you can not directly access this file.' );
}
add_action('add_meta_boxes', 'instreamatic_add_company_metaboxes');

function instreamatic_add_company_metaboxes()
{
    add_meta_box('instreamtic_company_props_meta_box', 'Company json', 'instreamtic_company_props_meta_box', 'company');
}

function instreamtic_company_props_meta_box($company)
{
    wp_nonce_field(basename(__FILE__), "meta-box-nonce");

    $adv_json = get_post_meta($company->ID, "adv_json", true);
?>
    <table class="form-table">
        <tbody>
            <tr>
                <th scope="row">
                    <label for="adv_json">Adv JSON</label>
                </th>

                <td>
                    <input type="text" required value="<?php echo $adv_json ?>" name="adv_json" id="adv_json" placeholder="Adv json">
                </td>
            </tr>
        </tbody>
    </table>
<?php
}

add_action("save_post", "instreamatic_save_company_meta_box", 10, 3);

function instreamatic_save_company_meta_box($post_id, $post, $update)
{
    if (!isset($_POST["meta-box-nonce"]) || !wp_verify_nonce($_POST["meta-box-nonce"], basename(__FILE__))) {
        return $post_id;
    }
    if (!current_user_can("edit_post", $post_id)) {
        return $post_id;
    }

    if (defined("DOING_AUTOSAVE") && DOING_AUTOSAVE) {
        return $post_id;
    }
    if ($post->post_type == 'company') {
        $meta_data = array(
            "adv_json" => $_POST["adv_json"]
        );
        foreach ($meta_data as $field => $value) {
            update_post_meta($post_id, $field, $value);
        }
    }
}
