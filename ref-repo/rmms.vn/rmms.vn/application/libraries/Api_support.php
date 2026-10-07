<?php 
class Api_support {
	public function set_Reponse($data, $code = 200  , $message = '' , $status = true)
	{
		$res =  array(
			"message" => $message,
			"data" => $data,
			"status" => $status
		);
		echo json_encode($res,JSON_UNESCAPED_UNICODE);
	}


	public function input_get($input) { 
		if(!isset($_GET[$input])) {
			$this->set_Reponse(100,"not fount parameter '${input}', Method : GET");
			die();	
		}
		$this->input = $_GET[$input];
		return $this;
	}

	public function input_post($input) { 
		if(!isset($_POST[$input])) {
			$this->set_Reponse(100,"not fount parameter '${input}', Method : POST");
			die();	
		}
		$this->input = $_POST[$input];
		return $this;
	}

	public function get_Input()
	{
		return htmlspecialchars($this->input);
	}

	public function not_empty(){
		if(!empty($this->input)) {
			return $this;
		}
		$this->set_Reponse(100, $input .'is empty');
		die();	
	}

	public function is_empty($input,$method ='get')
	{
		if($method == 'get') {
			return empty($_GET[$input]);	
		}
		if($method == 'post') {
			return empty($_POST[$input]);	
		}
	}



}

?>