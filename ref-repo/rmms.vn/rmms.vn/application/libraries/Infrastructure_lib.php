<?php 

use Ddeboer\DataImport\Reader\ExcelReader;


class Infrastructure_lib 
{
	

	protected $CI;

	public function __construct()
	{
		$this->CI =& get_instance();
		
	}
	// read exec for import data infrastructure
	function read_exec($path_exec = './data_/Cot_km_QL7.xlsx', $number_start = 10)
	{
		
		if(!file_exists($path_exec)) {
			$this->CI->my_system->alert('Không tim thấy file');
		}

		$file = new \SplFileObject($path_exec);
		$reader = new ExcelReader($file,$number_start);
		return $reader;
	}


	
	public function import_file_by_category(
		$infrastructures_category_id,
		$exec_data,
		$distance_info,
		$location_id,
		$distance_id
	) {

		$arr_param = [];
		$arr_station = [];
		$i = 0;
		foreach ($exec_data as  $ec_data) {
			// kiem tra xem co dung template ko
			if ($i == 0) {
				if (!isset($ec_data['ly_trinh'])) {
					$this->CI->my_system->alert('Mẫu không đúng định dạng, lỗi nguy hiêm', 'danger');
					redirect($this->CI->uri->uri_string());
				}
			}

			if (is_null($ec_data['ly_trinh'])) {
				continue;
			}
			//get station
			$station = $this->CI->station_lib->get_station($ec_data['ly_trinh']);
			// import km
			$km_name = $ec_data['ten_cot_km'];
			$station_name = $distance_info['distance_name'] . "-" . $ec_data['ly_trinh'];
			$lng = $ec_data['kinh_do'];
			$lat = $ec_data['vi_do'];

			// tao obj theo loai tai san
			$obj = $this->CI->Sdb_infrastructures_category_model->get_sdb_infrastructures_category_obj_by_infrastructures($infrastructures_category_id);
			$arr = [];


			foreach ($obj as $value) {
				$key_ = $value['infrastructures_category_obj_name'];
				$arr[$key_] = $ec_data[$key_];
			}
			if (count($arr) == 0) {
				$this->CI->my_system->alert('không tạo đc mẫu tài sản', 'danger');
				redirect($this->CI->uri->uri_string());
			}

			$infrastructure_obj_data = json_encode($arr);

			// dugn the insatrt 1 lan
			$station_params = [
				'location_id' => $location_id,
				'distance_id' => $distance_id,
				'station_name' => $station_name,
				'station_lat' => $lat,
				'station_lng' => $lng,
				'station_number' => $station['station_origin'],
				'user_id' => USER_ID,
				'station_modified' => date('Y-m-d H:i'),

			];
			$arr_station[] =   $station_params;

			//param add for tai san
			$params = array(
				'location_id' => $location_id,
				'distance_id' => $distance_id,
				'station_name' => $station_name,
				'station_origin' => $station['station_origin'],
				'distance_from_station' => $station['distance_from_station'],
				'distance_id' => $distance_id,
				'infrastructure_name' => $km_name,
				'infrastructure_obj_data' => $infrastructure_obj_data,
				'infrastructure_lat' => $lat,
				'infrastructure_lng' => $lng,
				'infrastructures_category_id' => $infrastructures_category_id,
				'infrastructure_modified' => date('Y-m-d H:i'),
				'user_id' => USER_ID
			);
			$arr_param[] = $params;
			++$i;
		}
		$code_station  = $this->CI->Sdb_station_model->add_sdb_stations_one_time($arr_station);
		if (!$code_station) $this->CI->my_system->alert('Thêm lý trình lỗi', 'danger');

		$code  = $this->CI->Sdb_infrastructure_model->add_sdb_infrastructure_one_time($arr_param);
		$status = true;
		if (!$code) $status = false;
		return [
			'inser_count' => $i,
			'status' => $status
		];
	}
	
}







?>