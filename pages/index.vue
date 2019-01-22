<template>
  <v-responsive>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>

          <v-flex
            px-2
            py-2>
          <span class="subheading"> シューズデータベースは世界の靴屋の情報を届けます
            <v-spacer></v-spacer>
          Shoesdatabase delivers information on shoes in the world to you.
          </span>
          </v-flex>

          <v-divider class="my-3"></v-divider>
          
          <v-flex
          text-xs-center>
    
          <router-link to='/list'>
          <v-btn
            class="mx-0"
            color="primary"
            large
          >
            View shop list
          </v-btn>
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

      }
    }
  }
</script>
