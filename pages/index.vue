<template>
  <v-responsive>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex justify-center>
          <h3 class="my-5 text-xs-center font-weight-black display-3">Welcome <br>to the site</h3>
          

          <v-responsive :aspect-ratio="16/9">
          <v-carousel ma-5 :aspect-ratio="16/9">
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
          </v-responsive>

          <v-flex px-2 py-2 text-xs-center>
            <span class="my-10 subheading font-weight-thin">シューズデータベースは世界の靴屋の情報を届けます
              <v-spacer></v-spacer>Shoesdatabase delivers information on shoes in the world to you.
            </span>
          </v-flex>

          <v-divider class="my-3"></v-divider>

          <v-flex text-xs-center>
            <router-link to="/list">
              <v-btn outline round class="mx-0" color="primary" large>View shop list</v-btn>
            </router-link>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:"https://user-images.githubusercontent.com/42897791/52334973-8c35f580-2a44-11e9-8978-2126229e223a.JPG" 
        },
        {
          src: "https://user-images.githubusercontent.com/42897791/52343703-2f463980-2a5c-11e9-9ff6-6d30616d2435.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>
