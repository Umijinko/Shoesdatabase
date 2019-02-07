import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC9AfLdFvvkKCok5ZLiFhJaHfP8PRc1emI',
    libraries: 'places', 
  },
})
