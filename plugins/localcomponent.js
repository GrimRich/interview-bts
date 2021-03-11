import Vue from 'vue'
import searchdata from '../components/base/search-data.vue'
import tableImage from '../components/base/table-image.vue'

import destroy from '../components/base/destroy.vue'
import refresh from '../components/base/refresh.vue'
import exit from '../components/base/exit.vue'
import create from '../components/base/create.vue'
import ButtonCancel from '../components/base/button-cancel.vue'
import ButtonSubmit from '../components/base/button-submit.vue'
import ButtonSubmitNew from '../components/base/button-submit-new.vue'
import AlertBreadcrumb from '../components/base/alert-breadcrumb.vue'
import Ishide from '../components/base/ishide.vue'
import Reorder from '../components/base/reorder.vue'
import Action from '../components/base/action.vue'
import inputUpload from '../components/base/input-upload.vue'
import inputUploadBtn from '../components/base/input-upload-btn.vue'
import buttonAdd from '../components/base/button-add.vue'
import datePicker from '~/components/base/date-picker.vue'
import timePicker from '~/components/base/time-picker.vue'
import inputUploadPict from '~/components/base/input-upload-pict.vue'
import formatNumber from '~/components/base/format-number.vue'
import inputFormula from '~/components/base/input-formula.vue'
import inputCurrency from '~/components/base/input-currency.vue'
import dateTimePicker from '~/components/base/dateTimePicker.vue'
import image from '~/components/base/image.vue'

import calendar from '~/components/base/calendar.vue'
import excel from '~/components/base/excel.vue'
import btnExcel from '~/components/base/btn-excel.vue'
import btnExport from '~/components/base/btn-export.vue'
import textEditor from '~/components/base/texteditor.vue'

import listItem from '~/components/base/list-item.vue'

// import chartColumn from '~/components/chart/column.vue'
// import chartPie from '~/components/chart/pie.vue'
// import chartPolar from '~/components/chart/polar.vue'
// import chartRadialBar from '~/components/chart/radialbar.vue'
// import chartSplineArea from '~/components/chart/spline-area.vue'
// import chartBar from '~/components/chart/bar.vue'
// import chartPicker from '~/components/chart/picker.vue'
// import chartTypeStyle from '~/components/chart/type-style.vue'

// import VueApexCharts from 'vue-apexcharts'
// Vue.use(VueApexCharts)

// Vue.component('apexchart', VueApexCharts)

Vue.component('list-item', listItem)

Vue.component('text-editor', textEditor)

Vue.component('excel', excel)
Vue.component('btn-excel', btnExcel)
Vue.component('btn-export', btnExport)
Vue.component('calendar', calendar)
Vue.component('date-time-picker', dateTimePicker)
Vue.component('format-number', formatNumber)
Vue.component('input-currency', inputCurrency)
Vue.component('input-upload-pict', inputUploadPict)
Vue.component('input-upload-btn', inputUploadBtn)
Vue.component('date-picker', datePicker)
Vue.component('time-picker', timePicker)
Vue.component('btn-add', buttonAdd)
Vue.component('search-data', searchdata)
Vue.component('input-upload', inputUpload)
Vue.component('table-image', tableImage)

Vue.component('destroy', destroy)
Vue.component('refresh', refresh)
Vue.component('exit', exit)
Vue.component('create', create)
Vue.component('button-cancel', ButtonCancel)
Vue.component('button-submit', ButtonSubmit)
Vue.component('button-submit-new', ButtonSubmitNew)
Vue.component('alert-breadcrumb', AlertBreadcrumb)
Vue.component('ishide', Ishide)
Vue.component('reorder', Reorder)
Vue.component('action', Action)
