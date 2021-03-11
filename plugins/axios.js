export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
  })

  // $axios.onUploadProgress(progressEvent => {
  //   console.log(
  //     parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
  //   )
  // })

  // $axios.onDownloadProgress(progressEvent => {
  //   console.log(
  //     parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
  //   )
  // })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log(code, error.toString())
    if (!code) {
      // redirect('/400')
    }
  })
}
