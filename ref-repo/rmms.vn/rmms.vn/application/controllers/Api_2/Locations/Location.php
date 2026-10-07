<?php

class location extends API_Controller {

	public function __construct() {
		parent::__construct();
		$this->info = $this->is_login();
		$this->load->model('Sdb_location_model');
		$this->load->database();
		$this->info = $this->is_login();

	}


	public function index_get()
	{
		$trouble_types = $this->Sdb_location_model->get_all_sdb_location();
		$this->set_response($trouble_types, REST_Controller::HTTP_OK, " success");      
	}



}