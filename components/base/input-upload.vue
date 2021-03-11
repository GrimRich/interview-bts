<template>
  <v-row>
    <v-col :cols="form.image.data ? 12 : 12" class="no-p">
      <v-file-input
        :label="label"
        files
        @change="onChange($event, 'image')"
        v-model="files.image"
        :placeholder="`Unggah ` + label"
        outlined
        prepend-icon=""
        append-icon="mdi-paperclip"
        dense
        :disabled="isLoading"
        :hint="hint"
        :error="error"
        :error-messages="errorMessages"
      ></v-file-input>
    </v-col>
    <!-- <v-col cols="2" v-if="form.image.data" class="no-p">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
            @click="
              openImage({
                image: form.image.data,
                type: 0
              })
            "
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </template>
        <span>Lihat File</span>
      </v-tooltip>
    </v-col> -->
  </v-row>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    ext: { default: () => [] },
    label: {},
    error: {},
    errorMessages: {},
    value: {}
  },
  data() {
    return {
      isLoading: false,
      env: process.env.MAX_SIZE,
      form: {
        image: []
      },
      files: {
        image: []
      }
    }
  },
  methods: {
    ...mapMutations(['setModelDialogItem']),

    openImage(item) {
      this.src = this.env + item.image
      this.types = item.type
      this.setModelDialogItem(true)
    },

    onChange(files, field, ext = []) {
      if (files != null && !Array.isArray(files)) {
        var self = this

        let reader = new FileReader()
        var extension = files.name.split('.').pop()

        if (ext.length == 0) {
          ext = this.ext
        }

        if (files.size > process.env.MAX_SIZE * 1000000) {
          alert(
            'Ukuran file terlalu besar maksimal: ' +
              process.env.MAX_SIZE +
              ' MB'
          )

          this.form[field] = []
          this.files[field] = []
        } else {
          if (ext.includes(extension)) {
            reader.onload = function(e) {
              self.form[field] = {
                data: e.target.result,
                extension: extension,
                size: files.size
              }
            }
            this.$emit('change', this.form[field])

            reader.readAsDataURL(files)
          } else {
            alert('Format file yang diizinkan ' + ext.join(', '))

            this.form[field] = []
            this.files[field] = []
          }
        }
      }
    }
  },
  watch: {
    'form.image'(newValue, oldValue) {
      this.$emit('input', newValue)
    },
    'files.image'(val) {
      if (val === undefined) {
        this.form = {
          image: []
        }
        this.value = {
          image: []
        }
      }
    },
    value(newValue) {
      if (!newValue) {
        this.form = {
          image: []
        }
        this.files = {
          image: []
        }
      }
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
    },
    hint() {
      return (
        `Format file yang diizinkan ` +
        this.ext +
        ` dan ukuran maksimal file ` +
        this.env +
        ` MB`
      )
    }
  }
}
</script>
<style lang="stylus" scoped></style>
