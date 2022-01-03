<template>
<div class="wrapper">
  <C_Nav />
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <h2 class="text-center display-4"></h2>
      </div>
    </section>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                        <div class="input-group input-group-lg">
                            <input type="search" class="form-control form-control-lg" placeholder="Nombre de paciente" v-model="searchKeyword" value="">
                            <div class="input-group-append">
                                <button @click="buscarPaciente()" class="btn btn-lg btn-default">
                                    <b-icon icon="search"></b-icon>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
            <div v-if="show" class="row mt-3">
                <div class="col-md-10 offset-md-1">
                    <div class="list-group">
                        <div class="list-group-item">
                            <div class="row">
                                <div class="content">
                                  <div class="container-fluid">
                                    <div class="row">
                                      <div class="col-md-4">
                                        <!-- Profile Image -->
                                        <div class="card card-primary card-outline">
                                          <div class="card-body box-profile">
                                            <div class="text-center">
                                              <!-- <img class="profile-user-img img-fluid img-circle"
                                                  src="../../dist/img/user4-128x128.jpg"
                                                  alt="User profile picture"> -->
                                            </div>

                                            <h3 class="profile-username text-center">Geovanny Leonel De Leon Diaz</h3>

                                            <p class="text-muted text-center">Software Engineer</p>

                                            <ul class="list-group list-group-unbordered mb-3">
                                              <li class="list-group-item">
                                                <b>Clave del Paciente</b> <a class="float-right">10322</a>
                                              </li>
                                              <li class="list-group-item">
                                                <b>Apellido Paterno</b> <a class="float-right">De Leon</a>
                                              </li>
                                              <li class="list-group-item">
                                                <b>Apellido Materno</b> <a class="float-right">Diaz</a>
                                              </li>
                                            </ul>
                                          </div>
                                          <!-- /.card-body -->
                                        </div>
                                        <!-- /.card -->
                                        

                                        <!-- About Me Box -->
                                        <!-- <div class="card card-primary">
                                          <div class="card-header">
                                            <h3 class="card-title">Datos Generales</h3>
                                          </div>
                                          <div class="tab-pane" id="settings">
                                                <form class="form-horizontal">
                                                  <div class="form-group row">
                                                    <label for="inputName" class="col-sm-2 col-form-label">Clave del Paciente:</label>
                                                    <div class="col-sm-10">
                                                      <input type="email" class="form-control" id="inputName" placeholder="Clave">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputEmail" class="col-sm-2 col-form-label">Apellido Paterno:</label>
                                                    <div class="col-sm-10">
                                                      <input type="email" class="form-control" id="inputEmail" placeholder="Apellido Paterno">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputName2" class="col-sm-2 col-form-label">Apellido Materno:</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputName2" placeholder="Apellido Materno">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Nombre:</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Nombre">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Le gusta que le llamen:</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Le gusta que le llamen">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputExperience" class="col-sm-2 col-form-label">Fecha de Nacimiento:</label>
                                                    <div class="col-sm-10">
                                                      <textarea class="form-control" id="inputExperience" placeholder="Fecha de Nacimiento"></textarea>
                                                  </div> 
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Planes/Convenios:</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Planes/Convenios">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Odontologo de Cabecera:</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Odontologo de Cabecera">
                                                    </div>
                                                  </div>
                                                  <div class="card-header">
                                                    <h3 class="card-title">Información de Contacto</h3>
                                                  </div>

                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Horario de Contacto:</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Entre 00:00:00 y las 00:00:00">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Correo(s) Electronico(s):</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Correo Electronico 1">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Correo Electronico 2">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Telefono(s):</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Telefono 1">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Telefono 2">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Facebook, Twitter, Otro:</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Facebook">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Twitter">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Otro">
                                                    </div>
                                                  </div>
                                                  <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Medio favorito:</label>
                                                    <div class="col-sm-10">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Correo Electronico">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Telefono 1">
                                                      <input type="text" class="form-control" id="inputSkills" placeholder="Telefono 2">
                                                    </div>
                                                  </div>
                                                </form>
                                              </div> -->
                                              
                                          
                                          <!-- /.card-body -->
                                        <!-- </div> --> 
                                        <!-- /.card -->
                                      </div>
                                      <!-- /.col -->
                                      <div class="col-md-8">
                                        <!-- <div class="card"> -->
                                          <div class="card-header p-2">
                                            <b-tabs content-class="mt-3 nav nav-pills">
                                              <b-tab class="nav-item" title="Presupuesto">
                                                <div class="card-body">
                                                  <div class="tab-content">
                                                    <b-table striped hover :items="presupuesto"></b-table>
                                                    <b-table striped hover :items="sesiones"></b-table>
                                                  </div>
                                                  <!-- /.tab-content -->
                                                </div><!-- /.card-body -->
                                              </b-tab>
                                              <b-tab class="nav-item" title="Documentos">
                                                <div class="card-body">
                                                  <div class="tab-content">
                                                    <b-table striped hover :items="documentos"></b-table>
                                                    <b-table striped hover :items="sesiones"></b-table>
                                                  </div>
                                                  <!-- /.tab-content -->
                                                </div><!-- /.card-body -->
                                              </b-tab>
                                              <b-tab class="nav-item" title="Sesiones">
                                                <div class="card-body">
                                                  <div class="tab-content">
                                                    <b-table striped hover :items="sesiones"></b-table>
                                                  </div>
                                                  <!-- /.tab-content -->
                                                </div><!-- /.card-body -->
                                              </b-tab>
                                            </b-tabs>
                                          </div><!-- /.card-header -->
                                          
                                        <!-- </div> -->
                                        <!-- /.card -->
                                      </div>
                                      <!-- /.col -->
                                    </div>
                                    <!-- /.row -->
                                  </div><!-- /.container-fluid -->
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    
    <!-- Main content -->
    
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
      <b>Version</b> 1.1.0
    </div>
    <strong>Copyright &copy; 2022 <a href="https://dentalia.com">dentalia.com</a>.</strong> Todos los derechos reservados.
  </footer>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->
</template>
<script>
import C_Nav from '@/views/Nav.vue'
export default {
  name: 'C_Landing',  
  components: {
    C_Nav
  },
   data() {
      return {
        presupuesto: [
          { No: 40, first_name: '20/07/21', last_name: '$0' },
          { No: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { No: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { No: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        documentos: [
          { No: 40, Fecha: '20/07/21', Importe: '$0', Total: '00', Saldo: '000', Sesion: '4', Clinica: '09', Clave: 'GG' },
          { No: 21, Fecha: 'Larsen', Importe: 'Shaw', Total: '01', Saldo: '004', Sesion: '5', Clinica: '10', Clave: 'GH' },
          { No: 89, Fecha: 'Geneva', Importe: 'Wilson', Total: '02', Saldo: '005', Sesion: '6', Clinica: '11', Clave: 'GJ' },
          { No: 38, Fecha: 'Jami', Importe: 'Carney', Total: '03', Saldo: '006', Sesion: '7', Clinica: '12', Clave: 'GK' }
        ],
        sesiones: [
          { Fecha: 40, Clinica: '20/07/21', Doctor: '$0', Tratamiento: 'TELECONSULTA', Observaciones: 'VER', Sup: '--', OD: '--', Sesion: '1/1', Última: 'N/A', Cant: '00', Recibo: '01' },
          { Fecha: 21, Clinica: 'Larsen', Doctor: 'Shaw', Tratamiento: 'TELECONSULTA2', Observaciones: 'VER2', Sup: '--', OD: '--', Sesion: '1/1', Última: 'N/A2', Cant: '01', Recibo: '02' },
          { Fecha: 89, Clinica: 'Geneva', Doctor: 'Wilson', Tratamiento: 'TELECONSULTA3', Observaciones: 'VER3', Sup: '--', OD: '--', Sesion: '1/1', Última: 'N/A3', Cant: '02', Recibo: '03' },
          { Fecha: 38, Clinica: 'Jami', Doctor: 'Carney', Tratamiento: 'TELECONSULTA4', Observaciones: 'VER4', Sup: '--', OD: '--', Sesion: '1/1', Última: 'N/A4', Cant: '03', Recibo: '04'  }
        ],
        searchKeyword: '',
        show: false
      }
    },
    methods: {
      buscarPaciente() {
        this.show = true;
        alert('buscando...');
      }         
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .content-wrapper, body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .main-footer, body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .main-header {
    transition: margin-left 0.3s ease-in-out;
    margin-left: 0px;
}

h3 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
