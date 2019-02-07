<template>
  <div id="e3" style="max-width: 1000px; margin: auto;">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>

        <v-flex xs12 v-for="data in myjson" 
        :key="data.id" 
        :items="data">

          <card/>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import json from "../assets/data.json";
import Card from "../components/Card.vue";

export default {
  name: "All",
  data() {
    return {
      myjson:json,
    };
  },

  components: {
    card: Card
  }
};
</script>
