
function ajax_(url_ , method = 'GET',data = {}) {
	Pace.restart();
	return new Promise((suc,err) => 
	{
		$.ajax({
			async:false,
			url: url_,
			method:method,
			data:data
		}).done(function(data) {
			suc(data);
		});
	}
	)
	
}

function build_option(id,list, value , name) {
	$('#'+id).empty();
	$('#'+id).append("<option value='0'></option>");	
	list.forEach(ele => {
		$('#'+id).append("<option value='"+ele[value]+"'>"+ele[name]+"</option>");	
	})

	
}


function loadding_(id = '') {
	if(id !== '') {
		// $('#'+id).attr("disabled", true);
		$('#'+id).html('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
	}else {
			// $('#'+id).attr("disabled", true);
			$('#loadding_id').html('<div style="color:red" class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
		}

	}

	function loadding_done(id = '') {
		if(id !== '') {
		// $('#'+id).attr("disabled", false);
		$('#'+id).empty();
	}else {
		$('#loadding_id').empty();
	}
	
}

function get_address(lat, lng)
{
	return new Promise((res, err)=>{
		$.ajax({
			url : `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBUqJrD80qnxzg3_L99iwCcba8g9xfzOrQ`,
			async:false
			,
			success : function (result) {
				console.log(result);
				res(result.results[0].formatted_address)
			},
			error: function(error){
				res("Không tìm thấy địa chỉ")
			}
		})
	})
}


function change_distance_zoom(map)
{
	var input = document.getElementById('location_id');
	input.addEventListener("change", function(event){
		
		let ok = $('#location_id').find(':selected').data('point');
		if(ok !== 'value=') {
			map.setCenter(ok);
			map.setZoom(9);
		}else {
			console.log('123')
		}
	});

}


function placeMarker(location) {
	var marker = new google.maps.Marker({
		position: location, 
		map: map
	});
	return marker;
}


function Marker(location, icon) {
	var marker = new google.maps.Marker({
		position: location, 
		map: map,
		icon: icon
	});
	return marker;
}

function show_list_distance_by_location(map)
{
	var input = document.getElementById('location_id');
	input.addEventListener("change", async function(event){
		let location_id = $('#location_id').find(':selected').val();

		let list_distance = await get_list_distace_by_location(location_id)
		list_distance.forEach((ele)=>{
			let point_marker_from = JSON.parse(ele.point_start_json);
			let point_marker_to = JSON.parse(ele.point_end_json);

			let color = ele.distance_color;
			list_draw_distance(point_marker_from,point_marker_to,map, color,ele );
		});
	});

}



function list_draw_distance(fromMarker, toMarker, map, color, data_point){
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
			var distance ;
			var fullPath = [];
			result.routes[0].legs.forEach(function (leg) {
				leg.steps.forEach(function (step) {
					fullPath = fullPath.concat(step.path);
					distance  =  new google.maps.Polyline({
						map: map,
						path: step.path,
						strokeColor: color_path,
						strokeWeight: 5,
						data:data_point
					});
				});
			});
		}
	});
}

async function distance_zoom(map) {
	var input = document.getElementById('distance_id');
	var  distance; 
	input.addEventListener("change", async function(event){
		let distance_id = $('#distance_id').find(':selected').val();
		if(distance_id == 0 ) return false;
		let distance_detail = await ajax_detail_distance_get(distance_id)
		console.log(distance_detail);
		let point_start = JSON.parse(distance_detail.point_start_json);
		let point_end = JSON.parse(distance_detail.point_end_json);

		if(distance != undefined) distance.setMap(null);
		distance = await draw_distance(point_start,point_end,map,distance_detail.distance_color);

		var bounds  = new google.maps.LatLngBounds();
		bounds.extend(point_start);
		bounds.extend(point_end);
		map.fitBounds(bounds);
		map.panToBounds(bounds);

	});
}

function round_4(num){
	return	Math.round(num * 1000000) / 1000000
}


