<div class="row m-0">
	<div class="col-md-12 p-0">
		<div class="box box-success box-solid m-0">
			<div class="box-header with-border">
				<h3 class="box-title"><i class="fa fa-inbox"></i> Tạo công việc</h3>
			</div>
			<?php echo form_open('sdb_task/add'); ?>
			<input type="hidden" name="trouble_obj_id" value="<?=$trouble_obj_id?>">
			<div class="box-body">
				<div class="row clearfix p-2">

					<div class="col-md-6">
						<label for="user_receive_group_id" class="control-label"><span class="text-danger">*</span>tổ</label>
						<div class="form-group">
							<select  required="" onchange="get_user_form_group()" id="user_group_id" name="user_receive_group_id" class="form-control">
								<option value="">chọn tổ</option>
								<?php 
								foreach($all_sdb_user_group as $sdb_user_group)
								{
									$selected = ($sdb_user_group['user_group_id'] == $trouble_obj['user_group_id']) ? ' selected="selected"' : "";
									echo '<option value="'.$sdb_user_group['user_group_id'].'" '.$selected.'>'.$sdb_user_group['user_group_name'].'</option>';
								}
								?>
							</select>
							<span class="text-danger"><?php echo form_error('user_receive_group_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="user_id_receive"  class="control-label"><span class="text-danger">*</span>cán bộ</label>
						<div class="form-group">
							<select id="user_id_receive" required=""  name="user_id_receive" class="form-control">
								<option value="">cán bộ</option>
								<?php 
								foreach($all_sdb_user as $sdb_user)
								{
									$selected = ($sdb_user['user_id'] == $trouble_obj['user_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user['user_id'].'" '.$selected.'>'.$sdb_user['user_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('user_id_receive');?></span>
						</div>
					</div>


					<div class="col-md-6">
						<label for="location_id" class="control-label"><span class="text-danger">*</span>thuộc địa bàn</label>
						<div class="form-group">
							<select required="" name="location_id"  onchange="get_distance()" id="location_id" class="form-control">
								<option value="">địa bàn</option>
								<?php 
								foreach($all_sdb_location as $sdb_location) {
									$selected = ($sdb_location['location_id'] == $trouble_obj['location_id']) ? ' selected="selected"' : "";
									echo '<option value="'.$sdb_location['location_id'].'" '.$selected.'>'.$sdb_location['location_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('location_id');?></span>
						</div>
					</div>
						<div class="col-md-6">
						<div class="form-group">
							<label><span class="text-danger">*</span>Thời hạn:</label>

							<div class="input-group">
								<div class="input-group-addon">
									<i class="fa fa-calendar"></i>
								</div>
								<input type="text" class="form-control pull-right" id="reservation">
								<input type="hidden" name="date_start" value="<?=date('Y-m-d')?>" class="form-control pull-right" id="date_start">
								<input type="hidden" name="date_end" value="<?=date('Y-m-d')?>" class="form-control pull-right" id="date_end">
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<label for="distance_id" class="control-label"><span class="text-danger">*</span>thuộc tuyến đường</label>
						<div class="form-group">

							<select required=""  name="distance_id" onchange="get_station()" id='distance_id' class="form-control">
								<option value="">tuyến đường</option>
								<?php 
								foreach($all_Sdb_distancess as $sdb_distance)
								{
									$selected = ($sdb_distance['distance_id'] == $trouble_obj['distance_id']) ? ' selected="selected"' : "";
									echo '<option value="'.$sdb_distance['distance_id'].'" '.$selected.'>'.$sdb_distance['distance_name'].'</option>';
								} ?>
							</select>
							<span class="text-danger"><?php echo form_error('distance_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="task_type_id" class="control-label"><span class="text-danger">*</span>loại công việc</label>
						<div class="form-group">
							<select required="" name="task_type_id" class="form-control">
								<option value="">loại công việc</option>
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
						<label for="task_status_id " class="control-label"><span class="text-danger">*</span>Trạng thái công việc</label>
						<div class="form-group">
							<!-- <?php var_dump($all_task_status) ?> -->
							<select required="" name="task_status_id" class="form-control">
								<option value="">Trạng thái công việc</option>
								<?php 
								foreach($all_task_status as $task_status)
								{
									// var_dump($task_status['task_status_id']);
									echo '<option value="'.$task_status['task_status_id'].'" '.$selected.'>'.$task_status['task_status_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('task_status_id ');?></span> 
							
						</div>
					</div>

					<div class="col-md-6">
						<label required="" for="task_name" class="control-label"><span class="text-danger">*</span>tên công việc</label>
						<div class="form-group">
							<?php 
							$trouble_o = json_decode($trouble_obj['trouble_obj_data'],true);
							?>
							<input type="text" name="task_name" required value="<?=empty($trouble_o['trouble_name']) ? '' : $trouble_o['trouble_name']  ?>" class="form-control" id="task_name" />
							<span class="text-danger"><?php echo form_error('task_name');?></span>
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
				<button type="submit" id="btnsubmit"  value="submit" class="btn btn-success">
					<i class="fa fa-check"></i> tạo
				</button>
			</div>
			<?php echo form_close(); ?>
		</div>
	</div>
</div>


<script type="text/javascript">
	
	$(function () {
		options = {}
		$('#reservation').daterangepicker(options, function(start, end, label) {
			let date_start = start.format('YYYY-MM-DD');
			let date_end = end.format('YYYY-MM-DD');
			$('#date_start').val(date_start);
			$('#date_end').val(date_end);
		});

	})
</script>