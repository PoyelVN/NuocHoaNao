<template>
  <div>
    <v-img :src="image" contain :lazy-src="image" class="elevation-3">
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>

    <div class="text-xs-center">
      <v-btn color="primary" dark>Click to Start</v-btn>
    </div>

    <v-footer dark app inset>
      <span class="ml-2">&copy; 2019 - FLO'S FRENCH PERFUMES</span>
      <v-spacer></v-spacer>

      <v-btn class="mx-2"  icon>
        <v-icon size="24px">fab fa-facebook</v-icon>
      </v-btn>
      <v-btn class="mx-1" dark icon>
        <v-icon size="24px">fab fa-facebook</v-icon>
      </v-btn>
      <!-- <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Follow us !</strong>

          <v-spacer></v-spacer>

          <v-btn class="mx-3" dark icon>
            <v-icon size="24px">fab fa-facebook</v-icon>
          </v-btn>

          <v-btn class="mx-3" dark icon>
            <v-icon size="24px">fab fa-instagram</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">&copy;2019 —
          <strong>FLO'S French Perfumes</strong>
        </v-card-actions>
      </v-card>-->
    </v-footer>
  </div>
</template>

<script>
import bottlesRetail from "../assets/bottlesRetail.png";

export default {
  components: {},
  data() {
    return {
      image: bottlesRetail
    };
  }
};
</script>
