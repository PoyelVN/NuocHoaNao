<template>
  <v-app class="primary">
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
