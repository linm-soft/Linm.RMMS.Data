<?php

class Sdb_checkin_distance extends Admin_Controller{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Sdb_checkin_distance_model');
        $this->load->model('Sdb_c_distance_c_checkin_model');
        $this->load->model('Sdb_location_model');
        $this->load->model('Sdb_distance_model');
        $this->load->model('Sdb_user_group_model');
        $this->load->model('Sdb_station_model');
    } 

 
    function index()
    {
        $params['limit'] = RECORDS_PER_PAGE; 
        $params['offset'] = ($this->input->get('per_page')) ? $this->input->get('per_page') : 0;
        
        $config = $this->config->item('pagination');
        $config['base_url'] = site_url('sdb_checkin_distance/index?');
        $config['total_rows'] = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance_count();
        $this->pagination->initialize($config);

        $data['sdb_checkin_distance'] = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance($params);
        
        $data['_view'] = 'sdb_checkin_distance/index';
        $this->load->view('layouts/main',$data);
    }

    
    function add()
    {   
        $this->load->library('form_validation');
        $this->form_validation->set_rules('location_id','Location Id','required|integer');
        if($this->form_validation->run()){
          $params = array(
            'checkin_distance_active' => 1,
            'checkin_distance_name' => $this->input->post('checkin_distance_name'),
            'distance_id' => $this->input->post('distance_id'),
            'location_id' => $this->input->post('location_id'),
        );

          $checkin_distance_id = $this->Sdb_checkin_distance_model->add_sdb_checkin_distance($params);

          $list_point = json_decode($this->input->post('checkin_distance_list_point'));
          $parrams_point = [];

          if(is_array($list_point)) {
            foreach ($list_point as $key) {
                $params_point = array(
                    'checkin_distance_id' => $checkin_distance_id,
                    'c_distance_c_checkin_location' => $key->name,
                    'c_distance_c_checkin_lat' => $key->lat,
                    'c_distance_c_checkin_long' => $key->lng,
                );
                $this->Sdb_c_distance_c_checkin_model->add_sdb_c_distance_c_checkin($params_point);
            }
        }

        redirect('sdb_checkin_distance/index');


    } else {

       $data['all_sdb_location'] = $this->Sdb_location_model->get_all_sdb_location();

       $data['all_sdb_distance'] = $this->Sdb_distance_model->get_all_sdb_distance();
       $data['all_sdb_stations'] = $this->Sdb_station_model->get_all_sdb_stations();

       $data['_view'] = 'sdb_checkin_distance/add';
       $this->load->view('layouts/main',$data);
   }
}  



function edit($checkin_distance_id)
{   

    $data['sdb_checkin_distance'] = $this->Sdb_checkin_distance_model->get_sdb_checkin_distance($checkin_distance_id);

    $data['list_point_checkin'] = $this->Sdb_c_distance_c_checkin_model->get_all_sdb_c_distance_c_checkin_by($checkin_distance_id);

    if(isset($data['sdb_checkin_distance']['checkin_distance_id']))
    {
        $this->load->library('form_validation');

        $this->form_validation->set_rules('checkin_distance_name','Checkin Distance Name','required');

        if($this->form_validation->run())     
        {   
            $params = array(
             'checkin_distance_active' => $this->input->post('checkin_distance_active'),
             'checkin_distance_name' => $this->input->post('checkin_distance_name'),
             'location_id' => $this->input->post('location_id'),
                 // 'checkin_distance_start_location' => $this->input->post('checkin_distance_start_location'),
                 // 'checkin_distance_end_location' => $this->input->post('checkin_distance_end_location'),
                 // 'checkin_distance_start_lat' => $this->input->post('checkin_distance_start_lat'),
                 // 'checkin_distance_start_long' => $this->input->post('checkin_distance_start_long'),
                 // 'checkin_distance_end_lat' => $this->input->post('checkin_distance_end_lat'),
                 // 'checkin_distance_long' => $this->input->post('checkin_distance_long'),
         );

            $this->Sdb_checkin_distance_model->update_sdb_checkin_distance($checkin_distance_id,$params); 

                // update for list point  
            $list_point = json_decode($this->input->post('checkin_distance_list_point'));

            $parrams_point = [];

            if(is_array($list_point)) {
                    //rm list
                $this->Sdb_c_distance_c_checkin_model->delete_sdb_c_distance_c_checkin_by($checkin_distance_id);

                foreach ($list_point as $key) {
                    $params_point = array(
                        'checkin_distance_id' => $checkin_distance_id,
                        'c_distance_c_checkin_location' => $key->name,
                        'c_distance_c_checkin_lat' => $key->lat,
                        'c_distance_c_checkin_long' => $key->lng,

                    );

                        // insert lisst
                    $this->Sdb_c_distance_c_checkin_model->add_sdb_c_distance_c_checkin($params_point);
                }
            }

            redirect('sdb_checkin_distance/index');
        }
        else
        {

         $data['all_location'] = $this->Sdb_location_model->get_all_sdb_location(); 
         $data['all_user_group'] = $this->Sdb_user_group_model->get_all_sdb_user_group(); 
         $data['_view'] = 'sdb_checkin_distance/edit';
         $this->load->view('layouts/main',$data);
     }
 }
 else
    show_error('The checkin_distance you are trying to edit does not exist.');
} 


function remove($checkin_distance_id)
{
    $sdb_checkin_distance = $this->Sdb_checkin_distance_model->get_sdb_checkin_distance($checkin_distance_id);

        // check if the sdb_checkin_distance exists before trying to delete it
    if(isset($sdb_checkin_distance['checkin_distance_id']))
    {
        $this->Sdb_checkin_distance_model->delete_sdb_checkin_distance($checkin_distance_id);
        redirect('sdb_checkin_distance/index');
    }
    else
        show_error('The sdb_checkin_distance you are trying to delete does not exist.');
}

}
