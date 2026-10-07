<?php

class User extends API_Controller
{

  public function __construct()
  {
    parent::__construct();
    $this->load->model('Sdb_user_model');
    $this->load->database();
  }

  public function login_post()
  {
    $user_name = $this->input->post('user_name');
    $user_pass = $this->input->post('user_pass');

    if (empty($user_name) || empty($user_pass)) {
      $this->set_response('', REST_Controller::HTTP_BAD_REQUEST, 'HTTP_BAD_REQUEST');
    }

    $user = [
      'user_name' => $user_name,
      'user_pass' => md5($user_pass)
    ];

    $info = $this->Sdb_user_model->login($user);

    if (!$info) {
      $this->set_response('', REST_Controller::HTTP_OK, 'login failed');
    }

    $payload = array("data" => $info);
    $header = array("author" => "sdb", "user-angent" => "user-win");
    $secret = $this->config->item('secret_key_jwt');
    $data = $this->jwt->generateJWT("sha256", $header, $payload, $secret);

    $this->set_response(["token" => $data], REST_Controller::HTTP_OK, "login success");
  }

  public function index_get()
  {
    $this->set_response('', 400, 'login failed');
  }
  public function index_post()
  {
    $user_name = $this->input->post('user_name');
    $user_pass = $this->input->post('user_pass');
  }

  public function user_by_group_get($user_group_id)
  {
    $res = $this->Sdb_user_model->get_all_sdb_user_from_group($user_group_id);
    $this->set_response($res, REST_Controller::HTTP_OK, "Get user by group success");
  }

  public function  token_app_post()
  {
    $this->info = $this->is_login();
    $user_token = $this->post('user_device_token');
    $param = [
      'user_device_token' => $user_token
    ];
    
    $code = $this->Sdb_user_model->update_sdb_user($this->info->data->user_id,$param);
    
    if(!$code) {
      $this->set_response('', 400, "update token failed",FALSE);
    }else {
      $this->set_response('', 200, "update token success");
    }

  }

  // update token

}
