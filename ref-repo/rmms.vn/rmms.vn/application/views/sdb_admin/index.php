<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Admin Listing</h3>
            	<div class="box-tools">
                    <a href="<?php echo site_url('sdb_admin/add'); ?>" class="btn btn-success btn-sm">Add</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>User Id</th>
						<th>Admin Pass</th>
						<th>Admin Name</th>
						<th>User Token</th>
						<th>Actions</th>
                    </tr>
					<?php
					/** @var  $sdb_admin */
					foreach($sdb_admin as $s){
						?>
                    <tr>
						<td><?php echo $s['user_id']; ?></td>
						<td><?php echo $s['admin_pass']; ?></td>
						<td><?php echo $s['admin_name']; ?></td>
						<td><?php echo $s['user_token']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_admin/edit/'.$s['user_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_admin/remove/'.$s['user_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
