<?php

class Station extends API_Controller {

	public function __construct() {
		parent::__construct();
		$this->info = $this->is_login();
		$this->load->model('Sdb_station_model');
		$this->load->model('Sdb_station_modified_history_model');
		$this->load->library('String_lib');
		$this->load->database();
		$this->info = $this->is_login();

	}

	public function distance_get($distance_id = 1) {
		$stations = $this->Sdb_station_model->get_all_sdb_stations_by_distance($distance_id);
		$this->set_response($stations, REST_Controller::HTTP_OK, " get station by distance success");      
	}

	public function list_get() {
		$stations = $this->Sdb_station_model->get_all_sdb_stations();
		$this->set_response($stations, REST_Controller::HTTP_OK, " get station by distance success");      
	}


	public function index_get($station_id = 1) {
		$stations = $this->Sdb_station_model->get_sdb_station($station_id);
		$this->set_response($stations, REST_Controller::HTTP_OK, " get station success");      
	}


	public function index_post() {

		$location_id = $this->_post('location_id');
		$distance_id = $this->_post('distance_id');
		$station_name = $this->_post('station_name');
		$station_note = $this->_post('station_note');
		$station_location = $this->_post('station_location');
		$lenght = $this->_post('lenght');
		$width = $this->_post('width',0);
		$start_lat = $this->_post('start_lat');
		$start_long = $this->_post('start_long');
		// $end_lat = $this->_post('end_lat');
		// $end_lng = $this->_post('end_lng');
		$km_start = $this->_post('km_start',0);
		$km_end = $this->_post('km_end',0);

		$list_img = $this->update_img_check('station_img', './uploads/stations','uploads/stations/');

		$params = array(
			'location_id' => $location_id,
			'distance_id' => $distance_id,
			'station_name' => $station_name,
			'station_note' => $station_note,
			'station_location' => $station_location,
			'lenght' => $lenght,
			'width' => $width,
			'user_id' => $this->info->data->user_id,
			'start_lat' => $start_lat,
			'start_long' => $start_long,
			// 'end_lat' => $end_lat,
			// 'end_lng' => $end_lng,
			'km_end' => $km_end,
			'km_start' => $km_start,
		);

		if($list_img) {
			$params['station_img'] = $list_img['path_img_upload'];
			$params['station_img_thumb'] = $list_img['img_thumb'];
		}


		$rel = $this->Sdb_station_model->add_sdb_station($params);
		if($rel) {
			$this->set_response('',200,'add station success');
		}else {
			$this->set_response('',500,'add station failed', FALSE);
		}
	}

	public function update_post() {

		$station_id = empty($this->_post('station_id')) ? 2: $this->_post('station_id');
		$location_id = $this->_post('location_id');
		$distance_id = $this->_post('distance_id');
		$station_name = $this->_post('station_name');
		$station_note = $this->_post('station_note');
		$station_location = $this->_post('station_location');
		$lenght = $this->_post('lenght');
		$width = $this->_post('width');
		$start_lat = $this->_post('start_lat');
		$start_long = $this->_post('start_long');
		// $end_lat = $this->_post('end_lat');
		// $end_lng = $this->_post('end_lng');
		$km_start = $this->_post('km_start');
		$km_end = $this->_post('km_end');
		$station_status_id = $this->_post('station_status_id');

		$list_img = $this->update_img_check('station_img', './uploads/stations','uploads/stations/');
		
		$params = array(
			'location_id' => $location_id,
			'distance_id' => $distance_id,
			'station_name' => $station_name,
			'station_note' => $station_note,
			'station_location' => $station_location,
			'lenght' => $lenght,
			'width' => $width,
			'start_lat' => $start_lat,
			'start_long' => $start_long,
			// 'end_lat' => $end_lat,
			// 'end_lng' => $end_lng,
			'station_status_id' => $station_status_id,
			'km_end' => $km_end,
			'km_start' => $km_start,
		);

		if($list_img){
			$params['station_img'] = $list_img['path_img_upload'];
			$params['station_img_thumb'] = $list_img['img_thumb'];
		}
		// check issetget_sdb_station
		$count = $this->Sdb_station_model->get_sdb_station($station_id);
		if(is_null($count)) {
			$this->set_response('',404,'not fount data station');
			die();
		}

		$rel = $this->Sdb_station_model->update_sdb_station($station_id,$params);
		
		if($rel) {
			// insert update history
			$params = array(
				'user_id' => $this->info->data->user_id,
				'station_id' => $station_id
			);
			$ress = $this->Sdb_station_modified_history_model->add_sdb_station_modified_history($params);
			if($ress) {
				$this->set_response('',200,'update station success');	
			}else {
				$this->set_response('',500,'update history station failed', FALSE);	
			}

		}else {
			$this->set_response('',500,'update station failed', FALSE);
		}
	}

	private  function update_img_check($img_name = 'station_img', $link = './uploads/stations', $path = 'uploads/stations/' )
	{

		if(!empty($_FILES)  && $_FILES[$img_name]['name'] !== '') {

			if (is_array($_FILES[$img_name]['name'])) {
				
				$file_name = $_FILES[$img_name]['name'][0];
				
				$img_upload = $this->my_system->upload_mutil_img($img_name,$link,$path);
				if(!$img_upload['status']) {
					$this->set_response('',415,$img_upload['message']['error']);
					die;
				}    

				$img_upload['path_img'] = $img_upload['path_img'][0];
			}else {

				$file_name = $_FILES[$img_name]['name'];
				$img_upload = $this->my_system->upload_img($img_name,$link,$path);

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
			return false;
		}

		return array(
			'path_img_upload'=>$path_img_upload,
			'img_thumb' => $img_thumb
		);


	}
}