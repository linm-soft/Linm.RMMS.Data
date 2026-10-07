<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Chỉnh sửa tài sản</h3>
			</div>
			<?php echo form_open('sdb_infrastructure/edit/'.$sdb_infrastructure['infrastructure_id']); ?>
			<div class="box-body">
				<div class="row clearfix">

					<div class="col-md-6">
						<label for="location_id" class="control-label"><span class="text-danger">*</span>Địa bàn</label>
						<div class="form-group">
							<select name="location_id" class="form-control">
								<option value="">Chọn địa bàn</option>
								<?php 
								foreach($all_sdb_location as $sdb_location)
								{
									$selected = ($sdb_location['location_id'] == $sdb_infrastructure['location_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_location['location_id'].'" '.$selected.'>'.$sdb_location['location_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('location_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="distance_id" class="control-label"><span class="text-danger">*</span>Tuyến đường</label>
						<div class="form-group">
							<select name="distance_id" class="form-control">
								<option value="">Chọn tuyến đường</option>
								<?php 
								foreach($all_sdb_distance as $sdb_distance)
								{
									$selected = ($sdb_distance['distance_id'] == $sdb_infrastructure['distance_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_distance['distance_id'].'" '.$selected.'>'.$sdb_distance['distance_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('distance_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="station_id" class="control-label"><span class="text-danger">*</span>Lý trình</label>
						<div class="form-group">
							<select name="station_id" class="form-control">
								<option value="">Chọn lý trình</option>
								<?php 
								foreach($all_sdb_stations as $sdb_station)
								{
									$selected = ($sdb_station['station_id'] == $sdb_infrastructure['station_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_station['station_id'].'" '.$selected.'>'.$sdb_station['station_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('station_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="infrastructure_name" class="control-label"><span class="text-danger">*</span>Tên tài sản</label>
						<div class="form-group">
							<input type="text" name="infrastructure_name" value="<?php echo ($this->input->post('infrastructure_name') ? $this->input->post('infrastructure_name') : $sdb_infrastructure['infrastructure_name']); ?>" class="form-control" id="infrastructure_name" />
							<span class="text-danger"><?php echo form_error('infrastructure_name');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="infrastructures_category_id" class="control-label"><span class="text-danger">*</span>Loại tài sản</label>
						<div class="form-group">
							<select name="infrastructures_category_id" class="form-control">
								<option value="">Chọn loại tài sản</option>
								<?php 
								foreach($all_infrastructures_category as $infrastructures_category)
								{
									$selected = ($infrastructures_category['infrastructures_category_id'] == $sdb_infrastructure['infrastructures_category_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$infrastructures_category['infrastructures_category_id'].'" '.$selected.'>'.$infrastructures_category['infrastructures_category_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('infrastructures_category_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="infrastructure_detail" class="control-label"><span class="text-danger">*</span>Mô tả tài sản</label>
						<div class="form-group">
							<textarea name="infrastructure_detail" class="form-control" id="infrastructure_detail"><?php echo ($this->input->post('infrastructure_detail') ? $this->input->post('infrastructure_detail') : $sdb_infrastructure['infrastructure_detail']); ?></textarea>
							<span class="text-danger"><?php echo form_error('infrastructure_detail');?></span>
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