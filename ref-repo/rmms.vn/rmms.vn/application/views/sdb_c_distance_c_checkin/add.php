<div class="row">
    <div class="col-md-12">
      	<div class="box box-info">
            <div class="box-header with-border">
              	<h3 class="box-title">C Distance C Checkin Add</h3>
            </div>
            <?php echo form_open('c_distance_c_checkin/add'); ?>
          	<div class="box-body">
          		<div class="row clearfix">
					<div class="col-md-6">
						<label for="checkin_distance_id" class="control-label">Checkin Distance</label>
						<div class="form-group">
							<select name="checkin_distance_id" class="form-control">
								<option value="">select checkin_distance</option>
								<?php 
								foreach($all_checkin_distance as $checkin_distance)
								{
									$selected = ($checkin_distance['checkin_distance_id'] == $this->input->post('checkin_distance_id')) ? ' selected="selected"' : "";

									echo '<option value="'.$checkin_distance['checkin_distance_id'].'" '.$selected.'>'.$checkin_distance['checkin_distance_id'].'</option>';
								} 
								?>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<label for="c_distance_c_checkin_location" class="control-label">C Distance C checkin Location</label>
						<div class="form-group">
							<input type="text" name="c_distance_c_checkin_location" value="<?php echo $this->input->post('c_distance_c_checkin_location'); ?>" class="form-control" id="c_distance_c_checkin_location" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="c_distance_c_checkin_lat" class="control-label">C Distance C checkin Lat</label>
						<div class="form-group">
							<input type="text" name="c_distance_c_checkin_lat" value="<?php echo $this->input->post('c_distance_c_checkin_lat'); ?>" class="form-control" id="c_distance_c_checkin_lat" />
						</div>
					</div>
					<div class="col-md-6">
						<label for="c_distance_c_checkin_long" class="control-label">C Distance C checkin Long</label>
						<div class="form-group">
							<input type="text" name="c_distance_c_checkin_long" value="<?php echo $this->input->post('c_distance_c_checkin_long'); ?>" class="form-control" id="c_distance_c_checkin_long" />
						</div>
					</div>
				</div>
			</div>
          	<div class="box-footer">
            	<button type="submit" class="btn btn-success">
            		<i class="fa fa-check"></i> Save
            	</button>
          	</div>
            <?php echo form_close(); ?>
      	</div>
    </div>
</div>