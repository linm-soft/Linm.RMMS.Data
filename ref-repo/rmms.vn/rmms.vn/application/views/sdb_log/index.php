<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Log Listing</h3>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>Log Id</th>
						<th>Log Name</th>
						<th>User Id</th>
						<th>Log Create Date</th>
						<th>Log Detail</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_log as $s){ ?>
                    <tr>
						<td><?php echo $s['log_id']; ?></td>
						<td><?php echo $s['log_name']; ?></td>
						<td><?php echo $s['user_id']; ?></td>
						<td><?php echo $s['log_create_date']; ?></td>
						<td><?php echo $s['log_detail']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_log/edit/'.$s['log_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_log/remove/'.$s['log_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
