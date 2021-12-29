<template>
  <div class="login hold-transition login-page">
    <C_Login />
  </div>
</template>

<script>
// @ is an alias to /src
import C_Login from '@/components/C_Login.vue'

export default {
  name: 'Login',
  components: {
    C_Login
  }
}
</script>
