<?php

class Trouble_disrepair extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('Sdb_trouble_disrepair_model');
   
   $this->load->database();
   $this->info = $this->is_login();
 }

 public function index_get()
 {
   $res = $this->Sdb_trouble_disrepair_model->get_all_trouble_disrepair();
   $this->set_response($res, REST_Controller::HTTP_OK, "success");
 }

}