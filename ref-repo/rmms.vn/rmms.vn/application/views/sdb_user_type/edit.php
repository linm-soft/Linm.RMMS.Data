<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Chỉnh sửa cấp người dùng</h3>
            </div>
			<?php echo form_open('sdb_user_type/edit/'.$sdb_user_type['user_type_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="user_type_name" class="control-label"><span class="text-danger">*</span>Cấp người dùng</label>
						<div class="form-group">
							<input type="text" name="user_type_name" value="<?php echo ($this->input->post('user_type_name') ? $this->input->post('user_type_name') : $sdb_user_type['user_type_name']); ?>" class="form-control" id="user_type_name" />
							<span class="text-danger"><?php echo form_error('user_type_name');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_type_level" class="control-label"><span class="text-danger">*</span> Level</label>
						<div class="form-group">
							<input type="text" name="user_type_level" value="<?php echo ($this->input->post('user_type_level') ? $this->input->post('user_type_level') : $sdb_user_type['user_type_level']); ?>" class="form-control" id="user_type_level" />
							<span class="text-danger"><?php echo form_error('user_type_level');?></span>
						</div>
					</div>
					<!-- <div class="col-md-6">
						<label for="user_type_active" class="control-label"><span class="text-danger">*</span>User Type Active</label>
						<div class="form-group">
							<input type="text" name="user_type_active" value="<?php echo ($this->input->post('user_type_active') ? $this->input->post('user_type_active') : $sdb_user_type['user_type_active']); ?>" class="form-control" id="user_type_active" />
							<span class="text-danger"><?php echo form_error('user_type_active');?></span>
						</div>
					</div> -->
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