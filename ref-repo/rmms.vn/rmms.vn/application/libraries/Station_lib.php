<?php 


class Station_lib 
{
	

	protected $CI;

	public function __construct()
	{
		$this->CI =& get_instance();
		$this->CI->load->model('Sdb_station_model');
	}
	// read exec for import data infrastructure
	function get_station_number($km_text)
	{
		 $val = str_replace('Km', '1000*', $km_text);
     	 $station_number = $this->my_system->eval_($val);
     	 return $station_number;
	}

	
	function get_station($station = '')
	{

		preg_match_all("/\d+/",$station , $math);
		
		if(is_numeric($math[0][0]) && is_numeric($math[0][1]))
			return ['station_origin' => $math[0][0], 'distance_from_station' => $math[0][1]];
		return ['station_origin' => null, 'distance_from_station' => null];
	}
}







?>