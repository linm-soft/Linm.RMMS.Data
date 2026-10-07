<?php

class Trouble_status extends API_Controller {

	public function __construct() {
		parent::__construct();
		$this->info = $this->is_login();
		$this->load->model('Sdb_trouble_status_model');
		$this->load->database();
	}
	
	public function index_get()
	{
		$trouble_status = $this->Sdb_trouble_status_model->get_all_sdb_trouble_status();
		$this->set_response($trouble_status, REST_Controller::HTTP_OK, " success trouble status");      
	}
	


}