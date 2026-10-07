<?php
class Dashboard extends Admin_Controller{
    function __construct()
    {
        parent::__construct();
         $this->load->model('Sdb_distance_model');
         $this->load->model('Sdb_station_model');
         $this->load->model('Sdb_trouble_obj_model');
         $this->load->model('Sdb_user_model');
         $this->load->model('Sdb_location_model');
         $this->load->model('Sdb_infrastructure_model');
         $this->user_id = $_SESSION['account']['user_id'];
         $this->user_level = $_SESSION['account']['user_type_level'];
    }

    private  function get_view(){
    	$data['_view'] = 'dashboard';
        $data['infrastructure_number'] = $this->Sdb_infrastructure_model->get_sdb_infrastructure_count();
        $data['distance_number'] = $this->Sdb_distance_model->get_all_sdb_distance_count();
        $data['station_number'] = $this->Sdb_station_model->get_all_sdb_stations_count();
        $data['trouble_number'] = $this->Sdb_trouble_obj_model->get_all_sdb_trouble_obj_count();
        $data['all_sdb_location'] = $this->Sdb_location_model->get_all_sdb_location();
        $trouble_param = array('limit'=> 5, 'offset'=>0);
        $data['user_number'] = $this->Sdb_user_model->get_all_sdb_user_count();
        return $data ; 	
    }
    function index()
    {
        $data = $this->get_view();
        // $this->my_system->alert('thành công');
        $this->load->view('layouts/main',$data);
    }


}
