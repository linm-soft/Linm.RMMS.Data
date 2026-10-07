<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Sdb Task Detail Add</h3>
            </div>
            <?php echo form_open('sdb_task_detail/add'); ?>
          	<div class="box-body">
          		<div class="row clearfix">
					<div class="col-md-6">
						<label for="task_id" class="control-label">Task Id</label>
						<div class="form-group">
							<input type="text" name="task_id" value="<?php echo $this->input->post('task_id'); ?>" class="form-control" id="task_id" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="task_user_id_receive" class="control-label">Task User Id Receive</label>
						<div class="form-group">
							<input type="text" name="task_user_id_receive" value="<?php echo $this->input->post('task_user_id_receive'); ?>" class="form-control" id="task_user_id_receive" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="task_details_content" class="control-label">Task Details Content</label>
						<div class="form-group">
							<input type="text" name="task_details_content" value="<?php echo $this->input->post('task_details_content'); ?>" class="form-control" id="task_details_content" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="infrastructure_id" class="control-label">Infrastructure Id</label>
						<div class="form-group">
							<input type="text" name="infrastructure_id" value="<?php echo $this->input->post('infrastructure_id'); ?>" class="form-control" id="infrastructure_id" />
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