<template>
  <v-dialog v-model="showDialogDestroy" persistent max-width="420">
    <v-card>
      <v-card-title class="headline" v-if="$store.state.child == false"
        >Konfirmasi</v-card-title
      >
      <v-card-title class="headline" v-else
        >Data Memiliki Keterkaitan</v-card-title
      >
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="2"
            ><v-icon large class="vc">mdi-information</v-icon></v-col
          >
          <v-col cols="10">
            <span v-if="$store.state.child == false"
              >Anda yakin akan menghapus data tersebut?</span
            >
            <span v-else>
              Data tidak bisa dihapus karena memiliki keterkaitan dengan
              <strong> {{ relation() }}</strong
              >. <br />
            </span>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          :disabled="isLoading"
          :loading="isLoading"
          @click="setDialogDestroy(false)"
          >{{ $store.state.child == false ? 'Tidak' : 'Oke' }}</v-btn
        >

        <v-btn
          v-if="$store.state.child == false"
          color="primary"
          text
          :disabled="isLoading"
          :loading="isLoading"
          @click="destroyData()"
          >Ya</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions(['destroyData']),
    ...mapMutations(['setDialogDestroy']),

    relation() {
      if (typeof this.$store.state.child == 'object') {
        return _.join(this.$store.state.child, ',')
      } else {
        return 'Data Lain'
      }
    }
  },

  computed: {
    ...mapState({
      showDialogDestroy: state => state.showDialogDestroy,
      isLoading: state => state.isLoadingDestroy
    })
  }
}
</script>
<style>
.vc {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
