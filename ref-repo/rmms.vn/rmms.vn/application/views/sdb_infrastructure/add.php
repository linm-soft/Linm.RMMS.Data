<div class="full-height" style="position: relative;">
  <div class="box box-default box-filed">
    <div class="box-header with-border">
     <h5 class="box-title">Tạo tài sản</h5>

     <div class="box-tools pull-right">
      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
      </button>
    </div>
    <!-- /.box-tools -->
  </div>
  <!-- /.box-header -->
  <div class="box-body" style="">
   <?php if(isset($error)) { echo $error['error'] ; } ?>
   <?php echo form_open_multipart('sdb_infrastructure/add'); ?>
   <div class="box-body">
    <div class="row clearfix">

     <div class="col-md-12">
      <label for="location_id" class="control-label"><span class="text-danger">*</span>Thuộc địa bàn</label>
      <div class="form-group">
       <select name="location_id" id="location_id" onChange="get_distance()"  onchange="get_distance()" id="location_id" class="form-control">
        <option value="">Địa bàn</option>
        <?php 
        foreach($all_sdb_location as $sdb_location) {
         $selected = ($sdb_location['location_id'] == $this->input->post('location_id')) ? ' selected="selected"' : "";
         echo '<option data-point= '.$sdb_location['location_point'].' value="'.$sdb_location['location_id'].'" '.$selected.'>'.$sdb_location['location_name'].'</option>';
       } 
       ?>
     </select>
     <span class="text-danger"><?php echo form_error('location_id');?></span>
   </div>
 </div>
 <div class="col-md-12">
  <label for="distance_id" class="control-label"><span class="text-danger">*</span>Thuộc tuyến đường</label>
  <div class="form-group">
   <select onChange="get_station()" name="distance_id" disabled="" id='distance_id' class="form-control">
    <option value="">Tuyến đường</option>
    <?php 
    foreach($all_sdb_distance as $sdb_distance)
    {
     $selected = ($sdb_distance['distance_id'] == $this->input->post('distance_id')) ? ' selected="selected"' : "";
     echo '<option value="'.$sdb_distance['distance_id'].'" '.$selected.'>'.$sdb_distance['distance_name'].'</option>';
   } 
   ?>
 </select>
 <span class="text-danger"><?php echo form_error('distance_id');?></span>
</div>
</div>
<div class="col-md-12">
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
</div>

<div class="col-md-12">
  <label for="infrastructure_img" class="control-label"><span class="text-danger">*</span>Hình ảnh</label>
  <div class="form-group">
   <input type="file" name="infrastructure_img"  class="form-control" id="infrastructure_img"  />
   <span class="text-danger"><?php echo form_error('infrastructure_img');?></span>
 </div>
</div>

<div class="col-md-12">
  <label for="infrastructure_name" class="control-label"><span class="text-danger">*</span>Tên tài sản</label>
  <div class="form-group">
   <input type="text" name="infrastructure_name" value="<?php echo $this->input->post('infrastructure_name'); ?>" class="form-control" id="infrastructure_name" />
   <span class="text-danger"><?php echo form_error('infrastructure_name');?></span>
 </div>

 <input type="hidden" name="infrastructure_lat" id="infrastructure_lat">
 <input type="hidden" name="infrastructure_lng" id="infrastructure_lng">
</div>

<div class="col-md-12">
  <label for="infrastructures_category_id" class="control-label"><span class="text-danger">*</span>Loại tài sản</label>
  <div class="form-group">
   <select name="infrastructures_category_id" class="form-control">
    <option value="">Chọn loại tài sản</option>
    <?php 
    foreach($all_infrastructures_category as $infrastructures_category)
    {
     $selected = ($infrastructures_category['infrastructures_category_id'] == $this->input->post('infrastructures_category_id')) ? ' selected="selected"' : "";

     echo '<option value="'.$infrastructures_category['infrastructures_category_id'].'" '.$selected.'>'.$infrastructures_category['infrastructures_category_name'].'</option>';
   } 
   ?>
 </select>
 <span class="text-danger"><?php echo form_error('infrastructures_category_id');?></span>
</div>
</div>
<div class="col-md-12">
 <label for="infrastructure_detail" class="control-label"><span class="text-danger"></span>Mô tả</label>
 <div class="form-group">
  <textarea name="infrastructure_detail" class="form-control" id="infrastructure_detail"><?php echo $this->input->post('infrastructure_detail'); ?></textarea>
  <span class="text-danger"><?php echo form_error('infrastructure_detail');?></span>
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
<!-- /.box-body -->
</div>


<div id='map' style="height: 100%;width: 100%;"></div>


</div>
<script type="text/javascript">

  async  function initMap() {

    infoWindow = new google.maps.InfoWindow;
    var myLatLng = { lat:10.798060 , lng: 106.672740 };

    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    initialize(map);
    change_distance_zoom(map);
    //zoom for distance
    distance_zoom(map);
    
  }

  async function initialize(map) {   

  }

  function draw_distance(fromMarker, toMarker, map, color, data_point) {
    return new Promise((get,error)=>{
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

          var infrastructure_Marker;
          google.maps.event.addListener(distance, 'click', function(e) {
            if(infrastructure_Marker != undefined) {
              infrastructure_Marker.setMap(null)  ;
            }
            infrastructure_Marker =  placeMarker(e.latLng);
            val_for_infrastructure(e.latLng)
          });
          get(distance);
        }
      });

    })
  }

  function val_for_infrastructure(latLng)
  {
    $('#infrastructure_lat').val(latLng.lat());
    $('#infrastructure_lng').val(latLng.lng());
  }

</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0Wls-WR74qozk2ojECLhMGADnf7vGRWg&callback=initMap"
async defer></script>
