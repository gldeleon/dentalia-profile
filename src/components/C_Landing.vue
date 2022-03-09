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
                                      responsive
                                      hover
                                      :fields="documentosFields"
                                      :items="documentos">
                                        <template #cell(Imprimir)="data">
                                          <span class="btn" @click="generateReport(data.value)"><b-icon-printer></b-icon-printer></span>
                                        </template>
                                      </b-table>
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
                                        responsive
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
    <!-- <button type="button" class="btn btn-warning" @click="generateReport()">Crear PDF</button> -->

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
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="letter"
        pdf-orientation="portrait"
        pdf-content-width="70%"
        ref="html2Pdf"
    >
    <section slot="pdf-content" class="invoice">
      <!-- title row -->
      <div class="row">
        <div class="col-12">
          <h2 class="page-header">
            <!-- <i class="fas fa-globe"></i> AdminLTE, Inc. -->
            <!-- <small class="float-right">Date: 2/10/2014</small> -->
          </h2>
        </div>
        <!-- /.col -->
      </div>
      <!-- info row -->
      <div class="row invoice-info">
        <div class="col-sm-5 invoice-col header">
          <address>
            <strong>Datos del paciente</strong><br /><br />
            <p>{{receiptData.name}}</p>
            <p>{{receiptData.id}}</p>
          </address>
        </div>
        <!-- /.col -->
        <div class="col-sm-5 invoice-col header">
          <address>
            <strong>Recibo No.</strong><br /><br />
            <p>{{receiptData.receipt}}</p>
            <p>Fecha: {{receiptData.date}}</p>
          </address>
        </div>
        <!-- /.col -->
        <div class="col-sm-2 invoice-col mini-text">
          <b></b><br />
          <br />
          <b>SERVICIOS DENTI CARE S.C.
              R.F.C. SDC180921GL8</b><br />
          <i class="text-sm-left">AV EJE 1 NORTE MOSQUETA #259 / N222
            BUENAVISTA, , CIUDAD DE MEXICO
            C.P. MÉXICO, CUAUHTEMOC, 06350</i><br />
          <!-- <i class="text-sm-right">DIRECCIÓN ESTABLECIMIENTO:BUENAVISTA
              EJE 1 NORTE MOZQUETA #259 / LOCAL N2-22, BUENAVISTA
              CUAUHTÉMOC C.P.6350, CIUDAD DE MEXICO, MÉXICO</i> -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <!-- Table row -->
      <div class="row">
        <div class="col-12 table-responsive">
          <table class="table table-striped">
            <thead>
              <tr class="borderstopbot">
                <th class="borderLeft borderstopbot">Tto / Ses</th>
                <th class="borderstopbot">Descripción del servicio</th>
                <th class="borderstopbot">Precio U.</th>
                <th class="borderstopbot">Descuento porcentual</th>
                <th class="borderstopbot">Descuento</th>
                <th class="borderRigth borderstopbot">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="borders"></td>
                <td class="borders">Saldo actual</td>
                <td class="borders">${{receiptData.balance}}</td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders">${{receiptData.balance}}</td>
              </tr>
              <tr>
                <td class="borders"></td>
                <td class="borders">Tratamientos realizados el dia de hoy</td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders"></td>
              </tr>
              <!-- ciclo de tratamientos -->
              <tr v-for="(trt, index) in trts" :key="index">
                <td class="borders">{{trt.tto}}</td>
                <td class="borders">{{trt.trtName}}</td>
                <td class="borders">${{trt.priceU}}</td>
                <td class="borders">{{trt.percentajeDisc}}%</td>
                <td class="borders">${{trt.discount}}</td>
                <td class="borders">${{trt.sub}}</td>
              </tr>
              <!-- termina ciclo -->              
              <tr>
                <td class="borders"></td>
                <td class="borders">Total a pagar el dia de hoy</td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders">${{totales}}</td>
              </tr>
              <tr>
                <td class="borders"></td>
                <td class="borders">Saldo actual (A favor)</td>
                <td class="borders">${{balance}}</td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders">${{balance}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
      <br /><br /><br />
      <div class="row">
        <!-- accepted payments column -->
        <div class="col-6">
          <!-- <p class="lead">Cantidad con letra:</p> -->
          <!-- <img src="../../dist/img/credit/visa.png" alt="Visa"> -->
          <!-- <img src="../../dist/img/credit/mastercard.png" alt="Mastercard"> -->
          <!-- <img src="../../dist/img/credit/american-express.png" alt="American Express"> -->
          <!-- <img src="../../dist/img/credit/paypal2.png" alt="Paypal"> -->

          <!-- <p
            class="text-muted well well-sm shadow-none"
            style="margin-top: 10px"
          >
            Cero pesos
          </p> -->
        </div>
        <!-- /.col -->
        <div class="col-6">
          <p class="lead"></p>

          <div class="table-responsive">
            <table class="table">
              <tr>
                <th style="width: 50%">Subtotal:</th>
                <td>$ {{finalTotal}}</td>
              </tr>
              <tr>
                <th>I.V.A.</th>
                <td>$0.00</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>$ {{finalTotal}}</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <b>Observaciones:</b>
          <p>Para facturar este recibo ingresa a: http://facturacion.dentalia.com.mx. Sólo tienes 30 días naturales para facturarlo.
          En caso de solicitud de reembolso, se descontarán las comisiones por uso de terminal y meses sin intereses (en caso de aplicar).
          Si tienes dudas, quejas o sugerencias, escribenos a: comentarios@dentalia.com.mx</p>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </vue-html2pdf>
  </div>
  <!-- ./wrapper -->
</template>
<script>
import C_Nav from "@/views/Nav.vue";
import VueHtml2pdf from 'vue-html2pdf'
export default {
  name: "C_Landing",
  components: {
    C_Nav,
    VueHtml2pdf
  },
  data() {
    return {
      presupuesto: [
        { No: 40, first_name: "20/07/21", last_name: "$0" },
      ],
      balance: '',
      finalTotal: '',
      sesiones: [],
      documentosFields: [
          "No",
          "Fecha",
          "Importe",
          "Total",
          "Saldo",
          "Sesion",
          "Clinica",
          "Estatus",
          {
            key: "Imprimir",
            label: "Imprimir"
          }
        ],
      documentos: [],
      fields: [
        "id",
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "name",
          label: "Nombre",
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
      },
      receiptData:{
        name: '',
        id: '',
        receipt: '',
        date: '',
        file: '',
        balance: ''
      },
      trts: [],
      totales: 0
    };
  },
  methods: {
    fullName(value) {
      return `${value.first}`;
    },
    async generateReport(sessionId) {
      // alert('oh si ' + sesionId);
      await this.getDataReport(sessionId);
      this.$refs.html2Pdf.generatePdf();
    },
    async getDataReport(sessionId){
      let self = this;
      var headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "access-control-allow-origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        // "Authorization": this.$session.get("token")
      };
      await this.$http.get(this.$url + "patient/search/receipt/" + sessionId,{
        headers: headers
      }).then(
          function (response) {
            /**primero seteamos todo a void */
            self.receiptData.name= '';
            self.receiptData.id = '';
            self.receiptData.receipt = '';
            self.receiptData.date = '';
            self.trts = [];
            self.totales = 0;
            if (Object.keys(response.data.data).length > 0) {
              let rep = response.data.data.receiptData;
              console.info(response.data.data.receiptData);
              for (let index = 0; index < rep.length; index++) {
                self.receiptData.name = rep[index].nombre;
                self.receiptData.id = rep[index].id;
                self.receiptData.receipt = rep[index].recibo;
                self.receiptData.date = self.moment(rep[index].fecha).format('DD-MM-YYYY');
                self.totales = self.totales + rep[index].subtotal;                                
                self.balance = rep[index].balance;
                self.finalTotal = self.totales + self.balance;
                self.trts.push({'tto': rep[index].tto, 'trtName': rep[index].nombreTrt, 'priceU': rep[index].precioU, 'percentajeDisc': rep[index].descuentoPorcentual, 'discount':rep[index].descuento, 'sub':rep[index].subtotal});
              }
              let rep2 = response.data.data.balanceData;
            console.info(response.data.data.balanceData);
              for (let index = 0; index < rep2.length; index++) {
                self.receiptData.file = rep2[index].file_id;
                self.receiptData.balance = rep2[index].pat_balance;
              }
            } else {
              self.$swal.fire({
                icon: "warning",
                title: "Vaya...",
                text: "Ocurrio un problema al obtener los valores del recbio, favor de reportarlo con el administrador del sistema con la clave: SESSID" + sessionId,
              });
            }
          },
          function (err) {
            console.log("err", err);
            self.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ocurrio un problema al obtener los valores del recbio, favor de reportarlo con el administrador del sistema con la clave: SESSID" + sessionId,
            });
          }
        );
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
          headers: headers
        })
        .then(
          function (response) {
            if (Object.keys(response.data.data).length > 0) {
              self.patientList = true;
              var rep = response.data.data;
              for (let index = 0; index < rep.length; index++) {
                self.listPatients.push({
                  name: rep[index].namePerson,
                  id: rep[index].idPatient
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
            self.$swal.fire({
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
                  self.patData.fnacimiento= self.moment(repPatData[index].fnacimiento).format('DD-MM-YYYY');
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
                  Fecha: self.moment(repDocuments[index].file_date).format('DD-MM-YYYY'),
                  Importe: repDocuments[index].file_payment == null ? 0 : "$ " + repDocuments[index].file_payment,
                  Total: repDocuments[index].file_amount == null ? 0 : "$ " + repDocuments[index].file_amount,
                  Saldo: repDocuments[index].pat_balance == null ? 0 : "$ " + repDocuments[index].pat_balance,
                  Sesion:repDocuments[index].id_sesion,
                  Clinica:repDocuments[index].cli_name,
                  Estatus:repDocuments[index].status_id == 1 ? "--" : "C",
                  Imprimir: repDocuments[index].id_sesion
                });
              }
              /**armamos sessiones */
              var repSessions = response.data.data.patSessions;
              for (let index = 0; index < repSessions.length; index++) {
                self.sesiones.push({
                      Fecha: self.moment(repSessions[index].file_date).format('DD-MM-YYYY'),
                      Clinica: repSessions[index].cli_name,
                      Doctor: repSessions[index].emp_abbr,
                      Tratamiento: repSessions[index].trt_name,
                      Observaciones: repSessions[index].file_comment,
                      // Sup: repSessions[index].,
                      OD: repSessions[index].tht_num,
                      Sesion: repSessions[index].sessnum,
                      Última: repSessions[index].lastsess == null ? 'NO' : repSessions[index].lastsess,
                      Cant: repSessions[index].quantity,
                      Recibo: repSessions[index].recibo
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
.mini-text{
  font-size: .6rem;
}
.header{
  background-color: darkgrey;
}
.borders{
  border-left: 2px solid #202325;
  border-right: 2px solid #202325;
}
.borderstopbot{
  border-top: 2px solid #202325;
  border-bottom: 2px solid #202325;
}
.borderLeft{
  border-left: 2px solid #202325;
}
.invoice{
  margin-left: -250px !important;
}
.borderRigth{
  border-right: 2px solid #202325;
}
</style>
