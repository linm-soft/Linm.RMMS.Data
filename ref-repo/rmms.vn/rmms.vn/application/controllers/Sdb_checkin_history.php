<?php


class Sdb_checkin_history extends Admin_Controller{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Sdb_checkin_history_model');
    } 

    /*
     * Listing of sdb_checkin_history
     */
    function index()
    {
     $params['limit'] = RECORDS_PER_PAGE; 
     $params['offset'] = ($this->input->get('per_page')) ? $this->input->get('per_page') : 0;
     $config = $this->config->item('pagination');
     $config['base_url'] = site_url('sdb_checkin_history/index?');


     if(USER_LEVEL == 1 ) {
        $config['total_rows'] = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history_count();
         $this->pagination->initialize($config);

        $data['sdb_checkin_history'] = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history($params);    
    }else {
        $config['total_rows'] = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history_count_by_user(USER_ID);
         $this->pagination->initialize($config);
        $data['sdb_checkin_history'] = $this->Sdb_checkin_history_model->get_all_sdb_checkin_history_by_user(USER_ID,$params);    
    }




    $data['_view'] = 'sdb_checkin_history/index';
    $this->load->view('layouts/main',$data);
}


}
