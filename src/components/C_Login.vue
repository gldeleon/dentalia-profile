<template>
    <div class="login-box">
  <div class="login-logo">
    <!-- <a href="../../index2.html"><b>Admin</b>LTE</a> -->
    <img class="" src="https://dentalia.com/wp-content/themes/dentalia/dist/images/dentalia_logo_white.png" width="100%" />
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Por favor inicia sesion</p>

      <!-- <form action="../../index3.html" method="post"> -->
        <div class="input-group mb-3">
          <input v-model="form.user" type="email" class="form-control" placeholder="Correo">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input v-model="form.pwd" type="password" class="form-control" placeholder="Contraseña">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <!-- <input type="checkbox" id="remember"> -->
              <!-- <label for="remember">
                Remember Me
              </label> -->
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <div @click="login()" class="btn btn-primary btn-block">Iniciar Sesion</div>
          </div>
          <!-- /.col -->
        </div>
      <!-- </form> -->

      <!-- <div class="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div> -->
      <!-- /.social-auth-links -->

      <!-- <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Register a new membership</a>
      </p> -->
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
</template>
<script>

export default {
    name: 'Login',    
    data() {
        return {
          form: {
            user: '',
            pwd: ''
          }
        }
    },
    methods: {
      login(){
            if (this.form.user == 'sysadmin@dentalia.com' && this.form.pwd == 'masterkey') {
                    this.$session.start()
                    this.$session.set('username', 'sysadmin@dentalia.com')
                    this.$router.push('landing')
                } else {                    
                    this.$swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Usuario o contraseña incorrectos"
                    });
                }
      }
    }
}
</script>

<style scoped>

</style>