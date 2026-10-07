<div class="row p-2">
		<?php  if (count($all_timeline) == 0) : ?>
				<h1 style="text-align: center;">Chưa có cập nhật công việc</h1>
			<?php endif; ?>
	<div class="col-md-12">
		<ul class="timeline">

			<?php foreach ($all_timeline as  $timeline):
				?>
				<li class="time-label">
					<span class="bg-green">
						<?=date('d/m/Y', strtotime($timeline['task_sub_createdate']))?>
					</span>
				</li>
				<li>
					<i class="fa fa-camera bg-purple"></i>

					<div class="timeline-item">
						<span class="time"><i class="fa fa-clock-o"></i> <?=date('d/m/Y H:i', strtotime($timeline['task_sub_createdate']))?></span>
						<div class="user-block p-2">
							<img class="img-circle" src="<?=base_url($timeline['user_avatar'])?>" alt="User Image">
							<span class="username"><a href="#"><?=$timeline['user_fullname']?></a> Cập nhật sự cố<a href="#"></a></span>
							<span class="description"><?=$timeline['user_fullname']?></span>
						</div>
						<div class="timeline-body">
							<div class="list-photo">
							<?php 
							
							$arr = json_decode($timeline['img_list'], true);
							if(is_array($arr)) {
								foreach (json_decode($timeline['img_list'], true) as $key => $value): ?>
									<a href="<?=base_url($value['task_sub_img_link'])?>" class="js-smartPhoto" data-caption="bear" data-id="bear" data-group="animal"/>
									<img width="200px" height="120px" src="<?=base_url($value['task_sub_img_link'])?>" />
								</a>
							<?php endforeach ?>
						<?php } ?>
						</div>
					</div>
					<div class="box-body" style="    border: 2px solid #ddd;margin: 0px 19px;background: #f4f4f4;">
						<?= $timeline['task_sub_detail'] ?>
					</div>
					<div class="timeline-footer"></div>
				</div>
			</li>
		<?php endforeach ?>
	</ul>
</div>
</div>
