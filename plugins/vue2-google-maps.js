import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAFeXa8MojQRhF3zPpe1WLCraCSyG78ESw',
    libraries: 'places', 
  },
})
