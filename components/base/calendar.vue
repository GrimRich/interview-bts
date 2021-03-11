<template>
  <div>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="40">
          <v-toolbar flat color="white">
            <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              <v-icon small left>mdi-calendar-today</v-icon> Hari Ini
            </v-btn>
            <v-btn outlined color="grey darken-2" class="mr-4" @click="prev">
              <v-icon small left>mdi-chevron-left</v-icon> Bulan Sebelum
            </v-btn>
            <v-btn outlined color="grey darken-2" @click="next">
              <v-icon small left>mdi-chevron-right</v-icon> Bulan Sesudah
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Hari</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Minggu</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Bulan</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="475">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :short-months="false"
            :short-weekdays="false"
            :events="tanggal"
            locale="id"
            :weekdays="[1, 2, 3, 4, 5, 6, 0]"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card color="grey lighten-4" min-width="450px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-btn icon>
                  <v-icon>mdi-calendar</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  Batal
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['tanggal'],
  data() {
    return {
      focus: '',
      type: 'month',
      events: [
        {
          name: 'Shift 1',
          start: '2020-08-28 07:00:00',
          end: '2020-08-28 15:00:00',
          color: '#B0123F'
        },
        {
          name: 'Shift 2',
          start: '2020-08-25 15:00:00',
          end: '2020-08-25 23:00:00',
          color: '#F3BB3F'
        }
      ],
      typeToLabel: {
        month: 'Bulan',
        week: 'Minggu',
        day: 'Hari'
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      colors: [
        'blue',
        'indigo',
        'deep-purple',
        'cyan',
        'green',
        'orange',
        'grey darken-1'
      ],
      names: [
        'Meeting',
        'Holiday',
        'PTO',
        'Travel',
        'Event',
        'Birthday',
        'Conference',
        'Party'
      ]
    }
  },
  mounted() {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => (this.selectedOpen = true), 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    changeFormat(todayTime) {
      var month = format(todayTime.getMonth() + 1)
      var day = format(todayTime.getDate())
      var year = format(todayTime.getFullYear())
      return month + '/' + day + '/' + year
    },

    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    }
  }
}
</script>

<style lang="stylus" scoped></style>
