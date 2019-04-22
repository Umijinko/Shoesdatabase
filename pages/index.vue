<template>
<v-app>
  <v-responsive>
    <!-- <v-layout align-center justify-center>
      <v-flex xs12 sm8>
        <v-text-field prepend-inner-icon="search" label="Search" single-line outline></v-text-field>
      </v-flex>
    </v-layout>-->
<img width="100%" src="https://user-images.githubusercontent.com/42897791/52334973-8c35f580-2a44-11e9-8978-2126229e223a.JPG">

    <v-layout text-xs-center>
      <v-flex xs12>
        <v-btn large color="info" to="/list" block >Shop list</v-btn>
      </v-flex>
    </v-layout>

    <v-layout text-xs-center>
      <v-flex xs12> 
        <v-btn large color="primary" to="/map" flat outline block>Maps</v-btn>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs10 px-2 py-2 pt-5 mt-5 text-xs-center>
        <span class="my-10 subheading font-weight-thin">
          シューズデータベースは靴屋の情報を届けます
          <v-spacer></v-spacer>ShoesDatabase delivers information on shoes to you.
        </span>
      </v-flex>
    </v-layout>

    <footer>
      <v-flex mt-5 text-xs-center>&copy;2019 Taichi</v-flex>
    </footer>
  </v-responsive>
</v-app>
</template>

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

