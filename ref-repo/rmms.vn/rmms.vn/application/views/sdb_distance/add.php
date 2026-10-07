<div class="full-height" style="position: relative; padding:0px;">
	<div class=" box-filed">
		<div class="box box-default">
			<div class="box-header with-border">
				<h5 class="box-title">Tạo tuyến đường</h5>

				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
					</button>
				</div>
				<!-- /.box-tools -->
			</div>
			<!-- /.box-header -->
			<div class="box-body" style="">
				<?php echo form_open('sdb_distance/add'); ?>
				<div class="box-body">
					<div class="row clearfix">

						<div class="col-md-12">

							<label for="location_id"  class="control-label"><span class="text-danger">*</span>Địa bàn</label>

							<div class="form-group">
								<select name="location_id" id="location_id"  class="form-control">
									<option value="">Thuộc địa bàn...</option>
									<?php 
									foreach($all_sdb_location as $sdb_location)
									{
										$selected = ($sdb_location['location_id'] == $this->input->post('location_id')) ? ' selected="selected"' : "";
										echo '<option data-point= '.$sdb_location['location_point'].' value="'.$sdb_location['location_id'].'" '.$selected.'>'.$sdb_location['location_name'].'</option>';
									} 
									?>
								</select>
								<span class="text-danger"><?php echo form_error('location_id');?></span>
							</div>
						</div>

						<div class="col-md-12">
							<label for="distance_name" class="control-label"><span class="text-danger">*</span>Tên tuyến đường</label>
							<div class="form-group">
								<input type="text" name="distance_name" value="<?php echo $this->input->post('distance_name'); ?>" class="form-control" id="distance_name" />
								<span class="text-danger"><?php echo form_error('distance_name');?></span>
							</div>
						</div>



						<div class="col-md-12">
							<label for="distance_start" class="control-label"><span class="text-danger">*</span>Vị trí bắt đầu </label>
							<div class="form-group">
								<input type="text" id="searchTextField" name="distance_start" value="<?php echo $this->input->post('distance_start'); ?>" class="form-control" id="distance_start" />
								<input type="hidden" name="point_start_json" id="point_start_json">
								<span class="text-danger"><?php echo form_error('distance_start');?></span>
							</div>
						</div>

						<div class="col-md-12">
							<label for="distance_end" class="control-label"><span class="text-danger">*</span>Vị trí kết thúc</label>

							<div class="form-group">
								<input type="text" id="searchTextField_2"  name="distance_end" value="<?php echo $this->input->post('distance_end'); ?>" class="form-control" id="distance_end" />
								<input type="hidden" name="point_end_json"  id="point_end_json">
								<span class="text-danger"><?php echo form_error('distance_end');?></span>
							</div>
						</div>
						<div class="col-md-12">
							<label for="distance_lenght" class="control-label"><span class="text-danger"></span>Độ dài (mét)</label>
							<div class="form-group">
								<input type="text" id="distance_value" name="distance_lenght" value="<?php echo $this->input->post('distance_lenght'); ?>" class="form-control" id="distance_lenght" />
								<span class="text-danger"><?php echo form_error('distance_lenght');?></span>
							</div>
						</div>

						<div class="col-md-12">
							<label for="distance_details" class="control-label"><span class="text-danger"></span>Mô tả</label>
							<div class="form-group">
								<input type="text" name="distance_details" value="<?php echo $this->input->post('distance_details'); ?>" class="form-control" id="distance_details" />
								<span class="text-danger"><?php echo form_error('distance_details');?></span>
							</div>
							<input type="hidden" name="distance_color"  id="distance_color" />
							<input type="hidden" name="distance_waypoint_json"  id="distance_waypoint_json" />
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
			<!-- /.box-body -->
		</div>
	</div>
	
	<div style="height: 100%; width: 100%;" id="map"></div>
	<div class="form-group search_map" >
		<input  class="form-control" id="searchTextField_fillter_road" placeholder="Nhập tuyến đường cần tìm" />
	</div>
	
</div>


<script type="text/javascript">
	
	var map, infoWindow;
	async  function initMap() {
		var bounds  = new google.maps.LatLngBounds();
		var myLatLng = { lat:10.798060 , lng: 106.672740 };
		map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
				
			//fillter road;
			fillter_road(map);
			change_distance_zoom(map);
			show_list_distance_by_location(map);
			infoWindow = new google.maps.InfoWindow;

			// if (navigator.geolocation) {
			// 	navigator.geolocation.getCurrentPosition(function(position) {

			// 		var pos = {
			// 			lat: position.coords.latitude,
			// 			lng: position.coords.longitude
			// 		};

			// 		infoWindow.setPosition(pos);

			// 		var image = 'http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png';
			// 		var marker = new google.maps.Marker({
			// 			position: pos, 
			// 			map: map,
			// 			icon: image
			// 		});

			// 		map.setCenter(pos);

			// 	}, function() {
			// 		console.log('errror map location');
			// 	});

			// } else {
			// 	console.log('errror map location 403');
			// }

			// draw distance
			var con = 0;
			var fromMarker;
			var toMarker;
			var distance ;
			var way_point = [];
			google.maps.event.addListener(map, 'click', async function(event) {
				con++;
				if(con == 1) {
					fromMarker =  placeMarker(event.latLng);
					$('#point_start_json').val(JSON.stringify(fromMarker.getPosition()));
				}
				if(con == 2) {
					toMarker =  placeMarker(event.latLng);
					$('#point_end_json').val(JSON.stringify(toMarker.getPosition()));
					if(distance != undefined) {
						distance.setMap(null);
					}
					distance = await draw_distance(fromMarker, toMarker, map);
					console.log('draw == 2');
				}

				if(con > 2) {
					
					let point_w =  placeMarker(event.latLng);
					let point_m = {
						location :point_w.getPosition(),
						stopover: false
					}
					way_point.push(point_m)
					
					$('#distance_waypoint_json').val(JSON.stringify(way_point));

					if(distance != undefined) {
						distance.setMap(null);
					}
					distance = await draw_distance(fromMarker, toMarker, map, way_point);

				}

			});


		}


		function draw_distance(fromMarker, toMarker, map, waypoint =[]){
			return new Promise((ok, err)=> {
				var result = '';
				var ds = new google.maps.DirectionsService();
				ds.route(
				{
					origin: fromMarker.getPosition(),
					destination: toMarker.getPosition(),
					waypoints: waypoint,
					optimizeWaypoints:true,
					travelMode: google.maps.TravelMode.DRIVING ,
					unitSystem: google.maps.UnitSystem.METRIC,
					provideRouteAlternatives :true,
				}, function (result, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						var fullPath = [];
						let color_path = getRandomColor();
						let  distance =  new google.maps.Polyline({
							map: map,
							path: result.routes[0].overview_path,
							strokeColor: color_path,
							strokeWeight: 5
						});
						$('#distance_color').val(color_path);
						let dis = result.routes[0].legs[0].distance.value;

						if(dis != undefined) {
							let km = dis / 1000;
							let int_km = parseInt(km);
							let met_ = parseInt((km - int_km)*1000);
							let do_ = int_km+"KM"+met_
							$('#searchTextField_2').val(do_);	
							$('#distance_value').val(dis / 1000);
						}

						ok(distance);
					}
				});
			});
		}



		function get_address()
		{
			return new Promise((res, err)=>{
				$.ajax({
					url : "https://maps.googleapis.com/maps/api/geocode/json?latlng=10.798060,106.672740&key=AIzaSyB7SkMn4g-xAtNBiaHlHQerWPFI68mwVqk",
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

		function initialize(map) {
			var marker_from = null;
			var marker_to = null;

			var input = document.getElementById('searchTextField');
			var autocomplete_start = new google.maps.places.Autocomplete(input);

			var bounds  = new google.maps.LatLngBounds();
			google.maps.event.addListener(autocomplete_start, 'place_changed', function () {
				var place = autocomplete_start.getPlace();
				let start_lat = place.geometry.location.lat();
				let start_lng = place.geometry.location.lng();
				var marker_start_lnglat = {lat:start_lat , lng: start_lng}
				$('#point_start_json').val(JSON.stringify(marker_start_lnglat));

				if(marker_from != null ){
					marker_from.setMap(null);	
				}

				marker_from = new google.maps.Marker({
					position: marker_start_lnglat,
					map: map,
					label:'S',
				});

				loc = new google.maps.LatLng(marker_from.position.lat(), marker_from.position.lng());
				bounds.extend(loc);
				map.fitBounds(bounds);
				map.panToBounds(bounds);

				$('#searchTextField_2').attr('disabled',false);
			});

			var input = document.getElementById('searchTextField_2');
			var autocomplete_end = new google.maps.places.Autocomplete(input);

			var bounds  = new google.maps.LatLngBounds();
			google.maps.event.addListener(autocomplete_end, 'place_changed', function () {
				var place = autocomplete_end.getPlace();
				let start_lat = place.geometry.location.lat();
				let start_lng = place.geometry.location.lng();

				var marker_start_lnglat = {lat:start_lat , lng: start_lng}
				$('#point_end_json').val(JSON.stringify(marker_start_lnglat));
				if(marker_to != null ){
					marker_to.setMap(null);	
				}

				marker_to = new google.maps.Marker({
					position: marker_start_lnglat,
					map: map,
					label:'E',
				});

				loc = new google.maps.LatLng(marker_to.position.lat(), marker_to.position.lng());
				bounds.extend(loc);
				map.fitBounds(bounds);
				map.panToBounds(bounds);
				let dd = draw_distance(marker_from, marker_to, map);
			});
		}

		function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}


		function fillter_road(map)
		{
			var marker = null;
			var input = document.getElementById('searchTextField_fillter_road');
			var autocomplete_start = new google.maps.places.Autocomplete(input);

			var bounds  = new google.maps.LatLngBounds();
			google.maps.event.addListener(autocomplete_start, 'place_changed', function () {
				var place = autocomplete_start.getPlace();
				let start_lat = place.geometry.location.lat();
				let start_lng = place.geometry.location.lng();
				$('#start_lat').val(start_lat)
				$('#start_long').val(start_lng)

				var marker_start_lnglat = {lat:start_lat , lng: start_lng}

				map.setCenter(marker_start_lnglat);
				map.setZoom(19);
			});
		}


	</script>

	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7SkMn4g-xAtNBiaHlHQerWPFI68mwVqk&libraries=places&callback=initMap"
	async defer></script>
