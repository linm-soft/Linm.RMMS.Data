<?php

class Checkin extends API_Controller {
	public $info;
	public function __construct() {
		parent::__construct();
		$this->info = $this->is_login();
		$this->load->model('Sdb_checkin_history_model');
	}


	public function create_post() {
		$user_group_id = $this->info->data->user_group_id;
		$user_id = $this->info->data->user_id;
		$checkin_time = date('Y-m-d H:i');
		$checkin_distance_id = $this->_post('checkin_distance_id');
		$checkin_history_lat = $this->_post('checkin_history_lat');
		$checkin_history_long = $this->_post('checkin_history_long');
		$checkin_history_location = $this->_post('checkin_history_location');
		$checkin_history_comment = $this->_post('checkin_history_comment',0);
		$station_id = $this->_post('station_id',0);
		$checkin_status_id = empty($this->_post('checkin_status_id',0)) ? 2 : $this->_post('checkin_status_id',0);

		if( $this->info->data->user_type_level == 5) {
			$params = array(
				'user_group_id'=> $user_group_id,
				'user_id'=> $user_id,
				'checkin_time'=> $checkin_time,
				'checkin_distance_id'=> $checkin_distance_id,
				'checkin_status_id'=> $checkin_status_id,
				'checkin_history_lat'=> $checkin_history_lat,
				'checkin_history_long'=> $checkin_history_long,
				'checkin_history_location'=> $checkin_history_location,
				'station_id'=> $station_id,
				'checkin_history_comment'=> empty($checkin_history_comment) ? '' : $checkin_history_comment,
			);

			$list_img = $this->update_img_check('checkin_img', './uploads/checkins','uploads/checkins/');
			if($list_img){
				$params['checkin_history_img'] = $list_img['path_img_upload'];
				$params['checkin_history_img_thumb'] = $list_img['img_thumb'];
			}


			$code = $this->Sdb_checkin_history_model->add_sdb_checkin_history($params);

			if($code) {
				$this->set_response('', 200, "checkin success ");	
			}else {
				$this->set_response('', 500, "checkin success ");	
			}
		}else {
			$this->set_response('', 403, "user type failed",false);
		}
		

	}

	public function index_post() {
		$user_group_id = $this->info->data->user_group_id;
		$user_id = $this->info->data->user_id;
		$checkin_time = date('Y-m-d H:i');
		$checkin_distance_id = $this->_post('checkin_distance_id');
		$c_distance_u_group_id = $this->_post('c_distance_u_group_id');
		$checkin_history_lat = $this->_post('checkin_history_lat');
		$checkin_history_long = $this->_post('checkin_history_long');
		$c_distance_c_checkin_id = $this->_post('c_distance_c_checkin_id');
		$checkin_history_location = $this->_post('checkin_history_location');
		$checkin_history_comment = $this->_post('checkin_history_comment',0);
		$checkin_status_id = empty($this->_post('checkin_status_id',0)) ? 2 : $this->_post('checkin_status_id',0) ;

		if( $this->info->data->user_type_level == 5) {
			$params = array(
				'user_group_id'=> $user_group_id,
				'user_id'=> $user_id,
				'checkin_time'=> $checkin_time,
				'checkin_distance_id'=> $checkin_distance_id,
				'c_distance_u_group_id'=> $c_distance_u_group_id,
				'checkin_status_id'=> $checkin_status_id,
				'checkin_history_lat'=> $checkin_history_lat,
				'checkin_history_long'=> $checkin_history_long,
				'checkin_history_location'=> $checkin_history_location,
				'c_distance_c_checkin_id'=> $c_distance_c_checkin_id,
				'checkin_history_comment'=> empty($checkin_history_comment) ? '' : $checkin_history_comment,
			);

			$list_img = $this->update_img_check('checkin_img', './uploads/checkins','uploads/checkins/');

			if($list_img){
				$params['checkin_history_img'] = $list_img['path_img_upload'];
				$params['checkin_history_img_thumb'] = $list_img['img_thumb'];
			}
			
			$code = $this->Sdb_checkin_history_model->add_sdb_checkin_history($params);

			if($code) {
				$this->set_response('', 200, "checkin success ");	
			}else {
				$this->set_response('', 500, "checkin error ", false);	
			}
		}else {
			$this->set_response('', 403, "user type failed",false);
		}
	}



	private  function update_img_check($img_name = 'checkin_img', $link = './uploads/checkins', $path = 'uploads/checkins/' )
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

	public function history_get() {
		if( $this->info->data->user_type_level == 5) {
			$res = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history_by_user($this->info->data->user_id);
			$this->set_response($res, REST_Controller::HTTP_OK, "success ");
		}else {
			$res = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history_by_user_sender($this->info->data->user_id);
			$this->set_response($res, REST_Controller::HTTP_OK, "success ");
		}
	}

	public function history_by_checkin_distance_get($checkin_distance_id = 0) {

		if( $this->info->data->user_type_level == 1) {
			$res = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history_by_checkin_distance($checkin_distance_id);
			$this->set_response($res, REST_Controller::HTTP_OK, "success");
		} else {
			$this->set_response('', 403, "falied ");
		}
	}
	
	public function history_by_distance_get($distance_id = 0) {

		if( $this->info->data->user_type_level == 1) {
			$res = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history_by_distance($distance_id);
			$this->set_response($res, REST_Controller::HTTP_OK, "success");
		} else {
			$this->set_response('', 403, "falied ");
		}
	}

	public function history_by_location_get($location_id = 0) {

		if( $this->info->data->user_type_level == 1) {
			$res = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history_by_location($location_id);
			$this->set_response($res, REST_Controller::HTTP_OK, "success");
		} else {
			$this->set_response('', 403, "falied ");
		}
	}

	public function get_detail_checkin_get($checkin_history_id = 0)
	{
		$res = $this->Sdb_checkin_history_model->get_sdb_checkin_history_details($checkin_history_id);
		$this->set_response($res, REST_Controller::HTTP_OK, "success ");

	}

	public function history_new_get($c_distance_c_checkin = 0)
	{
		$res = $this->Sdb_checkin_history_model->get_sdb_checkin_history_details_new($c_distance_c_checkin);
		$this->set_response($res, REST_Controller::HTTP_OK, "success ");

	}

	public function sendToMultiple()
	{
        $token = array('Registratin_id1', 'Registratin_id2'); // array of push tokens
        $message = "Test notification message";

        $this->load->library('fcm');
        $this->fcm->setTitle('Test FCM Notification');
        $this->fcm->setMessage($message);
        $this->fcm->setIsBackground(false);
        $payload = array('notification' => '');
        $this->fcm->setPayload($payload);
        $this->fcm->setImage('https://firebase.google.com/_static/9f55fd91be/images/firebase/lockup.png');
        $json = $this->fcm->getPush();

        /** 
         * Send to multiple
         * 
         * @param array  $token     array of firebase registration ids (push tokens)
         * @param array  $json      return data from getPush() method
         */
        $result = $this->fcm->sendMultiple($token, $json);
    }
}
