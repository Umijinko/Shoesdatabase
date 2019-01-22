import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPhLbXLwePqNtdN1HWps8SYCTlxz6bawU',
    libraries: 'places', 
  },
})
