<template>
  <v-card class="mx-auto elevation-0" max-width="500" color="accent">
    <v-img
      src="https://flosfrenchperfumes.com/static/default/microsite/dang-cap/images/bg-2.jpg"
      aspect-ratio="2.75"
    ></v-img>
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        v-if="step < questions.length +1"
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
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
          <v-list three-line class="accent">
            <v-list-tile
              v-if="isBest(perfume.title, true)>0"
              v-for="(perfume, index) in perfumes"
              :key="perfume.title"
              avatar
              @click="goToWebsite()"
              style="transform: scale(0.9)"
              :class="{bigger:isBest(perfume.title), 'elevation-4': isBest(perfume.title)}"
            >
              <v-list-tile-avatar size="60" class="mt-1" :class="{moving:isBest(perfume.title)}">
                <img :src="perfume.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content class="ml-3 mt-1">
                <v-list-tile-title v-html="perfume.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="perfume.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-rating
                  dense
                  :value="isBest(perfume.title, true)"
                  :length="isBest(perfume.title, true)"
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
      <v-btn
        round
        icon
        v-else-if="step == questions.length +1"
        right
      ><v-icon color="primary"
      @click="share()"
              v-clipboard:copy="currentUrl"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">share</v-icon></v-btn>
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
        text: "At what time do you get up?",
        answers: [
          { text: "Before 6am", number: 3 },
          { text: "Between 6am and 8am", number: 2 },
          { text: "Between 8am and 10am ", number: 1 },
          { text: "After 10am", number: 4 }
        ]
      },
      {
        text: "How often do you use perfumes?",
        answers: [
          { text: "Every day", number: 4 },
          { text: "Twice a week", number: 2 },
          { text: "Once a week", number: 1 },
          { text: "Only for special occasions", number: 3 }
        ]
      },
      {
        text: "How social are you?",
        answers: [
          { text: "I need to meet my friends every day", number: 2 },
          { text: "I like to go out with them every week end", number: 1 },
          { text: "I can meet them for special occasions", number: 3 },
          {
            text: "It doesn't matter if I don't meet anyone for a week",
            number: 4
          }
        ]
      },
      {
        text: "What do you like to eat the most?",
        answers: [
          { text: "Bun thit nuong", number: 1 },
          { text: "Pho", number: 2 },
          { text: "Bun bo hue ", number: 3 },
          { text: "Com tam", number: 4 }
        ]
      }
    ],
    perfumes: [
      {
        title: "Charming",
        subtitle: "Light & Fresh",
        avatar:
          "https://flosfrenchperfumes.com/static/detail/images/product/Lovely-edit_16.JPG"
      },
      {
        title: "Divine",
        subtitle: "Softly sweet & Pure",
        avatar:
          "https://flosfrenchperfumes.com/static/detail/images/product/Charming-edit_4.JPG"
      },
      {
        title: "Lovely",
        subtitle: "Sweet & Passionate",
        avatar:
          "https://flosfrenchperfumes.com/static/detail/images/product/Divine-edit_13.JPG"
      },
      {
        title: "Charisma",
        subtitle: "Wild & Attractive",
        avatar:
          "https://flosfrenchperfumes.com/static/detail/images/product/Charisma-edit_1.JPG"
      }
    ]
  }),
  methods: {
        onError(e) {
      this.$store.commit("setSnackbar", {
        color: "error",
        timeout: 3000,
        text: "Un problème est survenu"
      });
    },
    onCopy(e) {
      this.$store.commit("setSnackbar", {
        color: "primary",
        timeout: 3000,
        text: "Lien copié"
      });
    },
    goToWebsite() {
      window.open(
        "https://flosfrenchperfumes.com/mua-online-nuoc-hoa-flos.html",
        "_blank"
      );
    },
    isBest(perfume, rate) {
      let allAnswers = {}
      allAnswers.Charming = 0
      allAnswers.Divine = 0
      allAnswers.Lovely = 0
      allAnswers.Charisma = 0

      for (let answer in this.answers) {
        if(this.answers[answer] == 1) allAnswers.Charming++
        if(this.answers[answer] == 2) allAnswers.Divine++
        if(this.answers[answer] == 3) allAnswers.Lovely++
        if(this.answers[answer] == 4) allAnswers.Charisma++
      }

      // if rate, return the rate
      if (rate){
        return allAnswers[perfume]
      } else {
        // console.log(allAnswers)
        if (perfume == "Charming" && allAnswers.Charming>=allAnswers.Divine && allAnswers.Charming>=allAnswers.Lovely && allAnswers.Charming>=allAnswers.Charisma){
          return true
        } else if (perfume == "Divine" && allAnswers.Divine>=allAnswers.Charming && allAnswers.Divine>=allAnswers.Lovely && allAnswers.Divine>=allAnswers.Charisma){
          return true
        } else if (perfume == "Lovely" && allAnswers.Lovely>=allAnswers.Charming && allAnswers.Lovely>=allAnswers.Divine && allAnswers.Lovely>=allAnswers.Charisma){
          return true
        } else if (perfume == "Charisma" && allAnswers.Charisma>=allAnswers.Charming && allAnswers.Charisma>=allAnswers.Divine && allAnswers.Charisma>=allAnswers.Lovely){
          return true
        }
        return false
      }
      //else return true if is the best
    },
        share() {
      if (navigator.share && this.fromMobile) {
        navigator
          .share({
            title: "Flo's perfumes",
            text: "Find out the perfume that's the most suitable for you",
            url: this.currentUrl
          })
          .then(() => console.log("Share complete"));
      }
    }
  },
  computed: {
        fromMobile() {
      return navigator.userAgent.indexOf("Mobile") !== -1;
    },
    currentUrl() {
      return window.location.href;
    },
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
        return "Congratulation!";
      }
    }
  }
};
</script>

<style>
.bigger {
  transform: scale(1) !important;
  border-radius: 18px;
  background-color: white !important;
  margin-bottom:5px
}
.moving {
  animation-name: moving;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes moving {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
