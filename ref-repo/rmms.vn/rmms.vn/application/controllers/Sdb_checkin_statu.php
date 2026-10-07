<?php

class Sdb_checkin_statu extends Admin_Controller{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Sdb_checkin_statu_model');
    } 


    function index()
    {
        $data['sdb_checkin_status'] = $this->Sdb_checkin_statu_model->get_all_sdb_checkin_status();
        
        $data['_view'] = 'sdb_checkin_statu/index';
        $this->load->view('layouts/main',$data);
    }

    function add()
    {   
        $this->load->library('form_validation');

        $this->form_validation->set_rules('checkin_status_name','Checkin Status Name','required|max_length[100]');
        
        if($this->form_validation->run())     
        {   
            $params = array(
                'checkin_status_name' => $this->input->post('checkin_status_name'),
                'checkin_status_active' => 1,
            );
            
            $sdb_checkin_statu_id = $this->Sdb_checkin_statu_model->add_sdb_checkin_statu($params);
            redirect('sdb_checkin_statu/index');
        }
        else
        {            
            $data['_view'] = 'sdb_checkin_statu/add';
            $this->load->view('layouts/main',$data);
        }
    }  


    function edit($checkin_status_id)
    {   
        // check if the sdb_checkin_statu exists before trying to edit it
        $data['sdb_checkin_statu'] = $this->Sdb_checkin_statu_model->get_sdb_checkin_statu($checkin_status_id);
        
        if(isset($data['sdb_checkin_statu']['checkin_status_id']))
        {
            $this->load->library('form_validation');

            $this->form_validation->set_rules('checkin_status_name','Checkin Status Name','required|max_length[100]');
			// $this->form_validation->set_rules('checkin_status_active','Checkin Status Active','required');
            
            if($this->form_validation->run())     
            {   
                $params = array(
                   'checkin_status_name' => $this->input->post('checkin_status_name'),
                   'checkin_status_active' => 1,
               );

                $this->Sdb_checkin_statu_model->update_sdb_checkin_statu($checkin_status_id,$params);            
                redirect('sdb_checkin_statu/index');
            }
            else
            {
                $data['_view'] = 'sdb_checkin_statu/edit';
                $this->load->view('layouts/main',$data);
            }
        }
        else
            show_error('The sdb_checkin_statu you are trying to edit does not exist.');
    } 

    /*
     * Deleting sdb_checkin_statu
     */
    function remove($checkin_status_id)
    {
        $sdb_checkin_statu = $this->Sdb_checkin_statu_model->get_sdb_checkin_statu($checkin_status_id);

        // check if the sdb_checkin_statu exists before trying to delete it
        if(isset($sdb_checkin_statu['checkin_status_id']))
        {
            $this->Sdb_checkin_statu_model->delete_sdb_checkin_statu($checkin_status_id);
            redirect('sdb_checkin_statu/index');
        }
        else
            show_error('The sdb_checkin_statu you are trying to delete does not exist.');
    }
    
}
