<template>
  <div>
    <v-col cols="12">
      <v-row no-gutters>
        <v-col md="12">
          <v-container>
            <v-card
              :loading="loading"
              :disabled="loading"
              outlined
              class="mt-10"
              style="background-image: url('/pattern.png');background-repeat: repeat"
            >
              <v-card-title class="d-flex justify-center"
                ><b>Registrasi User</b></v-card-title
              >
              <v-card-text>
                <v-row justify="center" align="center">
                  <v-col cols="11">
                    <v-container>
                      <form @submit.prevent="submit">
                        <v-text-field
                          outlined
                          dense
                          rounded
                          required
                          v-model="form.username"
                          label="Username"
                        ></v-text-field>

                        <v-text-field
                          outlined
                          dense
                          rounded
                          v-model="form.email"
                          label="E-mail"
                          required
                        ></v-text-field>

                        <v-text-field
                          outlined
                          dense
                          rounded
                          label="Password"
                          required
                          v-model="form.password"
                          :error-messages="
                            form.password &&
                            form.cpassword &&
                            form.password != form.cpassword
                              ? 'Password tidak sama'
                              : ''
                          "
                          @click:append="show = !show"
                          :type="show ? 'text' : 'password'"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        ></v-text-field>

                        <v-text-field
                          outlined
                          dense
                          rounded
                          label="Konfirmasi Password"
                          required
                          v-model="form.cpassword"
                          :error-messages="
                            form.password &&
                            form.cpassword &&
                            form.password != form.cpassword
                              ? 'Password tidak sama'
                              : ''
                          "
                          @click:append="show = !show"
                          :type="show ? 'text' : 'password'"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        ></v-text-field>

                        <v-checkbox
                          v-model="form.checkbox"
                          value="1"
                          label="Saya setuju dengan syarat & ketentuan yang berlaku di dalam aplikasi Urban Wifi"
                          type="checkbox"
                          required
                        >
                          <template v-slot:label>
                            <div>
                              Saya setuju dengan

                              <b class="primary--text" style="cursor:pointer">
                                syarat & ketentuan
                              </b>

                              yang berlaku di dalam aplikasi
                            </div>
                          </template>
                        </v-checkbox>

                        <v-row>
                          <v-col>
                            <v-btn
                              class="mr-2"
                              block
                              rounded
                              color="primary"
                              type="submit"
                            >
                              Daftarkan Akun
                            </v-btn>
                          </v-col>
                          <div style="width:100%">
                            <small class="d-flex justify-center"
                              >Sudah Punya Akun?
                              <b
                                style="cursor:pointer"
                                class="primary--text"
                                @click="$router.push('/login')"
                              >
                                &nbsp;Login</b
                              ></small
                            >
                          </div>
                        </v-row>
                      </form>
                    </v-container>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  auth: 'guest',
  layout: 'blank',
  data() {
    return {
      form: {
        username: '',
        password: '',
        cpassword: '',
        email: ''
      },
      loading: false,
      show: false
    }
  },
  methods: {
    ...mapMutations(['setSnackbar', 'setText']),
    submit() {
      this.loading = true
      this.$axios
        .post('/register', {
          email: this.form.email,
          password: this.form.password,
          username: this.form.username
        })
        .then(response => {
          this.setSnackbar(true)
          this.setText(
            'Berhasil membuat user, silahkan login untuk melanjutkan'
          )
          this.$router.push('/login')
        })
        .catch(err => {
          if (err.response.status == 400) {
            this.setText(err.response.data.errorMessage)
          } else if (err.response.status == 401) {
            this.setText(err.response.data.errorMessage)
          } else {
            this.setText('Terjadi kesalahan silahkan hubungi administrator')
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  head() {
    return {
      title: 'Registrasi'
    }
  }
}
</script>

<style scoped>
.v-text-field--rounded {
  border-radius: 14px !important;
}
.v-text-field--outlined fieldset {
  color: #3577bc !important;
}
.v-text-field--outlined > .v-input__control > .v-input__slot {
  background: white;
}
</style>
