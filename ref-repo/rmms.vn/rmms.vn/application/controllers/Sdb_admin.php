<?php

class Sdb_admin extends Admin_Controller{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Sdb_admin_model');
        $this->load->model('Sdb_user_model');
    } 


    function index()
    {
        $data['sdb_admin'] = $this->Sdb_admin_model->get_all_sdb_admin();
        
        $data['_view'] = 'sdb_admin/index';
        $this->load->view('layouts/main',$data);
    }


    function add()
    {   
        $this->load->library('form_validation');

		$this->form_validation->set_rules('admin_name','Admin Name','required|is_unique[sdb_admin.admin_name]|min_length[6]');
		$this->form_validation->set_rules('admin_pass','Admin Pass','required');
		$this->form_validation->set_rules('user_token','User Token','required');
		
		if($this->form_validation->run())     
        {   
            $params = array(
				'admin_pass' => $this->input->post('admin_pass'),
				'admin_name' => $this->input->post('admin_name'),
				'user_token' => $this->input->post('user_token'),
            );
            
            $sdb_admin_id = $this->Sdb_admin_model->add_sdb_admin($params);
            redirect('sdb_admin/index');
        }
        else
        {            
            $data['_view'] = 'sdb_admin/add';
            $this->load->view('layouts/main',$data);
        }
    }  

    function edit($user_id)
    {   

        $data['sdb_admin'] = $this->Sdb_admin_model->get_sdb_admin($user_id);
        
        if(isset($data['sdb_admin']['user_id']))
        {
            $this->load->library('form_validation');

			$this->form_validation->set_rules('admin_name','Admin Name','required|is_unique[sdb_admin.admin_name]|min_length[6]');
			$this->form_validation->set_rules('admin_pass','Admin Pass','required');
			$this->form_validation->set_rules('user_token','User Token','required');
		
			if($this->form_validation->run())     
            {   
                $params = array(
					'admin_pass' => $this->input->post('admin_pass'),
					'admin_name' => $this->input->post('admin_name'),
					'user_token' => $this->input->post('user_token'),
                );

                $this->Sdb_admin_model->update_sdb_admin($user_id,$params);            
                redirect('sdb_admin/index');
            }
            else
            {
                $data['_view'] = 'sdb_admin/edit';
                $this->load->view('layouts/main',$data);
            }
        }
        else
            show_error('The sdb_admin you are trying to edit does not exist.');
    } 

    function remove($user_id)
    {
        $sdb_admin = $this->Sdb_admin_model->get_sdb_admin($user_id);

        // check if the sdb_admin exists before trying to delete it
        if(isset($sdb_admin['user_id']))
        {
            $this->Sdb_admin_model->delete_sdb_admin($user_id);
            redirect('sdb_admin/index');
        }
        else
            show_error('The sdb_admin you are trying to delete does not exist.');
    }

    function login()
    {
       if($this->session->userdata('account') == 1) {
          redirect('Dashboard/index','refresh');
        }

         if(!$this->input->post('login')) {
            $data['_view'] = 'login';
            $this->load->view('layouts/login',$data);
            return;
        }

        $params = array(
            'admin_pass' => md5($this->input->post('admin_pass')),
            'admin_name' => $this->input->post('admin_name'),
        );

        if($this->Sdb_admin_model->login_admin($params)){
            $this->session->set_userdata('account', 1);    
            redirect('Dashboard/index','refresh');
        }else{
            show_error('Sai tài khoản hoặc mật khẩu');
        }
    }

}
