<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Chỉnh sửa người dùng</h3>
			</div>
			<?php echo form_open_multipart('sdb_user/edit/'.$sdb_user['user_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="user_type_id" class="control-label">Chức vụ</label>
						<div class="form-group">
							<select name="user_type_id" class="form-control">
								<option value=""></option>
								<?php 
								foreach($all_sdb_user_type as $sdb_user_type)
								{
									$selected = ($sdb_user_type['user_type_id'] == $sdb_user['user_type_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user_type['user_type_id'].'" '.$selected.'>'.$sdb_user_type['user_type_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_group_id" class="control-label">Tổ</label>
						<div class="form-group">
							<select name="user_group_id" class="form-control">
								<option value=""></option>
								<?php 
								foreach($all_sdb_user_group as $sdb_user_group)
								{
									$selected = ($sdb_user_group['user_group_id'] == $sdb_user['user_group_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_user_group['user_group_id'].'" '.$selected.'>'.$sdb_user_group['user_group_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>

					<div class="col-md-6">
						<label for="user_fullname" class="control-label"><span class="text-danger">*</span>Họ tên</label>
						<div class="form-group">
							<input type="text" name="user_fullname" value="<?php echo ($this->input->post('user_fullname') ? $this->input->post('user_fullname') : $sdb_user['user_fullname']); ?>" class="form-control" id="user_fullname" />
							<span class="text-danger"><?php echo form_error('user_fullname');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="user_name" class="control-label"><span class="text-danger">*</span>Tài khoản</label>
						<div class="form-group">
							<input disabled type="text"  value="<?php echo ($this->input->post('user_name') ? $this->input->post('user_name') : $sdb_user['user_name']); ?>" class="form-control" id="user_name" />
						</div>
					</div>

					<div class="col-md-6">
						<label for="user_pass" class="control-label"><span class="text-danger"></span>Mật khẩu</label>
						<div class="form-group">
							<input type="text" name="user_pass"  value="" class="form-control" />
							<span class="text-danger"><?php echo form_error('user_pass');?></span>
						</div>
					</div>
					
					<div class="col-md-6">
						<label for="re_user_pass" class="control-label"><span class="text-danger"></span>Nhập lại mật khẩu</label>
						<div class="form-group">
							<input type="text"  value="" class="form-control"  name="re_user_pass" id="re_user_pass" />
							<span class="text-danger"><?php echo form_error('re_user_pass');?></span>
						</div>
					</div>
					
					<div class="col-md-6">
						<label for="user_avatar" class="control-label"><span class="text-danger"></span>Hình đại diện</label>
						<div class="form-group">
							<input type="file" name="user_avatar"  class="form-control" id="user_avatar"  />
							<span class="text-danger"><?php echo form_error('user_avatar[name]');?></span>
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