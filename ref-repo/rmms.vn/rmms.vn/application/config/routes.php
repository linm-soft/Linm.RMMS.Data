<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'dashboard/index';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['logs'] = "logViewerController/index";
$route[$this->config->item('ajax_distance_by_location_get')."/(:num)"] = 'Sdb_distance/ajax_distance_by_location_get/$1';


