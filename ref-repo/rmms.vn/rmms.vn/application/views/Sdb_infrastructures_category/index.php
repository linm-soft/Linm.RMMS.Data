<div class="row p-2">
  <div class="col-md-12">
    <div class="box">
      <div class="box-header">
        <h3 class="box-title">Loại tài sản</h3>
        <div class="box-tools">
          <!--  <a href="<?php echo site_url('sdb_infrastructures_category/add'); ?>" class="btn btn-success btn-sm">Thêm</a>  --> 
        </div>
      </div>
      <div class="box-body">
        <table id="adb_table" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Hình ảnh</th>

              <th>Tên</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach($infrastructures_category as $s){ ?>
              <tr>

                <td>
                  <?php 
                  if (!empty($s['infrastructures_category_icon'])) {
                   ?>
                   <img height="40px" width="40px" src="<?= base_url($s['infrastructures_category_icon']); ?>" >
                   <?php 
                 }
                 ?>
               </td>

               <td><?php echo $s['infrastructures_category_name']; ?></td>

               <td>
                            <!-- <a href="<?php echo site_url('sdb_infrastructures_category/edit/'.$s['infrastructures_category_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Sửa</a> 
                              <a href="<?php echo site_url('sdb_infrastructures_category/remove/'.$s['infrastructures_category_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Xóa</a> -->
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
