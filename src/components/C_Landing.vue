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
                <input
                  type="search"
                  class="form-control form-control-lg"
                  placeholder="Buscar por nombre completo de paciente..."
                  v-model="searchKeyword"
                  value=""
                />
                <div class="input-group-append">
                  <button
                    @click="searchPatient()"
                    class="btn btn-lg btn-default"
                  >
                    <b-icon icon="search"></b-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <b-overlay
            v-if="overlayShow"
            :show="overlayShow"
            class="overlay"
            rounded="sm"
          >
          </b-overlay>
          <div v-if="patientList" class="patient">
            <b-table :fields="fields" :items="listPatients">
              <template #cell(id)="data">
                <span class="btn" @click="patientInfo(data.value)">{{
                  data.value
                }}</span>
              </template>
            </b-table>
          </div>
          <div v-if="show" class="row mt-3">
            <div class="col-md-10 offset-md-1">
              <div class="list-group">
                <div class="list-group-item">
                  <div class="row">
                    <div class="content">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-md-3">
                            <!-- Profile Image -->
                            <div class="card card-primary card-outline">
                              <div class="card-body box-profile">
                                <div class="text-center">
                                  <!-- <img class="profile-user-img img-fluid img-circle"
                                                  src="../../dist/img/user4-128x128.jpg"
                                                  alt="User profile picture"> -->
                                </div>

                                <h3 class="profile-username text-center">
                                  {{patData.nombreCompleto}}
                                </h3>

                                <p class="text-muted text-center">
                                  
                                </p>

                                <ul
                                  class="
                                    list-group list-group-unbordered
                                    mb-3
                                    data
                                  "
                                >
                                  <li class="list-group-item">
                                    <b>Clave del Paciente</b>
                                    <a class="float-right">{{patData.idPatient}}</a>
                                  </li>
                                  <li class="list-group-item">
                                    <b>Apellido Paterno</b>
                                    <a class="float-right">{{patData.aPaterno}}</a>
                                  </li>
                                  <li class="list-group-item">
                                    <b>Apellido Materno</b>
                                    <a class="float-right">{{patData.aMaterno}}</a>
                                  </li>
                                  <li class="list-group-item">
                                    <b>Nombre</b>
                                    <a class="float-right">{{patData.nombre}}</a>
                                  </li>
                                  <li class="list-group-item">
                                    <b>Fecha de Nacimiento</b>
                                    <a class="float-right">{{patData.fnacimiento}}</a>
                                  </li>
                                  <li class="list-group-item">
                                    <b>Plan/Convenio</b>
                                    <a class="float-right">{{patData.nombrePlan}}</a>
                                  </li>
                                  <li class="list-group-item">
                                    <b>Email</b>
                                    <a class="float-right">{{patData.email}}</a>
                                  </li>
                                   <li class="list-group-item">
                                    <b>Teléfono</b>
                                    <a class="float-right">{{patData.telefono}}</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- /.card-body -->
                            </div>
                          </div>
                          <!-- /.col -->
                          <div class="col-md-9">
                            <!-- <div class="card"> -->
                            <div class="card-header p-2">
                              <b-tabs content-class="mt-3 nav nav-pills">
                                <b-tab class="nav-item" title="Presupuesto" disabled>
                                  <div class="card-body">
                                    <div class="tab-content">
                                      <b-table 
                                        fixed
                                        striped
                                        hover
                                        :items="presupuesto"
                                      ></b-table>
                                    </div>
                                    <!-- /.tab-content -->
                                  </div>
                                  <!-- /.card-body -->
                                </b-tab>
                                <b-tab class="nav-item" title="Documentos">
                                  <div class="card-body">
                                    <div class="tab-content">
                                      <b-table
                                        fixed
                                        striped
                                        hover
                                        :items="documentos"
                                      ></b-table>
                                    </div>
                                    <!-- /.tab-content -->
                                  </div>
                                  <!-- /.card-body -->
                                </b-tab>
                                <b-tab class="nav-item" title="Sesiones">
                                  <div class="card-body">
                                    <div class="tab-content">
                                      <b-table
                                        fixed
                                        striped
                                        hover
                                        :items="sesiones"
                                      ></b-table>
                                    </div>
                                    <!-- /.tab-content -->
                                  </div>
                                  <!-- /.card-body -->
                                </b-tab>
                              </b-tabs>
                            </div>
                            <!-- /.card-header -->

                            <!-- </div> -->
                            <!-- /.card -->
                          </div>
                          <!-- /.col -->
                        </div>
                        <!-- /.row -->
                      </div>
                      <!-- /.container-fluid -->
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
      <div class="float-right d-none d-sm-block"><b>Version</b> 1.1.0</div>
      <strong
        >Copyright &copy; 2022
        <a href="https://dentalia.com">dentalia.com</a>.</strong
      >
      Todos los derechos reservados.
    </footer>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->
</template>
<script>
import C_Nav from "@/views/Nav.vue";
export default {
  name: "C_Landing",
  components: {
    C_Nav,
  },
  data() {
    return {
      presupuesto: [
        { No: 40, first_name: "20/07/21", last_name: "$0" },
      ],
      documentos: [],
      sesiones: [],
      fields: [
        "id",
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "name",
          label: "Full Name",
        },
      ],
      listPatients: [],
      searchKeyword: "",
      show: false,
      overlayShow: false,
      patientList: false,
      patData:{
        idPatient: '',
        aPaterno: '',
        aMaterno: '',
        nombre: '',
        nombreCompleto: '',
        fnacimiento: '',
        idPlan: '',
        nombrePlan: '',
        email: '',
        telefono: ''
      }
    };
  },
  methods: {
    fullName(value) {
      return `${value.first}`;
    },
    searchPatient() {
      var self = this;
      this.patientList = false;
      this.overlayShow = true;
      this.show = false;      
      this.listPatients = [];
      var headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "access-control-allow-origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        // "Authorization": this.$session.get("token")
      };
      this.$http
        .get(this.$url + "patient/search/" + this.searchKeyword, {
          headers: headers,
        })
        .then(
          function (response) {
            if (Object.keys(response.data.data).length > 0) {
              self.patientList = true;
              var rep = response.data.data;              
              for (let index = 0; index < rep.length; index++) {
                self.listPatients.push({
                  name: rep[index].namePerson,
                  id: rep[index].idPatient,
                });
              }
              self.overlayShow = false;
            } else {
              self.$swal.fire({
                icon: "warning",
                title: "Vaya...",
                text: "No se encontraron pacientes con ese nombre",
              });
              self.overlayShow = false;
            }
          },
          function (err) {
            console.log("err", err);
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ocurrio un error al consultar a los pacientes, por favor intentalo nuevamente, si el error persiste favor de reportarlo con el administrador de sistema",
            });
          }
        );
    },
    patientInfo(id_patient) {
      /*traemos la info del paciente*/      
      this.overlayShow = true;
      this.patientList = false;      
      this.patData.idPatient= '';
      this.patData.aPaterno= '';
      this.patData.aMaterno= '';
      this.patData.nombre= '';
      this.patData.nombreCompleto= '';
      this.patData.fnacimiento='';
      this.patData.idPlan= '';
      this.patData.nombrePlan='';
      this.patData.email= '';
      this.patData.telefono='';
      this.documentos = [];
      this.sesiones = [];
      var self = this;      

      var headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "access-control-allow-origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        // "Authorization": this.$session.get("token")
      };
      this.$http
        .get(this.$url + "patient/search/id/" + id_patient, {
          headers: headers,
        })
        .then(
          function (response) {            
            console.info(Object.keys(response.data.data).length);
            if (Object.keys(response.data.data).length > 0) {
              /*armamos los datos del paciente*/
              var repPatData = response.data.data.patData;
              for (let index = 0; index < repPatData.length; index++) {                                 
                  self.patData.idPatient= repPatData[index].idPatient;
                  self.patData.aPaterno= repPatData[index].aPaterno;
                  self.patData.aMaterno= repPatData[index].aMaterno;
                  self.patData.nombre= repPatData[index].nombre;
                  self.patData.nombreCompleto= repPatData[index].nombreCompleto;
                  self.patData.fnacimiento= repPatData[index].fnacimiento;
                  self.patData.idPlan= repPatData[index].idPlan;
                  self.patData.nombrePlan= repPatData[index].nombrePlan;
                  self.patData.email= repPatData[index].email;
                  self.patData.telefono= repPatData[index].telefono;
              }

              /*primero armamos los documentos*/
              var repDocuments = response.data.data.patDocuments;
              for (let index = 0; index < repDocuments.length; index++) {
                self.documentos.push({
                  No: repDocuments[index].file_number, 
                  Fecha: repDocuments[index].file_date,
                  Importe: '$ ' + repDocuments[index].file_payment == null ? 0 : repDocuments[index].file_payment,
                  Total: '$ ' + repDocuments[index].file_amount == null ? 0 : repDocuments[index].file_amount,
                  Saldo: '$ ' + repDocuments[index].pat_balance == null ? 0 : repDocuments[index].pat_balance,
                  Sesion:repDocuments[index].id_sesion,
                  Clinica:repDocuments[index].cli_name,
                  Estatus:repDocuments[index].status_id
                });         
              }
              /**armamos sessiones */
              var repSessions = response.data.data.patSessions;
              for (let index = 0; index < repSessions.length; index++) {
                self.sesiones.push({
                                Fecha: repSessions[index].file_date,
                                Clinica: repSessions[index].cli_name,
                                Doctor: repSessions[index].emp_abbr,
                                Tratamiento: repSessions[index].trt_name,
                                Observaciones: repSessions[index].file_comment,
                                // Sup: repSessions[index].,
                                OD: repSessions[index].tht_num,
                                Sesion: repSessions[index].sessnum,
                                Última: repSessions[index].lastsess == null ? 'NO' : repSessions[index].lastsess,
                                Cant: repSessions[index].quantity,
                                Recibo: repSessions[index].recibo,
                              });         
              }
              self.overlayShow = false;
              self.show = true;
            } else {
              self.$swal.fire({
                icon: "warning",
                title: "Vaya...",
                text: "No se encontro informacion del paciente seleccionado, favor de reportarlo con el administrador del sistema. Id del paciente buscado: " + id_patient,
              });
              self.overlayShow = false;
            }
          },
          function (err) {
            console.log("err", err);
          }
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav)
  .content-wrapper,
body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav)
  .main-footer,
body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav)
  .main-header {
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
.overlay {
  height: 50px;
}
.data {
  text-align: initial;
}
.patient {
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 15px;
  margin-top: 35px;
}
</style>
