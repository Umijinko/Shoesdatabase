<template>
  <v-responsive>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8>
        <v-text-field prepend-inner-icon="search" label="Search" single-line outline></v-text-field>
      </v-flex>
    </v-layout>

<v-layout row text-xs-center>
      <v-flex xs12 >
        <v-btn large color="primary">category1</v-btn>
        <v-btn large color="primary">category2</v-btn>
        <v-btn large color="primary">category3</v-btn>
        <v-btn large color="primary">category4</v-btn>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs10 px-2 py-2 pt-5 mt-5 text-xs-center>
        <span class="my-10 subheading font-weight-thin">シューズデータベースは世界の靴屋の情報を届けます
          <v-spacer></v-spacer>Shoesdatabase delivers information on shoes in the world to you.
        </span>
      </v-flex>
    </v-layout>


<footer>
  <v-flex mt-5 text-xs-center>
     &copy;2019 Taichi
  </v-flex>
</footer>

  </v-responsive>
</template>



