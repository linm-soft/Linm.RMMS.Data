<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Chỉnh sửa</h3>
            </div>
			<?php echo form_open('sdb_location/edit/'.$sdb_location['location_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="location_name" class="control-label"><span class="text-danger">*</span>Tên đại bàn</label>
						<div class="form-group">
							<input type="text" name="location_name" value="<?php echo ($this->input->post('location_name') ? $this->input->post('location_name') : $sdb_location['location_name']); ?>" class="form-control" id="location_name" />
							<span class="text-danger"><?php echo form_error('location_name');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="location_active" class="control-label"><span class="text-danger">*</span>Kích hoạt</label>
						<div class="form-group">
							<input type="checkbox" name="location_active" value="1" <?php echo ($sdb_location['location_active']==1 ? 'checked="checked"' : ''); ?> id='location_active' />
							<span class="text-danger"><?php echo form_error('location_active');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="location_detail" class="control-label"><span class="text-danger">*</span>Mô tả</label>
						<div class="form-group">
							<textarea name="location_detail" class="form-control" id="location_detail"><?php echo ($this->input->post('location_detail') ? $this->input->post('location_detail') : $sdb_location['location_detail']); ?></textarea>
							<span class="text-danger"><?php echo form_error('location_detail');?></span>
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