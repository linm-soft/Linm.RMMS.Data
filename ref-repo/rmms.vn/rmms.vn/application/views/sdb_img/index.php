<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sdb Img Listing</h3>
            </div>
            <div class="box-body">
                <table class="table table-striped">
                    <tr>
						<th>ID</th>
						<th>User Id</th>
						<th>Sub Trouble Id</th>
						<th>Trouble Id</th>
						<th>Img Link</th>
						<th>Create Date</th>
						<th>Actions</th>
                    </tr>
                    <?php foreach($sdb_img as $s){ ?>
                    <tr>
						<td><?php echo $s['id']; ?></td>
						<td><?php echo $s['user_id']; ?></td>
						<td><?php echo $s['sub_trouble_id']; ?></td>
						<td><?php echo $s['trouble_id']; ?></td>
						<td><?php echo $s['img_link']; ?></td>
						<td><?php echo $s['create_date']; ?></td>
						<td>
                            <a href="<?php echo site_url('sdb_img/edit/'.$s['id']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                            <a href="<?php echo site_url('sdb_img/remove/'.$s['id']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                                
            </div>
        </div>
    </div>
</div>
