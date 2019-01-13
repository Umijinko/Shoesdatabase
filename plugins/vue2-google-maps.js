import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDU9WyJoUAh02mNM9BC_POdbNdReA8kxCs',
    libraries: 'places', 
  },
})
