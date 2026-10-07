<?php

class Checkin_distance extends API_Controller {
	public $info;


	public function __construct() {
		parent::__construct();
		$this->info = $this->is_login();
		$this->load->model('Sdb_checkin_distance_model');
	}

	public function index_get()
	{
		if( $this->info->data->user_type_level == 5) {
			
			$where = array(
				'sdb_c_distance_u_group.user_group_id'=> $this->info->data->user_group_id
			);
			$list_checkin_distances = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance_by_where([],$where);

			/** @var  $array */
			$array = [];
			foreach ($list_checkin_distances as $key => $value) {
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
			
			$this->set_response($array, REST_Controller::HTTP_OK, "success");
			// $checkin_distances = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance_by_history($this->info->data->user_group_id , array());
			// $list_format = '';
			// foreach ($checkin_distances as $key => $value) {
			// 	// var_dump($value['checkin_status_id']);
			// 	if($value['checkin_status_id'] == null) {
			// 		$checkin_distances[$key]['checkin_status_name'] = 'Chưa checkin';
			// 		$checkin_distances[$key]['checkin_status_id'] = 1;
			// 	}
			// 	$list_format = $checkin_distances;
			// }
			
			// $this->set_response($list_format, REST_Controller::HTTP_OK, "success");
		}else {
			$params = array();
			$list_checkin_distances = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance_by_where($params);

			$array = [];
			foreach ($list_checkin_distances as $key => $value) {
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
			$this->set_response($array, REST_Controller::HTTP_OK, "success");
		}

	}

	/**
	 * Description
	 * @param type $checkin_distance 
	 * @return type
	 */
	public function points_by_distance_get($checkin_distance = 0)
	{
		if( $this->info->data->user_type_level !== 5) {

			$checkin_distances = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance_by_id($checkin_distance , array());
			$list_format = '';
			foreach ($checkin_distances as $key => $value) {
				if($value['checkin_status_id'] == null) {
					$checkin_distances[$key]['checkin_status_name'] = 'Chưa checkin';
					$checkin_distances[$key]['checkin_status_id'] = 1;
				}
				$list_format = $checkin_distances;
			}
			
			$this->set_response($list_format, REST_Controller::HTTP_OK, "success");
		}else {

			$checkin_distances = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance_by_id($checkin_distance , array());
			$list_format = '';
			foreach ($checkin_distances as $key => $value) {
				if($value['checkin_status_id'] == null) {
					$checkin_distances[$key]['checkin_status_name'] = 'Chưa checkin';
					$checkin_distances[$key]['checkin_status_id'] = 1;
				}
				$list_format = $checkin_distances;
			}
			
			$this->set_response($list_format, REST_Controller::HTTP_OK, "success");
		}

	}

	
	
	public function list_checkin_by_distance_get($checkin_distance_id = 0)
	{
		$checkin_distances = $this->Sdb_checkin_distance_model->list_checkin_by_distance_get($this->info->data->user_group_id , $checkin_distance_id);
		$list_format = '';
		foreach ($checkin_distances as $key => $value) {
			if($value['checkin_status_id'] == null) {
				$checkin_distances[$key]['checkin_status_name'] = 'Chưa checkin';
				$checkin_distances[$key]['checkin_status_id'] = 1;
			}
			$list_format = $checkin_distances;
		}

		$this->set_response($list_format, REST_Controller::HTTP_OK, "success");
	}
}
