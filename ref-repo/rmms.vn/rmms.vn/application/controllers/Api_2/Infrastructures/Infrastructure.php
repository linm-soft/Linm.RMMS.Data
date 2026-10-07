<?php

class Infrastructure extends API_Controller {

	public function __construct() {
		parent::__construct();
		$this->info = $this->is_login();
		$this->load->model('Sdb_infrastructure_model');
		$this->load->model('Sdb_infrastructures_category_model');
		$this->load->model('Sdb_infrastructure_modified_history_model');
		$this->load->library('String_lib');
		$this->load->database();
		$this->info = $this->is_login();
	}

	public function distance_and_category_get($distance_id, $category = 0)
	{

		$infrastructures = $this->Sdb_infrastructure_model->get_all_by_distance_and_category($distance_id, $category);
		
		$this->set_response($infrastructures, REST_Controller::HTTP_OK, " get infrastructure by distance success");      

	}

	public function distance_get($distance_id = 1) {
		$infrastructures = $this->Sdb_infrastructure_model->get_all_sdb_infrastructures_by_distance($distance_id);
		$this->set_response($infrastructures, REST_Controller::HTTP_OK, " get infrastructure by distance success");      
	}
	
	public function location_get($location_id = 1) {
		$infrastructures = $this->Sdb_infrastructure_model->get_all_sdb_infrastructures_by_location($location_id);
		$this->set_response($infrastructures, REST_Controller::HTTP_OK, " get infrastructure by distance success");      
	}

	public function index_get($infrastructure_id = 1) {
		$infrastructures = $this->Sdb_infrastructure_model->get_sdb_infrastructure($infrastructure_id);
		$this->set_response($infrastructures, REST_Controller::HTTP_OK, " get infrastructure success", TRUE);      
	}

	public function list_get($limit = 10, $offset = 0) {
		$params['limit'] = $limit;
		$params['offset'] = $offset;
		$infrastructures = $this->Sdb_infrastructure_model->get_all_sdb_infrastructures($params);
		$this->set_response($infrastructures, REST_Controller::HTTP_OK, " get infrastructure success", TRUE);      
	}


	public function index_post() {

		$infrastructures_category_id =  $this->_post('infrastructures_category_id');

		$obj = $this->Sdb_infrastructures_category_model->get_sdb_infrastructures_category_obj_by_infrastructures($infrastructures_category_id);
		$arr = [];

		foreach($obj as $key => $value) {
			$arr[$value['infrastructures_category_obj_name']] = $this->_post($value['infrastructures_category_obj_name']);
		}

		$infrastructure_obj_data = json_encode($arr);
		$location_id = $this->_post('location_id');
		$distance_id = $this->_post('distance_id');
		$station_id = empty($this->_post('station_id',0)) ? null : $this->_post('station_id');
		$infrastructure_name = $this->_post('infrastructure_name');
		$infrastructure_detail = $this->_post('infrastructure_detail');
		$infrastructure_location = $this->_post('infrastructure_location');
		
		$infrastructure_lat = $this->_post('infrastructure_lat');
		$infrastructure_lng = $this->_post('infrastructure_lng');
		$img_thumb= '';
		$path_img_upload = '';
		
		if(!empty($_FILES)  && $_FILES['infrastructure_img']['name'] !== '') {

			if(is_array($_FILES['infrastructure_img']['name'])){
				
				$file_name = $_FILES['infrastructure_img']['name'][0];
				
				$img_upload = $this->my_system->upload_mutil_img('infrastructure_img','./uploads/infrastructures','uploads/infrastructures/');
				if(!$img_upload['status']) {
					$this->set_response('',415,$img_upload['message']['error']);
					die;
				}    
				
				$img_upload['path_img'] = $img_upload['path_img'][0];

			}else {

				$file_name = $_FILES['infrastructure_img']['name'];
				$img_upload = $this->my_system->upload_img('infrastructure_img','./uploads/infrastructures','uploads/infrastructures/');

				if(!$img_upload['status']) {
					$this->set_response('',415,$img_upload['message']['error']);
					die;
				}    
				
			}

			$path_img_upload = $img_upload['path_img'];
			if($this->my_system->gd2_img($path_img_upload)) {
				$img_thumb = str_replace('.jpg', '_thumb.jpg',$path_img_upload);
			}

		}else {
			$this->set_response('',400,"Filse không lên");
			die;
		}

		$params = array(
			'location_id' => $location_id,
			'distance_id' => $distance_id,
			'station_id' => $station_id,
			'infrastructure_name' => $infrastructure_name,
			'infrastructure_detail' => $infrastructure_detail,
			'infrastructures_category_id' => $infrastructures_category_id,
			'infrastructure_location' => $infrastructure_location,
			'infrastructure_lat' => $infrastructure_lat,
			'infrastructure_lng' => $infrastructure_lng,
			'infrastructure_img' => $path_img_upload,
			'infrastructure_img_thumb' => $img_thumb,
			'infrastructure_obj_data' => $infrastructure_obj_data,
			'user_id' => $this->info->data->user_id,
		);
		

		$rel = $this->Sdb_infrastructure_model->add_sdb_infrastructure($params);
		if($rel) {
			$this->set_response('',200,'add infrastructure success');
		}else {
			$this->set_response('',500,'add infrastructure failed');
		}
	}

	public function update_post()
	{

		$infrastructure_id = $this->_post('infrastructure_id');
		$location_id = $this->_post('location_id');
		$distance_id = $this->_post('distance_id');
		$station_id = empty($this->_post('station_id',0)) ? null : $this->_post('station_id');
		$infrastructure_name = $this->_post('infrastructure_name');
		$infrastructure_detail = $this->_post('infrastructure_detail');
		$infrastructure_location = $this->_post('infrastructure_location');
		$infrastructures_category_id = $this->_post('infrastructures_category_id');
		$infrastructure_lat = $this->_post('infrastructure_lat');
		$infrastructure_lng = $this->_post('infrastructure_lng');
		$infrastructure_status_id = $this->_post('infrastructure_status_id');
		
		$img_thumb= '';
		$path_img_upload = '';

		$params = array(
			'location_id' => $location_id,
			'distance_id' => $distance_id,
			'station_id' => $station_id,
			'infrastructure_name' => $infrastructure_name,
			'infrastructure_detail' => $infrastructure_detail,
			'infrastructures_category_id' => $infrastructures_category_id,
			'infrastructure_location' => $infrastructure_location,
			'infrastructure_lat' => $infrastructure_lat,
			'infrastructure_lng' => $infrastructure_lng,
			'infrastructure_status_id' => $infrastructure_status_id,
		);

		if(!empty($_FILES)  && $_FILES['infrastructure_img']['name'] !== '') {

			if (is_array($_FILES['infrastructure_img']['name'])) {
				
				$file_name = $_FILES['infrastructure_img']['name'][0];
				
				$img_upload = $this->my_system->upload_mutil_img('infrastructure_img','./uploads/infrastructures','uploads/infrastructures/');
				if(!$img_upload['status']) {
					$this->set_response('',415,$img_upload['message']['error']);
					die;
				}    

				$img_upload['path_img'] = $img_upload['path_img'][0];
			}else {

				$file_name = $_FILES['infrastructure_img']['name'];
				$img_upload = $this->my_system->upload_img('infrastructure_img','./uploads/infrastructures','uploads/infrastructures/');

				if(!$img_upload['status']) {
					$this->set_response('',415,$img_upload['message']['error']);
					die;
				}
			}

			$path_img_upload = $img_upload['path_img'];
			if($this->my_system->gd2_img($path_img_upload)) {
				$img_thumb = str_replace('.jpg', '_thumb.jpg',$path_img_upload);
			}
			$params['infrastructure_img'] = $path_img_upload;
			$params['infrastructure_img_thumb'] = $img_thumb;
		}

		

			// check issetget_sdb_station
		$count = $this->Sdb_infrastructure_model->get_sdb_infrastructure($infrastructure_id);

		if(is_null($count)) {
			$this->set_response('',404,'not fount data infrastructure');	
			die();
		}

		$rel = $this->Sdb_infrastructure_model->update_sdb_infrastructure($infrastructure_id,$params);
		if($rel) {
			// insert update history 
			$params = array(
				'user_id' => $this->info->data->user_id,
				'infrastructure_id' => $infrastructure_id
			);
			$ress = $this->Sdb_infrastructure_modified_history_model->add_sdb_infrastructure_modified_history($params);
			if($ress) {
				$this->set_response('',200,'update station success');	
			}else {
				$this->set_response('',500,'update history station failed', FALSE);	
			}
		}else {
			$this->set_response('',500,'update infrastructure failed', FALSE);
		}
	}


	public function import_post() {
		$infrastructure_category_id =  $this->_post('infrastructure_category_id');
		$obj = $this->Sdb_infrastructure_model->create_infrastructure_obj($infrastructure_category_id);
		$arr = [];
		foreach($obj as $key => $value) {
			$arr[$value['infrastructures_category_obj_name']] = $this->_post($value['infrastructures_category_obj_name']);
		}
		$infrastructure_obj_data = json_encode($arr);

		$infrastructures_category_id = $this->_post('infrastructure_category_id');
		$location_id = $this->_post('location_id');
		$distance_id = $this->_post('distance_id');

		$infrastructure_name = $this->_post('infrastructure_name');
		$infrastructure_lat = $this->_post('infrastructure_lat');
		$infrastructure_lng = $this->_post('infrastructure_lng');

		$params = array(
			'location_id' => $location_id,
			'distance_id' => $distance_id,
			'infrastructure_obj_data' => $infrastructure_obj_data,
			'infrastructure_name' => $infrastructure_name,
			'infrastructures_category_id' => $infrastructures_category_id,
			'infrastructure_lat' => $infrastructure_lat,
			'infrastructure_lng' => $infrastructure_lng,
		);

		$rel = $this->Sdb_infrastructure_model->add_sdb_infrastructure($params);
		if($rel) {
			$this->set_response('',200,'add infrastructure success');
		}else {
			$this->set_response('',500,'add infrastructure failed');
		}
	}

	
}