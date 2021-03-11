<template>
  <div>
    <template>
      <v-divider vertical inset></v-divider>
      <v-menu offset-y>
        <template v-slot:activator="{ on: onMenu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: onTooltip }">
              <v-btn v-on="{ ...onMenu, ...onTooltip }" icon>
                <v-icon>mdi-database-export</v-icon>
              </v-btn>
            </template>
            <span>Export Data <slot></slot></span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="actionExport(item.status)"
          >
            <v-list-item-icon>
              <v-icon small right v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    prefix: {
      defaul: ''
    },
    api: {
      default: false
    }
  },
  data() {
    return {
      items: [
        { icon: 'mdi-eye', title: 'Preview', status: 'preview' },
        { icon: 'mdi-download', title: 'Download', status: 'download' }
      ]
    }
  },
  methods: {
    actionExport(status) {
      window.open(
        process.env.API_URL +
          'api/' +
          this.$store.state.url +
          '/export?status=' +
          status
        // process.env.API_URL +
        //   'api/' +
        //   this.prefix +
        //   this.api +
        //   '/export?status=' +
        //   status
      )
    }
  }
}
</script>

<style lang="stylus" scoped></style>
