<?php

class Infrastructures_category extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->info = $this->is_login();
   $this->load->model('Sdb_infrastructures_category_model');
   $this->load->database();

 }


 public function index_get()
 {
  $trouble_types = $this->Sdb_infrastructures_category_model->get_all_sdb_infrastructures_category();
  $this->set_response($trouble_types, REST_Controller::HTTP_OK, " success");      
}




}