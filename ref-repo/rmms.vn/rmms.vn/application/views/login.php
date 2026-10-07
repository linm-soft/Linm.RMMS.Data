 <div class="login-box">
  <div class="login-logo">

    <img src="<?=base_url('resources/img/tcdb_1.png')?>">
    <br>
    <a href=""><b>DRVN</b>checkin
      
    </a>
  </div>

  <div class="login-box-body">
    <p class="login-box-msg">Đăng nhập để bắt đầu sử dụng</p>
    <?php 
          // alert
    if (!is_null($this->session->flashdata('alert'))) {
      echo $this->session->flashdata('alert');
    }
    ?>
    <form action="<?php echo site_url('Sdb_user/login'); ?>" method="post">
      <div class="form-group has-feedback">
        <input type="" class="form-control" placeholder="account" name="user_name">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="Password"name="user_pass">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <input type="hidden" name="login" value="submit">
      <div class="row">
  <!--       <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input type="checkbox"> Remember Me
            </label>
          </div>
        </div> -->
        <!-- /.col -->
        <div class="col-xs-4">
          
          <button type="submit"  class="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

  </div>
  
</div>