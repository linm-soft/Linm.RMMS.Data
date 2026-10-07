<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Chỉnh sửa phân tổ checkin</h3>
            </div>
			<?php echo form_open('sdb_c_distance_u_group/edit/'.$sdb_c_distance_u_group['c_distance_u_group_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="user_group_id" class="control-label">Tổ</label>
						<div class="form-group">
							<select name="user_group_id" class="form-control">
								<option value="">Chọn tổ</option>
								<?php 
								foreach($all_sdb_user_group as $sdb_user_group)
								{
									$selected = ($sdb_user_group['user_group_id'] == $sdb_c_distance_u_group['user_group_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user_group['user_group_id'].'" '.$selected.'>'.$sdb_user_group['user_group_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<label for="checkin_distance_id" class="control-label">Tuyến đường checkin</label>
						<div class="form-group">
							<select name="checkin_distance_id" class="form-control">
								<option value="">select sdb_checkin_distance</option>
								<?php 
								foreach($all_sdb_checkin_distance as $sdb_checkin_distance)
								{
									$selected = ($sdb_checkin_distance['checkin_distance_id'] == $sdb_c_distance_u_group['checkin_distance_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_checkin_distance['checkin_distance_id'].'" '.$selected.'>'.$sdb_checkin_distance['checkin_distance_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<!-- <div class="col-md-6">
						<label for="u_group_c_distance_start_date" class="control-label">U Group C Distance Start Date</label>
						<div class="form-group">
							<input type="text" name="u_group_c_distance_start_date" value="<?php echo ($this->input->post('u_group_c_distance_start_date') ? $this->input->post('u_group_c_distance_start_date') : $sdb_c_distance_u_group['u_group_c_distance_start_date']); ?>" class="has-datetimepicker form-control" id="u_group_c_distance_start_date" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="u_group_c_distance_start_end" class="control-label">U Group C Distance Start End</label>
						<div class="form-group">
							<input type="text" name="u_group_c_distance_start_end" value="<?php echo ($this->input->post('u_group_c_distance_start_end') ? $this->input->post('u_group_c_distance_start_end') : $sdb_c_distance_u_group['u_group_c_distance_start_end']); ?>" class="has-datetimepicker form-control" id="u_group_c_distance_start_end" />
						</div>
					</div> -->
<!-- 
					<div class="col-md-6">
						<label for="status_id" class="control-label">Trạng thái</label>
						<div class="form-group">
							<input type="text" name="status_id" value="<?php echo ($this->input->post('status_id') ? $this->input->post('status_id') : $sdb_c_distance_u_group['status_id']); ?>" class="form-control" id="status_id" />
						</div>
					</div>
 -->
				</div>
			</div>
			<div class="box-header bg-info with-border">
              	<h3 class="box-title">Thiết lập Thời gian</h3>
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