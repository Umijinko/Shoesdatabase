<template>
  <div id="e3" style="max-width: 1000px; margin: auto;">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-btn fab color="primary" fixed right bottom @click="filters">
          <v-icon>search</v-icon>
        </v-btn>

        <v-flex xs12 v-for="data in resultlist" :key="data.id">
          <card :items="data"></card>
        </v-flex>
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
      myjson: json,
      resultlist: []
    };
  },
  components: {
    card: Card
  },

  methods: {
    filters() {
      this.resultlist = this.myjson.filter(result => result.tags);
      for (let index in this.resultlist) {
        let lists = [];
        for (let iftags of this.resultlist[index].tags) {
          if (iftags === "test1") {
            lists.push(true);
          } else {
            lists.push(false);
          }
          if (!lists.includes(true)) {
            this.resultlist.splice(index, 1);
          }
        }
      }
    }
  }
};
</script>
