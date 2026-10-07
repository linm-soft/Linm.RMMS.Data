<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Task Type Listing</h3>
            	<div class="box-tools">
                    <a href="<?php echo site_url('sdb_task_type/add'); ?>" class="btn btn-success btn-sm">Add</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>Task Type Id</th>
						<th>Task Type Active</th>
						<th>Task Type Name</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_task_type as $s){ ?>
                    <tr>
						<td><?php echo $s['task_type_id']; ?></td>
						<td><?php echo $s['task_type_active']; ?></td>
						<td><?php echo $s['task_type_name']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_task_type/edit/'.$s['task_type_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_task_type/remove/'.$s['task_type_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
