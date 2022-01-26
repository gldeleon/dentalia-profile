<template>
  <div class="home hold-transition sidebar-mini">    
    <C_Receipt />    
    
  </div>
</template>

<script>
// @ is an alias to /src
import C_Receipt from '@/components/C_Receipt.vue'
export default {
  name: 'Receipt',
  components: {
    C_Receipt
  }
}
</script>
