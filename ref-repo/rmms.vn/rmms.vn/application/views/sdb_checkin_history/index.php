<div class="row p-2">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Lịch sử checkin</h3>
            </div>
            <div class="box-body table-responsive">
                <table class="table table-striped">
                    <tr>
						<!-- <th> Id</th> -->
						<!-- <th>User Group Id</th> -->
						<th>Cán bộ</th>
						<th>Thời gian checkin</th>
                        <th>Địa điểm checkin</th>
						<th>Tuyến đường checkin</th>
						<!-- <th>Checkin Id</th> -->
						<!-- <th>Checkin History Lat</th>
						<th>Checkin History Long</th> -->
						<th>Trạng thái checkin</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_checkin_history as $s){ ?>
                    <tr>
						<!-- <td><?php echo $s['checkin_history_id']; ?></td> -->
						
						<td><?php echo $s['user_name']; ?></td>
						<td><?php echo $s['checkin_time']; ?></td>
                        <td><?php echo $s['c_distance_c_checkin_location']; ?></td>
						<td><?php echo $s['checkin_distance_name']; ?></td>
						
						<td><?php echo $s['checkin_status_name']; ?></td>
						<td>
                            <!-- <a href="<?php echo site_url('sdb_checkin_history/edit/'.$s['checkin_history_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_checkin_history/remove/'.$s['checkin_history_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a> -->
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
