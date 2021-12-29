<template>
  <div class="home hold-transition sidebar-mini">
    <C_Landing />
  </div>
</template>

<script>
// @ is an alias to /src
import C_Landing from '@/components/C_Landing.vue'

export default {
  name: 'Landing',
  components: {
    C_Landing
  }
}
</script>
