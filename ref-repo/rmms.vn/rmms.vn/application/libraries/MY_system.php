<?php 



class My_system 
{
	

	protected $CI;

	public function __construct()
	{
		$this->CI =& get_instance();
	}

	public function alert($content = '',$status = 'success') {
		$temp = '
		<div class="alert alert alert-'.$status.' alert-dismissible">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
		'.$content.'
		</div>
		';
		$this->CI->session->set_flashdata('alert', $temp);
	}

	function gd2_img($link, $width = '130',$height='90')
	{
		$this->CI->load->library('image_lib');
		$config['image_library'] = 'gd2';
		$config['source_image'] = $link;
		$config['create_thumb'] = TRUE;
		$config['maintain_ratio'] = TRUE;
		$config['width']     = $width;
		$config['height']   = $height;

		$this->CI->image_lib->clear();
		$this->CI->image_lib->initialize($config);
		$this->CI->image_lib->resize();
		return $this->CI->image_lib->resize();

	}
	public function geo_location($lat ='',$long='')
	{
		$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL, "https://maps.googleapis.com/maps/api/geocode/json?latlng=".$lat.",".$long."&key=AIzaSyB7SkMn4g-xAtNBiaHlHQerWPFI68mwVqk");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

		$headers = array();
		$headers[] = 'Authority: maps.googleapis.com';
		$headers[] = 'Pragma: no-cache';
		$headers[] = 'Cache-Control: no-cache';
		$headers[] = 'Upgrade-Insecure-Requests: 1';
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

		$result = curl_exec($ch);
		if (curl_errno($ch)) {
			echo 'Error:' . curl_error($ch);
		}
		curl_close($ch);
	}

	function upload_img($img_file, $path ='./uploads/stations', $path_file = 'uploads/stations/')
	{
		$config['upload_path']          = $path;
		$config['allowed_types']        = 'gif|jpg|png';
		$config['max_size']             = 1024;

		$this->CI->load->library('upload', $config);
		if ( ! $this->CI->upload->do_upload($img_file)) {
			$error = array('error' => $this->CI->upload->display_errors());
			return ['status' => false , 'message'=> $error,'path_img'=>''];
		} else {
			return  ['status' => true , 'message'=>'upload success','path_img'=> array($path_file.$this->CI->upload->data()['file_name']) ] ;
		}
	}


	function upload_exec($img_file, $path ='', $path_file = '')
	{
		$config['upload_path']          = $path;
		$config['allowed_types']        = 'xlsx';
		$config['max_size']             = 1024;

		$this->CI->load->library('upload', $config);
		if ( ! $this->CI->upload->do_upload($img_file)) {
			
			return ['status' => false , 'message'=> $this->CI->upload->display_errors(),'path_file'=>''];
		} else {
			$link_file = $path_file.$this->CI->upload->data()['file_name'];
			return  [
				'status' => true ,
				'message'=>'upload success',
				'path_file'=> $link_file
				] ;
			}
		}




		function  upload_mutil_img($file_names,$path,$path_file = 'uploads/stations/',$max = 1)
		{
			$img_list = [];
			if(!is_array($_FILES[$file_names]['name'])) {

				return $this->upload_img($file_names,$path,$path_file);

			}

			$count = count($_FILES[$file_names]['name']);

			for($i=0;$i<$count;$i++){
				if($i == $max) break;
				if(!empty($_FILES[$file_names]['name'][$i])){

					$_FILES['file']['name'] = $_FILES[$file_names]['name'][$i];
					$_FILES['file']['type'] = $_FILES[$file_names]['type'][$i];
					$_FILES['file']['tmp_name'] = $_FILES[$file_names]['tmp_name'][$i];
					$_FILES['file']['error'] = $_FILES[$file_names]['error'][$i];
					$_FILES['file']['size'] = $_FILES[$file_names]['size'][$i];

					$config['upload_path'] = $path; 
					$config['allowed_types'] = 'gif|jpg|png';
					$config['max_size'] = '1000';
					$config['file_name'] = $_FILES[$file_names]['name'][$i];

					$this->CI->load->library('upload',$config); 

					if(!$this->CI->upload->do_upload('file')){
						$error = array('error' => $this->CI->upload->display_errors());
						return ['status' => false , 'message'=> $error,'path_img'=>''];
					}
					$img_list[] = $path_file.$this->CI->upload->data()['file_name'];
				}

			}
			return array('status' => true, 'message'=>"uplaod success", "path_img" =>  $img_list);
		}


		function build_query_json($field_name_arr,$as_field){
			$query_con = '';

			foreach ($field_name_arr as  $key => $file_name) {
				$end = count($field_name_arr) -1 ;
				if($end == $key) {
					$query_con.= <<<TEXT
					"$file_name" :"',$file_name,'"
TEXT;
				}else {
					$query_con.= <<<TEXT
					"$file_name" :"',$file_name,'",
TEXT;
				}

			}

			$query_con = <<<TEXT
			CONCAT('[',GROUP_CONCAT( DISTINCT CONCAT('{ $query_con }')),']') as $as_field
TEXT;
			return $query_con;
		}


		function  eval_($ma)
		{
			if(preg_match('/(\d+)(?:\s*)([\+\-\*\/])(?:\s*)(\d+)/', $ma, $matches) !== FALSE){
				$operator = $matches[2];

				switch($operator){
					case '+':
					$p = $matches[1] + $matches[3];
					break;
					case '-':
					$p = $matches[1] - $matches[3];
					break;
					case '*':
					$p = $matches[1] * $matches[3];
					break;
					case '/':
					$p = $matches[1] / $matches[3];
					break;
					default:
					$p = NULL;
					break;
				}

				return $p;
			}
		}


		
	}
