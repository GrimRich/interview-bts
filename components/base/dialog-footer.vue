<template>
  <v-card-actions>
    <button-cancel v-if="!isShortcut"></button-cancel>
    <v-spacer></v-spacer>
    <button-delete
      v-if="$store.state.isClickEdit"
      :child="child"
    ></button-delete>
    <template v-if="!isShortcut">
      <button-submit></button-submit>
      <button-submit-new v-if="btn_new"></button-submit-new>
    </template>
    <template v-else>
      <button-submit-shortcut
        @submit="$emit('submit')"
      ></button-submit-shortcut>
    </template>
  </v-card-actions>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import ButtonDelete from '~/components/base/button-delete.vue'
import ButtonCancel from '~/components/base/button-cancel.vue'
import ButtonSubmit from '~/components/base/button-submit.vue'
import ButtonSubmitNew from '~/components/base/button-submit-new.vue'
import ButtonSubmitShortcut from '~/components/base/button-submit-shortcut.vue'

export default {
  watch: {
    isLoadingDestroy(val) {
      if (val === false) {
        this.$emit('close')
      }
    }
  },
  props: {
    btn_new: {},
    child: {},
    isShortcut: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ButtonDelete,
    ButtonCancel,
    ButtonSubmit,
    ButtonSubmitNew,
    ButtonSubmitShortcut
  },
  computed: {
    ...mapState({
      isLoadingDestroy: state => state.isLoadingDestroy
    })
  }
}
</script>

<style lang="stylus" scoped></style>
