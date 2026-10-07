<div class="row p-2">
  <div class="col-md-6">
    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <li class="active"><a href="#tab_1" data-toggle="tab"><b>Hướng dẫn</b></a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="tab_1">
          <b>Hướng dẫn import tài sản bằng execl :</b>
          <ul>
            <li>Chọn loại tài sản hỗ trợ import</li>
            <li>Chọn địa bàn</li>
            <li>Chọn Tuyến đường</li>
            <li>Đặt tên cho đoạn đường nhỏ trong tuyến (Km000 - km225)</li>
            <li>Up file lên đúng với loại tài sản</li>
            <li>Nhấn vào nút import</li>
          </ul>
          <b>Các mẫu file exec hỗ trợ import :</b>
          <div class="con-list-file">
            <ul>
              <li><a href="../data_/Cot_km_QL7.xlsx">Cột Km mẫu</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="col-md-6">
    <?php if (isset($error)) {
      echo $error['error'];
    } ?>
    <?php echo form_open_multipart('sdb_infrastructure/import'); ?>
    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <li class="active"><a href="#tab_1" data-toggle="tab"><b>Import</b></a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="tab_1">
          <div class="row">
            <div class="col-md-6">
              <label for="infrastructure_category_id" class="control-label"><span class="text-danger">*</span>Các loại tài sản có hỗ trợ import</label>
              <div class="form-group">
                <select id='infrastructure_category_id' class="form-control select2" name="infrastructures_category_id">
                  <option value="">Loại tài sản</option>
                  <?php
                  foreach ($all_infrastructures_category as $infrastructure_category) {
                    $selected = ($infrastructure_category['infrastructures_category_id'] == $this->input->post('infrastructures_category_id')) ? ' selected="selected"' : "";
                    echo '<option value="' . $infrastructure_category['infrastructures_category_id'] . '" ' . $selected . '>' . $infrastructure_category['infrastructures_category_name'] . '</option>';
                  }
                  ?>
                </select>
                <span class="text-danger"><?php echo form_error('infrastructures_category_id'); ?></span>
              </div>
            </div>

            <div class="col-md-6">
              <label for="location_id" class="control-label"><span class="text-danger">*</span>Chọn địa bàn</label>
              <label class="control-label float-right"> <a href="<?= base_url('sdb_location/add') ?>" class="btn btn-success btn-xs text-success"><i class="fa fa-fw fa-plus-square"></i> Tạo </a></label>
              <div class="form-group">
                <select name="location_id" id="location_id" onChange="get_distance()"  id="location_id" class="form-control">
                  <option value="">Địa bàn</option>
                  <?php
                  foreach ($all_sdb_location as $sdb_location) {
                    $selected = ($sdb_location['location_id'] == $this->input->post('location_id')) ? ' selected="selected"' : "";
                    echo '<option data-point= ' . $sdb_location['location_point'] . ' value="' . $sdb_location['location_id'] . '" ' . $selected . '>' . $sdb_location['location_name'] . '</option>';
                  }
                  ?>
                </select>
                <span class="text-danger"><?php echo form_error('location_id'); ?></span>
              </div>
            </div>

            <div class="col-md-6">
              <label for="distance_id" class="control-label"><span class="text-danger">*</span>Thuộc tuyến đường</label>
              <label class="control-label float-right"> <a href="<?= base_url('sdb_distance/add') ?>" class="btn btn-success btn-xs text-success"><i class="fa fa-fw fa-plus-square"></i> Tạo </a></label>
              <div class="form-group">
                <select  name="distance_id" id='distance_id' class="form-control">
                  <option value="">Tuyến đường</option>
                  <?php
                  foreach ($all_sdb_distance as $sdb_distance) {
                    $selected = ($sdb_distance['distance_id'] == $this->input->post('distance_id')) ? ' selected="selected"' : "";
                    echo '<option value="' . $sdb_distance['distance_id'] . '" ' . $selected . '>' . $sdb_distance['distance_name'] . '</option>';
                  }
                  ?>
                </select>
                <span class="text-danger"><?php echo form_error('distance_id'); ?></span>
              </div>
            </div>


            <div class="col-md-6">
              <label for="distance_id" class="control-label"><span class="text-danger">*</span>Đoạn đường</label>
              <div class="form-group">
                <input type="text" name="distance_sub_name" class="form-control" id="distance_sub_name" />
                <span class="text-danger"><?php echo form_error('distance_sub_name'); ?></span>
              </div>
            </div>



            <div class="col-md-6">
              <label for="file_exec" class="control-label"><span class="text-danger">*</span>Tải file lên</label>
              <div class="form-group">
                <input type="file" name="file_exec" class="form-control" id="file_exec" />
                <span class="text-danger"><?php echo form_error('file_exec[name]'); ?></span>
              </div>
            </div>
            <div class="col-md-12">
              <button type="submit" class="btn btn-primary ">
                <i class="fa fa-check"></i> Import
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <?php echo form_close(); ?>
  </div>



  <div class="col-md-12">
    <div class="box box-primary">

      <div class="box-header ui-sortable-handle" style="cursor: move;">
        <i class="ion ion-clipboard"></i>
        <h3 class="box-title">Các file đã import</h3>
      </div>
      <div class="box-body">
        <table id="adb_table" class="table table-bordered table-striped ">
          <thead>
            <tr>
              <th>Tên file</th>
              <th>Mã tài sản</th>
              <!-- <th>Đường dẫn file</th> -->
              <th>Người import</th>
              <th>Địa bàn</th>
              <th>Tuyến đường</th>
              <th>Đoạn đường</th>
              <th>Số tài sản được nhập</th>
              <th>Trạng thái</th>

              <th>Ngày import</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($list_infrastructures_history_import as $s) {  ?>
              <tr>
                <td class="text-green"> <b> <?php echo $s['infrastructures_history_import_file_name']; ?></b> </td>
                <td><?php echo $s['infrastructures_category_id']; ?></td>
                <!-- <td><?php echo $s['infrastructures_history_import_link']; ?></td> -->
                <td><?php echo $s['user_name']; ?> (<?= $s['user_fullname']; ?>)</td>
                <td><?php echo $s['location_id']; ?></td>
                <td><?php echo $s['distance_id']; ?></td>
                <td><?php echo $s['distance_sub_name']; ?></td>
                <td><?php echo $s['infrastructures_history_import_total_inserted']; ?></td>
                <td><?php 
                 if($s['infrastructures_history_import_status'] == 1) {
                   echo "<label class='label label-success '><i class='fa fa-fw fa-check-circle'></i></label>";
                 }else {
                    echo "<label class='label label-danger'><i class='fa fa-fw fa-close '></i></label>";
                  }
                 ?></td>
                <td><?php echo $s['infrastructures_history_import_createdate']; ?></td>
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
  $(document).ready(function() {
    $('#infrastructure_category_id').select2();
  });
</script>