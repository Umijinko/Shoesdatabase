  <template>
  <div id="e3" style="max-width: 1000px; margin: auto;">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>

        <!-- <v-btn fab color="primary" fixed right bottom>
      <v-icon>search</v-icon>
        </v-btn>-->

        <v-layout row text-xs-center>
          <v-flex xs12>
            <v-btn large flat outline color="primary" @click="filters">Casual</v-btn>
            <v-btn large flat outline color="primary">Dress</v-btn>
            <v-btn large flat outline color="primary">All</v-btn>
          </v-flex>
        </v-layout>

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
      let lists = [];
      this.resultlist = this.myjson.filter(result => result.tags)
      for (let index in this.resultlist) {
        for (let iftags of this.resultlist[index].tags) {
          if (iftags === "casual") {
            lists.push(true);
            console.log(lists[index])
          } else {
            lists.push(false);
          }
          // if (!lists.includes(true)) {
          //   this.resultlist.splice(index,0);
          // }
        }
      }
    }
  }
};
</script>
