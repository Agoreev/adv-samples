# ADV-samples
🎧Wordpress plugin for demonstration of audio ads in the form of a dialogue (React, Wordpress REST API)

![](https://github.com/Agoreev/adv-samples/blob/master/instreamatic.gif)

Place the project folder in the folder mu-plugins of the wordpress site and in php file in mu-plugins-directory put this code:

`require_once('adv-samples/instreamatic-adv-samples/instreamatic.php');`

Or install as wordpress plugin manually via admin panel - in this case only "instreamatic-adv-samples" folder needed (this folder contains build project, put this folder in archieve and upload as plugin).

To add the widget with ad samples on the page write the shortcode `[instreamatic_adv_samples]` in the right place.

Ad samples can be edited in the admin panel in the Companies section.

To edit project code run:
`npm install`
, edit code then build it:
`npm build`
