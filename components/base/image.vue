<template>
  <div>
    <video
      width="200"
      height="220"
      v-if="type == 1"
      :src="env + $attrs.value"
      :type="type"
      @click="openImage({ image: $attrs.value, type: type })"
      class="grey lighten-2 ma-1 hover--image"
    >
      Browser kamu ga support untuk menjalankan video ini
    </video>
    <v-img
      :src="
        type == 0
          ? $attrs.value
            ? env + $attrs.value.replace('original', 'small')
            : ''
          : type == 2
          ? 'https://img.youtube.com/vi/' + $attrs.value + '/0.jpg'
          : false
      "
      :lazy-src="
        $attrs.value ? env + $attrs.value.replace('original', 'xsmall') : ''
      "
      @click="
        openImage({
          image: $attrs.value,
          type: type
        })
      "
      v-else
      aspect-ratio="1"
      :height="height"
      :width="width"
      class="grey lighten-2 ma-1 hover--image"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    type: { default: 0 },
    external: { default: false },
    height: { default: 200 },
    width: { default: 220 }
  },
  data() {
    return {
      env: this.external === true ? '' : process.env.API_URL + 'storage/'
    }
  },
  methods: {
    ...mapMutations(['setModelDialogItem']),

    openImage(item) {
      this.src = this.env + item.image
      this.types = item.type
      this.setModelDialogItem(true)
    }
  },
  computed: {
    src: {
      get() {
        return this.$store.state.src
      },
      set(value) {
        this.$store.commit('setSrc', value)
      }
    },
    types: {
      get() {
        return this.$store.state.type
      },
      set(value) {
        this.$store.commit('setType', value)
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
