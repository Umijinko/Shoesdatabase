<template>
  <div id="e3" style="max-width: 1000px; margin: auto;" >
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12
          v-for='data in myjson'
          :key='data.id'
          >

          <card>
            <div slot='title'>{{data.title}}
              </div>
              <div slot='text'>{{data.text}}
                </div>
                
                <div slot='owner_url'>   
                   <v-btn large icon :href="data.owner_url" target="_blank"
                   v-bind:disabled='isNull'>
                     <i class="fas fa-home fa-2x"></i>
                     </v-btn>
                     </div>

                     <div slot='instagram'>                    
                   <v-btn large icon :href="data.instagram" target="_blank"> 
                     <i class="fab fa-instagram fa-2x"></i>
                     </v-btn>
                     </div>

                     <div slot='facebook'>                    
                   <v-btn large icon :href="data.facebook" target="_blank">
                     <i class="fab fa-facebook-square fa-2x"></i>
                     </v-btn>
                  </div>

                </card>

          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>

import json from '../assets/data.json'
import Card from '../components/Card.vue'

export default {
  name:'All',
  data(){
  return{
      myjson:json,
      isNull:false

    }
  },
  methods:{
    ISNULL(){
    if(this.href==null)
    this.isNull=true
    else{
      this.isNull=false
    }
    }
  },

 components:{
   'card':Card,

 }

};
</script>
