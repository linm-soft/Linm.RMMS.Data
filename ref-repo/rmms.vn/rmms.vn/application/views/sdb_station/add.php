<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Tạo lý trình</h3>
			</div>
			<?php if(isset($error)) { echo $error['error'] ; } ?>
			<?php echo form_open_multipart('sdb_station/add'); ?>
			<div class="box-body">
				<div class="row clearfix">

					<div class="col-md-6">
						<label for="location_id" class="control-label"><span class="text-danger">*</span>Địa bàn</label>
						<div class="form-group">
							<select onChange="get_distance()" name="location_id" id="location_id" class="form-control">
								<option value="">Chọn địa bàn</option>
								<?php 
								foreach($all_sdb_location as $sdb_location)
								{
									$selected = ($sdb_location['location_id'] == $this->input->post('location_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_location['location_id'].'" '.$selected.'>'.$sdb_location['location_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('location_id');?></span>
						</div>
					</div>


					<div class="col-md-6">
						<label for="distance_id"  class="control-label"><span class="text-danger">*</span>Tuyến đường</label>
						<div class="form-group">
							<select <?= empty($this->input->post('distance_id')) ? 'disabled=""' : ''  ?> name="distance_id" id="distance_id" class="form-control">
								<option value="">Chọn tuyến đường</option>
								<?php 
								foreach($all_sdb_distance as $sdb_distance)
								{
									$selected = ($sdb_distance['distance_id'] == $this->input->post('distance_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_distance['distance_id'].'" '.$selected.'>'.$sdb_distance['distance_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('distance_id');?></span>
						</div>
					</div>


					<div class="col-md-6">
						<label for="station_status_id" class="control-label"><span class="text-danger">*</span>Trạng thái</label>
						<div class="form-group">
							<select name="station_status_id" class="form-control">
								<option value="">Trạng thái</option>
								<?php 
								foreach($all_sdb_station_status as $sdb_station_status)
								{
									$selected = ($sdb_station_status['station_status_id'] == $this->input->post('station_status_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_station_status['station_status_id'].'" '.$selected.'>'.$sdb_station_status['station_status_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('station_status_id');?></span>
						</div>
					</div>


					<div class="col-md-6">
						<label for="station_name" class="control-label"><span class="text-danger">*</span>Tên lý trình</label>
						<div class="form-group">
							<input type="text" name="station_name" value="<?php echo $this->input->post('station_name'); ?>" class="form-control" id="station_name" />
							<span class="text-danger"><?php echo form_error('station_name');?></span>
						</div>
					</div>



					<div class="col-md-6">
						<label for="station_img" class="control-label"><span class="text-danger"></span>Hình ảnh</label>
						<div class="form-group">
							<input type="file" name="station_img"  class="form-control" id="station_img"  />
							<span class="text-danger"><?php echo form_error('station_img');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="station_note" class="control-label"><span class="text-danger">*</span>Ghi chú</label>
						<div class="form-group">
							<input type="text" name="station_note" value="<?php echo $this->input->post('station_note'); ?>" class="form-control" id="station_note" />
							<span class="text-danger"><?php echo form_error('station_note');?></span>
						</div>
					</div>


			<!-- 		<div class="col-md-6">
						<label for="station_location" class="control-label"><span class="text-danger">*</span>Vị trí</label>
						<div class="form-group">
							<input type="text" name="station_location" value="<?php echo $this->input->post('station_location'); ?>" class="form-control" id="station_location" />
							<span class="text-danger"><?php echo form_error('station_location');?></span>
						</div>
					</div> -->
					
					<div class="col-md-6">
						<label for="lenght" class="control-label"><span class="text-danger"></span>Chiều dài</label>
						<div class="form-group">
							<input type="text" name="lenght" value="<?php echo $this->input->post('lenght'); ?>" class="form-control" id="lenght" />
							<span class="text-danger"><?php echo form_error('lenght');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="width" class="control-label"><span class="text-danger"></span>Chiều rộng</label>
						<div class="form-group">
							<input type="text" name="width" value="<?php echo $this->input->post('width'); ?>" class="form-control" id="width" />
							<span class="text-danger"><?php echo form_error('width');?></span>
						</div>
					</div>
					
					<div class="col-md-6">
						<label for="km_start" class="control-label"><span class="text-danger"></span>Km bắt đầu</label>
						<div class="form-group">
							<input type="text" name="km_start" value="<?php echo $this->input->post('km_start'); ?>" class="form-control" id="km_start" />
							<span class="text-danger"><?php echo form_error('km_start');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="km_end" class="control-label"><span class="text-danger"></span>Km kết thúc</label>
						<div class="form-group">
							<input type="text" name="km_end" value="<?php echo $this->input->post('km_end'); ?>" class="form-control" id="km_end" />
							<span class="text-danger"><?php echo form_error('km_end');?></span>
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