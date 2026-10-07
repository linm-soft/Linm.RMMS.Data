<div class="full-height" style="position: relative;">
	<div id='map' style="height: 100%; width: 100%;"></div>
	<div class="box-filed">
		<div class="box box-default ">

			<div class="box-header with-border">
				<h5 class="box-title ">Tạo điểm</h5>
				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i>
					</button>
				</div>
			</div>

			<div class="box-body" >

				<?php echo form_open('sdb_checkin_distance/add'); ?>
				<div class="box-body">
					<div class="row clearfix">

						<div class="col-md-12">
							<label for="user_group_id" class="control-label"><span class="text-danger">*</span>Địa bàn</label>
							<div class="form-group">
								<select onchange="get_distance()" id="location_id" name="location_id" class="form-control">
									<option value="">Chọn địa bàn(khu vực)</option>
									<?php 
									foreach($all_sdb_location as $location)
									{
										$selected = ($location['location_id'] == $this->input->post('location_id')) ? ' selected="selected"' : "";

										echo '<option data-point= '.$location['location_point'].' value="'.$location['location_id'].'" '.$selected.'>'.$location['location_name'].'</option>';
									}
									?>
								</select>
							</div>
						</div>

						<div class="col-md-12">
							<label for="user_group_id" class="control-label"><span class="text-danger">*</span>Tuyến đường (quốc lộ)</label>
							<div class="form-group">
								<select disabled=""  onchange="get_station()" name="distance_id" id='distance_id' class="form-control" >
									<option value="">Chọn tuyến đường</option>
								</select>
							</div>
						</div>

				<!-- 		<div class="col-md-12">
							<label for="station_id" class="control-label"><span class="text-danger"></span>Thuộc lý trình</label>
							<div class="form-group">
								<select name="station_id" id="station_id" disabled="" class="form-control">
									<option value="">Lý trình</option>
									<?php 
									foreach($all_sdb_stations as $sdb_station)
									{
										$selected = ($sdb_station['station_id'] == $this->input->post('station_id')) ? ' selected="selected"' : "";

										echo '<option value="'.$sdb_station['station_id'].'" '.$selected.'>'.$sdb_station['station_name'].'</option>';
									} 
									?>
								</select>
								<span class="text-danger"><?php echo form_error('station_id');?></span>
							</div>
						</div> -->

						<div class="col-md-12">
							<label for="checkin_distance_name" class="control-label"><span class="text-danger">*</span>Tên đoạn đường (địa danh) checkin</label>
							<div class="form-group">
								<input required type="text" name="checkin_distance_name" value="<?php echo $this->input->post('checkin_distance_name'); ?>" class="form-control" id="checkin_distance_name" />
								<span class="text-danger"><?php echo form_error('checkin_distance_name');?></span>
							</div>
						</div>



						<div class="col-md-12">
							<label for="checkin_distance_start_location" class="control-label"><span class="text-danger">*</span>Các điểm checkin</label>
							<div class="form-group">
								<input  id="searchTextField_3" type="text" size="50" name="list_point_checkin" value="" class="form-control" id="checkin_distance_start_location" />
								<span class="text-danger"><?php echo form_error('list_point_checkin');?></span>
							</div>
						</div>
						<div class="col-md-12">
							<label for="checkin_distance_start_location" class="control-label"><span class="text-danger">*</span>DS Các điểm checkin </label>
							<div class="form-group">
								<input type="hidden" name="checkin_distance_list_point" id="list_arr_point" value=""  />
								<div id="list_point" class="bg-success w-100">

								</div>
							</div>
						</div>

					</div>
				</div>

				<div class="box-footer">
					<button type="submit" class="btn btn-success">
						<i class="fa fa-check"></i> Save
					</button>
				</div>
				<?php echo form_close(); ?>
			</div>
		</div>
	</div>


</div>
</div>


<script>

	var map;
	async  function initMap() {
		
		var myLatLng = {lat:10.798060 , lng: 106.672740}
		map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		initialize(map);
	}





	function create_point_checkin(map,bounds)
	{
		sessionStorage.clear()
		var input = document.getElementById('searchTextField_3');
		var autocomplete_point = new google.maps.places.Autocomplete(input);
		var array_list = [];
		var array_list_data = [];
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

			var infrastructure_Marker = new google.maps.Marker({
				position: marker_point_lnglat,
				map: map,
				label:'p',
				data:{
					id : i
				}
			});
			
			infrastructure_Marker.addListener('click', function() {
				infrastructure_Marker.setMap(null);
				remove(infrastructure_Marker.data.id)
			});

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
			$("#list_point").append("<div  style='font-size: 1em; display: block;'  class='label label-success p-3'>"+ele.name+" </div> ")	
		})
	}

	function addMarker(location) {
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
		markers.push(marker);
	}

	function initialize(map) {
		var bounds  = new google.maps.LatLngBounds();
		change_distance_zoom(map);
		distance_zoom(map);   
		create_point_checkin(map,bounds);

	}
	function draw_distance(fromMarker, toMarker, map, color, data_point) {

		return new Promise((get,error)=>{
			infoWindow = new google.maps.InfoWindow;
			var ds = new google.maps.DirectionsService();
			ds.route(
			{
				origin: fromMarker,
				destination: toMarker,
				travelMode: google.maps.TravelMode.WALKING,
				unitSystem: google.maps.UnitSystem.METRIC
			}, function (result, status) {
				let color_path = color;
				if (status == google.maps.DirectionsStatus.OK) {

					var distance =  new google.maps.Polyline({
						map: map,
						path: result.routes[0].overview_path,
						strokeColor: color_path,
						strokeWeight: 5,
						data:data_point
					});
					get(distance);

					var i = 0;
					var array_list_data = [];

					google.maps.event.addListener(distance, 'click', async function(e) {
						i ++;
						var infrastructure_Marker =  new google.maps.Marker({
							position: e.latLng, 
							map: map,
							lable:'p',
							data:{
								id : i
							}
						});

						infrastructure_Marker.addListener('click', function() {
							infrastructure_Marker.setMap(null);
							console.log(infrastructure_Marker);
							remove(infrastructure_Marker.data.id)
						});

						if(sessionStorage.getItem('list_point') != null ) {
							array_list_data = JSON.parse(sessionStorage.getItem('list_point'))
						}
						let address = await get_address(e.latLng.lat(),e.latLng.lng())
						array_list_data.push({
							id:i,
							lat:e.latLng.lat(),
							lng:e.latLng.lng(),
							// name:'{'+round_4(e.latLng.lat())+','+round_4(e.latLng.lng())+'}',
							name: address,
						})
						sessionStorage.setItem('list_point',JSON.stringify(array_list_data))
						$("#list_arr_point").val(JSON.stringify(array_list_data))
						show(array_list_data);
					});

				}
			});

		})
	}


</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7SkMn4g-xAtNBiaHlHQerWPFI68mwVqk&libraries=places&callback=initMap"
async defer></script>
