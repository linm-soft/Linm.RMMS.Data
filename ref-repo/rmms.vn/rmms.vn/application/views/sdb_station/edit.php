<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">Chỉnh sửa</h3>
            </div>
			<?php echo form_open('sdb_station/edit/'.$sdb_station['station_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<div class="form-group">
							<input type="checkbox" name="station_active" value="1" <?php echo ($sdb_station['station_active']==1 ? 'checked="checked"' : ''); ?> id='station_active' />
							<label for="station_active" class="control-label"><span class="text-danger">*</span>Kích hoạt</label>
							<span class="text-danger"><?php echo form_error('station_active');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="location_id" class="control-label"><span class="text-danger">*</span>Địa bàn</label>
						<div class="form-group">
							<select name="location_id" class="form-control">
								<option value="">Chọn địa bàn</option>
								<?php 
								foreach($all_sdb_location as $sdb_location)
								{
									$selected = ($sdb_location['location_id'] == $sdb_station['location_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_location['location_id'].'" '.$selected.'>'.$sdb_location['location_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('location_id');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="station_name" class="control-label"><span class="text-danger">*</span>Lý trình</label>
						<div class="form-group">
							<input type="text" name="station_name" value="<?php echo ($this->input->post('station_name') ? $this->input->post('station_name') : $sdb_station['station_name']); ?>" class="form-control" id="station_name" />
							<span class="text-danger"><?php echo form_error('station_name');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="station_note" class="control-label"><span class="text-danger">*</span>Ghi chú</label>
						<div class="form-group">
							<input type="text" name="station_note" value="<?php echo ($this->input->post('station_note') ? $this->input->post('station_note') : $sdb_station['station_note']); ?>" class="form-control" id="station_note" />
							<span class="text-danger"><?php echo form_error('station_note');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="station_location" class="control-label"><span class="text-danger">*</span>Vị trí</label>
						<div class="form-group">
							<input type="text" name="station_location" value="<?php echo ($this->input->post('station_location') ? $this->input->post('station_location') : $sdb_station['station_location']); ?>" class="form-control" id="station_location" />
							<span class="text-danger"><?php echo form_error('station_location');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="lenght" class="control-label"><span class="text-danger">*</span>Độ dài (m)</label>
						<div class="form-group">
							<input type="text" name="lenght" value="<?php echo ($this->input->post('lenght') ? $this->input->post('lenght') : $sdb_station['lenght']); ?>" class="form-control" id="lenght" />
							<span class="text-danger"><?php echo form_error('lenght');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="width" class="control-label"><span class="text-danger">*</span>Rộng (m)</label>
						<div class="form-group">
							<input type="text" name="width" value="<?php echo ($this->input->post('width') ? $this->input->post('width') : $sdb_station['width']); ?>" class="form-control" id="width" />
							<span class="text-danger"><?php echo form_error('width');?></span>
						</div>
					</div>
				<!-- 	<div class="col-md-6">
						<label for="start_lat" class="control-label"><span class="text-danger">*</span>Start Lat</label>
						<div class="form-group">
							<input type="text" name="start_lat" value="<?php echo ($this->input->post('start_lat') ? $this->input->post('start_lat') : $sdb_station['start_lat']); ?>" class="form-control" id="start_lat" />
							<span class="text-danger"><?php echo form_error('start_lat');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="start_long" class="control-label"><span class="text-danger">*</span>Start Long</label>
						<div class="form-group">
							<input type="text" name="start_long" value="<?php echo ($this->input->post('start_long') ? $this->input->post('start_long') : $sdb_station['start_long']); ?>" class="form-control" id="start_long" />
							<span class="text-danger"><?php echo form_error('start_long');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="end_lat" class="control-label"><span class="text-danger">*</span>End Lat</label>
						<div class="form-group">
							<input type="text" name="end_lat" value="<?php echo ($this->input->post('end_lat') ? $this->input->post('end_lat') : $sdb_station['end_lat']); ?>" class="form-control" id="end_lat" />
							<span class="text-danger"><?php echo form_error('end_lat');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="end_lng" class="control-label"><span class="text-danger">*</span>End Lng</label>
						<div class="form-group">
							<input type="text" name="end_lng" value="<?php echo ($this->input->post('end_lng') ? $this->input->post('end_lng') : $sdb_station['end_lng']); ?>" class="form-control" id="end_lng" />
							<span class="text-danger"><?php echo form_error('end_lng');?></span>
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