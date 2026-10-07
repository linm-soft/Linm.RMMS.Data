
<?php

class Sdb_task extends Admin_Controller{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Sdb_task_model');
        $this->load->model('Sdb_user_model');
        $this->load->model('Sdb_user_group_model');
        $this->load->model('Sdb_task_type_model');
        $this->load->model('Sdb_location_model');
        $this->load->model('Sdb_distance_model');
        $this->load->model('Sdb_trouble_obj_model');
        $this->load->model('Sdb_task_status_model');
    } 

    function index()
    {
        $params['limit'] = RECORDS_PER_PAGE; 
        $params['offset'] = ($this->input->get('per_page')) ? $this->input->get('per_page') : 0;
        $config = $this->config->item('pagination');
        $config['base_url'] = site_url('sdb_task/index?');
        $config['total_rows'] = $this->Sdb_task_model->get_all_sdb_task_count();
        $this->pagination->initialize($config);
        if(USER_LEVEL > 1) {
            $data['sdb_task_1'] = $this->Sdb_task_model->get_all_sdb_task_by_status($params,array(1)
                , array('user_id_receive' =>USER_ID )
            );
            
            $data['sdb_task_2'] = $this->Sdb_task_model->get_all_sdb_task_by_status($params,array(2,4,5)
                , array('user_id_receive' =>USER_ID )
            );
            $data['sdb_task_3'] = $this->Sdb_task_model->get_all_sdb_task_by_status($params,array(3)
                , array('user_id_receive' =>USER_ID )
            );  

        }else {
            $data['sdb_task_1'] = $this->Sdb_task_model->get_all_sdb_task_by_status($params,array(1));
            
            $data['sdb_task_2'] = $this->Sdb_task_model->get_all_sdb_task_by_status($params,array(2,4,5));
            $data['sdb_task_3'] = $this->Sdb_task_model->get_all_sdb_task_by_status($params,array(3));    

        }

        $data['_view'] = 'sdb_task/index';
        $this->load->view('layouts/main',$data);
    }

    function add()
    {   
        $this->load->library('form_validation');

        $this->form_validation->set_rules('task_name','Tên công việc','required|max_length[200]');
        $this->form_validation->set_rules('user_id_receive','Cán bộ','required|integer');
        $this->form_validation->set_rules('user_receive_group_id','Tổ','required|integer');
        $this->form_validation->set_rules('task_type_id','Loại công việc','required|integer');
        $this->form_validation->set_rules('location_id','Địa bàn','required');
        $this->form_validation->set_rules('distance_id','Tuyến đường','required');

        $trouble_obj_id = $this->input->post('trouble_obj_id');

        if($this->form_validation->run())     
        {   
            $user_id = $_SESSION['account']['user_id'];
            $params = array(
                'user_id_sender' => $user_id,
                'user_id_receive' => $this->input->post('user_id_receive'),
                'user_receive_group_id' => $this->input->post('user_receive_group_id'),
                'task_type_id' => $this->input->post('task_type_id'),
                'task_name' => $this->input->post('task_name'),
                'task_status_id' => $this->input->post('task_status_id'),
                'task_details' => $this->input->post('task_details'),
                'location_id' => $this->input->post('location_id'),
                'distance_id' => $this->input->post('distance_id'),
                'user_receive_group_id' => $this->input->post('user_receive_group_id'),
                'task_start_time' => $this->input->post('date_start'),
                'task_end_time' => $this->input->post('date_end'),
                'trouble_obj_id' => $trouble_obj_id,
            );

            $sdb_task_id = $this->Sdb_task_model->add_sdb_task($params);

            $trouble_status_id = '';
            if( $this->input->post('task_status_id') == 1) {
                $trouble_status_id = 1;
            } else if($this->input->post('task_status_id') == 3 ) {
                $trouble_status_id = 3;
            }else {
                $trouble_status_id = 2;
            }

            $params = [
                'trouble_status_id' =>    $trouble_status_id
            ];
            $update_code = $this->Sdb_trouble_obj_model->update_sdb_trouble_obj($trouble_obj_id,$params);
            // var_dump($update_code);die;
            if(empty($update_code) || !$sdb_task_id ) {
                $this->my_system->alert('Thao tác thêm lỗi','danger');
                redirect('sdb_trouble/index');    
            }

            $this->my_system->alert('thêm thành công');
            redirect('sdb_trouble/index');

        }else{
            $this->my_system->alert('Thao tác không thành công','danger');
            redirect('sdb_trouble/index');
        }
    }



   function form($trouble_obj_id = 0 )
   { 
       $data['all_Sdb_distancess'] = $this->Sdb_distance_model->get_all_sdb_distance();
       $data['all_sdb_user'] = $this->Sdb_user_model->get_all_sdb_user();
       $data['all_sdb_user_group'] = $this->Sdb_user_group_model->get_all_sdb_user_group();
       $data['all_sdb_task_type'] = $this->Sdb_task_type_model->get_all_sdb_task_type();
       $data['all_sdb_location'] = $this->Sdb_location_model->get_all_sdb_location();
       $data['trouble_obj'] = $this->Sdb_trouble_obj_model->get_trouble_obj_by_id($trouble_obj_id);
       $data['all_task_status'] = $this->Sdb_task_status_model->get_all_sdb_task_status();

       $data['trouble_obj_id'] = $trouble_obj_id;

       $data['_view'] = 'sdb_task/form';
       $this->load->view('layouts/iframe',$data);
   }

   function remove($task_id) {
    $sdb_task = $this->Sdb_task_model->get_sdb_task($task_id);

    if(isset($sdb_task['task_id'])) {
        $this->Sdb_task_model->delete_sdb_task($task_id);
        redirect('sdb_task/index');
    }
    else {
        show_error('The sdb_task you are trying to delete does not exist.');
    }
}

function comment($task_id = 0)
{
    $data['sdb_task'] = $this->Sdb_task_model->get_sdb_task_detail($task_id);
    $data['sdb_list_task_img'] = $this->Sdb_task_model->get_list_task_img($task_id);
    $data['sdb_comment'] = $this->Sdb_task_model->get_sdb_task_comment($task_id);
    $data['_view'] = 'sdb_task/comment';
    $this->load->view('layouts/main',$data);
}

function deatil_($task_id = 0)
{
    $data['sdb_task'] = $this->Sdb_task_model->get_sdb_task_detail($task_id);
    $data['sdb_comment'] = $this->Sdb_task_model->get_sdb_task_comment($task_id);
    $data['_view'] = 'sdb_task/comment';
    $this->load->view('layouts/main',$data);
}

function add_comment() {
    $task_id = $this->input->post('task_id');
    if(empty($this->input->post('task_comment'))) {
       redirect('sdb_task/comment/'.$task_id);
       die;
   }

   $params = array(
     'user_id' => USER_ID,
     'task_comment' => $this->input->post('task_comment'),
     'task_id' => $this->input->post('task_id'),
 );

   $this->load->model('Sdb_task_comment_model');
   $this->Sdb_task_comment_model->add_sdb_task_comment($params);            
   redirect('sdb_task/comment/'.$task_id);
}

    function update_status_2($task_id = 0 ) {
        $params = array(
            'task_status_id'=> 2
        );
        $code = $this->Sdb_task_model->update_sdb_task($task_id,$params); 
        if($code != 0) {
            $this->my_system->alert('Thao tác thành công');
            redirect('sdb_task/'.$task_id);
        }


    }

    function timeline($task_id)
    {
      $data['all_timeline'] = $this->Sdb_task_model->get_task_detail_by_task($task_id);
      // var_dump($data['all_timeline']);
      $data['_view'] = 'sdb_task/timeline';
      $this->load->view('layouts/main',$data);
    }
}
