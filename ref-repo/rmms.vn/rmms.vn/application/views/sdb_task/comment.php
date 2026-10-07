<?php 
$data = json_decode($sdb_task['trouble_obj_data']);
$sdb_list_task_img[] = array("task_sub_img_link"=>$sdb_task['img_link'], "task_sub_img_link_thumb"=>$sdb_task['img_link_thumb']);
?>

<style type="text/css">
.border-success {
	border: 1px solid #dff0d8;
	border-top: 0px;
}
</style>

<div class="row">
	<div class="col-md-12">
		<!-- Box Comment -->
		<div class="p-2">
			<div class="row">
				<div class=" col-md-4">
					<div class="box box-primary box-solid">
						<div class="box-header with-border bg-success">

							<h3 class="box-title"> <b><?=$sdb_task['task_name']?> </b></h3>
						</div>
						<div class="box-body border-success">
							<dl class="dl-horizontal">
								<?php if (isset($data->trouble_deltail)): ?>
									<dt>Mô tả chi tiết</dt>
									<dd>
										<?=$data->trouble_deltail?>
									</dd>
								<?php endif; ?>
								<dt>Vị trí</dt>
								<dd><?=$sdb_task['trouble_location']?></dd>

								<?php if (isset($data->trouble_name)): ?>
									<dt>Sự cố</dt>
									<dd>	<?=$data->trouble_name?></dd>
								<?php endif; ?>


								<?php if (isset($data->trouble_note)): ?>
									<dt>Chú ý</dt>
									<dd>	<?=$data->trouble_note?></dd>
								<?php endif; ?>

								<?php if (isset($data->trouble_area)): ?>
									<dt>Diện tích</dt>
									<dd>	<?=$data->trouble_area?></dd>
								<?php endif; ?>

								<dt>Ngày tạo</dt>
								<dd><?=$sdb_task['task_createdate']?></dd>

								<dt>Thời hạn</dt>
								<dd>
									<?php if (!empty($sdb_task['task_start_time']) && !empty($sdb_task['task_end_time'])): ?>

									<b>
										<label class="label label-success" style="font-size: 1em;">
											<?=date('d/m/Y', strtotime($sdb_task['task_start_time']))?>
										</label>	

										<label class="label label-danger"  style="font-size: 1em">
											<?=date('d/m/Y', strtotime($sdb_task['task_end_time']))?>
										</label>	
									</b>
									
								<?php endif; ?>
							</dd>
						</dl>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="box box-success box-solid">
							<div class="box-header with-border bg-info">
								<h3 class="box-title">Bình luận</h3>
							</div>


							<!-- <span class="pull-right text-muted"> 2 Bình luận</span> -->
							<div class="box-footer box-comments" style="">
								<?php 

								foreach ($sdb_comment as $key => $value) {
									?>
									<div class="box-comment">
										<img class="img-circle img-sm" src="<?=base_url($value['user_avatar'])?>" alt="User Image">
										<div class="comment-text">
											<span class="username">
												<?= $value['user_name'] ?> ( <?= $value['user_fullname'] ?> )

												<span class="text-muted pull-right"><?= date('d/m H:i', strtotime($value['task_comment_createdate'])) ?></span>
											</span><!-- /.username -->
											<?=$value['task_comment']?>
										</div>
										<!-- /.comment-text -->
									</div>
									<!-- /.box-comment -->
									<?php 
								}
								?>

							</div>
							<!-- /.box-footer -->
							<div class="box-footer" style="">
								<form action="<?=base_url('sdb_task/add_comment')?>" method="post">
									<input type="hidden" name="task_id" value="<?=$sdb_task['task_id']?>">
									<img class="img-circle img-sm" src="<?=base_url(USER_AVATAR)?>" alt="User Image">
									<div class="img-push">
										<input type="text" name="task_comment" class="form-control input-sm" placeholder="Press enter to post comment">
									</div>
								</form>
							</div>


						</div>


					</div>
				</div>

			</div>
			<div class="col-md-8">
				<div class="box box-info box-solid" >
					<?php if (!empty($sdb_task['img_link_thumb'])) {?>
						<div class="box-header with-border bg-success">
							<h3 class="box-title">Hình ảnh</h3>
						</div>
						<!-- style="overflow-x: auto;white-space: nowrap;" -->
						<div class=" p-2 " >
							<div class="list-img-task">
								<?php 
								?>
								<?php foreach ($sdb_list_task_img as $value) : ?>
									<a href="<?=base_url($value['task_sub_img_link'])?>" class=" attachment-img js-smartPhoto" data-caption="bear" data-id="bear" data-group="animal"/>
										<img style="width: 200px" src="<?=base_url($value['task_sub_img_link_thumb'])?>" />
									</a>
								<?php endforeach; ?>
							</div>
						</div>
					<?php }?>
				</div>
			</div>

		</div>


	</div>
</div>