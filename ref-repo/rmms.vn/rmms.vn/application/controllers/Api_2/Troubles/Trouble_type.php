<?php

class Trouble_type extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->info = $this->is_login();
   $this->load->model('Sdb_trouble_type_model');
   $this->load->model('Sdb_trouble_parents_type_model');
   $this->load->database();

 }


 public function index_get($parent_id = 0)
 {
  if($parent_id == 0) {
    $this->set_response('', 400, " parent_id not found");      
    die();
  }

  $trouble_types = $this->Sdb_trouble_type_model->get_all_sdb_trouble_type_by_parent($parent_id);
  $this->set_response($trouble_types, REST_Controller::HTTP_OK, " success");      
}

public function parents_type_get(){
 $trouble_types_parents = $this->Sdb_trouble_parents_type_model->get_all_sdb_trouble_parents_type();
 $this->set_response($trouble_types_parents, REST_Controller::HTTP_OK, " success");   
}


}