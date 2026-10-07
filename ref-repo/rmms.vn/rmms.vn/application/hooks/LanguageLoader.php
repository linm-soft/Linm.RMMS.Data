<?php 
class LanguageLoader
{
	function initialize() {
		$ci =& get_instance();
		$ci->load->helper('language');
		$siteLang = $ci->session->userdata('site_lang');
		if ($siteLang) {
			$ci->lang->load('sdb_trouble',$siteLang);
			$ci->lang->load('sdb_checkin_distance',$siteLang);
		} else {
			$ci->lang->load('sdb_trouble','vietnamese');
			$ci->lang->load('sdb_checkin_distance','vietnamese');
		}
	}

}
?>