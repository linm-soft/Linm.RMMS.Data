<?php

class Trouble_construction_type extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('Sdb_trouble_construction_type_model');
   
   $this->load->database();
   $this->info = $this->is_login();
 }

 public function index_get()
 {
   $troubles_category = $this->Sdb_trouble_construction_type_model->get_all();
   $this->set_response($troubles_category, REST_Controller::HTTP_OK, "success");
 }



}