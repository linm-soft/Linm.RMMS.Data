<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">C Distance C Checkin Listing</h3>
            	<div class="box-tools">
                    <a href="<?php echo site_url('c_distance_c_checkin/add'); ?>" class="btn btn-success btn-sm">Add</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>C Distance C checkin Id</th>
						<th>Checkin Distance Id</th>
						<th>C Distance C checkin Location</th>
						<th>C Distance C checkin Lat</th>
						<th>C Distance C checkin Long</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_c_distance_c_checkin as $c){ ?>
                    <tr>
						<td><?php echo $c['c_distance_c_checkin_id']; ?></td>
						<td><?php echo $c['checkin_distance_id']; ?></td>
						<td><?php echo $c['c_distance_c_checkin_location']; ?></td>
						<td><?php echo $c['c_distance_c_checkin_lat']; ?></td>
						<td><?php echo $c['c_distance_c_checkin_long']; ?></td>
						<td>
                            <a href="<?php echo site_url('c_distance_c_checkin/edit/'.$c['c_distance_c_checkin_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('c_distance_c_checkin/remove/'.$c['c_distance_c_checkin_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>