<?php

class Task extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->load->model('Sdb_task_model');
   $this->load->model('Sdb_task_sub_model');
   
   $this->load->database();
   $this->info = $this->is_login();

 }

 public function index_get() {
  
  if( $this->info->data->user_type_level !== 5 ) {
    $taks = $this->Sdb_task_model->get_all_sdb_task();
    $this->set_response($taks, REST_Controller::HTTP_OK, "success");
  } 

  if( $this->info->data->user_type_level == 5) {
    $taks = $this->Sdb_task_model->get_sdb_task_by_user($this->info->data->user_id);
    $this->set_response($taks, REST_Controller::HTTP_OK, "success");
  }

}


public function distance_get($distance_id = 0) {

  if($this->info->data->user_type_level !== 5  ) {
    $troubles = $this->Sdb_task_model->get_all_sdb_task_by_distance($distance_id);
    $this->set_response($troubles, REST_Controller::HTTP_OK, "success");
  }else {
    $this->set_response('', 403, "failed"); 
  }
  
}



public function index_post() {

  if( $this->info->data->user_type_level == 5  ) {
    $this->set_response('', 403,'khong du quyen');  
    die();
  }

  $user_id_receive = $this->_post('user_id_receive');
  $user_receive_group_id = $this->_post('user_receive_group_id');
  $task_type_id = $this->_post('task_type_id');
  $task_name = $this->_post('task_name');
  $task_details = $this->_post('task_details');
  $location_id = $this->_post('location_id');
  $station_id = $this->_post('station_id',0);
  $distance_id = $this->_post('distance_id',0);
  $trouble_obj_id = $this->_post('trouble_obj_id');
  $task_end_time = $this->_post('task_end_time');
  $task_start_time = $this->_post('task_start_time');

  $params = array(
    'user_id_sender' => $this->info->data->user_id,
    'user_id_receive' => $user_id_receive,
    'user_receive_group_id' => $user_receive_group_id,
    'task_type_id' => $task_type_id,
    'task_name' => $task_name,
    'task_status_id' => 1,
    'task_details' => $task_details,
    'location_id' => $location_id,
    'station_id' => $station_id,
    'distance_id' => $distance_id,
    'trouble_obj_id' => $trouble_obj_id,
    'task_end_time' => $task_end_time,
    'task_start_time' => $task_start_time,
  );

  $sdb_task_id = $this->Sdb_task_model->add_sdb_task($params);
  if($sdb_task_id) {
    $this->set_response('', REST_Controller::HTTP_OK, " add success");    
  }else {
    $this->set_response('', 500, "add task failed");    
  }

}

public function receive_put() {
 $task_id = $this->_put('task_id');
 $code = $this->update_status_task(2, $task_id);
 if($code) {
  $this->set_response('', REST_Controller::HTTP_OK, " update success");    
}else {
  $this->set_response('', 500, "add task failed");    
}
}

public function finish_put() {
 $task_id = $this->_put('task_id');
 $code = $this->update_status_task(3, $task_id);
 if($code) {
  $this->set_response('', REST_Controller::HTTP_OK, " update success");    
}else {
  $this->set_response('', 500, "add task failed");    
}
}


private  function update_status_task($status = 2, $task_id = 0 )
{

  $check = $this->Sdb_task_model->get_sdb_task($task_id);
  if(empty($check)) {
    $this->set_response('', 404, " not fount task");
    die();
  }
  $params = array(
    'task_status_id' => $status,
  );
  return $sdb_task_id = $this->Sdb_task_model->update_sdb_task($task_id,$params);


}

function comment_post()
{
 $params = array(
  'user_id' => $this->info->data->user_id,
  'task_comment' => $this->_post('task_comment'),
  'task_id' => $this->_post('task_id'),
);
 $this->load->model('Sdb_task_comment_model');
 $code = $this->Sdb_task_comment_model->add_sdb_task_comment($params); 
 if ($code) {
  $this->set_response('', 200, "add comment success");
}else {
  $this->set_response('', 400, "add comment error");
}
}


function task_comment_get($task_id)
{
  $comments  = $this->Sdb_task_model->get_sdb_task_comment($task_id);
  $this->set_response($comments,200,'succeess');
}


function update_task_post()
{

  $task_id = $this->_post('task_id');
  $task_status_id = $this->_post('task_status_id');
  $task_sub_detail = $this->_post('task_sub_detail',0);
  $task_sub_lat = $this->_post('task_sub_lat');
  $task_sub_long = $this->_post('task_sub_long');
  $task_sub_location = $this->_post('task_sub_location');
  $params_sub = array(
    'task_id' => $task_id,
    'task_sub_detail' => $task_sub_detail,
    'task_sub_lat' => $task_sub_lat,
    'task_sub_long' => $task_sub_long,
    'task_sub_location' => $task_sub_location,
    'user_group_id' =>  $this->info->data->user_group_id,
    'user_id' =>  $this->info->data->user_id
  );

    // check error
  if(empty($task_id)) {
   $this->set_response('', 404, "not fount task_id",FALSE);    
   die;
 }
 
 if(empty($_FILES) ) {
   $this->set_response('', 400, "not fount files");    
   die;
 }
 if(empty($_FILES['task_sub_img_list']) || empty($_FILES['task_sub_img_list']['name']) ) {
  $this->set_response('', 400, "not fount param task_sub_img_list");    
  die;
}

$task_sub_id = $this->Sdb_task_sub_model->add_task_sub($params_sub);

if(!$task_sub_id) {
  $this->set_response('', 500, "add task sub failed");    
  die;
}
    // update status task
$code =  $this->update_status_task($task_status_id, $task_id);

$file_name = $_FILES['task_sub_img_list']['name'];

if(!is_null($file_name)){
  $img_upload = $this->my_system->upload_mutil_img('task_sub_img_list','./uploads/tasks/','uploads/tasks/',3);  
}else{
  $this->set_response('', 400, " not fount task_sub_img_list",TRUE); 
  die;
}

    // convert drop img
foreach ($img_upload['path_img'] as $link) {
  if($this->my_system->gd2_img($link)) {
    $img_thumb = str_replace('.jpg', '_thumb.jpg',$link);
  }

  $task_img = array(
    'task_sub_img_link' => $link,
    'task_sub_img_link_thumb' => $img_thumb,
    'task_id' => $task_id,
    'task_sub_id' => $task_sub_id ,
    'user_id' =>  $this->info->data->user_id

  );

  $list_img = $this->Sdb_task_sub_model->add_task_sub_img($task_img);

  if(!$list_img) {
    $this->set_response('', 500, "errro inssert img",TRUE); 
    die();           
  }
}

$this->set_response('', 200, "update task success",TRUE); 



}


}