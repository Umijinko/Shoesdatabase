<template>
<div>
<GmapMap
  :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUi: false
 }"
      :center="{lat:35.71724, lng:139.80199}"
      :zoom="7"
      map-type-id="roadmap"
      style="width: mapWidth; height: 400px;"
      
>
                <!-- <gmap-info-window
                :options="infoOptions"
                :position="infoPosition"
                :opened="infoOpened"
                :content="infoContent"
                @closeclick="infoOpened=false">
                </gmap-info-window> -->
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="false"
    @click="center=m.position"
  />
  
</GmapMap>

</div>
</template>

<script>

import Items from '~/assets/data.json'

  export default {

    data() {
      return {
      markers : [],
    }
    },
      created () {
       this.push(this.markers)

      },

      methods:{
        push: function(markers){
        Items.forEach(function(item){
        markers.push({position: {lat:item.lat, lng:item.lng}})
      })
        }
      }
}

</script>
