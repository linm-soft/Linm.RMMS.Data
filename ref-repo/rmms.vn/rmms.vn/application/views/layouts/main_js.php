async function get_distance() {
	loadding_();
	let url = "<?=base_url($this->config->item('ajax_distance_by_location_get'));?>";
	let location_id = $('#location_id').val()

	if(location_id == '') {
		$('#distance_id').empty();
		loadding_done();
		return false;
	}
	$('#distance_id').attr("disabled", false);

	let link = url+'/'+location_id
	var distance = await  ajax_(link);
	let distance_json = JSON.parse(distance);
	let list_distance = distance_json.data;
	if(list_distance.length == 0) {
		 
  		 alertify.warning('Không tìm thấy tuyến đường');
	}else {
		 alertify.success('Đã tìm thấy tuyến đường');
	}

	build_option('distance_id',list_distance,'distance_id','distance_name');
	loadding_done();
}

async function get_station() {
	loadding_();
	let url = "<?=base_url('Sdb_station/ajax_station_by_distance_get');?>";
	let distance_id = $('#distance_id').val()
	$('#distance_id').attr("disabled", false);
	if(distance_id == '') {
		$('#distance_id').empty();
		return false;
	}
	$('#station_id').attr("disabled", false);

	let link = url+'/'+distance_id
	var station = await  ajax_(link);
	let station_json = JSON.parse(station);
	let list_station = station_json.data;

	build_option('station_id',list_station,'station_id','station_name');

	loadding_done();
	ajax_infrastructure_by_distance();
}

async function get_user_form_group(user_id_form = 'user_id', group_id = 'user_group_id') {
	loadding_();
	let url = "<?=base_url('Sdb_user/ajax_get_user_from_group');?>";
	let user_group_id = $('#'+group_id).val()

	if(user_group_id == '') {
		return false;
	}

	$('#'+user_id_form).attr("disabled", false);

	let link = url+'/'+user_group_id
	var user = await  ajax_(link);
	let user_json = JSON.parse(user);
	let list_user = user_json.data;
	build_option(user_id_form,list_user,user_id_form,'user_name');
	loadding_done();
}

async function ajax_infrastructure_by_station() {
	loadding_();
	let url = "<?=base_url('Sdb_infrastructure/ajax_infrastructure_by_station');?>";
	let station_id = $('#station_id').val()

	if(station_id == '') {
		return false;
	}

	$('#infrastructure_id').attr("disabled", false);

	let link = url+'/'+station_id
	var infrastructure = await  ajax_(link);
	let infrastructure_json = JSON.parse(infrastructure);
	let list_infrastructure = infrastructure_json.data;
	build_option('infrastructure_id',list_infrastructure,'infrastructure_id','infrastructure_name');
	loadding_done();
}

async function ajax_infrastructure_by_distance() {
	loadding_();
	let url = "<?=base_url('Sdb_infrastructure/ajax_infrastructure_by_distance');?>";
	let distance_id = $('#distance_id').val()

	if(distance_id == '') {
		return false;
	}

	$('#infrastructure_id').attr("disabled", false);

	let link = url+'/'+distance_id
	var infrastructure = await  ajax_(link);
	let infrastructure_json = JSON.parse(infrastructure);
	let list_infrastructure = infrastructure_json.data;
	build_option('infrastructure_id',list_infrastructure,'infrastructure_id','infrastructure_name');
	loadding_done();
}


async function ajax_detail_distance_get(distance_id) {
	loadding_();
	let url = "<?=base_url('Sdb_distance/ajax_detail_distance_get');?>";
	let link = url+'/'+distance_id
	var distance_detail = await  ajax_(link);
	let distance_detail_json = JSON.parse(distance_detail);
	let distance = distance_detail_json.data;
	loadding_done();
	return distance;

}

async function get_list_distace_by_location(location_id)
{
	let url = "<?=base_url($this->config->item('ajax_distance_by_location_get'));?>";
	let link = url+'/'+location_id
	var distance = await  ajax_(link);
	let distance_json = JSON.parse(distance);
	return  distance_json.data;
}


async function get_list_distace_by_location(location_id)
{
	let url = "<?=base_url($this->config->item('ajax_distance_by_location_get'));?>";
	let link = url+'/'+location_id
	var distance = await  ajax_(link);
	let distance_json = JSON.parse(distance);
	return  distance_json.data;
}


function show_list_infrastructure_on_map(list_ts)
{
	list_ts.forEach(ele => {
		var icon = {
		  url: "<?= base_url() ?>" + ele.infrastructures_category_icon,
		  scaledSize: new google.maps.Size(20, 20),
		};
		let marker = {
		  lat: ele.infrastructure_lat,
		  lng: ele.infrastructure_lng
		}
		let mk = Marker(marker, icon);
		new google.maps.event.addListener(mk, 'click', function(e) {
		  // infoWindow.setPosition(e.latLng);
		  let content = `<p><b>${ele.infrastructure_name}</b></p>
		  <p>${ele.infrastructure_location}</p>
		  <p>${ele.infrastructure_lat} ,${ele.infrastructure_lng}  </p>
		  `;
		  infoWindow.setContent(content);
		  infoWindow.open(map, mk);
		});
  
	  }) 
}

function show_list_infrastructure_on_box(list_ts){
  $('#inf-list').empty();
    if (list_ts.length == 0) {
      $('#inf-list').append("<h5 class='text-center inf-cate'>Chưa có tài sản</h5>")
    } else {
      list_ts.forEach(ele => {
        var statu = ''
        if (ele.infrastructure_status_id == 1) {
          status = 'inf-status-warning';
        } else {
          status = 'inf-status-success';
        }

        $('#inf-list').append(`
        <div id='infrastructure_${ele.infrastructure_id}'class="inf-box">
        <div class="inf-title">${ele.infrastructure_name}</div>
        <div class="inf-cate">${ele.infrastructures_category_name} (${ele.infrastructure_lat}, ${ele.infrastructure_lng})</div>
        <div class='${status}'><i class="fa fa-circle ">&nbsp;</i>${ele.infrastructure_status_name}</div>
        </div>`)

        // add even click
        let id = `infrastructure_${ele.infrastructure_id}`
        $('#' + id).click(() => {
          let latng = {
            lat: ele.infrastructure_lat,
            lng: ele.infrastructure_lng
          }
          infoWindow.setPosition(latng);
          let content = `<p><b>${ele.infrastructure_name}</b></p>
          <p>${ele.infrastructure_location}</p>
          <p>${ele.infrastructure_lat} ,${ele.infrastructure_lng}  </p>
          `;
          infoWindow.setContent(content);
          infoWindow.open(map);

          map.setCenter(latng);
          map.setZoom(15);
        })


      })
    }
}