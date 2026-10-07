<?php

class Distance extends API_Controller {

  public function __construct() {
   parent::__construct();
   $this->info = $this->is_login();
   $this->load->model('Sdb_distance_model');
   $this->load->model('Sdb_checkin_distance_model');
   $this->load->database();
   $this->info = $this->is_login();
 }

/**
 * Description
 * @param type $location_id 
 * @return type
 */
 public function index_get($location_id = 0)
 {
  $distances = $this->Sdb_distance_model->get_all_sdb_distance_by_location($location_id);
  // var_dump($distances);
  $array = [];
  foreach ($distances as $key => $value) {
      $ele = array();
      $ele = $value;
      $start = json_decode($value['point_start_json']);
      $ele['point_lng_start'] = $start->lng;
      $ele['point_lat_start'] = $start->lat;

      $end = json_decode($value['point_end_json']);
      $ele['point_lng_end'] = $end->lng;
      $ele['point_lat_end'] = $end->lat;
      
      $array[] = $ele;
  }

  $this->set_response($array, REST_Controller::HTTP_OK, " success");      

}

 public function list_get()
 {
  $distances = $this->Sdb_distance_model->get_all_sdb_distance();
  // var_dump($distances);
  $array = [];
  foreach ($distances as $key => $value) {
      $ele = array();
      $ele = $value;
      $start = json_decode($value['point_start_json']);
      $ele['point_lng_start'] = $start->lng;
      $ele['point_lat_start'] = $start->lat;

      $end = json_decode($value['point_end_json']);
      $ele['point_lng_end'] = $end->lng;
      $ele['point_lat_end'] = $end->lat;
      
      $array[] = $ele;
  }

  $this->set_response($array, REST_Controller::HTTP_OK, " success");      

}



 public function checkin_distance_get($distance_id =0 )
 {

  $distances = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance_by_distance($distance_id);
  $this->set_response( $distances, REST_Controller::HTTP_OK, " success");      

}



}