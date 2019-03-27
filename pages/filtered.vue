<template>
  <div id="e3" style="max-width: 1000px; margin: auto;">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        
        <v-btn fab color="primary" fixed right bottom
        @click=filters>
      <v-icon>search</v-icon>
      </v-btn>

        <!-- <v-flex xs12 v-for="data in myjson" 
        :key="data.id">

          <card :items="data">
            </card>
        </v-flex> -->

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import json from "../assets/data.json";
import Card from "../components/Card.vue";


export default {
  data() {
    return {
      myjson:json,
    };
  },
  components: {
    card: Card,
    result:[]
  },
  // methods(){
  //   filtereddata = myjson.filter(function(item,index){
  //    if(item.id == '1') return true;
  //  })
  // }

};
</script>
