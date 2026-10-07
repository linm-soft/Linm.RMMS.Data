<?php

class Task_status extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('Sdb_task_status_model');
   $this->load->database();
   $this->info = $this->is_login();

 }

 public function index_get() {
    $task_type = $this->Sdb_task_status_model->get_sdb_task_status_23();
    $this->set_response($task_type, REST_Controller::HTTP_OK, "success");
 }

}