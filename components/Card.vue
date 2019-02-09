<template>
  <v-card color="white" class="black--text">
    <v-layout row>
      <v-flex xs7>
        <v-card-title primary-title>
          
            <div class="headline">
          {{items.title}}
          </div>

        </v-card-title>
      </v-flex>
      <v-flex xs5>
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
          height="125px"
          contain
        ></v-img>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>

    <v-card-actions>
      <v-flex text-xs-center>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-flex>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
        <v-flex xs12>
          <v-layout align-center justify-end fill-height>

              <v-btn fab large icon :href="items.owner_url" target="_blank" 
              :disabled='isnull'>
                <i class="fas fa-home fa-2x"></i>
              </v-btn>
   
              <v-btn fab large icon :href="items.instagram" target="_blank">
                <i class="fab fa-instagram fa-2x"></i>
              </v-btn>

              <v-btn fab large icon :href="items.facebook" target="_blank">
                <i class="fab fa-facebook-square fa-2x"></i>
              </v-btn>


          </v-layout>
        </v-flex>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  props:['items'],

  name: "card",
  data() {
    return {
      show: false,
      data:this.items,
    }
  },
  methods:{
    isnull(){
      if(items.owner_url==""){
      return true
      }
      else{
      return false
      }
      }
      }

};
</script>
