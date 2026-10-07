<?php

class Violated_category extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->info = $this->is_login();
   
   $this->load->model('sdb_violated_category_model');
   $this->load->database();
 }

 public function index_get()
 {
  $trouble_types = $this->sdb_violated_category_model->get_all();
  $this->set_response($trouble_types, REST_Controller::HTTP_OK, " success");      
}



}