<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class JWT {
	public function base64UrlEncode($data)
	{
		$urlSafeData = strtr(base64_encode($data), '+/', '-_');

		return rtrim($urlSafeData, '='); 
	} 

	public function base64UrlDecode($data)
	{
		$urlUnsafeData = strtr($data, '-_', '+/');

		$paddedData = str_pad($urlUnsafeData, strlen($data) % 4, '=', STR_PAD_RIGHT);

		return base64_decode($paddedData);
	}

	public function generateJWT($algo,$header,$payload, $secret)
	{
		$headerEncoded = $this->base64UrlEncode(json_encode($header));

		$payloadEncoded = $this->base64UrlEncode(json_encode($payload));

    // Delimit with period (.)
		$dataEncoded = "$headerEncoded.$payloadEncoded";

		$rawSignature = hash_hmac($algo, $dataEncoded, $secret, true);

		$signatureEncoded = $this->base64UrlEncode($rawSignature);

    // Delimit with second period (.)
		$jwt = "$dataEncoded.$signatureEncoded";

		return $jwt;
	}
	public function verifyJWT( $algo,  $jwt,  $secret)
	{

		// if(!function_exists('hash_equals'))
		// {
		// 	function hash_equals($str1, $str2)
		// 	{
		// 		if(strlen($str1) != strlen($str2))
		// 		{
		// 			return false;
		// 		}
		// 		else
		// 		{
		// 			$res = $str1 ^ $str2;
		// 			$ret = 0;
		// 			for($i = strlen($res) - 1; $i >= 0; $i--)
		// 			{
		// 				$ret |= ord($res[$i]);
		// 			}
		// 			return !$ret;
		// 		}
		// 	}
		// }
		if(count(explode('.', $jwt)) != 3){
			return  false;
		}
		list($headerEncoded, $payloadEncoded, $signatureEncoded) = explode('.', $jwt);

		$dataEncoded = "$headerEncoded.$payloadEncoded";

		$signature 	= $this->base64UrlDecode($signatureEncoded);
		$data 		= $this->base64UrlDecode($payloadEncoded);

		$rawSignature = hash_hmac($algo, $dataEncoded, $secret, true);
		$kiemtra = hash_equals($rawSignature, $signature);
		return array(
			'check'=> $kiemtra,
			'data_user' => $data
		) ;
	}


}

?>