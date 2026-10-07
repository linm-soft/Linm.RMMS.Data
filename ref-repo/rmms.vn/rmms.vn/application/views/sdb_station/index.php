<div class="row p-2">
	<div class="col-md-12">
		<div class="box">
			<div class="box-header">
				<h3 class="box-title">Quản lý lý trình</h3>
				<div class="box-tools">
					<!-- <a href="<?php echo site_url('sdb_station/add'); ?>" class="btn btn-success btn-sm">Thêm</a>  -->
				</div>
			</div>
			<div class="box-body">
				<table class="table table-striped">
					<tr>
						<!-- <th> Id</th> -->
						<!-- <th>Kích hoạt</th> -->
						<th>Hình ảnh</th>
						<th>Trạng thái</th>
						<th>Tuyến đường</th>
						<th>Địa bàn</th>
						<th>Tên lý trình</th>
						<th>Ghi chú</th>
						<th>Vị trí</th>
						<th>Chiều dài (m)</th>
						<th>Chiều rộng (m)</th>
						<th>Actions</th>
					</tr>
					<?php foreach($sdb_stations as $s){ ?>
						<tr>
					
							<td>
								<?php if(!empty($s['station_img'])) {?>
									<img src="<?php echo base_url($s['station_img']) ; ?>" width="100px" />
								<?php } ?>
							</td>
							<td><?php echo $s['station_status_name']; ?></td>
							<td><?php echo $s['location_name']; ?></td>
							<td><?php echo $s['distance_name']; ?></td>
							<td><?php echo $s['station_name']; ?></td>
							<td><?php echo $s['station_note']; ?></td>
							<td><?php echo $s['station_location']; ?></td>
							<td><?php echo $s['lenght']; ?></td>
							<td><?php echo $s['width']; ?></td>
							<td>
								<!-- <a href="<?php echo base_url('sdb_station/edit/'.$s['station_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Sửa</a>  -->
								<!-- <a href="<?php echo site_url('sdb_station/remove/'.$s['station_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Xóa</a>  -->
							</td>
						</tr>
					<?php } ?>
				</table>
				<div class="pull-right">
					<?php 
					echo $this->pagination->create_links();
					 ?>                    
				</div>                
			</div>
		</div>
	</div>
</div>
