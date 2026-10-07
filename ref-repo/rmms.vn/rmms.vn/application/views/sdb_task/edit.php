<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Sdb Task Edit</h3>
            </div>
			<?php echo form_open('sdb_task/edit/'.$sdb_task['task_id']); ?>
			<div class="box-body">
				<div class="row clearfix">

					<div class="col-md-6">
						<label for="user_id_receive" class="control-label"><span class="text-danger">*</span>Sdb User</label>
						<div class="form-group">
							<select name="user_id_receive" class="form-control">
								<option value="">select sdb_user</option>
								<?php 
								foreach($all_sdb_user as $sdb_user)
								{
									$selected = ($sdb_user['user_id'] == $sdb_task['user_id_receive']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user['user_id'].'" '.$selected.'>'.$sdb_user['user_id'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('user_id_receive');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_group_id_receive" class="control-label"><span class="text-danger">*</span>Sdb User Group</label>
						<div class="form-group">
							<select name="user_group_id_receive" class="form-control">
								<option value="">select sdb_user_group</option>
								<?php 
								foreach($all_sdb_user_group as $sdb_user_group)
								{
									$selected = ($sdb_user_group['user_group_id'] == $sdb_task['user_group_id_receive']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user_group['user_group_id'].'" '.$selected.'>'.$sdb_user_group['user_group_id'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('user_group_id_receive');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="task_type_id" class="control-label"><span class="text-danger">*</span>Sdb Task Type</label>
						<div class="form-group">
							<select name="task_type_id" class="form-control">
								<option value="">select sdb_task_type</option>
								<?php 
								foreach($all_sdb_task_type as $sdb_task_type)
								{
									$selected = ($sdb_task_type['task_type_id'] == $sdb_task['task_type_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_task_type['task_type_id'].'" '.$selected.'>'.$sdb_task_type['task_type_id'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('task_type_id');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="task_name" class="control-label"><span class="text-danger">*</span>Task Name</label>
						<div class="form-group">
							<input type="text" name="task_name" value="<?php echo ($this->input->post('task_name') ? $this->input->post('task_name') : $sdb_task['task_name']); ?>" class="form-control" id="task_name" />
							<span class="text-danger"><?php echo form_error('task_name');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="task_status_id" class="control-label"><span class="text-danger">*</span>Task Status</label>
						<div class="form-group">
							<input type="text" name="task_status_id" value="<?php echo ($this->input->post('task_status_id') ? $this->input->post('task_status_id') : $sdb_task['task_status_id']); ?>" class="form-control" id="task_status_id" />
							<span class="text-danger"><?php echo form_error('task_status_id');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="task_createdate" class="control-label"><span class="text-danger">*</span>Task Createdate</label>
						<div class="form-group">
							<input type="text" name="task_createdate" value="<?php echo ($this->input->post('task_createdate') ? $this->input->post('task_createdate') : $sdb_task['task_createdate']); ?>" class="form-control" id="task_createdate" />
							<span class="text-danger"><?php echo form_error('task_createdate');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="task_details" class="control-label"><span class="text-danger">*</span>Task Details</label>
						<div class="form-group">
							<textarea name="task_details" class="form-control" id="task_details"><?php echo ($this->input->post('task_details') ? $this->input->post('task_details') : $sdb_task['task_details']); ?></textarea>
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