<div class="row p-2">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Thiết lập điểm checkin theo Tổ</h3>
			</div>
			<?php echo form_open('sdb_c_distance_u_group/add'); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="user_group_id" class="control-label">Chọn tổ</label>
						<div class="form-group">
							<select name="user_group_id" class="form-control" required="">
								<option value=""><span class="text-danger">*</span> Tổ</option>
								<?php 
								foreach($all_sdb_user_group as $sdb_user_group)
								{
									$selected = ($sdb_user_group['user_group_id'] == $this->input->post('user_group_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user_group['user_group_id'].'" '.$selected.'>'.$sdb_user_group['user_group_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<label for="checkin_distance_id" class="control-label"> <span class="text-danger">*</span> Tuyến đường checkin</label>
						<div class="form-group">
							<select name="checkin_distance_id" id='checkin_distance_id' onChange="get_points_for_setting_checkin()" class="form-control" required="">
								<option value="">Tuyến đường</option>
								<?php 
								foreach($all_sdb_checkin_distance as $sdb_checkin_distance)
								{
									$selected = ($sdb_checkin_distance['checkin_distance_id'] == $this->input->post('checkin_distance_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_checkin_distance['checkin_distance_id'].'" '.$selected.'>'.$sdb_checkin_distance['checkin_distance_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
				</div>

				<div class="box-header bg-info with-border">
					<h3 class="box-title">Thiết lập Thời gian</h3>
				</div>
				<div id="list_point">
				</div>

			</div>

			<div class="box-footer">
				<button type="submit" class="btn btn-success">
					<i class="fa fa-check"></i> Save
				</button>
			</div>
			<?php echo form_close(); ?>
		</div>
	</div>
</div>
<script type="text/javascript">
	
	async function get_points_for_setting_checkin() {	
		loadding_();
		let url = "<?=base_url('sdb_c_distance_u_group/get_points_for_setting_checkin');?>";
		let distance_id = $('#checkin_distance_id').val();
		let link = url+'/'+distance_id;
		var list_point = await  ajax_(link);
		let point_json = JSON.parse(list_point);
		let point = point_json.data;
		let stations = await ajax_station_by_checkin_distance();
		build_temp_point(point, stations);
		ajax_station_by_checkin_distance(distance_id);
		loadding_done();
	}	

	async function ajax_station_by_checkin_distance()
	{	
		let url = "<?=base_url('sdb_station/ajax_station_by_checkin_distance');?>";
		let distance_id = $('#checkin_distance_id').val();
		let link = url+'/'+distance_id;
		var list_station = await  ajax_(link);
		let station_json = JSON.parse(list_station);
		return station_json.data;
	}

	async function build_temp_point(points, stations)
	{
		$('#list_point').empty();

		points.forEach( function(element, index) {
			let loop_temp = build_temp_loops();
			let day_temp = build_temp_days();
			let stations_temp = build_temp_stations(stations);
			let temp = `<div class="col-md-3">
			<div class="box box-widget"  >
			<div class="widget-user-header bg-green">
			<div class="widget-user-username" style="padding:10px; ">${element.c_distance_c_checkin_location}</div>
			</div>
			<div class="box-body bg-info no-padding">
			<ul class="nav nav-stacked">
			<li>${loop_temp}</li>
			<li>${day_temp}</li>
			<li>${stations_temp}</li>
			</ul>
			</div>
			</div>	
			</div>`;
			
			$('#list_point').append(temp);
		});
	}

	function build_temp_loops() {

		var loops = JSON.parse('<?=json_encode($list_loop)?>');
		let options_lopp = '';
		loops.forEach( function(element, index) {
			options_lopp += `<option value="${element.value}" >${element.name}</option>`
		});

		let loop_temp = `<select id="user_group_id_122" name="user_receive_group_id"
		class="form-control  ">
		<option value="">Vòng lặp</option>
		${options_lopp}
		</select>`; 
		return loop_temp;
	}

	function build_temp_stations(stations = []) {
		let options_lopp = '';
		console.log(stations);
		stations.forEach( function(element, index) {
			options_lopp += `<option value="${element.station_id}" >${element.station_name}</option>`
		});

		let loop_temp = `<select id="user_group_id_122" name="user_receive_group_id"
		class="form-control  ">
		<option value="">Lý trình</option>
		${options_lopp}
		</select>`; 
		return loop_temp;
	}


	function build_temp_days() {

		var days = JSON.parse('<?=json_encode($list_day)?>');
		let options_days = '';
		days.forEach( function(element, index) {
			options_days += `<option value="${element.value}" >${element.name}</option>`
		});

		let day_temp = `<select  
		class="form-control  ">
		<option value="">Ngày trong tuần</option>
		${options_days}
		</select>`; 
		return day_temp;
	}
	
</script>