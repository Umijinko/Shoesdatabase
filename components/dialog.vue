<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-btn slot="activator" color="primary" dark>SEARCH</v-btn>
      <v-card>
        <v-card-title>Select Tags</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="Wide" value="wide"></v-radio>
            <v-radio label="Narrow" value="narrow"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false
      }
    }
  }
</script>