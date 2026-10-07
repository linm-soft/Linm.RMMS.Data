<div class="row p-2">
	<div class="col-md-12">
		<div class="box">
			<div class="box-header">
				<h3 class="box-title"><?=Lang('checkin_distance_page_title')?></h3>
				<div class="box-tools">
					<a href="<?php echo site_url('sdb_checkin_distance/add'); ?>" class="btn btn-success btn-sm">Thêm</a> 
				</div>
			</div>
			<div class="box-body">
				<table class="table table-striped">
					<tr>
						<!-- <th> Id</th> -->
						<th><?=Lang('checkin_distance_tbl_status_title')?></th>
						
						<th><?=Lang('checkin_distance_tbl_distance_title')?></th>
						<th><?=Lang('checkin_distance_tbl_location_title')?></th>
						<th><?=Lang('checkin_distance_tbl_date_title')?></th>
	
						<th>Actions</th>
					</tr>
					<?php foreach($sdb_checkin_distance as $c){ ?>
						<tr>
							<!-- <td><?php echo $c['checkin_distance_id']; ?></td> -->
							<td>
								<?php 
								if($c['checkin_distance_active'] == 1){
									echo "<label class='label label-success'>Hoạt động</label>";
								} else{
									echo "<label class='label label-danger'>Khóa</label>";
								}
								?>
							</td>
							<td><?php echo $c['checkin_distance_name']; ?></td>
							<td><?php echo $c['location_name']; ?></td>
							 <!-- <td><?php echo $c['checkin_distance_start_location']; ?></td>
							 <td><?php echo $c['checkin_distance_end_location']; ?></td> -->
							<td><?php echo $c['checkin_distance_create_date']; ?></td>
							<td>
								<!-- <a href="<?php echo site_url('sdb_checkin_distance/edit/'.$c['checkin_distance_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Sửa</a> 
								 <a href="<?php echo site_url('sdb_checkin_distance/remove/'.$c['checkin_distance_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>  -->
							</td>
						</tr>
					<?php } ?>
				</table>

			</div>
		</div>
	</div>
</div>
