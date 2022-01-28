<template>
  <div>
      <button type="button" class="btn btn-warning" @click="generateReport()">Crear PDF</button>
      <vue-html2pdf
        :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="recibo"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="letter"
        pdf-orientation="portrait"
        pdf-content-width="900px" 
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
            <p>Geovanny Leonel De Leon Diaz</p>
            <p>10001528992</p>
          </address>
        </div>
        <!-- /.col -->
        <div class="col-sm-5 invoice-col header">
          <address>
            <strong>Recibo No.</strong><br /><br />
            <p>16836</p>
            <p>Fecha: 10/05/2017</p>
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
          <i class="text-sm-right">DIRECCIÓN ESTABLECIMIENTO:BUENAVISTA
              EJE 1 NORTE MOZQUETA #259 / LOCAL N2-22, BUENAVISTA
              CUAUHTÉMOC C.P.6350, CIUDAD DE MEXICO, MÉXICO</i>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <!-- Table row -->
      <div class="row">
        <div class="col-12 table-responsive">
          <table class="table table-striped">
            <thead>
              <tr class="borderstop">
                <th>Tto / Ses</th>
                <th>Descripción del servicio</th>
                <th>Precio U.</th>
                <th>Descuento porcentual</th>
                <th>Descuento</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="borders"></td>
                <td class="borders">Saldo actual</td>
                <td class="borders">$0.00</td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders">$0.00</td>
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
              <tr>
                <td class="borders">1</td>
                <td class="borders">Limpieza</td>
                <td class="borders">$679.00 </td>
                <td class="borders">100%</td>
                <td class="borders">$679.00</td>
                <td class="borders">$0.00</td>
              </tr>
              <tr>
                <td class="borders"></td>
                <td class="borders">Total a pagar el dia de hoy</td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders">$0.00</td>
              </tr>
              <tr>
                <td class="borders"></td>
                <td class="borders">Saldo actual</td>
                <td class="borders">$0.00</td>
                <td class="borders"></td>
                <td class="borders"></td>
                <td class="borders">$0.00</td>
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
          <p class="lead">Cantidad con letra:</p>
          <!-- <img src="../../dist/img/credit/visa.png" alt="Visa"> -->
          <!-- <img src="../../dist/img/credit/mastercard.png" alt="Mastercard"> -->
          <!-- <img src="../../dist/img/credit/american-express.png" alt="American Express"> -->
          <!-- <img src="../../dist/img/credit/paypal2.png" alt="Paypal"> -->

          <p
            class="text-muted well well-sm shadow-none"
            style="margin-top: 10px"
          >
            Cero pesos
          </p>
        </div>
        <!-- /.col -->
        <div class="col-6">
          <p class="lead"></p>

          <div class="table-responsive">
            <table class="table">
              <tr>
                <th style="width: 50%">Subtotal:</th>
                <td>$0.00</td>
              </tr>
              <tr>
                <th>I.V.A.</th>
                <td>$0.00</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>$0.00</td>
              </tr>
            </table>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </vue-html2pdf>
  </div>
</template>
<script>
import VueHtml2pdf from 'vue-html2pdf'
export default {
  name: "C_Receipt",
  components: {
    VueHtml2pdf
  },
  data() {
    return {};
  },
//   mounted(){
//       window.addEventListener("load", window.print());
//   },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.borderstop{
  bordergr: 2px solid #202325;
}
</style>
