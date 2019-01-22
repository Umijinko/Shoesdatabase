<template>
  <div id="e3" style="max-width: 1000px; margin: auto;" class="grey lighten-3">
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12
          v-for='data in myjson'
          :key='data.id'
          >
            <v-card color="white" class="black--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{data.title}}</div>
                      <span>test text</span>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" height="125px" contain></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>

              <v-card-actions>
                <v-btn icon @click="show = !show">
                  <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-show="show">
                  <v-flex text-xs-center>
                    <router-link to="/">
                      <v-btn class="mx-0" color="primary" large>
                        <v-icon fab>link</v-icon>
                      </v-btn>
                    </router-link>
                  </v-flex>
                </v-card-text>
              </v-slide-y-transition>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

var json ='assets\data.json'

export default {
  name:'All',
  data(){
  return{
      myjson:json,
      show: "false"
    }
  },
  // mounted(){
  //   axios.get(json_url).then(res=>{this.myjson=res.data})
  // }
  //   created () {
  //    this.push(this.markers)

  //   },

  // methods:{
  //   // push: function(markers){
  //   // Items.forEach(function(item){
  //   // markers.push({position: {lat:item.lat, lng:item.lng}})
  // })
  //   }
  // }
};
</script>
