<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Thêm Người dùng</h3>
			</div>
			<?php echo form_open_multipart('sdb_user/add');  ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="user_type_id" class="control-label"><span class="text-danger">*</span>Chọn chức vụ</label>
						<div class="form-group">
							<select name="user_type_id" class="form-control">
								<option value="">Chức vụ</option>
								<?php 
								foreach($all_sdb_user_type as $sdb_user_type)
								{
									$selected = ($sdb_user_type['user_type_id'] == $this->input->post('user_type_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user_type['user_type_id'].'" '.$selected.'>'.$sdb_user_type['user_type_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_group_id" class="control-label">Chọn tổ</label>
						<div class="form-group">
							<select name="user_group_id" class="form-control">
								<option value="">Tổ</option>
								<?php 
								foreach($all_sdb_user_group as $sdb_user_group)
								{
									$selected = ($sdb_user_group['user_group_id'] == $this->input->post('user_group_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user_group['user_group_id'].'" '.$selected.'>'.$sdb_user_group['user_group_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_fullname" class="control-label"><span class="text-danger">*</span>Họ tên</label>
						<div class="form-group">
							<input type="text" name="user_fullname" value="<?php echo $this->input->post('user_fullname'); ?>" class="form-control" id="user_fullname" />
							<span class="text-danger"><?php echo form_error('user_fullname');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_name" class="control-label"><span class="text-danger">*</span>Tài khoản</label>
						<div class="form-group">
							<input type="text" name="user_name" value="<?php echo $this->input->post('user_name'); ?>" class="form-control" id="user_name" />
							<span class="text-danger"><?php echo form_error('user_name');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_pass" class="control-label"><span class="text-danger">*</span>Mật khẩu</label>
						<div class="form-group">
							<input type="text" name="user_pass" value="<?php echo $this->input->post('user_pass'); ?>" class="form-control" id="user_pass" />
							<span class="text-danger"><?php echo form_error('user_pass');?></span>
						</div>
					</div>
									
				<div class="col-md-6">
				  <label for="user_avatar" class="control-label"><span class="text-danger"></span>Hình đại diện</label>
				  <div class="form-group">
				   <input type="file" name="user_avatar"  class="form-control" id="user_avatar"  />
				   <span class="text-danger"><?php echo form_error('user_avatar[name]');?></span>
				 </div>
				</div>
					<div class="col-md-6">
						<label for="location_id" class="control-label">Địa bàn</label>
						<div class="form-group">
							<select name="location_id" class="form-control">
								<option value="">Địa bàn</option>
								<?php 
								foreach($all_sdb_location as $location)
								{
									$selected = ($location['location_id'] == $this->input->post('location_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$location['location_id'].'" '.$selected.'>'.$location['location_name'].'</option>';
								} 
								?>
							</select>
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