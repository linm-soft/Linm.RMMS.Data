<div class="row p-2">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Quản lý cấp người dùng</h3>
            	<div class="box-tools">
                    <a href="<?php echo site_url('sdb_user_type/add'); ?>" class="btn btn-success btn-sm">Thêm</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<!-- <th>User Type Id</th> -->
						<th>Tên Cấp người dùng </th>
						<th>Level</th>
						<!-- <th>User Type Active</th> -->
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_user_type as $s){ ?>
                    <tr>
						<!-- <td><?php echo $s['user_type_id']; ?></td> -->
						<td><?php echo $s['user_type_name']; ?></td>
						 <td><?php echo $s['user_type_level']; ?></td> 
						<!-- <td><?php echo $s['user_type_active']; ?></td> -->
						<td>
                            <a href="<?php echo site_url('sdb_user_type/edit/'.$s['user_type_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                           <!--  <a href="<?php echo site_url('sdb_user_type/remove/'.$s['user_type_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a> -->
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
