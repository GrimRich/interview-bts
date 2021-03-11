<template>
  <v-btn-toggle dense v-model="toggle_none" rounded>
    <v-tooltip top v-if="edit != undefined && edit !== false">
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="manage('update-')"
          icon
          v-on="on"
          @click="
            edit.status
              ? $router.push(edit.link)
              : setIsClickEdit({ item, status: true })
          "
        >
          <v-icon color="info">mdi-pencil</v-icon>
        </v-btn>
      </template>
      <span>Sunting Data</span>
    </v-tooltip>
    <v-tooltip top v-if="destroy != undefined && destroy !== false">
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="!checkChild(item).bool && manage('delete-')"
          icon
          v-on="on"
          @click="
            setDialogDestroy({
              id: item,
              status: true,
              child: checkChild(item).child,
              multiple: false,
              custom: custom,
              params: params
            })
          "
        >
          <v-icon color="error">mdi-delete-forever</v-icon>
        </v-btn>
        <v-btn
          v-else-if="checkChild(item).bool && manage('delete-')"
          icon
          v-on="on"
          @click="
            setDialogDestroy({
              id: item,
              status: true,
              child: checkChild(item).child,
              multiple: false,
              custom: custom,
              params: params
            })
          "
        >
          <v-icon :color="checkChild(item).bool ? '' : 'error'"
            >mdi-delete-alert</v-icon
          >
        </v-btn>
      </template>
      <span v-if="!checkChild(item).bool">Hapus Data</span>
      <span v-else-if="checkChild(item).bool">Data Mempunyai Keterkaitan</span>
    </v-tooltip>
    <v-tooltip top v-if="duplicate != undefined && duplicate !== false">
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="manage('update-')"
          icon
          v-on="on"
          :disabled="$store.state.isLoadingStore"
          :loading="$store.state.isLoadingStore"
          @click="storeData(itemWithoutId)"
        >
          <v-icon color="info">mdi-content-duplicate</v-icon>
        </v-btn>
      </template>
      <span>Duplikat Data</span>
    </v-tooltip>

    <v-tooltip top v-if="status != undefined && status !== false">
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="manage('update-')"
          icon
          v-on="on"
          @click="changeStatus(item)"
        >
          <v-icon color="info"
            >mdi-checkbox-multiple-marked-circle-outline</v-icon
          >
        </v-btn>
      </template>
      <span>Ubah Status</span>
    </v-tooltip>
    <v-tooltip top v-if="jenis != undefined && jenis !== false">
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="manage('update-')"
          icon
          v-on="on"
          @click="changeJenis(item)"
        >
          <v-icon color="info">mdi-checkbox-multiple-marked-outline</v-icon>
        </v-btn>
      </template>
      <span>Ubah Jenis</span>
    </v-tooltip>

    <slot></slot>
  </v-btn-toggle>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    item: {},
    edit: {},
    destroy: {},
    child: [],
    status: {},
    jenis: {},
    duplicate: { default: false },
    custom: {
      default: false
    },
    params: {
      default: '{ id: id }'
    }
  },
  data() {
    return {
      toggle_none: null
    }
  },
  methods: {
    ...mapMutations([
      'setDialogDestroy',
      'setIsClickEdit',
      'setModelDialogItem'
    ]),
    ...mapActions(['ishide', 'storeData']),

    checkChild(val) {
      let bool = false
      let arr = []

      Object.keys(val).forEach(key => {
        if (_.last(_.split(key, '_')) == 'count') {
          val[key] > 0
            ? arr.push(_.capitalize(_.join(_.initial(_.split(key, '_')), ' ')))
            : []
          bool = val[key] > 0 ? true : false
        }
      })

      return { bool: bool, child: arr }
    },
    changeStatus(val) {
      // console.log(val, this.$store.state.url)
    },
    submit(item) {
      return new Promise((resolve, reject) => {
        var result = this.ishide(item.id)
      })
    },
    manage(params) {
      if (this.$auth.user.all_permissions != null) {
        var data = this.$auth.user.all_permissions.includes(
          params + this.$route.name
        )
      } else {
        var data = false
      }
      return true
      // return true
    }
  },
  computed: {
    ...mapState({
      admin: state => state.admin
    }),
    itemWithoutId: {
      get() {
        var obj = this.item

        delete obj.id

        var id = {
          id: '',
          duplicate: true
        }

        return { ...obj, ...id }
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
