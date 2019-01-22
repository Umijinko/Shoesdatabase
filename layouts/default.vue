<template>
  <v-app light >
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped-right="clipped"
      v-model="drawer"
      fixed
      app
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
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar
      :clipped-right="clipped"
      app
    >
    <v-flex
    text-xs4-center>

    <v-toolbar-title fixed v-text="title"/>

    </v-flex>
    
    <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn> -->
      
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"  
      >
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-content>
      
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :fixed="fixed"
      app
    >
    <v-flex
      text-xs-center
    > 
      <span>&copy; 2019</span>
      </v-flex>
    </v-footer>
    
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'home', title: 'HOME', to: '/' },
          { icon: 'place', title: 'MAPS', to: '/map' },
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
