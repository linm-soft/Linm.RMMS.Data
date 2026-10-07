<?php

class Trouble_category_obj extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('sdb_trouble_category_model');
   
   $this->load->database();
   $this->info = $this->is_login();
 }

 public function index_get()
 {
   $troubles_category = $this->sdb_trouble_category_model->get_all_trouble_category();
   $this->set_response($troubles_category, REST_Controller::HTTP_OK, "success");
 }



}