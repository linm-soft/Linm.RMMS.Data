<div class="row p-2">
  <div class="col-md-12">
    <div class="box">
      <div class="box-header">
        <h3 class="box-title">Quản lý tài sản (KCHT) <label class="text-danger">(<?=$infrastructures_total?>)</label></h3>
        <div class="box-tools">
          <?php 
          if (USER_LEVEL !== 5 ) {
            ?>
            <a href="<?php echo site_url('sdb_infrastructure/import'); ?>" class="btn btn-danger btn-sm">import</a> 
            <a href="<?php echo site_url('sdb_infrastructure/add'); ?>" class="btn btn-success btn-sm">Thêm</a> 
            <?php
          }
          ?>
          
        </div>
      </div>
      <div class="box-body">
        <table  id="adb_table" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Địa bàn</th>
              <th>Lý trình</th>
              <th>Tuyến đường</th>
              <th>Tên</th>
              <th>Trạng thái</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            <?php foreach($sdb_infrastructures as $s){ ?>
              <tr>
                <td>
                  <?php 
                  if (!empty($s['infrastructure_img'])) {
                   ?>
                   <img src="<?php echo base_url($s['infrastructure_img']) ; ?>" width="60px" height="60px" />
                   <?php 
                 }
                 ?>

               </td>

               <td><?php echo $s['location_name']; ?></td>
               <td><?php echo $s['station_name']; ?></td>
               <td><?php echo $s['distance_name']; ?></td>
               <td><?php echo $s['infrastructure_name']; ?></td>
               <td><?php echo $s['infrastructure_status_name']; ?></td>
               <!-- <td><?php echo $s['infrastructure_createdate']; ?></td> -->
               <!-- <td><?php echo $s['infrastructure_detail']; ?></td> -->
               <td>

               </td>
             </tr>
           <?php } ?>
         </tbody>
 
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

<script type="text/javascript">
  

</script>