<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Task Img Listing</h3>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>Task Img Id</th>
						<th>Task Img Link</th>
						<th>Task Id</th>
						<th>Task Detail Id</th>
						<th>Task Img Cretaedate</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_task_img as $s){ ?>
                    <tr>
						<td><?php echo $s['task_img_id']; ?></td>
						<td><?php echo $s['task_img_link']; ?></td>
						<td><?php echo $s['task_id']; ?></td>
						<td><?php echo $s['task_detail_id']; ?></td>
						<td><?php echo $s['task_img_cretaedate']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_task_img/edit/'.$s['task_img_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_task_img/remove/'.$s['task_img_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
