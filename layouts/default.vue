<template>
  <v-app light >
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped-right="clipped"
      v-model="drawer"
      fixed
      app
      right
    >
      <v-list>
        <v-list-tile 
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-thin" v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar
      :clipped-right="clipped"
      app
    >
    
    <v-flex text-xs4-center>

    <v-toolbar-title class="font-weight-thin" fixed v-text="title"/>
      
      </v-flex>
          <!-- <v-text-field
      
        flat
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field> -->
    
    <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="drawer = !drawer" />

    </v-toolbar>
    <v-content>
      
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- <v-footer
      :fixed="fixed"
      app
    >
    <v-flex
      text-xs-center
    > 
      <span>&copy; 2019</span>
      </v-flex>
    </v-footer> -->
    
  </v-app>
</template>


<script>


export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'HOME', to: '/' },
          // { icon: 'place', title: 'MAPS', to: '/map' },
          { icon: 'list', title: 'SHOP LIST', to: '/list' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ShoesDatabase'
      }
    }
  }
</script>
