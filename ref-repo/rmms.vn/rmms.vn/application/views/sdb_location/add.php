<div class=" full-height " style="position: relative;">

	<div class="box-filed" style="top:60px">
		<div class="box box-default">
			<div class="box-header with-border">
				<h5 class="box-title">Tạo Địa bàn</h5>

				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
					</button>
				</div>
				<!-- /.box-tools -->
			</div>
			<?php echo form_open('sdb_location/add'); ?>
			<div class="box-body">
				<div class="row clearfix">

					<div class="col-md-12">
						<label for="location_name" class="control-label"><span class="text-danger">*</span>Tên địa bàn</label>
						<div class="form-group">
							<input type="text" name="location_name" value="<?php echo $this->input->post('location_name'); ?>" class="form-control" id="location_name" />

							<input type="hidden" name="location_point"   id="location_point" />

							<span class="text-danger"><?php echo form_error('location_name');?></span>
						</div>
					</div>

					<div class="col-md-12">
						<label for="location_detail" class="control-label"><span class="text-danger">*</span>Mô tả</label>
						<div class="form-group">
							<textarea name="location_detail" class="form-control" id="location_detail"><?php echo $this->input->post('location_detail'); ?></textarea>
							<span class="text-danger"><?php echo form_error('location_detail');?></span>
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

	<div style=" height:100%; position: relative; overflow: hidden;" id="map">
	</div>
	<div class="form-group search_map" >
		<input  class="form-control" required="" id="searchTextField_fillter_road" placeholder="Lấy vị trí của địa bàn" />
	</div>
	
</div>

<style type="text/css">

</style>

<script type="text/javascript">
	var map, infoWindow;

	async  function initMap() {

		var bounds  = new google.maps.LatLngBounds();
		var myLatLng = { lat:10.798060 , lng: 106.672740 };
		map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		
		infoWindow = new google.maps.InfoWindow;

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {

				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				infoWindow.setPosition(pos);
				
				var image = 'http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png';
				var marker = new google.maps.Marker({
					position: pos, 
					map: map,
					icon: image,
					zoom: 12,
				});

				map.setCenter(pos);



			}, function() {
				console.log('errror map location');
			});

		} else {
			console.log('errror map location 403');
		}
		
		fillter_road(map);
	}
	

	function get_address() {
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

			if(marker != null ){
				console.log('123');
				marker.setMap(null);	
			}

			marker = new google.maps.Marker({
				position: marker_start_lnglat,
				map: map,
				draggable:true,
				zoom:10
			});
			$('#location_point').val(JSON.stringify(marker_start_lnglat));
			map.setCenter(marker_start_lnglat);
			map.setZoom(16);
		});
	}

</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7SkMn4g-xAtNBiaHlHQerWPFI68mwVqk&libraries=places&callback=initMap"
async defer></script>
