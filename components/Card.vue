<template>
  <v-card color="white" class="black--text">
    <v-layout row>
      <v-flex xs7>
        <v-card-title primary-title>
          
            <div class="headline">
          {{data}}
          </div>

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

    <v-slide-y-transition>
      <v-card-text v-show="show">
        <v-flex xs12>
          <v-layout align-center justify-end fill-height>
<!-- 
            <div slot="owner_url">
              <v-btn large icon :href="data.owner_url" target="_blank" v-bind:disabled="isNull">
                <i class="fas fa-home fa-2x"></i>
              </v-btn>
            </div>

            <div slot="instagram">
              <v-btn large icon :href="data.instagram" target="_blank">
                <i class="fab fa-instagram fa-2x"></i>
              </v-btn>
            </div>

            <div slot="facebook">
              <v-btn large icon :href="data.facebook" target="_blank">
                <i class="fab fa-facebook-square fa-2x"></i>
              </v-btn>
            </div> -->

          </v-layout>
        </v-flex>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  props:['items'],

  name: "card",
  data() {
    return {
      show: false,
      data:this.items
    };
  }
};
</script>
