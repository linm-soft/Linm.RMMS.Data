<?php
$menu = [
	array(
		"p_menu" => "MAIN NAVIGATION",
		"icon" =>"  fa-dashboard",
		"level" =>5,
		"menu" => [
			[
				'title' => 'Dasdboard',
				'icon' =>  'fa-dashboard',
				'link'=>   'Dashboard/index',
				'path'=>   'Dashboard',
				'level' => 5
			]
		]
	),
	array(
		"p_menu" => "CHECKIN",
		"icon" =>" fa-calendar-check-o",
		"level" =>5,
		"menu" => [
			[
				'title' => 'QL điểm checkin',
				'icon' => 'fa-stop',
				'link' => 'sdb_checkin_distance/index',
				'path' => 'sdb_checkin_distance',
				'level' => 1
			],
			[
				'title' => 'QL Giám sát Online',
				'icon' => 'fa-stop',
				'link' => 'sdb_checkin/supervisor',
				'path' => 'sdb_checkin',
				'level' => 1
			],
			[
				'title' => 'Phân công checkin',
				'icon' => 'fa-stop',
				'link' => 'sdb_c_distance_u_group/index',
				'path' => 'sdb_c_distance_u_group',
				'level' => 1
			],
			[
				'title' => 'Lịch sử checkin',
				'icon' => 'fa-stop',
				'link' => 'sdb_checkin_history/index',
				'path' => 'sdb_checkin_history',
				'level' => 5
			],[
				'title' => 'QL trạng thái checkin',
				'icon' => 'fa-stop',
				'link' => 'sdb_checkin_statu/index',
				'path' => 'sdb_checkin_statu',
				'level' => 1
			],
		]
	),
	array(
		"p_menu" => "TÀI SẢN KCHT",
		"icon" =>"  fa-area-chart",
		"level" =>5,
		"menu" => [
			[
				'title' => 'QL Tuyến đường (Quốc Lộ)',
				'icon' => 'fa-stop',
				'link' => 'sdb_distance/index',
				'path' => 'sdb_distance',
				'level' => 1
			],
			[
				'title' => 'Quản lý tài sản (KCHT)',
				'icon' => 'fa-stop',
				'link' => 'sdb_infrastructure/index',
				'path' => 'sdb_infrastructure',
				'level' => 5
			],
			[
				'title' => 'Loại tài sản',
				'icon' => 'fa-stop',
				'link' => 'sdb_infrastructures_category/index',
				'path' => 'sdb_infrastructures_category',
				'level' => 1
			],
			[
				'title' => 'QL Địa bàn',
				'icon' => 'fa-stop',
				'link' => 'sdb_location/index',
				'path' => 'sdb_location',
				'level' => 1
			],[
				'title' => 'Quản lý lý trình',
				'icon' => 'fa-stop',
				'link' => 'sdb_station/index',
				'path' => 'sdb_station',
				'level' => 1
			],
		]
	),

	array(
		"p_menu" => "Sự Cố",
		"icon" =>" fa-wheelchair",
		"level" =>5,
		"menu" => [
			[
				'title' => 'QL Sự cố ',
				'icon' => 'fa-stop',
				'link' => 'sdb_trouble/index',
				'path' => 'sdb_trouble',
				'level' => 5
			],[
				'title' => 'QL Các loại sự cố',
				'icon' => 'fa-stop',
				'link' => 'sdb_trouble_category/index',
				'path' => 'sdb_trouble_category',
				'level' => 1
			],[
				'title' => 'QL trạng thái sự cố',
				'icon' => 'fa-stop',
				'link' => 'sdb_trouble_statu/index',
				'path' => 'sdb_trouble_statu',
				'level' => 1
			],[
				'title' => 'QL Kiểu Sự cố',
				'icon' => 'fa-stop',
				'link' => 'sdb_trouble_type/index',
				'path' => 'sdb_trouble_type',
				'level' => 1
			],
		]
	),
	array(
		"p_menu" => "CÔNG VIỆC",
		"icon" =>" fa-tasks",
		"level" =>5,
		"menu" => [
			[
				'title' => 'DS Công việc',
				'icon' => 'fa-stop',
				'link' => 'sdb_task/index',
				'path' => 'sdb_task',
				'level' => 5
			],
		]
	),
	array(
		"p_menu" => "NGƯỜI DÙNG",
		"icon" =>" fa-users",
		"level" =>0,
		"menu" => [
			[
				'title' => 'QL tổ',
				'icon' => 'fa-stop',
				'link' => 'sdb_user_group/index',
				'path' => 'sdb_user_group',
				'level' => 0
			],[
				'title' => 'QL người dùng',
				'icon' => 'fa-stop',
				'link' => 'sdb_user/index',
				'path' => 'sdb_user',
				'level' => 0
			],[
				'title' => 'QL cấp người dùng',
				'icon' => 'fa-stop',
				'link' => 'sdb_user_type/index',
				'path' => 'sdb_user_type',
				'level' => 0
			],
			[
				'title' => 'Phần quyền người dùng',
				'icon' => 'fa-stop',
				'link' => 'sdb_user_distance/index',
				'path' => 'sdb_user_distance',
				'level' => 0
			],
		]
	),
	array(
		"p_menu" => "HỆ THỐNG",
		"icon" =>" fa-calendar-check-o",
		'level' => 0,
		"menu" => [
			[
				'title' => 'QL LOG hệ thống',
				'icon' => 'fa-stop',
				'link' => 'logs',
				'path' => 'logs',
				'level' => 0
			]
		]
	),
];


?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<link rel="manifest" href="<?= site_url('manifest.json') ?>">
	<link rel="shortcut icon" href="<?= site_url('resources/img/tcdb_1.png') ?>"/>
	<title>DRVN</title>
	<!-- Tell the browser to be responsive to screen width -->
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<!-- Bootstrap 3.3.6 -->
	<link rel="stylesheet" href="<?php echo site_url('resources/css/bootstrap.min.css'); ?>">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="<?php echo site_url('resources/css/font-awesome.min.css'); ?>">

	<!-- Datetimepicker -->
	<link rel="stylesheet" href="<?php echo site_url('resources/css/bootstrap-datetimepicker.min.css'); ?>">
	<!-- Theme style -->
	
	<link rel="stylesheet" href="<?php echo site_url('resources/css/select2.css'); ?>">

	<link rel="stylesheet" href="<?php echo site_url('resources/css/pace.min.css'); ?>">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css"/>
	<link rel="stylesheet" href="<?php echo site_url('resources/css/_all-skins.min.css'); ?>">
	<link rel="stylesheet" href="<?php echo site_url('resources/alert_lib/css/alertify.min.css'); ?>">
	<link rel="stylesheet" href="<?php echo site_url('resources/alert_lib/css/themes/default.min.css'); ?>">
	
	<link rel="stylesheet" href="<?php echo site_url('resources/css/AdminLTE.min.css'); ?>">
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
	
	<link rel="stylesheet" href="<?php echo site_url('resources/css/sdb.css'); ?>">
	<link rel="stylesheet" href="<?php echo site_url('resources/css/theme_sdb.css'); ?>">
	
	
	<script src="<?php echo site_url('resources/js/jquery-2.2.3.min.js'); ?>"></script>
	<script src="<?php echo site_url('resources/js/bootstrap.min.js'); ?>"></script>
	<script src="<?php echo site_url('resources/js/pace.min.js'); ?>"></script>
	<script src="<?php echo site_url('resources/js/fastclick.js'); ?>"></script>
	<script src="<?php echo site_url('resources/js/app.min.js'); ?>"></script>
	<script src="<?php echo site_url('resources/js/demo.js'); ?>"></script>
	<script src="<?php echo site_url('resources/js/moment.js'); ?>"></script>
	<script src="<?php echo site_url('resources/js/bootstrap-datetimepicker.min.js'); ?>"></script>
	<script src="<?php echo site_url('resources/js/global.js'); ?>"></script>
	<!-- alert -->
	<script src="<?php echo site_url('resources/alert_lib/alertify.min.js'); ?>"></script>

	<script src="<?php echo site_url('resources/js/sdb.js'); ?>"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>

	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
	
	<!-- smart photo	 -->
	<script src="https://unpkg.com/smartphoto@1.1.0/js/smartphoto.min.js"></script>
	<link rel="stylesheet" href="https://unpkg.com/smartphoto@1.1.0/css/smartphoto.min.css">
	
	<!-- select2 -->
	<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>

	
	
	<script src="https://adminlte.io/themes/AdminLTE/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
	<script src="https://adminlte.io/themes/AdminLTE/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
	<script src="https://adminlte.io/themes/AdminLTE/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="https://adminlte.io/themes/AdminLTE/bower_components/fastclick/lib/fastclick.js"></script>


	<script type="text/javascript">
		<?php
		include 'main_js.php';
		?>
	</script>

	
</head>

<body class="hold-transition skin-blue sidebar-mini ">
	<div class="wrapper ">

		<header class="main-header">
			<!-- Logo -->
			<a href="" class="logo">
				<!-- mini logo for sidebar mini 50x50 pixels -->
				<span class="logo-mini"><img width="32px" src="<?= base_url('resources/img/tcdb_1.png') ?>"></span>
				<!-- logo for regular state and mobile devices -->
				<span class="logo-lg">
					<b>DRVN</b>
					<!-- <img width="32px" src="<?= base_url('resources/img/tcdb_1.png') ?>"> -->

				</span>
			</a>
			<!-- Header Navbar: style can be found in header.less -->
			<nav class="navbar navbar-static-top">
				<!-- Sidebar toggle button-->
				<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</a>

				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">

						<!-- User Account: style can be found in dropdown.less -->
						<li class="dropdown user user-menu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								<img src="<?php echo site_url($_SESSION['account']['user_avatar']); ?>" class="user-image"
								alt="User Image">
								<span class="hidden-xs"><?= $_SESSION['account']['user_type_name'] ?></span>
							</a>

							<ul class="dropdown-menu">
								<!-- User image -->
								<li class="user-header">
									<img src="<?php echo site_url($_SESSION['account']['user_avatar']); ?>" class="img-circle"
									alt="User Image">

									<p>
										<!-- <?php var_dump($_SESSION['account']['user_fullname']); ?> -->
										<small>Member since Nov. 2012</small>
									</p>
								</li>
								<!-- Menu Footer-->
								<li class="user-footer">
									<div class="pull-left">
										<a href="#" class="btn btn-default btn-flat">Profile</a>
									</div>
									<div class="pull-right">
										<a href="<?= base_url('sdb_user/logout') ?>" class="btn btn-default btn-flat">Log
										out</a>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</header>

		

		<aside class="main-sidebar">
			<!-- sidebar: style can be found in sidebar.less -->
			<section class="sidebar">
				<!-- Sidebar user panel -->
				<div class="user-panel">
					<div class="pull-left image">
						<img src="<?php echo site_url($_SESSION['account']['user_avatar']); ?>" class="img-circle"
						alt="User Image">
					</div>
					<div class="pull-left info">
						<p><?= $_SESSION['account']['user_fullname'] ?></p>
						<a href="#"><i class="fa fa-circle text-success"></i> Online</a>
					</div>
				</div>
				<ul class="sidebar-menu">
					<?php 
					$link_active = $this->router->fetch_class();

					if(empty($link_active)) {
						$link_active = 'Dashboard';
					}

					foreach ($menu as $menu_p) {
						$active = '';
						foreach ($menu_p['menu'] as $menu_s) {
							if($menu_s['path'] == $link_active) {
								$active = 'active';
							}
						}
						// checkin xem menu co quyen tren menu cha khong
						if( $_SESSION['account']['user_type_level'] > $menu_p['level'] )
							continue;


						?>
						<li class=" treeview <?=$active?>">
							<a href="#">
								<i class="fa <?=$menu_p['icon']?>"></i> <span><?=$menu_p['p_menu']?></span>
								<span class="pull-right-container">
									<i class="fa fa-angle-left pull-right"></i>
								</span>
							</a>
							<ul class="treeview-menu">
								<?php 
								foreach ($menu_p['menu'] as $menu_s) {
									$active = '';
									if( $_SESSION['account']['user_type_level'] > $menu_s['level'] )
										continue;
									if($menu_s['path'] == $link_active) {
										$active = 'active';
									}
									?>
									<li class="<?=$active?>">
										<a href="<?=site_url($menu_s['link'])?>">
											<i class="fa <?=$menu_s['icon']?>"></i>
											<?=$menu_s['title']?>
										</a>
									</li>
									
									<?php $active = '';  } ?> 
								</ul>
							</li>
						<?php } ?>
					</ul>
				</section>
				<!-- /.sidebar -->
			</aside>

			<!-- Content Wrapper. Contains page content -->
			<!-- style="height: 860px" -->
			<div class="content-wrapper " >
				<!-- Main content -->
				<!-- style="height: 860px" -->
				<section class="content p-0" >
					<div id="loadding_id"></div>
					<?php
			// alert
					if (!is_null($this->session->flashdata('alert'))) {
						echo $this->session->flashdata('alert');
					}

					if (isset($_view) && $_view)
						$this->load->view($_view);
					?>
				</section>
				<!-- /.content -->
			</div>
			<!-- /.content-wrapper -->
			<footer class="main-footer">
				<!-- <strong>Generated By <a href="http://www.crudigniter.com/">CRUDigniter</a> 3.2</strong> -->
			</footer>

			<!-- Control Sidebar -->
			<aside class="control-sidebar control-sidebar-dark">
				<!-- Create the tabs -->
				<ul class="nav nav-tabs nav-justified control-sidebar-tabs">

				</ul>
				<!-- Tab panes -->
				<div class="tab-content">
					<!-- Home tab content -->
					<div class="tab-pane" id="control-sidebar-home-tab">

					</div>
					<!-- /.tab-pane -->
					<!-- Stats tab content -->
					<div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
					<!-- /.tab-pane -->

				</div>
			</aside>
			<!-- /.control-sidebar -->
	<!-- Add the sidebar's background. This div must be placed
		immediately after the control sidebar -->
		<div class="control-sidebar-bg"></div>
	</div>
	<!-- ./wrapper -->
</body>
</html>


<script type="text/javascript">
	window.addEventListener('DOMContentLoaded',function(){
		new SmartPhoto(".js-smartPhoto");
	});
	if(!alertify.myAlert){
  //define a new dialog
  alertify.dialog('myAlert',function(){
  	return{
  		main:function(message){
  			this.message = message;
  		},
  		setup:function(){
  			return { 
  			buttons:[{text: "cool!", key:27/*Esc*/}],
  			focus: { element:0 }
  		};
  	},
  	prepare:function(){
  		this.setContent(this.message);
  	}
  }});
}


$(function () {
	$('#adb_table').DataTable({
		'paging'      : false,
		'lengthChange': false,
		'searching'   : true,
		'ordering'    : true,
		'info'        : false,
		'autoWidth'   : false
	});
})
</script>