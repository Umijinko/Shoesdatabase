<template>
  <v-card color="white" class="black--text">
    <v-layout row>
      <v-flex xs7>
        <v-card-title primary-title>
          
          <div class="headline">{{items.title}}</div>

          <!-- <v-flex row wrap>
          <div class="subheading">
            <i class="fas fa-map-marker-alt"></i> -->
            <!-- {{CountryId}} -->
          <!-- </div>
          </v-flex> -->

        </v-card-title>
      </v-flex>
      <v-flex xs5>
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
          height="125px"
          contain
        ></v-img>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>

    <v-card-actions>
      <v-flex text-xs-center>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-flex>
    </v-card-actions>

    <v-slide-y-reverse-transition>
      <v-card-text v-show="show">
        <v-flex>
          <v-layout justify-center>
            <v-btn fab large icon :href="items.owner_url" target="_blank" :disabled="showbtn">
              <i class="fas fa-home fa-2x"></i>
            </v-btn>

            <v-btn fab large icon :href="items.instagram" target="_blank" :disabled="showbtn2">
              <i class="fab fa-instagram fa-2x"></i>
            </v-btn>

            <v-btn fab large icon :href="items.facebook" target="_blank" :disabled="showbtn3">
              <i class="fab fa-facebook-square fa-2x"></i>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-card-text>
    </v-slide-y-reverse-transition>
  </v-card>
</template>

<script>
export default {
  props: ["items"],

  name: "card",

  
  data() {
    return {
      show: false,
      data: this.items,
      showbtn: false,
      showbtn2: false,
      showbtn3: false,

      // CountryId:"None"
    };
  },
  mounted() {
    this.Isnull();
    this.Isnull2();
    this.Isnull3();
    
    // this.country();
  },

  methods: {
    Isnull() {
      if (this.items.owner_url == "") {
        this.showbtn = true;
      } else {
        this.showbtn = false;
      }
    },
    Isnull2() {
      if (this.items.instagram == "") {
        this.showbtn2 = true;
      } else {
        this.showbtn2 = false;
      }
    },

    Isnull3() {
      if (this.items.facebook == "") {
        this.showbtn3 = true;
      } else {
        this.showbtn3 = false;
      }
    },

  //   country(){
  //     if(this.country_codes = '/^81/')
  //     this.CountryId="Japan"}
  // }
  }
};
</script>
