<template>
  <div>
      <button type="button" class="btn btn-warning" @click="generateReport()">Crear PDF</button>
      <vue-html2pdf
        :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="3000"
        filename="recibo"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="letter"
        pdf-orientation="portrait"
        pdf-content-width="70%"
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
    >
    <section slot="pdf-content" class="invoice">     
      <div class="row invoice-info">
        <div class="col-sm-5 invoice-col header">
          <address>
            <strong>Datos del paciente</strong><br /><br />
            <p>Geovanny Leonel De Leon Diaz</p>
            <p>10001528992</p>
          </address>
        </div>
        <div class="col-sm-5 invoice-col header">
          <address>
            <strong>Recibo No.</strong><br /><br />
            <p>16836</p>
            <p>Fecha: 10/05/2017</p>
          </address>
        </div>
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
      </div>
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
      </div>
      <br /><br /><br />
      <div class="row">
        <div class="col-6">
          <p class="lead">Cantidad con letra:</p>
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
      </div>
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
