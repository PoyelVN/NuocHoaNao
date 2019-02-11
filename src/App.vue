<template>
  <v-app style="background-color:#000103">
    <snackbar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import snackbar from "./components/snackbar";

export default {
  name: "App",
  components: { snackbar },

  data() {
    return {
      //
    };
  },
}

</script>
