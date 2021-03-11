<template>
  <div>
    <trumbowyg
      placeholder="Konten"
      id="my-editor"
      ref="trumbowyg"
      v-model="isi"
      :config="config"
    ></trumbowyg>
    <dialog-upload
      :media="true"
      v-model="dialog"
      @upload="value => changeImage(value)"
      @close="dialog = false"
    ></dialog-upload>
  </div>
</template>

<script>
import DialogUpload from '~/components/base/dialog-upload.vue'
export default {
  props: ['value'],
  data() {
    return {
      dialog: false,
      config: {
        plugins: {
          resizimg: {
            minSize: 64,
            step: 16
          }
        },
        autogrow: true,
        removeformatPasted: true,
        btnsAdd: ['foreColor', 'backColor'],
        btnsDef: {
          bankImage: {
            fn: () => (this.dialog = true),
            text: 'Insert Image from Media',
            ico: 'insertImage'
          },
          image: {
            dropdown: ['bankImage', 'insertImage'],
            ico: 'insertImage'
          }
        },
        btns: [
          ['viewHTML'],
          ['undo', 'redo'],
          ['strong', 'em', 'del'],
          ['superscript', 'subscript'],
          ['link'],
          ['image'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
          ['unorderedList', 'orderedList'],
          ['horizontalRule'],
          ['fontsize', 'formatting', 'removeformat', 'lineheight'],
          ['foreColor', 'backColor'],
          ['fullscreen']
        ],
        semantic: {
          div: 'div'
        }
      }
    }
  },
  methods: {
    changeImage(value) {
      if (value) {
        $('#my-editor').trumbowyg('execCmd', {
          cmd: 'insertImage',
          param: process.env.API_URL + value,
          forceCss: false,
          skipTrumbowyg: true
        })
      }
    }
  },
  computed: {
    isi: {
      get() {
        return this.value
      },
      set(model) {
        this.$emit('input', model)
      }
    }
  },
  components: {
    'dialog-upload': DialogUpload
  }
}
</script>
