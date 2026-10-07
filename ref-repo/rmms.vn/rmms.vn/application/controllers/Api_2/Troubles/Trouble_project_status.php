<?php

class Trouble_project_status extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('Sdb_trouble_project_status_model');
   
   $this->load->database();
   $this->info = $this->is_login();
 }

 public function index_get()
 {
   $troubles_category = $this->Sdb_trouble_project_status_model->get_all_trouble_project_status();
   $this->set_response($troubles_category, REST_Controller::HTTP_OK, "success");
 }



}