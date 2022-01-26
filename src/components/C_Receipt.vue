<template>
  <div>
      <button type="button" class="btn btn-warning" @click="generateReport()">Crear PDF</button>
      <vue-html2pdf
        :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="letter"
        pdf-orientation="portrait"
        pdf-content-width="1400px" 
        ref="html2Pdf"
    >
    <section slot="pdf-content" class="invoice">
      <!-- title row -->
      <div class="row">
        <div class="col-12">
          <h2 class="page-header">
            <i class="fas fa-globe"></i> AdminLTE, Inc.
            <small class="float-right">Date: 2/10/2014</small>
          </h2>
        </div>
        <!-- /.col -->
      </div>
      <!-- info row -->
      <div class="row invoice-info">
        <div class="col-sm-4 invoice-col">
          From
          <address>
            <strong>Admin, Inc.</strong><br />
            795 Folsom Ave, Suite 600<br />
            San Francisco, CA 94107<br />
            Phone: (804) 123-5432<br />
            Email: info@almasaeedstudio.com
          </address>
        </div>
        <!-- /.col -->
        <div class="col-sm-4 invoice-col">
          To
          <address>
            <strong>John Doe</strong><br />
            795 Folsom Ave, Suite 600<br />
            San Francisco, CA 94107<br />
            Phone: (555) 539-1037<br />
            Email: john.doe@example.com
          </address>
        </div>
        <!-- /.col -->
        <div class="col-sm-4 invoice-col">
          <b>Invoice #007612</b><br />
          <br />
          <b>Order ID:</b> 4F3S8J<br />
          <b>Payment Due:</b> 2/22/2014<br />
          <b>Account:</b> 968-34567
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <!-- Table row -->
      <div class="row">
        <div class="col-12 table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Qty</th>
                <th>Product</th>
                <th>Serial #</th>
                <th>Description</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Call of Duty</td>
                <td>455-981-221</td>
                <td>El snort testosterone trophy driving gloves handsome</td>
                <td>$64.50</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Need for Speed IV</td>
                <td>247-925-726</td>
                <td>Wes Anderson umami biodiesel</td>
                <td>$50.00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Monsters DVD</td>
                <td>735-845-642</td>
                <td>Terry Richardson helvetica tousled street art master</td>
                <td>$10.70</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Grown Ups Blue Ray</td>
                <td>422-568-642</td>
                <td>Tousled lomo letterpress</td>
                <td>$25.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <div class="row">
        <!-- accepted payments column -->
        <div class="col-6">
          <p class="lead">Payment Methods:</p>
          <!-- <img src="../../dist/img/credit/visa.png" alt="Visa"> -->
          <!-- <img src="../../dist/img/credit/mastercard.png" alt="Mastercard"> -->
          <!-- <img src="../../dist/img/credit/american-express.png" alt="American Express"> -->
          <!-- <img src="../../dist/img/credit/paypal2.png" alt="Paypal"> -->

          <p
            class="text-muted well well-sm shadow-none"
            style="margin-top: 10px"
          >
            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
            weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah
            plickers sifteo edmodo ifttt zimbra.
          </p>
        </div>
        <!-- /.col -->
        <div class="col-6">
          <p class="lead">Amount Due 2/22/2014</p>

          <div class="table-responsive">
            <table class="table">
              <tr>
                <th style="width: 50%">Subtotal:</th>
                <td>$250.30</td>
              </tr>
              <tr>
                <th>Tax (9.3%)</th>
                <td>$10.34</td>
              </tr>
              <tr>
                <th>Shipping:</th>
                <td>$5.80</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>$265.24</td>
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
