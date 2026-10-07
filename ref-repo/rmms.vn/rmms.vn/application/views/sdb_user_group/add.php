<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Thêm tổ</h3>
            </div>
            <?php echo form_open('sdb_user_group/add'); ?>
          	<div class="box-body">
          		<div class="row clearfix">
					<div class="col-md-6">
						<label for="user_group_name" class="control-label"><span class="text-danger">*</span>Tổ</label>
						<div class="form-group">
							<input type="text" name="user_group_name" value="<?php echo $this->input->post('user_group_name'); ?>" class="form-control" id="user_group_name" />
							<span class="text-danger"><?php echo form_error('user_group_name');?></span>
						</div>
					</div>
					<!-- <div class="col-md-6">
						<label for="user_group_slug" class="control-label"><span class="text-danger">*</span></label>
						<div class="form-group">
							<input type="text" name="user_group_slug" value="<?php echo $this->input->post('user_group_slug'); ?>" class="form-control" id="user_group_slug" />
							<span class="text-danger"><?php echo form_error('user_group_slug');?></span>
						</div>
					</div> -->
					<!-- <div class="col-md-6">
						<label for="user_group_active" class="control-label"><span class="text-danger">*</span>User Group Active</label>
						<div class="form-group">
							<input type="text" name="user_group_active" value="<?php echo $this->input->post('user_group_active'); ?>" class="form-control" id="user_group_active" />
							<span class="text-danger"><?php echo form_error('user_group_active');?></span>
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