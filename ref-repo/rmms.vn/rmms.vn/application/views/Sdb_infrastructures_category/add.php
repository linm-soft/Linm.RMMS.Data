<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Sdb Task Type Add</h3>
            </div>
            <?php echo form_open('sdb_task_type/add'); ?>
          	<div class="box-body">
          		<div class="row clearfix">
					<div class="col-md-6">
						<div class="form-group">
							<input type="checkbox" name="task_type_active" value="1"  id="task_type_active" />
							<label for="task_type_active" class="control-label"><span class="text-danger">*</span>Task Type Active</label>
							<span class="text-danger"><?php echo form_error('task_type_active');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="task_type_name" class="control-label"><span class="text-danger">*</span>Task Type Name</label>
						<div class="form-group">
							<input type="text" name="task_type_name" value="<?php echo $this->input->post('task_type_name'); ?>" class="form-control" id="task_type_name" />
							<span class="text-danger"><?php echo form_error('task_type_name');?></span>
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