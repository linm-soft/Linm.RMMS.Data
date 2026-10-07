<?php

class Task_type extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('Sdb_task_type_model');
   
   $this->load->database();
   $this->info = $this->is_login();

 }

 public function index_get() {

  // if( $this->info->data->user_type_level == 1 ) {
    $task_type = $this->Sdb_task_type_model->get_all_sdb_task_type();
    $this->set_response($task_type, REST_Controller::HTTP_OK, "success");
  // }
   
 }

}