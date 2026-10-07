<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if (!function_exists('getallheaders')) {
	function getallheaders() {
		$headers = [];
		foreach ($_SERVER as $name => $value) {
			if (substr($name, 0, 5) == 'HTTP_') {
				$headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
			}
		}
		return $headers;
	}
}
class Admin_Controller extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		if (! isset($_SESSION['account'])) {
			redirect(base_url('/Sdb_user/login'));
		}


		define('USER_LEVEL', $_SESSION['account']['user_type_level']);
		define('USER_NAME', $_SESSION['account']['user_name']);
		define('USER_ID', $_SESSION['account']['user_id']);
		define('USER_AVATAR', $_SESSION['account']['user_avatar']);
		
		log_message('info','USER_ID - '.USER_ID.' | ' .$this->input->method().' | '.$this->router->fetch_class().'/'.$this->router->fetch_method());
	}


}

require(APPPATH.'/libraries/REST_Controller.php');  
class API_Controller extends REST_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->library('JWT');
		$this->load->database();
	}

	public function is_login() {
		$headers = getallheaders ();
		if(isset($headers['token']) || isset($headers['Token'])) {

			$token = isset($headers['token']) ? $headers['token'] : $headers['Token'];

			$secret = $this->config->item('secret_key_jwt');
			$dataj = $this->jwt->verifyJWT("sha256",$token,$secret);

			if($dataj['check'] == false) {
				$this->set_response('failed', REST_Controller::HTTP_FORBIDDEN,'HTTP_FORBIDDEN  token failed');
			}

			if(json_decode($dataj['data_user'])) {

				return json_decode($dataj['data_user']);
			}else {

				$this->set_response('failed', REST_Controller::HTTP_FORBIDDEN,'HTTP_FORBIDDEN not found data');	
			}
			
		}
		$this->set_response(false, REST_Controller::HTTP_FORBIDDEN,'HTTP_FORBIDDEN not fount token');
	}
}
