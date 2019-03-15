import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDX3C-m2ZhPBpF1gnKO7lU8JBt9unJvG3Q',
    libraries: 'places', 
  },
})
