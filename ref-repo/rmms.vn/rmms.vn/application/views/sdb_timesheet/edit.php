<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Sdb Timesheet Edit</h3>
            </div>
			<?php echo form_open('sdb_timesheet/edit/'.$sdb_timesheet['timesheet_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="user_id" class="control-label">Sdb User</label>
						<div class="form-group">
							<select name="user_id" class="form-control">
								<option value="">select sdb_user</option>
								<?php 
								foreach($all_sdb_user as $sdb_user)
								{
									$selected = ($sdb_user['user_id'] == $sdb_timesheet['user_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user['user_id'].'" '.$selected.'>'.$sdb_user['user_id'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<label for="timesheet_time_month" class="control-label">Timesheet Time Month</label>
						<div class="form-group">
							<input type="text" name="timesheet_time_month" value="<?php echo ($this->input->post('timesheet_time_month') ? $this->input->post('timesheet_time_month') : $sdb_timesheet['timesheet_time_month']); ?>" class="has-datepicker form-control" id="timesheet_time_month" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="timesheet_day_checkin" class="control-label">Timesheet Day Checkin</label>
						<div class="form-group">
							<input type="text" name="timesheet_day_checkin" value="<?php echo ($this->input->post('timesheet_day_checkin') ? $this->input->post('timesheet_day_checkin') : $sdb_timesheet['timesheet_day_checkin']); ?>" class="form-control" id="timesheet_day_checkin" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="timesheet_day_total" class="control-label">Timesheet Day Total</label>
						<div class="form-group">
							<input type="text" name="timesheet_day_total" value="<?php echo ($this->input->post('timesheet_day_total') ? $this->input->post('timesheet_day_total') : $sdb_timesheet['timesheet_day_total']); ?>" class="form-control" id="timesheet_day_total" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="timesheet_createdate" class="control-label">Timesheet Createdate</label>
						<div class="form-group">
							<input type="text" name="timesheet_createdate" value="<?php echo ($this->input->post('timesheet_createdate') ? $this->input->post('timesheet_createdate') : $sdb_timesheet['timesheet_createdate']); ?>" class="form-control" id="timesheet_createdate" />
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