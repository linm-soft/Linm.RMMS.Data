<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Tạo công việc</h3>
			</div>
			<?php echo form_open('sdb_task/add'); ?>
			<div class="box-body">
				<div class="row clearfix">
					
					<div class="col-md-6">
						<label for="user_receive_group_id" class="control-label"><span class="text-danger">*</span>Tổ</label>
						<div class="form-group">
							<select onChange="get_user_form_group()" id="user_group_id" name="user_receive_group_id" class="form-control">
								<option value="">Chọn tổ</option>
								<?php 
								foreach($all_sdb_user_group as $sdb_user_group)
								{
									$selected = ($sdb_user_group['user_group_id'] == $this->input->post('user_receive_group_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user_group['user_group_id'].'" '.$selected.'>'.$sdb_user_group['user_group_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('user_receive_group_id');?></span>
						</div>
					</div>
					
					<div class="col-md-6">
						<label for="user_id_receive" class="control-label"><span class="text-danger">*</span>Cán bộ</label>
						<div class="form-group">
							<select id="user_id" disabled="" name="user_id_receive" class="form-control">
								<option value="">Cán bộ</option>
								<?php 
								foreach($all_sdb_user as $sdb_user)
								{
									$selected = ($sdb_user['user_id'] == $this->input->post('user_id_receive')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user['user_id'].'" '.$selected.'>'.$sdb_user['user_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('user_id_receive');?></span>
						</div>
					</div>


					<div class="col-md-6">
						<label for="location_id" class="control-label"><span class="text-danger">*</span>Thuộc địa bàn</label>
						<div class="form-group">
							<select name="location_id"  onchange="get_distance()" id="location_id" class="form-control">
								<option value="">Địa bàn</option>
								<?php 
								foreach($all_sdb_location as $sdb_location) {
									$selected = ($sdb_location['location_id'] == $this->input->post('location_id')) ? ' selected="selected"' : "";
									echo '<option value="'.$sdb_location['location_id'].'" '.$selected.'>'.$sdb_location['location_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('location_id');?></span>
						</div>
					</div>
					
					<div class="col-md-6">
						<label for="distance_id" class="control-label"><span class="text-danger">*</span>Thuộc tuyến đường</label>
						<div class="form-group">
							<select disabled="" name="distance_id" onChange="get_station()" id='distance_id' class="form-control">
								<option value="">Tuyến đường</option>
								<?php 
								foreach($all_sdb_distance as $sdb_distance)
								{
									$selected = ($sdb_distance['distance_id'] == $this->input->post('distance_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_distance['distance_id'].'" '.$selected.'>'.$sdb_distance['distance_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('distance_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="station_id" class="control-label"><span class="text-danger"></span>Thuộc lý trình</label>
						<div class="form-group">
							<select onChange="ajax_infrastructure_by_station()" disabled="" name="station_id" id="station_id" class="form-control">
								<option value="">Lý trình</option>
								<?php 
								foreach($all_sdb_stations as $sdb_station)
								{
									$selected = ($sdb_station['station_id'] == $this->input->post('station_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_station['station_id'].'" '.$selected.'>'.$sdb_station['station_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('station_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="infrastructure_id" class="control-label"><span class="text-danger"></span>Tài sản (KCHT)</label>
						<div class="form-group">
							<select disabled="" name="infrastructure_id" id="infrastructure_id" class="form-control">
								<option value="">Chọn tài sản</option>
								<?php 
								foreach($all_sdb_infrastructure as $sdb_infrastructure)
								{
									$selected = ($sdb_infrastructure['infrastructure_id'] == $this->input->post('infrastructure_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_infrastructure['infrastructure_id'].'" '.$selected.'>'.$sdb_infrastructure['infrastructure_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('infrastructure_id');?></span>
						</div>
					</div>


					<div class="col-md-6">
						<label for="task_type_id" class="control-label"><span class="text-danger">*</span>Loại công việc</label>
						<div class="form-group">
							<select name="task_type_id" class="form-control">
								<option value="">Loại công việc</option>
								<?php 
								foreach($all_sdb_task_type as $sdb_task_type)
								{
									$selected = ($sdb_task_type['task_type_id'] == $this->input->post('task_type_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_task_type['task_type_id'].'" '.$selected.'>'.$sdb_task_type['task_type_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('task_type_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="task_name" class="control-label"><span class="text-danger">*</span>Tên công việc</label>
						<div class="form-group">
							<input type="text" name="task_name" value="<?php echo $this->input->post('task_name'); ?>" class="form-control" id="task_name" />
							<span class="text-danger"><?php echo form_error('task_name');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="task_name" class="control-label"><span class="text-danger">*</span>thời hạn</label>

						<div class="input-group">
							<div class="input-group-addon">
								<i class="fa fa-calendar"></i>
							</div>
							<input type="text" class="form-control pull-right" id="reservation">
						</div>
						
					</div>

					<div class="col-md-6">
						<label for="task_details" class="control-label"><span class="text-danger"></span>Chi tiết</label>
						<div class="form-group">
							<textarea name="task_details" class="form-control" id="task_details"><?php echo $this->input->post('task_details'); ?></textarea>
							<span class="text-danger"><?php echo form_error('task_details');?></span>
						</div>
					</div>

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