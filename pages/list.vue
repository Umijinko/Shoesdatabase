<template>
  <div id="e3" style="max-width: 1000px; margin: auto;">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        
        <searchdialog/>
    
        <v-flex xs12 v-for="data in myjson" 
        :key="data.id">

          <card :items="data">
            </card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import json from "../assets/data.json";
import Card from "../components/Card.vue";

import Dialog from "../components/dialog.vue"

export default {
  data() {
    return {
      myjson:json,

      preview:[],
      tagslist:["#wide","#Narrow"]
    };
  },

  components: {
    card: Card,
    searchdialog : Dialog
  }
};
</script>
