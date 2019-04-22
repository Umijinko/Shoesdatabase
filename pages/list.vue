  <template>
  <v-app>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout wrap>

          <v-flex xs12 text-xs-center>
            <v-btn large flat outline color="primary" @click="CasualFilter">Casual</v-btn>
            <v-btn large flat outline color="primary" @click="DressFilter">Dress</v-btn>
            <v-btn large flat outline color="primary" @click="NoFilter">All</v-btn>
          </v-flex>
          
          
        <v-flex xs12 v-for="data in resultlist" :key="data.id">
          <card :items="data"></card>
          </v-flex>

        </v-layout>

    </v-container>
  </div>
  </v-app>
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
  created(){
    this.resultlist = this.myjson
  },
    methods:{
    CasualFilter() {
      this.resultlist = this.myjson.filter(result => result.casual===true)
    },
    DressFilter(){
      this.resultlist = this.myjson.filter(result => result.dress===true)
    },
    NoFilter(){
      this.resultlist= this.myjson
    }
  }
};
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
