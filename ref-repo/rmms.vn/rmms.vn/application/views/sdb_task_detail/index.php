<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Task Details Listing</h3>
            	<div class="box-tools">
                    <a href="<?php echo site_url('sdb_task_detail/add'); ?>" class="btn btn-success btn-sm">Add</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>Task Details Id</th>
						<th>Task Id</th>
						<th>Task User Id Receive</th>
						<th>Task Details Content</th>
						<th>Infrastructure Id</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_task_details as $s){ ?>
                    <tr>
						<td><?php echo $s['task_details_id']; ?></td>
						<td><?php echo $s['task_id']; ?></td>
						<td><?php echo $s['task_user_id_receive']; ?></td>
						<td><?php echo $s['task_details_content']; ?></td>
						<td><?php echo $s['infrastructure_id']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_task_detail/edit/'.$s['task_details_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_task_detail/remove/'.$s['task_details_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
