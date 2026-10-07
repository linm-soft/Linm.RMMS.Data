<div class="row p-2">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Quản lý người dùng</h3>
            	<div class="box-tools">
                    <a href="<?php echo site_url('sdb_user/add'); ?>" class="btn btn-success btn-sm">Thêm</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>Chức vụ</th>
                        <th>Tổ</th>
						<th>Avatar</th>
						<th>Họ tên</th>
						<th>Tài khoản</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_user as $s){ ?>
                    <tr>
						
						<td><?php echo $s['user_type_name']; ?></td>
                        <td><?php echo $s['user_group_name']; ?></td>
						<td><img width="40px" height="40px" src=" <?= base_url($s['user_avatar']) ?>"></td>
						<td><?php echo $s['user_fullname']; ?></td>
						<td><?php echo $s['user_name']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_user/edit/'.$s['user_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Sửa</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
