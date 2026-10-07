<div class="row p-2">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Quản lý trạng thái checkin </h3>
                <div class="box-tools">
                    <a href="<?php echo site_url('sdb_checkin_statu/add'); ?>" class="btn btn-success btn-sm">Thêm</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>

                        <th>Tên trạng thái</th>
                      <th>Kích hoạt</th>
                      <th>Actions</th>
                  </tr>
                  <?php foreach($sdb_checkin_status as $s){ ?>
                    <tr>

                      <td><?php echo $s['checkin_status_name']; ?></td>

                      <td>
                        <?php 
                        if($s['checkin_status_active'] == 1){
                            echo "<label class='label label-success'>Hoạt động</label>";
                        } else{
                            echo "<label class='label label-danger'>Khóa</label>";
                        }
                        ?>
                    </td>


                    <td>
                        <a href="<?php echo site_url('sdb_checkin_statu/edit/'.$s['checkin_status_id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Sửa</a> 
                        <!-- <a href="<?php echo site_url('sdb_checkin_statu/remove/'.$s['checkin_status_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a> -->
                    </td>
                </tr>
            <?php } ?>
        </table>

    </div>
</div>
</div>
</div>
