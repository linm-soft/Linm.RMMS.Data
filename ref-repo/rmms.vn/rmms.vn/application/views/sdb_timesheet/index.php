<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Timesheets Listing</h3>
            	<div class="box-tools">
                    <a href="<?php echo site_url('sdb_timesheet/add'); ?>" class="btn btn-success btn-sm">Add</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>Timesheet Id</th>
						<th>User Id</th>
						<th>Timesheet Time Month</th>
						<th>Timesheet Day Checkin</th>
						<th>Timesheet Day Total</th>
						<th>Timesheet Createdate</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_timesheets as $s){ ?>
                    <tr>
						<td><?php echo $s['timesheet_id']; ?></td>
						<td><?php echo $s['user_id']; ?></td>
						<td><?php echo $s['timesheet_time_month']; ?></td>
						<td><?php echo $s['timesheet_day_checkin']; ?></td>
						<td><?php echo $s['timesheet_day_total']; ?></td>
						<td><?php echo $s['timesheet_createdate']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_timesheet/edit/'.$s['timesheet_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_timesheet/remove/'.$s['timesheet_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
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
