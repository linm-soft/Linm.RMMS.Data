<?php

class User_group extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->info = $this->is_login();
   $this->load->model('Sdb_user_group_model');
   $this->load->database();

 }

 public function index_get()
 {
   if($this->info->data->user_type_level == 1 ) {
    $res = $this->Sdb_user_group_model->get_all_sdb_user_group();
    $this->set_response($res, 200,'success');  
  }else {

    $this->set_response('', 403,'khong du quyen');  
  }

}



}