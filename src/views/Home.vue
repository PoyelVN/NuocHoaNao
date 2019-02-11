<template>
  <v-card class="mx-auto" max-width="500">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar v-if="step < questions.length +1" color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="index + 1" v-for="(question, index) in questions" :key="index">
        <v-card-text>
          <v-radio-group v-model="answers[index]" @click="step++">
            <v-radio
              class="mb-3"
              color="primary"
              v-for="answer in question.answers"
              :key="answer.number"
              :label="answer.text"
              :value="answer.number"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="questions.length + 1">
        <div class="pa-3 text-xs-center">
          <v-list three-line>
            <v-list-tile v-for="perfum in perfums" 
            :key="perfum.name" avatar @click style="transform: scale(0.9)" :class="{bigger:perfum.best, 'elevation-4': perfum.best}">

              <v-list-tile-avatar size="60" class="mt-1" :class="{moving:perfum.best}">
                <img :src="perfum.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content class="ml-3 mt-1">
                <v-list-tile-title v-html="perfum.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="perfum.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-rating
                  v-model="step"
                  length="3"
                  full-icon="favorite"
                  color="red"
                  readonly
                ></v-rating>
              </v-list-tile-action>

            </v-list-tile>
          </v-list>
        </div>
      </v-window-item>
    </v-window>

    <v-divider class="mx-3"></v-divider>

    <v-card-actions>
      <v-btn round :disabled="step === 1" flat @click="step--">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        round
        v-if="step < questions.length +1 && answers[step-1]"
        :disabled="!next"
        color="primary"
        depressed
        @click="step++"
      >Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// import lovely from "../assets/lovely";
export default {
  data: () => ({
    step: 1,
    answers: [],
    questions: [
      {
        text: "question 1",
        answers: [
          { text: "answer 1", number: 1 },
          { text: "answer 2", number: 2 }
        ]
      },
      {
        text: "question 2",
        answers: [
          { text: "answer 1", number: 1 },
          { text: "answer 2", number: 2 }
        ]
      },
      {
        text: "question 3",
        answers: [
          { text: "answer 1", number: 1 },
          { text: "answer 2", number: 2 }
        ]
      }
    ],
    perfums: [
      { best: false, title: "Charming", subtitle:"super", avatar: "https://flosfrenchperfumes.com/static/detail/images/product/Lovely-edit_16.JPG" },
      { title: "Divine", subtitle:"super", avatar: "https://flosfrenchperfumes.com/static/detail/images/product/Charming-edit_4.JPG" },
      { best: true, title: "Lovely", subtitle:"super", avatar: "https://flosfrenchperfumes.com/static/detail/images/product/Divine-edit_13.JPG" },
      { title: "Charisma", subtitle:"super", avatar: "https://flosfrenchperfumes.com/static/detail/images/product/Charisma-edit_1.JPG" },
    ]
  }),

  computed: {
    next() {
      if (this.answers[this.step - 1]) {
        return true;
      } else {
        return false;
      }
    },
    currentTitle() {
      if (this.questions[this.step - 1]) {
        return this.questions[this.step - 1].text;
      } else {
        return "Result";
      }
    }
  }
};
</script>

<style>
.bigger {
  transform: scale(1) !important;
  border: solid 1px rgba(232, 153, 56, 0.5);
  border-radius: 18px;
}
.moving{
  animation-name: moving;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes moving {
  0%   {transform: scale(1)}
  50%  {transform: scale(1.1)}
  100% {transform: scale(1)}
}
</style>
