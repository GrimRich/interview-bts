<template>
  <div>
    <v-btn
      icons-and-text
      @click="submit()"
      class="ma-2"
      color="primary"
      :disabled="isLoadingStore"
      :loading="isLoadingStore"
    >
      <v-icon left>mdi-content-save-all-outline</v-icon>Simpan
    </v-btn>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setIsClick']),

    submit() {
      // this.setIsClick(true)
      this.$emit('submit')
    }
  },

  computed: {
    ...mapState({
      isLoadingStore: state => state.isLoadingStore
    })
  }
}
</script>
