<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      v-if="range"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :disabled="disabled"
          v-model="date"
          :label="label"
          readonly
          v-bind="attrs"
          v-on="on"
          :outlined="outlined"
          :hide-details="hideDetails"
          dense
          :clearable="clearable"
          :error="error"
          :error-messages="errorMessages"
        ></v-text-field>
      </template>
      <v-date-picker
        :min="min"
        v-model="date"
        no-title
        range
        scrollable
        :type="type"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">Batal</v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)"
          >Simpan</v-btn
        >
      </v-date-picker>
    </v-menu>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      v-else-if="type == 'month'"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :disabled="disabled"
          v-model="date"
          :label="label"
          readonly
          v-bind="attrs"
          v-on="on"
          :outlined="outlined"
          :hide-details="hideDetails"
          dense
          :clearable="clearable"
          @input="menu = false"
          :error="error"
          :error-messages="errorMessages"
        ></v-text-field>
      </template>
      <v-date-picker
        :min="min"
        v-model="date"
        @input="menu = false"
        :type="type"
      >
      </v-date-picker>
    </v-menu>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      v-else
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :disabled="disabled"
          v-model="computedDateFormatted"
          :label="label"
          readonly
          v-bind="attrs"
          v-on="on"
          :outlined="outlined"
          :hide-details="hideDetails"
          :clearable="clearable"
          dense
          @input="menu = false"
          :error="error"
          :error-messages="errorMessages"
        ></v-text-field>
      </template>
      <v-date-picker
        :min="min"
        v-model="date"
        @input="menu = false"
        :type="type"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    label: {},
    type: {
      type: String,
      default: 'date'
    },
    range: {
      type: Boolean,
      default: false
    },
    min: {
      type: String,
      default: undefined
    },
    outlined: {
      default: true
    },
    hideDetails: {
      default: false
    },
    error: {
      default: false
    },
    errorMessages: {
      default: ''
    },
    disabled: {
      default: false
    },
    readonly: {
      default: false
    },
    clearable: {
      default: true
    }
  },

  data() {
    return {
      menu: false,
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10))
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    date: {
      get() {
        return this.$attrs.value
      },
      set(model) {
        this.$emit('input', model)
      }
    }
  },
  watch: {
    date(val) {
      if (!this.range) {
        this.dateFormatted = this.formatDate(this.date)
      }
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}-${month}-${day}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
</script>

<style lang="stylus" scoped></style>
