<template>
            <v-card color="white" class="black--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">
                          <slot name='title'></slot>
                      </div>
                      
                      <slot name='text'></slot>

                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" height="125px" contain></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>

              <v-card-actions>

                <v-btn justify-center icon @click="show = !show">
                  <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>

              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-show="show">
                  <v-flex text-xs-center>
                    <router-link to="/">
                      <v-btn class="mx-0" color="primary" large>
                        <v-icon fab>link</v-icon>
                      </v-btn>
                    </router-link>
                  </v-flex>
                </v-card-text>
              </v-slide-y-transition>

            </v-card>

</template>

<script>

export default {
  name:'card',
  data(){
  return{
      show:false
    }
  }
}

</script>
