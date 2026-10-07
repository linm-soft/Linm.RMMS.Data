<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Comment Project Listing</h3>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>Comment Project Id</th>
						<th>User Group Id</th>
						<th>User Id</th>
						<th>Sub Project Id</th>
						<th>Project Id</th>
						<th>Comment Project Create Date</th>
						<th>Comment Project Content</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_comment_project as $s){ ?>
                    <tr>
						<td><?php echo $s['comment_project_id']; ?></td>
						<td><?php echo $s['user_group_id']; ?></td>
						<td><?php echo $s['user_id']; ?></td>
						<td><?php echo $s['sub_project_id']; ?></td>
						<td><?php echo $s['project_id']; ?></td>
						<td><?php echo $s['comment_project_create_date']; ?></td>
						<td><?php echo $s['comment_project_content']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_comment_project/edit/'.$s['comment_project_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_comment_project/remove/'.$s['comment_project_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                <div class="pull-right">
                    <?php echo $this->pagination->create_links(); ?>                    
                </div>                
            </div>
        </div>
    </div>
</div>
