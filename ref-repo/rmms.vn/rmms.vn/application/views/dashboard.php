<style type="text/css">
  #map {
    width: 100%;
    height: 350px;
  }

  #location_id {
    position: absolute;
    top: 10px;
    left: 216px;
    width: 180px;
    height: 40px;
  }

  .inf-box {
    border-bottom: 1px solid #dfe4ec;
    padding: 10px;
    cursor: pointer;
  }

  .inf-box:hover {
    background-color: #ddd;
  }

  .section_inf_list {
    height: 500px;
    /*border:1px solid #ccc;*/
    padding: 0px;
    border-left: 0px;
    border-right: 0px;
    overflow-y: scroll;
  }

  .inf-title {
    font-weight: bold;
    color: #777;
  }

  .inf-cate {
    color: #999;
  }

  .inf-status-warning {
    color: #f39c12;
    font-size: .9em;
    padding: 7px 0px 0px 0px;
  }

  .inf-status-success {
    color: green;
    font-size: .9em;
    padding: 7px 0px 0px 0px;
  }

  #distance_id {
    position: absolute;
    top: 10px;
    left: 400px;
    width: 180px;
    height: 40px;
  }
</style>
<div class="row p-2">

  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="info-box">
      <span class="info-box-icon bg-aqua"><i class="fa fa-institution"></i></span>

      <div class="info-box-content">
        <span class="info-box-text">Tổng tài sản </span>
        <span class="info-box-number"><?= $infrastructure_number ?><small></small></span>
      </div>
      <!-- /.info-box-content -->
    </div>
    <!-- /.info-box -->
  </div>
  <!-- /.col -->
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="info-box">
      <span class="info-box-icon bg-red"><i class="fa fa-map-signs"></i></span>

      <div class="info-box-content">
        <span class="info-box-text">Tổng lý trình</span>
        <span class="info-box-number"><?= $station_number ?><small></small></span>
      </div>
      <!-- /.info-box-content -->
    </div>
    <!-- /.info-box -->
  </div>
  <!-- /.col -->

  <!-- fix for small devices only -->
  <div class="clearfix visible-sm-block"></div>

  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="info-box">
      <span class="info-box-icon bg-green"><i class="fa fa-wheelchair"></i></span>

      <div class="info-box-content">
        <span class="info-box-text">Sự cố</span>
        <span class="info-box-number"><?= $trouble_number ?><small></small></span>
      </div>
      <!-- /.info-box-content -->
    </div>
    <!-- /.info-box -->
  </div>
  <!-- /.col -->
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="info-box">
      <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>

      <div class="info-box-content">
        <span class="info-box-text">Cán bộ</span>
        <span class="info-box-number"><?= $user_number ?><small></small></span>
      </div>
      <!-- /.info-box-content -->
    </div>
    <!-- /.info-box -->
  </div>
  <!-- /.col -->
</div>


<div class="row">

  <div class=" col-xl-10 col-md-9 " style="padding:0px">
    <div id='map' style="height: 500px; border: 1px solid #d2d6de;"></div>

    <div class="form-group">
      <select onChange="get_distance()" name="location_id" id="location_id" class="form-control">
        <option value="">Thuộc địa bàn...</option>
        <?php
        foreach ($all_sdb_location as $sdb_location) {
          $selected = ($sdb_location['location_id'] == $this->input->post('location_id')) ? ' selected="selected"' : "";

          echo '<option data-point= ' . $sdb_location['location_point'] . ' value="' . $sdb_location['location_id'] . '" ' . $selected . '>' . $sdb_location['location_name'] . '</option>';
        }
        ?>
      </select>
    </div>

    <div class="form-group">
      <select name="distance" id="distance_id" onChange="show_infrastructures()" class="form-control">
        <option value="">Tuyến đường</option>
      </select>
    </div>


  </div>
  <div class=" col-xl-2 col-md-3  bg-white section_inf_list ">
    <h5 class="text-center text-bold">Danh sách tài sản</h5>
    <div class="inf-list box" id='inf-list'>

      <!--  <div class="overlay">
    <i class="fa fa-refresh fa-spin"></i>
  </div>
-->

      <div class="inf-box">
        <div class="inf-title">Tên tài sản</div>
        <div class="inf-cate">Cột H</div>
        <div class="inf-status"><i class="fa fa-circle ">&nbsp;</i> Đã cập nhật</div>
      </div>

    </div>
  </div>
</div>

<script>
  async function initMap() {
    infoWindow = new google.maps.InfoWindow;
    var myLatLng = {
      lat: 10.798060,
      lng: 106.672740
    };

    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    initialize(map);
    change_distance_zoom(map);
    get_distances_by_location(map);
  }

  async function initialize(map) {}

  async function handelPolyClick(eventArgs, polyLine) {
    // var bounds = new google.maps.LatLngBounds();
    infoWindow.setPosition(eventArgs.latLng);
    let content = "<p><b>" + polyLine.data.distance_name + "</b></p>" +
      "<div><b> Độ dài:</b> " + polyLine.data.distance_lenght + " KM</div>";
    infoWindow.setContent(content);
    infoWindow.open(map);
    change_info_distance(polyLine.data);
    let list_ts = await ajax_infrastructure_by_distance(polyLine.data.distance_id);

    // show list danh sách các tài sản
    show_list_infrastructure_on_map(list_ts);
    //
    show_list_infrastructure_on_box(list_ts)





  };

  function handel_zoom(eventArgs, polyLine, map) {
    var bounds = new google.maps.LatLngBounds();
    let point_start = JSON.parse(polyLine.data.point_start_json);
    let point_end = JSON.parse(polyLine.data.point_end_json);
    bounds.extend(point_start);
    bounds.extend(point_end);
    map.fitBounds(bounds);
    map.panToBounds(bounds);
  };




  function draw_distance(fromMarker, toMarker, map, color, data_point) {
    var ds = new google.maps.DirectionsService();

    ds.route({
      origin: fromMarker,
      destination: toMarker,
      travelMode: google.maps.TravelMode.WALKING,
      unitSystem: google.maps.UnitSystem.METRIC
    }, function(result, status) {
      let color_path = color;
      if (status == google.maps.DirectionsStatus.OK) {
        var distance;
        var fullPath = [];
        result.routes[0].legs.forEach(function(leg) {
          leg.steps.forEach(function(step) {
            fullPath = fullPath.concat(step.path);
            distance = new google.maps.Polyline({
              map: map,
              path: step.path,
              strokeColor: color_path,
              strokeWeight: 5,
              data: data_point
            });

            google.maps.event.addListener(distance, 'click', function(e) {
              handelPolyClick(e, this);

              handel_zoom(e, this, map);
            });

          });
        });
      }
    });
  }

  async function ajax_infrastructure_by_distance(distance_id) {
    let url = "<?= base_url('Sdb_infrastructure/ajax_infrastructure_by_distance'); ?>";
    let link = url + '/' + distance_id
    let ts_list = await ajax_(link);
    let ts_list_json = JSON.parse(ts_list);
    return ts_list_json.data;

  }


  function get_distances_by_location(map) {
    var input = document.getElementById('location_id');
    input.addEventListener("change", async function(event) {
      let location_id = $('#location_id').find(':selected').val();
      if (location_id !== 'value=') {

        let url = "<?= base_url('Sdb_distance/ajax_distance_by_location_get'); ?>";
        let link = url + '/' + location_id
        let distances = await ajax_(link);
        let list_json = JSON.parse(distances);

        console.log(list_json.data);

        list_json.data.forEach((ele) => {
          let point_marker_from = JSON.parse(ele.point_start_json);
          let point_marker_to = JSON.parse(ele.point_end_json);

          let color = ele.distance_color;
          draw_distance(point_marker_from, point_marker_to, map, color, ele);
        });
      } else {
        console.log('not fount id location for get_distances_by_location ')
      }
    });

  }


  async function show_infrastructures() {
    // var input = document.getElementById('distance_id');
    // input.addEventListener("change", async function(event) {
      let distance_id = $('#distance_id').val();
      let list_ts = await ajax_infrastructure_by_distance(distance_id);
      // show list danh sách các tài sản
      show_list_infrastructure_on_map(list_ts);
      //
      show_list_infrastructure_on_box(list_ts)
    // });
  }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0Wls-WR74qozk2ojECLhMGADnf7vGRWg&callback=initMap" async defer></script>