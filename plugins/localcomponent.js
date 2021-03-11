import Vue from 'vue'
import searchdata from '../components/base/search-data.vue'
import tableImage from '../components/base/table-image.vue'
import dialogKoordinat from '../components/dialog/koordinat.vue'
import dialogHeader from '../components/base/dialog-header.vue'
import dialogFooter from '../components/base/dialog-footer.vue'
import dialogMaster from '../components/dialog/master.vue'
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
import selectLayanan from '~/components/base/select-layanan.vue'
import selectUser from '~/components/base/select-user.vue'
import calendar from '~/components/base/calendar.vue'
import excel from '~/components/base/excel.vue'
import btnExcel from '~/components/base/btn-excel.vue'
import btnExport from '~/components/base/btn-export.vue'
import textEditor from '~/components/base/texteditor.vue'
import headerStatus from '~/components/header/status.vue'
import headerJenis from '~/components/header/jenis.vue'
import headerReorder from '~/components/header/reorder.vue'
import headerLayanan from '~/components/header/layanan.vue'
import selectField from '~/components/select/field.vue'
import listItem from '~/components/base/list-item.vue'
import dialogTimeLine from '~/components/dialog/user/minat/timeline.vue'
import dialogAlasan from '~/components/dialog/user/minat/alasan.vue'
import dialogAturJadwal from '~/components/dialog/user/minat/atur-jadwal.vue'
import dialogKonfirmasi from '~/components/dialog/user/minat/konfirmasi.vue'
import dialogResend from '~/components/dialog/user/minat/resend.vue'
import dialogOnsite from '~/components/dialog/user/minat/onsite.vue'
import dialogHasilSurveyOnsite from '~/components/dialog/user/minat/hasil-survey-onsite.vue'
import dialogHasilSurveySoft from '~/components/dialog/user/minat/hasil-survey-soft.vue'
import dialogCompare from '~/components/dialog/user/minat/compare.vue'
import dialogPilihVendor from '~/components/dialog/user/minat/pilih-vendor.vue'
import dialogPilihVendorPerorangan from '~/components/dialog/user/minat/pilih-vendor-perorangan.vue'
import dialogTambahVendorPerorangan from '~/components/dialog/user/minat/tambah-vendor-perorangan.vue'
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

Vue.component('select-layanan', selectLayanan)
Vue.component('select-user', selectUser)
Vue.component('list-item', listItem)
Vue.component('select-field', selectField)
Vue.component('dialog-timeline', dialogTimeLine)
Vue.component('dialog-resend', dialogResend)
Vue.component('dialog-pilih-vendor', dialogPilihVendor)
Vue.component('dialog-pilih-vendor-perorangan', dialogPilihVendorPerorangan)
Vue.component('dialog-hasil-survey-soft', dialogHasilSurveySoft)
Vue.component('dialog-hasil-survey-onsite', dialogHasilSurveyOnsite)
Vue.component('dialog-onsite', dialogOnsite)
Vue.component('dialog-konfirmasi', dialogKonfirmasi)
Vue.component('dialog-atur-jadwal', dialogAturJadwal)
Vue.component('dialog-alasan', dialogAlasan)
Vue.component('dialog-koordinat', dialogKoordinat)
Vue.component('dialog-compare', dialogCompare)
Vue.component('dialog-tambah-vendor-perorangan', dialogTambahVendorPerorangan)
Vue.component('header-reorder', headerReorder)
Vue.component('header-jenis', headerJenis)
Vue.component('header-status', headerStatus)
Vue.component('header-layanan', headerLayanan)
Vue.component('text-editor', textEditor)
Vue.component('dialog-master', dialogMaster)
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
Vue.component('dialog-header', dialogHeader)
Vue.component('dialog-footer', dialogFooter)
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
