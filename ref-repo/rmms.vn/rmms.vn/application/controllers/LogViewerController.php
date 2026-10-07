<?php 

include './vendor/autoload.php';

class LogViewerController extends Admin_Controller{
	private $logViewer;

	public function __construct() {
		parent::__construct(); 
		$this->logViewer = new \CILogViewer\CILogViewer();
	}

	public function index() {
		echo $this->logViewer->showLogs();
		return;
	}
	
}

?>