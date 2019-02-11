<template>
  <v-card class="mx-auto" max-width="500">
    <v-img :src="image" contain :lazy-src="image" class="elevation-3">
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>

    <div class="border accent 1px py-1">
      <h2 class="text-xs-center">Quiz: What Perfume Are You ?</h2>

      <div class="text-xs-center">
        <v-btn color="primary" round dark to="/quiz">Click to Start</v-btn>
      </div>
      <h3
        class="text-xs-center mb-2"
      >Answer 4 questions and you will know what perfume is the BEST fit for you !</h3>
    </div>


    <!-- <h3
      class="text-xs-center primary accent--text"
      style="line-height:50px; height:50px; text-shadow: 2px 2px black"
    >EXCEPTIONAL - VALENTINE DISCOUNT !</h3>

    <h3 class="mt-2 text-xs-center mx-2" >
      <img
        :src="Valentine"
        style="float: left;width:150px;height:120px;margin-right:15px;margin-top:3px"
      >
      15% discount on your first order !
    </h3>

    <div class="text-xs-center">
      <v-btn color="primary" round dark>Click to Start</v-btn>
    </div> -->


<!-- <div>    <v-img :src="logo" style="width: 80px" class="text-xs-center"></v-img> -->
<!-- </div> -->

    <v-footer dark app inset>
      <span class="ml-2">&copy; 2019 - FLO'S FRENCH PERFUMES</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-card>
</template>

<script>
import bottlesRetail from "../assets/bottlesRetail.png";
import logoTransparent from "../assets/logoTransparent.png";
import HeartValentine from "../assets/HeartValentine.png";
import MiniCatalog from "../assets/MiniCatalog.png";

export default {
  components: {},
  data() {
    return {
      image: bottlesRetail,
      logo: logoTransparent,
      Valentine: HeartValentine,
      Catalog: MiniCatalog
    };
  }
};
</script>
