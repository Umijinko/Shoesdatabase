<template>

  <div id="e3" style="max-width: 1000px; margin: auto;">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        
        <v-btn fab color="primary" fixed right bottom
        @click=filters>
      <v-icon>search</v-icon>
      </v-btn>

             <v-flex xs12 v-for="data in shoplist" 
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


export default {
  data() {
    return {
      myjson:json,
      result:[],
      shoplist:[]
    };
  },
  components: {
    card: Card,
  },

    methods:{
      
      filters(){
        
        this.shoplist = this.myjson.filter(result => result.tags)
        for(let x in this.shoplist){
          //console.log(shoplist[x].tags)
          let lists=[]
          for(let i of this.shoplist[x].tags){
            //console.log(i)
            if(i === "test1"){
              lists.push(true)
            }else{
              lists.push(false)
            }
          }
          //console.log(lists)
          if(!lists.includes(true)){
            //console.log("ない")
            //test[x]=""
            this.shoplist.splice(x,1)
          }
        }
    }
  } 
  
};
</script>
