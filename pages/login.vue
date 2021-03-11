<template>
  <section
    id="login"
    style="background-image: url('/pattern.png');background-repeat: repeat;height:100%"
  >
    <v-overlay :value="loadPage">
      <v-progress-circular
        indeterminate
        size="64"
        class="ml-5"
      ></v-progress-circular>
      <br />
      <span class="my-3">Mohon Tunggu</span>
    </v-overlay>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" md="4">
        <v-row align="center" justify="center">
          <v-col cols="8">
            <div width="100%" class="d-flex justify-center">
              <img :src="'/urbanaccess.png'" contain width="30%" class="mb-7" />
            </div>
            <span class="title mt-4"><b>Masuk</b></span>

            <v-text-field
              outlined
              dense
              rounded
              label="E-mail"
              id="Email"
              type="email"
              required
              hide-details
              v-model="form.username"
              v-on:keyup.enter="userLogin()"
              :disabled="isLoading"
              class="mt-5"
            ></v-text-field>

            <v-text-field
              outlined
              dense
              rounded
              :disabled="isLoading"
              label="Kata Sandi"
              required
              hide-details
              class="my-3"
              @click:append="show = !show"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              v-on:keyup.enter="userLogin()"
              v-model="form.password"
            ></v-text-field>

            <v-btn
              color="primary"
              class="mt-5"
              rounded
              block
              @click="userLogin()"
              :disabled="
                isLoading || form.username == '' || form.password == ''
              "
              >Sign In</v-btn
            >
            <v-btn
              color="primary"
              class="mt-5"
              rounded
              block
              @click="$router.push('/daftar')"
              >Daftar</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8" class="hidden-sm-and-down">
        <v-img :src="'/image_login.jpg'" width="100%" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'blank',
  head() {
    return {
      title: 'Login'
    }
  },
  data() {
    return {
      isbrand: process.env.ISBRAND,
      loadPage: true,
      form: {
        username: '',
        password: ''
      },
      show: false,
      isLoading: false
    }
  },
  mounted() {
    this.loadPage = false
  },

  methods: {
    ...mapMutations(['setSnackbar', 'setText']),

    async userLogin() {
      this.isLoading = true
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.form
        })
      } catch (err) {
        if (err.response.status == 400) {
          this.setText(err.response.data.errorMessage)
        } else if (err.response.status == 401) {
          this.setText(err.response.data.errorMessage)
        } else {
          this.setText('Terjadi kesalahan silahkan hubungi administrator')
        }

        this.isLoading = false
        this.setSnackbar(true)
      }
    }
  }
}
</script>
