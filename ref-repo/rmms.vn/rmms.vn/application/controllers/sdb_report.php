<?php

class sdb_report extends Admin_Controller
{
	function __construct()
	{
		parent::__construct();
		$this->load->model('sdb_report_model');
	}

	/*
	 * Listing of sdb_report
	 */
	function index()
	{
		$data['sdb_report'] = $this->sdb_report_model->get_all_sdb_report();

		$data['_view'] = 'sdb_report/index';
		$this->load->view('layouts/main', $data);
	}
}
