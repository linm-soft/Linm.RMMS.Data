<div class="row p-2">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">QL Địa bàn</h3>
                <div class="box-tools">
                    <a href="<?php echo site_url('sdb_location/add'); ?>" class="btn btn-success btn-sm">Thêm</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
                      
                      <th>Tên</th>
                      <th>Kích hoạt</th>
                      <th>Mô tả</th>
                      <th>Actions</th>
                  </tr>
                  <?php foreach($sdb_location as $s){ ?>
                    <tr>
                      <td><?php echo $s['location_name']; ?></td>
                      
                      <td>
                        <?php 
                        if($s['location_active'] == 1){
                            echo "<label class='label label-success'>Hoạt động</label>";
                        } else{
                            echo "<label class='label label-danger'>Khóa</label>";
                        }
                        ?>
                    </td>


                    <td><?php echo $s['location_detail']; ?></td>
                    <td>
                        <!-- <a href="<?php echo site_url('sdb_location/edit/'.$s['location_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Sửa</a> 
                        <a href="<?php echo site_url('sdb_location/remove/'.$s['location_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Xóa</a>  -->
                    </td>
                </tr>
            <?php } ?>
        </table>
        <div class="pull-right">
            <?php echo $this->pagination->create_links(); ?>                    
        </div>                
    </div>
</div>
</div>
</div>
