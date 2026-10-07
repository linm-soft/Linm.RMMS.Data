<div class="row p-2">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Quản lý tổ</h3>
            	<div class="box-tools">
                    <a href="<?php echo site_url('sdb_user_group/add'); ?>" class="btn btn-success btn-sm">Add</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<!-- <th>User Group Id</th> -->
						<th>Tổ</th>
						<!-- <th>User Group Slug</th> -->
						 <th>Trạng thái</th> 
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_user_group as $s){ ?>
                    <tr>
						<!-- <td><?php echo $s['user_group_id']; ?></td> -->
						<td><?php echo $s['user_group_name']; ?></td>
						<!-- <td><?php echo $s['user_group_slug']; ?></td> -->
						<td>
                                <?php 
                                if($s['user_group_active'] == 1){
                                    echo "<label class='label label-success'>Hoạt động</label>";
                                } else{
                                    echo "<label class='label label-danger'>Khóa</label>";
                                }
                                ?>
                            </td>
						<td>
                            <a href="<?php echo site_url('sdb_user_group/edit/'.$s['user_group_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <!-- <a href="<?php echo site_url('sdb_user_group/remove/'.$s['user_group_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a> -->
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
