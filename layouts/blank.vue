<template>
  <v-app>
    <!-- <v-app-bar class="no-flex" color="primary" dark>
      <v-toolbar-title>
        <nuxt-link to="/" style="text-decoration: none">
          <img class="mt-2" src="/urbanlogo-02.png" width="60px" />
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar> -->
    <!-- <v-card
      class="mx-auto1"
      width="90%"
      style="margin:auto;margin-top:20px;padding:2px;min-height:85vh"
    > -->
    <v-main>
      <nuxt />
    </v-main>
    <!-- </v-card> -->
    <alert-snackbar></alert-snackbar>
  </v-app>
</template>
<script>
import AlertSnackbar from '~/components/base/alert-snackbar.vue'
export default {
  components: {
    AlertSnackbar
  }
}
</script>
