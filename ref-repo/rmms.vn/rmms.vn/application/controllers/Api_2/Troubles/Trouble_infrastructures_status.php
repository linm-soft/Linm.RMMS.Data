<?php

class Trouble_infrastructures_status extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('Sdb_trouble_infrastructures_status_model');
   
   $this->load->database();
   $this->info = $this->is_login();
 }

 public function index_get()
 {
   $res = $this->Sdb_trouble_infrastructures_status_model->get_all();
   $this->set_response($res, REST_Controller::HTTP_OK, "success");
 }

}