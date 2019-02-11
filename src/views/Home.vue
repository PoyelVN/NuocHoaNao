<template>
  <v-card class="mx-auto" max-width="500">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-radio-group v-model="answer1">
            <v-radio
              class="mb-3"
              color="primary"
              v-for="n in 3"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-radio-group v-model="answer2">
            <v-radio
              class="mb-3"
              color="primary"
              v-for="n in 3"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
          <v-radio-group v-model="answer3">
            <v-radio
              class="mb-3"
              color="primary"
              v-for="n in 3"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="4">
        <v-card-text>
          <v-radio-group v-model="answer4">
            <v-radio
              class="mb-3"
              color="primary"
              v-for="n in 3"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="5">
        <div class="pa-3 text-xs-center">
          <!-- <v-img
            class="mb-3"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img> -->
          <v-rating
            v-for="n in 3"
            :key="n"
            v-model="step"
            length="3"
            full-icon="favorite"
            color="red"
            readonly
          ></v-rating>
        </div>
      </v-window-item>
    </v-window>

    <v-divider class="mx-3"></v-divider>

    <v-card-actions>
      <v-btn round :disabled="step === 1" flat @click="step--">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn round v-if="step < 5" :disabled="!next" color="primary" depressed @click="step++">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null
  }),

  computed: {
    next() {
      if (this.step == 1 && this.answer1 != null) {
        return true;
      } else if (this.step == 2 && this.answer2 != null) {
        return true;
      } else if (this.step == 3 && this.answer3 != null) {
        return true;
      } else if (this.step == 4 && this.answer4 != null) {
        return true;
      } else {
        return false;
      }
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Text question 1";
        case 2:
          return "Text question 2";
        case 3:
          return "Text question 3";
        case 4:
          return "Text question 4";
        default:
          return "Resultat";
      }
    }
  }
};
</script>