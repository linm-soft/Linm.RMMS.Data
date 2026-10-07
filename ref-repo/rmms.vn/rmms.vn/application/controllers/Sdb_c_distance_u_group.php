<?php

class Sdb_c_distance_u_group extends Admin_Controller{

    function __construct()
    {
        parent::__construct();
        $this->load->model('Sdb_c_distance_u_group_model');
    } 

    function index()
    {
        $data['sdb_c_distance_u_group'] = $this->Sdb_c_distance_u_group_model->get_all_sdb_c_distance_u_group_distance();
        
        $data['_view'] = 'sdb_c_distance_u_group/index';
        $this->load->view('layouts/main',$data);
    }

    
    public function get_point($checkin_distance = '')
    {
       $res = $this->Sdb_c_distance_u_group_model->get_sdb_checkin_distance_and_point($checkin_distance);
       echo json_encode($res);

   }

   private function load_view()
   {
    $data['list_day'] =$this->config->item( 'list_day');

    $data['list_loop'] = $this->config->item( 'list_loop');
    

    $this->load->model('Sdb_user_group_model');
    $data['all_sdb_user_group'] = $this->Sdb_user_group_model->get_all_sdb_user_group();

    $this->load->model('Sdb_checkin_distance_model');
    $data['all_sdb_checkin_distance'] = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance();

    $data['_view'] = 'sdb_c_distance_u_group/add';
    $this->load->view('layouts/main',$data);
}

function add()
{   
    if(isset($_POST) && count($_POST) > 0)     
    {   
        $params = array(
            'user_group_id' => $this->input->post('user_group_id'),
            'checkin_distance_id' => $this->input->post('checkin_distance_id'),
            'status_id' => 1,
        );

        $sdb_c_distance_u_group_id = $this->Sdb_c_distance_u_group_model->add_sdb_c_distance_u_group($params);
        
        if($sdb_c_distance_u_group_id) {
            $this->my_system->alert("Thao tác thành công");
        }

        redirect($this->uri->uri_string());

    }
    else
    {
        $this->load_view();
    }
}  

function edit($c_distance_u_group_id)
{   
        // check if the sdb_c_distance_u_group exists before trying to edit it
    $data['sdb_c_distance_u_group'] = $this->Sdb_c_distance_u_group_model->get_sdb_c_distance_u_group($c_distance_u_group_id);
    
    if(isset($data['sdb_c_distance_u_group']['c_distance_u_group_id']))
    {
        if(isset($_POST) && count($_POST) > 0)     
        {   
            $params = array(
                'user_group_id' => $this->input->post('user_group_id'),
                'checkin_distance_id' => $this->input->post('checkin_distance_id'),
                'status_id' => 1,
            );

            $code = $this->Sdb_c_distance_u_group_model->update_sdb_c_distance_u_group($u_group_c_distance_id,$params);            
            if($code) {
                $this->my_system->alert("Thao tác thành công");
            }else {
                $this->my_system->alert("Thao tác Thất bại",'danger');
            }

            redirect($this->uri->uri_string());
        }
        else
        {
            $this->load->model('Sdb_user_group_model');
            $data['all_sdb_user_group'] = $this->Sdb_user_group_model->get_all_sdb_user_group();

            $this->load->model('Sdb_checkin_distance_model');
            $data['all_sdb_checkin_distance'] = $this->Sdb_checkin_distance_model->get_all_sdb_checkin_distance();

            $data['_view'] = 'sdb_c_distance_u_group/edit';
            $this->load->view('layouts/main',$data);
        }
    }
    else
        show_error('The sdb_c_distance_u_group you are trying to edit does not exist.');
} 

function remove($c_distance_u_group_id)
{
    $sdb_c_distance_u_group = $this->Sdb_c_distance_u_group_model->get_sdb_c_distance_u_group($c_distance_u_group_id);
    if(isset($sdb_c_distance_u_group['c_distance_u_group_id']))
    {
        $this->Sdb_c_distance_u_group_model->delete_sdb_c_distance_u_group($c_distance_u_group_id);
        redirect('sdb_c_distance_u_group/index');
    }
    else
        show_error('The sdb_c_distance_u_group you are trying to delete does not exist.');
}


function  get_points_for_setting_checkin($checkin_distance_id = 0)
{
    $this->load->model('sdb_checkin_distance_model');
    $res = $this->sdb_checkin_distance_model->get_point_by_id($checkin_distance_id);
    $this->api_support->set_Reponse($res, 200 );
}


}