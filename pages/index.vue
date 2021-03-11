<template>
  <div>
    <v-toolbar dense flat>
      <v-icon class="mr-2">mdi-dashboard</v-icon>
      <v-toolbar-title>Checklist</v-toolbar-title>
      <v-spacer></v-spacer>

      <refresh v-model="isLoading" @click="fetch()"></refresh>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="15"
      class="elevation-1"
    >
      <template v-slot:item.no="{ item }">
        {{ items.indexOf(item) + 1 }}
      </template>
      <template v-slot:item.checklistCompletionStatus="{ item }">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-if="item.checklistCompletionStatus"
              color="success"
              dark
              v-bind="attrs"
              v-on="on"
            >
              mdi-check-bold
            </v-icon>
            <v-icon v-else dark v-bind="attrs" v-on="on" color="warning">
              mdi-clock
            </v-icon>
          </template>
          <span>{{
            item.checklistCompletionStatus ? 'Selesai' : 'Pending'
          }}</span>
        </v-tooltip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              small
              icon
              @click="
                dialog.detail.model = true
                dialog.detail.item = item
              "
              ><v-icon color="primary">mdi-eye</v-icon></v-btn
            >
          </template>
          <span>Lihat Data</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" small icon @click="destroy(item.id)"
              ><v-icon color="error">mdi-delete</v-icon></v-btn
            >
          </template>
          <span>Hapus Data</span>
        </v-tooltip>
      </template>
    </v-data-table>

    <v-dialog persistent width="70%" v-model="dialog.detail.model">
      <v-card>
        <v-card-title>
          <v-icon left color="primary">mdi-eye</v-icon> Detail Checklist
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog.detail.model = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-card flat outlined>
            <v-card-title>
              <b
                ><v-icon left>mdi-account-outline</v-icon
                >{{ detail.name ? detail.name : ' - ' }}</b
              >
              <v-spacer></v-spacer>
              <b
                >Status :
                <span
                  :class="
                    detail.checklistCompletionStatus
                      ? 'success--text'
                      : 'warning--text'
                  "
                  style="cursor:pointer"
                  >{{
                    detail.checklistCompletionStatus ? 'Selesai' : 'Pending'
                  }}</span
                >
              </b></v-card-title
            >
          </v-card>
          <v-card flat outlined class="mt-3">
            <v-card-title>
              Detail Data
            </v-card-title>
            <v-card-text>
              <v-data-table
                v-if="detail.items"
                :headers="dialog.detail.headers"
                :items="detail.items"
                :items-per-page="5"
                class="elevation-1 no-height"
              >
                <template v-slot:item.no="{ item }">
                  {{ detail.items.indexOf(item) + 1 }}
                </template>
                <template v-slot:item.checklistCompletionStatus="{ item }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        v-if="item.checklistCompletionStatus"
                        color="success"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        mdi-check-bold
                      </v-icon>
                      <v-icon
                        v-else
                        dark
                        v-bind="attrs"
                        v-on="on"
                        color="warning"
                      >
                        mdi-clock
                      </v-icon>
                    </template>
                    <span>{{
                      item.checklistCompletionStatus ? 'Selesai' : 'Pending'
                    }}</span>
                  </v-tooltip>
                </template>
              </v-data-table>
              <span v-else>Tidak ada data detail</span>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: false,
          value: 'no',
          width: 15
        },
        { text: 'Nama Task', value: 'name' },
        { text: 'Status', value: 'checklistCompletionStatus' },
        { text: 'Aksi', value: 'action', width: '10%' }
      ],
      dialog: {
        detail: {
          model: false,
          headers: [
            {
              text: '#',
              align: 'start',
              sortable: false,
              value: 'no',
              width: 15
            },
            { text: 'Nama Task', value: 'name' },
            { text: 'Status', value: 'checklistCompletionStatus' }
          ],
          item: ''
        }
      },
      items: [],
      isLoading: false
    }
  },
  mounted() {
    this.fetch()
  },
  computed: {
    detail() {
      return this.dialog.detail.item
    }
  },
  methods: {
    ...mapMutations(['setSnackbar', 'setText']),
    fetch() {
      this.isLoading = true
      this.$axios
        .get('/checklist')
        .then(response => {
          this.items = response.data.data
        })
        .catch(e => {
          this.setSnackbar(true)
          this.setText('Terjadi kesalahan silahkan hubungi administrator')
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    destroy(id) {
      this.isLoading = true
      this.$axios
        .delete('/checklist/' + id)
        .then(response => {
          this.setSnackbar(true)
          this.setText('Data Berhasil Dihapus')
          this.fetch()
        })
        .catch(e => {
          this.setSnackbar(true)
          this.setText('Terjadi kesalahan silahkan hubungi administrator')
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="stylus" scoped></style>
