<?php

class Trouble_reason extends API_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->model('sdb_trouble_reason_model');
		$this->load->database();
		$this->info = $this->is_login();
	}

	public function index_get()
	{
		$res = $this->sdb_trouble_reason_model->get_all();
		$this->set_response($res, REST_Controller::HTTP_OK, "success");
	}

}