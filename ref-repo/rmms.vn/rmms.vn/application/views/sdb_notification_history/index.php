<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Notification History Listing</h3>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>Notification History Id</th>
						<th>Notification Type Id</th>
						<th>User Group Id</th>
						<th>User Id</th>
						<th>Notification History Detail</th>
						<th>User Id Create</th>
						<th>Notification History Title</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_notification_history as $s){ ?>
                    <tr>
						<td><?php echo $s['notification_history_id']; ?></td>
						<td><?php echo $s['notification_type_id']; ?></td>
						<td><?php echo $s['user_group_id']; ?></td>
						<td><?php echo $s['user_id']; ?></td>
						<td><?php echo $s['notification_history_detail']; ?></td>
						<td><?php echo $s['user_id_create']; ?></td>
						<td><?php echo $s['notification_history_title']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_notification_history/edit/'.$s['notification_history_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_notification_history/remove/'.$s['notification_history_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
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
