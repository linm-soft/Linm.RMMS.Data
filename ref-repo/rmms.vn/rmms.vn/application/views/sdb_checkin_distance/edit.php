<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">chỉnh sửa tuyến đường</h3>
			</div>
			<?php echo form_open('sdb_checkin_distance/edit/'.$sdb_checkin_distance['checkin_distance_id']); ?>
			<div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<div style="height: 400px" id="map"></div>

					</div>
					<div class="col-md-6">
						<div class="form-group">
							<input type="checkbox" name="checkin_distance_active" value="1" <?php echo ($sdb_checkin_distance['checkin_distance_active']==1 ? 'checked="checked"' : ''); ?> id='checkin_distance_active' />
							<label for="checkin_distance_active" class="control-label">Trạng thái</label>
						</div>
					</div>
					<div class="col-md-6">
						<label for="user_group_id" class="control-label">Địa bàn</label>
						<div class="form-group">
							<select name="location_id" class="form-control">
								<option value="">select location</option>
								<?php 
								foreach($all_location as $location)
								{
									$selected = ($location['location_id'] == $sdb_checkin_distance['location_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$location['location_id'].'" '.$selected.'>'.$location['location_name'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<label for="distance_id" class="control-label"><span class="text-danger">*</span>Tuyến đường</label>
						<div class="form-group">
							<select name="distance_id" class="form-control">
								<option value="">Chọn tuyến đường</option>
								<?php 
								foreach($all_sdb_distance as $sdb_distance)
								{
									$selected = ($sdb_distance['distance_id'] == $sdb_checkin_distance['distance_id']) ? ' selected="selected"' : "";

									echo '<option value="'.$sdb_distance['distance_id'].'" '.$selected.'>'.$sdb_distance['distance_name'].'</option>';
								} 
								?>
							</select>
							<span class="text-danger"><?php echo form_error('distance_id');?></span>
						</div>
					</div>

					<div class="col-md-6">
						<label for="checkin_distance_start_location" class="control-label"><span class="text-danger">*</span>Tạo điểm checkin</label>
						<div class="form-group">
							<input  id="searchTextField_3" type="text" size="50" name="list_point_checkin" value="" class="form-control" id="checkin_distance_start_location" />
							<span class="text-danger"><?php echo form_error('list_point_checkin');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="checkin_distance_start_location" class="control-label"><span class="text-danger">*</span>Point</label>
						<div class="form-group">
							<input type="hidden" name="checkin_distance_list_point" id="list_arr_point" value=""  />
							<div id="list_point" class="bg-success w-100">

							</div>
						</div>
					</div>
				<!-- 	<div class="col-md-6">
						<label for="checkin_distance_start_location" class="control-label"><span class="text-danger">*</span>Checkin Distance Start Location</label>
						<div class="form-group">
							<input id="searchTextField" type="text" name="checkin_distance_start_location" value="<?php echo ($this->input->post('checkin_distance_start_location') ? $this->input->post('checkin_distance_start_location') : $sdb_checkin_distance['checkin_distance_start_location']); ?>" class="form-control" id="checkin_distance_start_location" />
							<span class="text-danger"><?php echo form_error('checkin_distance_start_location');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="checkin_distance_end_location" class="control-label"><span class="text-danger">*</span>Checkin Distance End Location</label>
						<div class="form-group">
							<input id="searchTextField_2" type="text" name="checkin_distance_end_location" value="<?php echo ($this->input->post('checkin_distance_end_location') ? $this->input->post('checkin_distance_end_location') : $sdb_checkin_distance['checkin_distance_end_location']); ?>" class="form-control" id="checkin_distance_end_location" />
							<span class="text-danger"><?php echo form_error('checkin_distance_end_location');?></span>
						</div>
					</div> -->
					

<!-- 
					<div class="col-md-6">
						<label for="checkin_distance_start_lat" class="control-label">Checkin Distance Start Lat</label>
						<div class="form-group">
							<input type="text" id="start_lat" name="checkin_distance_start_lat" value="<?php echo ($this->input->post('checkin_distance_start_lat') ? $this->input->post('checkin_distance_start_lat') : $sdb_checkin_distance['checkin_distance_start_lat']); ?>" class="form-control" id="checkin_distance_start_lat" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="checkin_distance_start_long" class="control-label">Checkin Distance Start Long</label>
						<div class="form-group">
							<input type="text" id="start_lng" name="checkin_distance_start_long" value="<?php echo ($this->input->post('checkin_distance_start_long') ? $this->input->post('checkin_distance_start_long') : $sdb_checkin_distance['checkin_distance_start_long']); ?>" class="form-control" id="checkin_distance_start_long" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="checkin_distance_end_lat"  class="control-label">Checkin Distance End Lat</label>
						<div class="form-group">
							<input type="text" id="end_lat" name="checkin_distance_end_lat" value="<?php echo ($this->input->post('checkin_distance_end_lat') ? $this->input->post('checkin_distance_end_lat') : $sdb_checkin_distance['checkin_distance_end_lat']); ?>" class="form-control" id="checkin_distance_end_lat" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="checkin_distance_long" class="control-label">Checkin Distance Long</label>
						<div class="form-group">
							<input type="text" id="end_lng" name="checkin_distance_long" value="<?php echo ($this->input->post('checkin_distance_long') ? $this->input->post('checkin_distance_long') : $sdb_checkin_distance['checkin_distance_long']); ?>" class="form-control" id="checkin_distance_long" />
						</div>
					</div> -->
				</div>
			</div>
		<!-- 	<div class="box-header bg-info with-border">
				<h3 class="box-title">Các điểm checkIn</h3>
			</div> -->
			
			<!-- <div class="box-body">
				<div class="row clearfix">
					<div class="col-md-6">
						<label for="checkin_distance_start_location" class="control-label"><span class="text-danger">*</span>Tạo điểm checkin</label>
						<div class="form-group">
							<input  id="searchTextField_3" type="text" size="50" name="list_point_checkin" value="" class="form-control" id="checkin_distance_start_location" />
							<span class="text-danger"><?php echo form_error('list_point_checkin');?></span>
						</div>
					</div>
					<div class="col-md-6">
						<label for="checkin_distance_start_location" class="control-label"><span class="text-danger">*</span>Point</label>
						<div class="form-group">
							<input type="hidden" name="checkin_distance_list_point" id="list_arr_point" value=""  />
							<div id="list_point" class="bg-success w-100">

							</div>
						</div>
					</div>

				</div>
			</div> -->


			<div class="box-footer">
				<button type="submit" class="btn btn-success">
					<i class="fa fa-check"></i> Save
				</button>
			</div>				
			<?php echo form_close(); ?>
		</div>
	</div>
</div>


<script>
	var map;

	async  function initMap() {

		var bounds  = new google.maps.LatLngBounds();
		// let start_lat = parseFloat($('#start_lat').val())
		// let start_lng = parseFloat($('#start_lng').val())
		// let end_lat = parseFloat($('#end_lat').val())
		// let end_lng = parseFloat($('#end_lng').val())

		// var start_LatLng = {lat:start_lat,lng:start_lng}
		// var end_LatLng = {lat:end_lat,lng:end_lng}

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat:10.798060,lng:106.672740},
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

		// var marker_start = new google.maps.Marker({
		// 	position: start_LatLng,
		// 	map: map,
		// 	// draggable:true,
		// });

		// var marker_end = new google.maps.Marker({
		// 	position: end_LatLng,
		// 	map: map,
		// 	// draggable:true,
		// });

		// loc = new google.maps.LatLng(marker_start.position.lat(), marker_start.position.lng());
		// loc2 = new google.maps.LatLng(marker_end.position.lat(), marker_end.position.lng());
		// bounds.extend(loc);
		// bounds.extend(loc2);
		// map.fitBounds(bounds);
		// map.panToBounds(bounds);

			// autocomlect
			// initialize(map);

			// create show point and create point
			let array_list_data_start =  JSON.parse('<?php echo json_encode($list_point_checkin)?>')
			let arrr = [];
			array_list_data_start.forEach(ele => {
				arrr.push({
					id : ele.c_distance_c_checkin_id,
					name : ele.c_distance_c_checkin_location,
					lat : ele.c_distance_c_checkin_lat,
					lng : ele.c_distance_c_checkin_long
				})
				new google.maps.Marker({
					position: { lat: parseFloat(ele.c_distance_c_checkin_lat), lng: parseFloat(ele.c_distance_c_checkin_long) },
					map: map,
					// label:'p',
					icon: {
						url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
					}
					// draggable:true,
				});

			})
			
			// console.log(arrr)
			show(arrr);
			create_point_checkin(map,bounds)
			sessionStorage.setItem('list_point',JSON.stringify(arrr))
		}

		function get_address()
		{
			return new Promise((res, err)=>{
				$.ajax({
					url : "https://maps.googleapis.com/maps/api/geocode/json?latlng=10.798060,106.672740&key=AIzaSyBUqJrD80qnxzg3_L99iwCcba8g9xfzOrQ",
					async:false
					,
					success : function (result) {
						res(result.results[0].formatted_address)
					},
					error: function(error){
						res("Không tìm thấy địa chỉ")
					}
				})
			})
		}


		function create_point_checkin(map,bounds)
		{
			sessionStorage.clear()
			var input = document.getElementById('searchTextField_3');
			var autocomplete_point = new google.maps.places.Autocomplete(input);
			var array_list = [];
		// var array_list_data = [];
		let array_list_data_start =  JSON.parse('<?php echo json_encode($list_point_checkin)?>')
		let array_list_data = [];
		array_list_data_start.forEach(ele => {
			array_list_data.push({
				id : ele.c_distance_c_checkin_id,
				name : ele.c_distance_c_checkin_location,
				lat : ele.c_distance_c_checkin_lat,
				lng : ele.c_distance_c_checkin_long
			})

			loc = new google.maps.LatLng(ele.c_distance_c_checkin_lat, ele.c_distance_c_checkin_long);
			bounds.extend(loc);
			map.fitBounds(bounds);
			map.panToBounds(bounds);
		})

		// map.fitBounds(bounds);
		// map.panToBounds(bounds);

		var i = 0;
		google.maps.event.addListener(autocomplete_point, 'place_changed', function () {
			i++
			var place = autocomplete_point.getPlace();
			let point_name = place.name;
			let point_lat = place.geometry.location.lat();
			let point_lng = place.geometry.location.lng();

			if(sessionStorage.getItem('list_point') != null ) {
				array_list_data = JSON.parse(sessionStorage.getItem('list_point'))
			}
			

			array_list_data.push({
				id:i,
				name:point_name,
				lat:point_lat,
				lng:point_lng
			})

			sessionStorage.setItem('list_point',JSON.stringify(array_list_data))

			var marker_point_lnglat = {lat:point_lat , lng: point_lng}

			var marker = new google.maps.Marker({
				position: marker_point_lnglat,
				map: map,
				// label:'p',
				icon: {
					url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
				}
			});

			loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
			bounds.extend(loc);
			map.fitBounds(bounds);
			map.panToBounds(bounds);

			$("#searchTextField_3").val("")
			$("#list_arr_point").val(JSON.stringify(array_list_data))
			show(array_list_data);
			
		});
	}

	function remove(id){
		let arr = JSON.parse(sessionStorage.getItem('list_point'));
		let uu = arr.filter(ele => {
			return ele.id != id
		})
		sessionStorage.setItem('list_point',JSON.stringify(uu))
		show(uu);
		$("#list_arr_point").val(JSON.stringify(uu))
		

	}

	function show(array)
	{
		$("#list_point").html("")
		array.forEach(ele => {
			$("#list_point").append("<div onclick='remove("+ele.id+")' style='font-size: 1em;'  class='label label-success p-3'>"+ele.name+" <i class='fa fa-times '></i></div> ")	
		})
	}

	function addMarker(location) {
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
		markers.push(marker);


	}

</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7SkMn4g-xAtNBiaHlHQerWPFI68mwVqk&libraries=places&callback=initMap"
async defer></script>