<?php

class Trouble_obj extends API_Controller {

  public function __construct() {
   parent::__construct();
   
   $this->load->model('Sdb_trouble_obj_model');
   $this->load->model('Sdb_trouble_obj_img_model');
   
   $this->load->model('Sdb_trouble_category_model');
   $this->load->database();
   $this->info = $this->is_login();
 }

 public function index_get() {

  $params['limit'] = 10000; 
  $params['offset'] = 0;

  if( $this->info->data->user_type_level !== 5 ) {
   $troubles = $this->Sdb_trouble_obj_model->get_all_trouble_obj($params);
   $this->set_response($this->build_out_put($troubles), REST_Controller::HTTP_OK, "success");
 }

 if( $this->info->data->user_type_level == 5) {
  $troubles = $this->Sdb_trouble_obj_model->get_all_trouble_obj_by_user($this->info->data->user_id);
  $this->set_response($this->build_out_put($troubles), REST_Controller::HTTP_OK, "success");
}

}


public function distance_get($distance_id = 0) {

  if($this->info->data->user_type_level !== 5  ) {    
    $troubles = $this->Sdb_trouble_obj_model->get_all_trouble_obj_by_distance($distance_id);
    $this->set_response($troubles, REST_Controller::HTTP_OK, "success");
  }else {
   $this->set_response('', 403, "failed");
 }

}



private  function build_out_put($list)
{
  $array = [];
  foreach ($list as $key => $value) {
    $o = json_decode($value['trouble_obj_data'],true);
    $array[] = array_merge($list[$key],$o) ;
  }
  return $array;
}

public function index_post()
{
  $trouble_category_id =  $this->_post('trouble_category_id');

  $obj = $this->Sdb_trouble_obj_model->create_trouble_obj($trouble_category_id);
  $arr = [];

  foreach($obj as $key => $value) {
    $arr[trim($value['trouble_category_obj_name'])] = $this->_post(trim($value['trouble_category_obj_name']));
  }

  $user_gourp_id =  $this->info->data->user_group_id;
  $user_id =  $this->info->data->user_id;
  $location_id =  $this->_post('location_id');
  $infrastructure_id = $this->_post('infrastructure_id');
  $distance_id = $this->_post('distance_id');
  $station_id = $this->_post('station_id',0);
  $trouble_lat = $this->_post('trouble_lat');
  $trouble_lng = $this->_post('trouble_lng');
  $trouble_location = $this->_post('trouble_location');
  $trouble_status_id = $this->_post('trouble_status_id');
  // $trouble_project_status_id = $this->_post('trouble_project_status_id');
  $trouble_obj_data = json_encode($arr);

  $trouble = array(
    'user_group_id' =>  $user_gourp_id,
    'user_id' =>  $user_id,
    'location_id' => $location_id,
    'trouble_location' => $trouble_location,
    'infrastructure_id' => $infrastructure_id,
    'distance_id' => $distance_id,
    'station_id' => $station_id,
    'trouble_lat' => $trouble_lat,
    'trouble_lng' => $trouble_lng,
    'trouble_category_id' => $trouble_category_id,
    'trouble_status_id' => $trouble_status_id,
    // 'trouble_project_status_id' => $trouble_project_status_id,
    'trouble_obj_data' => $trouble_obj_data
  );

  $trouble_obj_id = $this->Sdb_trouble_obj_model->add_sdb_trouble_obj($trouble);

  $sub_trouble_obj_id =  uniqid();

  if(!empty($_FILES)) {
    $file_name = $_FILES['img_list']['name'];

    if(!is_null($file_name)){
      $img_upload = $this->my_system->upload_mutil_img('img_list','./uploads/troubles/','uploads/troubles/',3);  
    }else{
      $this->set_response('', 400, " not fount img_list",TRUE); 
      die;
    }
    
    foreach ($img_upload['path_img'] as $link) {
      if($this->my_system->gd2_img($link)) {
        $img_thumb = str_replace('.jpg', '_thumb.jpg',$link);
      }

      $img = array(
        'img_link' => $link,
        'img_link_thumb' => $img_thumb,
        'trouble_obj_id' => $trouble_obj_id,
        'trouble_obj_sub_id' => $sub_trouble_obj_id ,
        'user_id' =>  $this->info->data->user_id
      );

      $list_img = $this->Sdb_trouble_obj_img_model->add_trouble_obj_img($img);
      if(!$list_img) {
        $this->set_response('', 500, "errro inssert img",TRUE); 
        die();           
      }
    }
    
  }else{
    $this->set_response('', 400, " not fount FILES",TRUE); 
    die();       
  }

  $this->set_response('', REST_Controller::HTTP_OK, " add trouble success",TRUE);      
}


// comment ----------------------

   public function comment_post() {

    $trouble_obj_comment =  $this->_post('trouble_obj_comment');
    $trouble_obj_id  =  $this->_post('trouble_obj_id');
    $params = [
      'user_id' => $this->info->data->user_id,
      'user_group_id' => $this->info->data->user_group_id,
      'trouble_obj_id' => $trouble_obj_id,
      'trouble_obj_comment' => $trouble_obj_comment
    ];
    $code = $this->Sdb_trouble_obj_model->add_trouble_obj_comment($params);
    
    if($code) {
     $this->set_response('', REST_Controller::HTTP_OK, " add comment trouble success",TRUE);     
   }else {
    $this->set_response('', 500, " add comment trouble failed",FALSE);     
  }


}
  
public function comment_get($trouble_obj_id = 0, $limit = 5, $offset = 0) {
  $params['limit'] = $limit;
  $params['offset'] = $offset;
  $res = $this->Sdb_trouble_obj_model->get_trouble_obj_comment($trouble_obj_id,$params);
  
  $this->set_response($res, REST_Controller::HTTP_OK, " get comment trouble success",TRUE);     
}

}