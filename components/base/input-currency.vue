<template>
  <v-text-field
    :prefix="currency"
    v-model="initialBalanceFormatted"
    :label="label"
    outlined
    dense
    :disabled="disabled"
    :error="error"
    :error-messages="errorMessages"
    :readonly="readonly"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      default: false
    },
    errorMessages: {
      default: ''
    },
    value: {
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      default: false
    }
  },
  data() {
    return {
      valid: true,
      currency: 'Rp.',
      initialBalance: this.value ? this.value : 0
    }
  },
  methods: {
    formatAsCurrency(value, dec) {
      let val = isNaN(parseFloat(value)) ? 0 : parseFloat(value)
      dec = dec || 0
      if (value === null || value === 0) {
        return 0
      }
      return (
        '' +
        parseFloat(val)
          .toFixed(dec)
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
      )
    }
  },

  computed: {
    initialBalanceFormatted: {
      get() {
        return this.formatAsCurrency(this.value, 0)
      },
      set(newValue) {
        this.$emit('input', Number(newValue.replace(/[^0-9\.]/g, '')))
        this.initialBalance = Number(newValue.replace(/[^0-9\.]/g, ''))
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
