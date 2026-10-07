<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Chỉnh sửa trạng thái checkin</h3>
            </div>
			<?php echo form_open('sdb_checkin_statu/edit/'.$sdb_checkin_statu['checkin_status_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="checkin_status_name" class="control-label"><span class="text-danger">*</span>Tên trạng thái</label>
						<div class="form-group">
							<input type="text" name="checkin_status_name" value="<?php echo ($this->input->post('checkin_status_name') ? $this->input->post('checkin_status_name') : $sdb_checkin_statu['checkin_status_name']); ?>" class="form-control" id="checkin_status_name" />
							<span class="text-danger"><?php echo form_error('checkin_status_name');?></span>
						</div>
					</div>
				<!-- 	<div class="col-md-6">
						<label for="checkin_status_active" class="control-label"><span class="text-danger">*</span>Kích hoạt</label>
						<div class="form-group">
							<input type="text" name="checkin_status_active" value="<?php echo ($this->input->post('checkin_status_active') ? $this->input->post('checkin_status_active') : $sdb_checkin_statu['checkin_status_active']); ?>" class="form-control" id="checkin_status_active" />
							<span class="text-danger"><?php echo form_error('checkin_status_active');?></span>
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