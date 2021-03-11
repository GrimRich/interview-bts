<template>
  <v-card outlined class="mb-3">
    <v-card-text style="text-align: right;">
      <div
        :class="[
          displayResult.length > 15
            ? displayResult.length > 20
              ? 'headline'
              : 'display-1'
            : 'display-2',
          'black--color'
        ]"
        style="min-height:48px;"
      >
        {{ displayResult }}
      </div>
    </v-card-text>
    <v-card-text class="pa-0">
      <v-container grid-list-xs pa-1>
        <v-layout row wrap pa0>
          <v-flex v-for="button in buttons" :key="button.key" xs3>
            <v-tooltip top v-if="button.tooltip">
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  :class="['ma-0', button.class]"
                  :color="button.color"
                  @click="InputKey(button.key)"
                  block
                  depressed
                  large
                >
                  <v-icon v-if="button.icon" dark>{{ button.icon }}</v-icon>
                  <template v-else>{{ button.label }}</template>
                </v-btn>
              </template>
              <span>{{ button.tooltip }}</span>
            </v-tooltip>
            <v-btn
              v-else
              :class="['ma-0', button.class]"
              :color="button.color"
              @click="InputKey(button.key)"
              block
              depressed
              large
            >
              <v-icon v-if="button.icon" dark>{{ button.icon }}</v-icon>
              <template v-else>{{ button.label }}</template>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {}
  },
  data() {
    return {
      input: '',
      first: true,
      buttons: [
        { key: '(', label: '(', color: 'grey lighten-2', class: '' },
        {
          key: 'c',
          label: 'C',
          tooltip: 'Clear',
          color: 'grey lighten-2',
          class: ''
        },
        {
          key: 'back',
          label: 'BACK',
          tooltip: 'Hapus',
          icon: 'mdi-backspace',
          color: 'grey lighten-2',
          class: ''
        },
        { key: '/', label: '÷', color: 'grey lighten-2', class: '' },
        { key: '7', label: '7', color: '', class: 'headline' },
        { key: '8', label: '8', color: '', class: 'headline' },
        { key: '9', label: '9', color: '', class: 'headline' },
        { key: '*', label: '×', color: 'grey lighten-2', class: '' },
        { key: '4', label: '4', color: '', class: 'headline' },
        { key: '5', label: '5', color: '', class: 'headline' },
        { key: '6', label: '6', color: '', class: 'headline' },
        { key: '-', label: '-', color: 'grey lighten-2', class: '' },
        { key: '1', label: '1', color: '', class: 'headline' },
        { key: '2', label: '2', color: '', class: 'headline' },
        { key: '3', label: '3', color: '', class: 'headline' },
        { key: '+', label: '+', color: 'grey lighten-2', class: '' },
        { key: ')', label: ')', color: 'grey lighten-2', class: '' },
        { key: '0', label: '0', color: '', class: 'headline' },
        { key: '.', label: '.', color: 'grey lighten-2', class: '' },
        { key: '/100', label: '%', color: 'grey lighten-2', class: '' },
        {
          key: 'GP',
          label: 'GP',
          tooltip: 'Gaji Pokok',
          color: 'grey lighten-2',
          class: ''
        },
        {
          key: 'UPAH',
          label: 'Upah',
          tooltip: 'Upah',
          color: 'grey lighten-2',
          class: ''
        },
        {
          key: 'JAMCK',
          label: 'JAMCK',
          tooltip: 'Jam Cepat Keluar',
          color: 'grey lighten-2',
          class: ''
        },
        {
          key: 'JP',
          label: 'JP',
          tooltip: 'Jam Pertama',
          color: 'grey lighten-2',
          class: ''
        },
        {
          key: 'JB',
          label: 'JB',
          tooltip: 'Jam Berikutnya',
          color: 'grey lighten-2',
          class: ''
        },
        {
          key: 'JK',
          label: 'JK',
          tooltip: 'Jam ke -',
          color: 'grey lighten-2',
          class: ''
        }
      ],
      input: {
        current: '0',
        operator: '',
        prev: ''
      }
    }
  },
  methods: {
    InputKey(key) {
      this.first = false
      const isNumber = /^\d$/.test(key)
      if (isNumber) {
        if (this.input.current !== '0') {
          this.input.current += key
        } else {
          this.input.current = key
        }
        return
      }
      const isOperator = /^[÷×\-+]$/.test(key)
      switch (key) {
        case '÷':
          if (!this.input.current.includes('.')) {
            this.input.current += '.'
          }
          return
        case '.':
          if (!this.input.current.includes('.')) {
            this.input.current += '.'
          }
          return
        case 'back':
          this.input.current =
            this.input.current.substring(0, this.input.current.length - 1) ||
            '0'
          return
        case 'c':
          this.input.current = '0'
          this.input.operator = ''
          this.input.prev = ''
          return
        case 'ce':
          this.input.current = '0'
          return
        default:
          if (this.input.current !== '0') {
            this.input.current += key
          } else {
            this.input.current = key
          }
      }
    }
  },
  computed: {
    displayResult() {
      if (this.first) {
        this.input.current = this.value
        return this.value
      } else {
        const hasDot = this.input.current.includes('.')
        const split = this.input.current.split('.')
        const integer = split[0]
        const minority = split[1]
        this.$emit(
          'submit',
          `${integer.toLocaleString()}${hasDot ? '.' + minority : ''}`
        )
        return `${integer.toLocaleString()}${hasDot ? '.' + minority : ''}`
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
