<div class="row p-2">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">DS tổ được giao checkin</h3>
                <div class="box-tools">
                    <a href="<?php echo site_url('sdb_c_distance_u_group/add'); ?>" class="btn btn-success btn-sm">Thêm</a> 
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
                        <th>Tổ</th>
                        <th>Tuyến đường checkin</th>
                        <th>Actions</th>
                    </tr>
                    <?php foreach($sdb_c_distance_u_group as $s){ ?>
                    <tr>
                        <td><?php echo $s['user_group_name']; ?></td>
                        <td><?php echo $s['checkin_distance_name']; ?></td>
                        
                        <td>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>