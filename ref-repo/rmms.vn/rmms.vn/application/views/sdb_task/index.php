<div class="container-fluid"> 
    <div class="row p-2">
        <div class="col-md-12 ">
            <div class="box box-danger box-solid">
                <div class="box-header">
                    <h3 class="box-title">DS Chờ xử lý</h3>
                    <div class="box-tools">
                        <?php if(USER_LEVEL <2) {
                            ?>
                            <!-- <a href="<?php echo site_url('sdb_task/add'); ?>" class="btn btn-success btn-sm">Thêm</a>  -->
                        <?php } ?>
                    </div>
                </div>
                <div class="box-body">
                    <table class="table table-striped">
                        <tr>

                            <th>Tên</th>
                            <th>Phần công</th>
                            <th>Tổ</th>
                            <th>Trao đổi</th>
                            <th>Ngày tạo</th>
                            <th>Actions</th>
                        </tr>
                        <?php foreach($sdb_task_1 as $s){ ?>
                            <tr>
                                <td><?php echo $s['task_name']; ?></td>
                                <td><?php echo $s['user_name']; ?></td>
                                <td><?php echo $s['user_receive_group_id']; ?></td>
                                <td>
                                   <a href="<?php echo site_url('sdb_task/comment/'.$s['task_id']); ?>" class="btn  btn-xs"><span class="fa  fa-wechat"></span> </a> 
                               </td>

                               <td><?php echo $s['task_createdate']; ?></td>

                               <td>
                                <a href="<?php echo site_url('sdb_task/comment/'.$s['task_id']); ?>" class="btn btn-info btn-xs"><span class="fa  "></span>Thông tin</a>  
                                <?php 
                                if(USER_LEVEL > 1) {
                                    ?>
                                    <a href="<?php echo site_url('sdb_task/update_status_2/'.$s['task_id']); ?>" class="btn btn-success btn-xs"><span class="fa  fa-caret-up"></span> Tiếp nhận</a> 
                                    <?php 
                                }
                                ?>
                                <?php 
                                if(USER_LEVEL < 2) {
                                    ?>

                                    <a href="<?php echo site_url('sdb_task/remove/'.$s['task_id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Xóa</a>
                                    <?php 
                                }
                                ?>
                            </td>
                        </tr>
                    <?php } ?>
                </table>
                <div class="pull-right">
                    <!-- <?php echo $this->pagination->create_links(); ?>                     -->
                </div>                
            </div>
        </div>
    </div>
    <div class="col-md-6 ">
        <div class="box box-warning box-solid">
            <div class="box-header">
                <h3 class="box-title">DS Đang xử lý</h3>
                <div class="box-tools">
                    <!-- <a href="<?php echo site_url('sdb_task/add'); ?>" class="btn btn-success btn-sm">Thêm</a>  -->
                </div>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>

                        <th>Tên</th>
                        <th>Phần công</th>
                        <th>Tổ</th>
                        <th>Trao đổi</th>
                        <th>Actions</th>
                    </tr>
                    <?php foreach($sdb_task_2 as $s){  ?>
                        <tr>
                            <td><?php echo $s['task_name']; ?></td>
                            <td><?php echo $s['user_name']; ?></td>
                            <td><?php echo $s['user_receive_group_id']; ?></td>
                            <td>
                                <a href="<?php echo site_url('sdb_task/comment/'.$s['task_id']); ?>" class="btn  btn-xs"><span class="fa  fa-wechat"></span> </a> 
                            </td>

                            <td>
                                <a href="<?php echo site_url('sdb_task/comment/'.$s['task_id']); ?>" class="btn btn-info btn-xs"><span class="fa  "></span>Thông tin</a>  
                                <a href="<?php echo site_url('sdb_task/timeline/'.$s['task_id']); ?>" class="btn btn-success btn-xs"><span class="fa  "></span>Theo dõi</a>  
                          </td>
                      </tr>
                  <?php } ?>
              </table>
              <div class="pull-right">
                <!-- <?php echo $this->pagination->create_links(); ?>                     -->
            </div>                
        </div>
    </div>

</div>
<div class="col-md-6 ">
    <div class="box box-success box-solid">
        <div class="box-header">
            <h3 class="box-title">DS Đã hoàn thành</h3>
               <!--  <div class="box-tools">
                    <a href="<?php echo site_url('sdb_task/add'); ?>" class="btn btn-success btn-sm">Thêm</a> 
                </div> -->
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>

                        <th>Tên</th>
                        <th>Phần công</th>
                        <th>Tổ</th>
                        <th>Trao đổi</th>
                        <th>Actions</th>
                    </tr>
                    <?php foreach($sdb_task_3 as $s){ ?>
                        <tr>
                            <td><?php echo $s['task_name']; ?></td>
                            <td><?php echo $s['user_name']; ?></td>
                            <td><?php echo $s['user_receive_group_id']; ?></td>
                            <td>
                                <a href="<?php echo site_url('sdb_task/comment/'.$s['task_id']); ?>" class="btn  btn-xs"><span class="fa  fa-wechat"></span> 1</a> 
                            </td>
                            <td>
                               <a href="<?php echo site_url('sdb_task/comment/'.$s['task_id']); ?>" class="btn btn-info btn-xs"><span class="fa  "></span>Thông tin</a>  

                               <a href="<?php echo site_url('sdb_task/timeline/'.$s['task_id']); ?>" class="btn btn-success btn-xs"><span class="fa  "></span>Theo dõi</a>  
                           </td>
                       </tr>
                   <?php } ?>
               </table>
               <div class="pull-right">
                <!-- <?php echo $this->pagination->create_links(); ?>                     -->
            </div>                
        </div>
    </div>


</div>
</div>
</div>