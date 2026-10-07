<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Sdb Admin Add</h3>
            </div>
            <?php echo form_open('sdb_admin/add'); ?>
          	<div class="box-body">
          		<div class="row clearfix">
					<div class="col-md-6">
						<label for="admin_pass" class="control-label"><span class="text-danger">*</span>Admin Pass</label>
						<div class="form-group">
							<input type="password" name="admin_pass" value="<?php echo $this->input->post('admin_pass'); ?>" class="form-control" id="admin_pass" />
							<span class="text-danger"><?php echo form_error('admin_pass');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="admin_name" class="control-label"><span class="text-danger">*</span>Admin Name</label>
						<div class="form-group">
							<input type="text" name="admin_name" value="<?php echo $this->input->post('admin_name'); ?>" class="form-control" id="admin_name" />
							<span class="text-danger"><?php echo form_error('admin_name');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_token" class="control-label"><span class="text-danger">*</span>User Token</label>
						<div class="form-group">
							<input type="text" name="user_token" value="<?php echo $this->input->post('user_token'); ?>" class="form-control" id="user_token" />
							<span class="text-danger"><?php echo form_error('user_token');?></span>
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