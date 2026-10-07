<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Chỉnh sửa tuyến đường</h3>
            </div>
			<?php echo form_open('sdb_distance/edit/'.$sdb_distance['distance_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="location_id" class="control-label"><span class="text-danger">*</span>Thuộc địa bàn</label>
						<div class="form-group">
							<select name="location_id" class="form-control">
								<option value="">Địa bàn</option>
								<?php 
								foreach($all_sdb_location as $sdb_location)
								{
									$selected = ($sdb_location['location_id'] == $sdb_distance['location_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_location['location_id'].'" '.$selected.'>'.$sdb_location['location_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('location_id');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="distance_name" class="control-label"><span class="text-danger">*</span>Tên tuyến đường</label>
						<div class="form-group">
							<input type="text" name="distance_name" value="<?php echo ($this->input->post('distance_name') ? $this->input->post('distance_name') : $sdb_distance['distance_name']); ?>" class="form-control" id="distance_name" />
							<span class="text-danger"><?php echo form_error('distance_name');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="distance_details" class="control-label"><span class="text-danger">*</span>Mô tả</label>
						<div class="form-group">
							<input type="text" name="distance_details" value="<?php echo ($this->input->post('distance_details') ? $this->input->post('distance_details') : $sdb_distance['distance_details']); ?>" class="form-control" id="distance_details" />
							<span class="text-danger"><?php echo form_error('distance_details');?></span>
						</div>
					</div>
					<!-- <div class="col-md-6">
						<label for="distance_active" class="control-label"><span class="text-danger">*</span>Kích hoạt</label>
						<div class="form-group">
							<input type="text" name="distance_active" value="<?php echo ($this->input->post('distance_active') ? $this->input->post('distance_active') : $sdb_distance['distance_active']); ?>" class="form-control" id="distance_active" />
							<span class="text-danger"><?php echo form_error('distance_active');?></span>
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