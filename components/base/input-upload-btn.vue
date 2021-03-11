<template>
  <div>
    <!-- <v-img
      width="200px"
      height="222px"
      :src="
        $attrs.value
          ? isBase64($attrs.value)
            ? $attrs.value.data
            : foto + $attrs.value
          : '/default.png'
      "
      style="cursor:pointer"
      @click="$refs.fileInput.click()"
    ></v-img> -->
    <v-btn color="primary" @click="$refs.fileInput.click()"
      ><v-icon left>{{ icon }}</v-icon
      >{{ label }}</v-btn
    >
    <small class="error--text" v-if="error">{{ errorMessages }}</small>
    <input
      style="display: none"
      @change="onChange($event, 'image')"
      ref="fileInput"
      type="file"
    />
  </div>
</template>

<script>
export default {
  props: {
    ext: { default: () => [] },
    error: {},
    label: {},
    icon: {},
    errorMessages: {}
  },
  data() {
    return {
      foto: process.env.API_URL + 'storage/',
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
    isBase64(str) {
      if (typeof str == 'string') {
        return false
      } else {
        return true
      }
    },
    onChange(files, field, ext = []) {
      if (files != null && !Array.isArray(files)) {
        var self = this
        var file = files.target.files[0]

        let reader = new FileReader()
        var extension = file.name.split('.').pop()

        if (ext.length == 0) {
          ext = this.ext
        }

        if (file.size > process.env.MAX_SIZE * 1000000) {
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
                size: file.size
              }
            }
            this.$emit('change', this.form[field])

            reader.readAsDataURL(file)
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
      this.$emit('upload', newValue)
    }
  },
  computed: {
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
