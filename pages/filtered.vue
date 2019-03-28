<template>

  <div id="e3" style="max-width: 1000px; margin: auto;">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        
        <v-btn fab color="primary" fixed right bottom
        @click=filters>
      <v-icon>search</v-icon>
      </v-btn>

             <!-- <v-flex xs12 v-for="data in hoge" 
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
      result:[],
      hoge:[]
    };
  },
  components: {
    card: Card,
  },

    methods:{
      
      filters(){
        //const test = this.myjson.filter(result => for (x of this.result.tags) if (x==='test1') )//result.tag =["test1","test2"]
        // const test = this.myjson.filter(result => result.tags)//result.tag =["test1","test2"]
        //const test = this.myjson.filter(result => result.tags in "test1")
        //const test = this.myjson.filter(result => result.tags.filter(x => x==="test1"))
        //const test = this.myjson.filter(result => result.tags in "test1")
        //const text = result.tags
        //const test = this.myjson.filter(result => result.tags)
        //const test = this.myjson.filter(result => result.tags)
        //const test = this.myjson.filter(result => if("test1" in result.tags)return result.tag;);
        let hoge = this.myjson.filter(result => result.tags)
        for(let x in hoge){
          //console.log(hoge[x].tags)
          let lists=[]
          for(let i of hoge[x].tags){
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
            hoge.splice(x,1)
          }
        }

        
        console.log(hoge)
        //console.log(this.myjson)
    }
    } 
  
};
</script>
