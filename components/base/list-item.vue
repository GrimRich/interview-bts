<template>
  <div>
    <v-list>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-subtitle
            class
            v-html="listTitle ? listTitle : '-'"
          ></v-list-item-subtitle>
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-list-item-title
                v-on="link ? on : ''"
                :class="link ? 'primary--text' : ''"
                :style="link ? 'cursor:pointer' : ''"
                @click="link ? download(linkUrl) : ''"
                v-html="`<span>` + listValue ? listValue : ' - ' + `</span>`"
              ></v-list-item-title>
            </template>
            <span>{{ link ? 'Download File' : '' }}</span>
          </v-tooltip>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    listTitle: {
      default: ' - '
    },
    listValue: {
      default: ' - '
    },
    linkUrl: {
      default: ' - '
    },
    link: {
      default: false
    }
  },
  methods: {
    download(link) {
      window.open(
        process.env.API_URL + 'file/download?file=' + link + '&name=' + link
      )
    }
  }
}
</script>

<style lang="stylus" scoped></style>
