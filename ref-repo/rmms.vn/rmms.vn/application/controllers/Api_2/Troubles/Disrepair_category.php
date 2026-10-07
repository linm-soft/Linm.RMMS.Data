<?php

class Disrepair_category extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('Sdb_disrepair_category_model');
   $this->load->database();
   $this->info = $this->is_login();
 }

 public function index_get()
 {
   $res = $this->Sdb_disrepair_category_model->get_all();
   $this->set_response($res, REST_Controller::HTTP_OK, "success");
 }

}