<template>
  <!-- <form-wizard step-size="xs">
    <tab-content v-for="question in questions" :key="question.text" :title="question.text">
      <div class="field">
        <label class="label" for>{{question.text}}</label>
        <div class="control">
          <div class="select">
            <select name="field-name">
              <option v-for="option in question.options" :key="question.text +'-'+option">{{option}}</option>
            </select>
          </div>
        </div>
      </div>
    </tab-content>
  </form-wizard>-->
  <section style="min-height: 30vh; position: relative">
    <!-- <div class="block">
      <b-field v-if="hasNavigation" grouped group-multiline>
        <b-field label="Prev icon">
          <b-select v-model="prevIcon">
            <option value="chevron-left">Chevron</option>
            <option value="arrow-left">Arrow</option>
          </b-select>
        </b-field>
        <b-field label="Next icon">
          <b-select v-model="nextIcon">
            <option value="chevron-right">Chevron</option>
            <option value="arrow-right">Arrow</option>
          </b-select>
        </b-field>
        <b-field label="Label position">
          <b-select v-model="labelPosition">
            <option value="bottom">Bottom</option>
            <option value="right">Right</option>
            <option value="left">Left</option>
          </b-select>
        </b-field>
        <b-field label="Mobile mode">
          <b-select v-model="mobileMode">
            <option :value="null">-</option>
            <option value="minimalist">Minimalist</option>
            <option value="compact">Compact</option>
          </b-select>
        </b-field>
    </b-field>-->
    <!-- </div> -->
    <b-steps
      v-model="activeStep"
      :animated="isAnimated"
      :rounded="isRounded"
      :has-navigation="hasNavigation"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      :label-position="labelPosition"
      :mobile-mode="mobileMode"
      style
    >
      <b-step-item
        v-for="(q, i) in questions"
        :key="q.text"
        :step="i+1"
        :clickable="isStepsClickable"
        style="position: relative"
      >
        <div
          class="is-flex is-align-items-center is-flex-direction-column"
          style="position: absolute; left: 0; right: 0; top: 50px; bottom: 0"
        >
          <label>{{q.text}}</label>
          </br>

          <b-field class="is-centered">
            <b-radio-button
              v-for="opt in q.options"
              :key="q.text+'-'+opt"
              v-model="answers[q.text]"
              :native-value="opt"
              type="is-danger is-light is-outlined"
            >
              <!-- <b-icon icon="close"></b-icon> -->
              <span>{{opt}}</span>
            </b-radio-button>
          </b-field>
        </div>
      </b-step-item>

      <!-- <b-step-item
        step="2"
        label="Profile"
        :clickable="isStepsClickable"
        :type="{'is-success': isProfileSuccess}"
      >
        <h1 class="title has-text-centered">Profile</h1>Lorem ipsum dolor sit amet.
      </b-step-item>

      <b-step-item step="3" :visible="showSocial" label="Social" :clickable="isStepsClickable">
        <h1 class="title has-text-centered">Social</h1>Lorem ipsum dolor sit amet.
      </b-step-item>

      <b-step-item
        :step="showSocial ? '4' : '3'"
        label="Finish"
        :clickable="isStepsClickable"
        disabled
      >
        <h1 class="title has-text-centered">Finish</h1>Lorem ipsum dolor sit amet.
      </b-step-item>-->

      <template v-if="customNavigation" #navigation="{previous, next}">
        <b-button
          outlined
          style="position: absolute; bottom: 0; left: 0;"
          type="is-danger"
          icon-pack="fas"
          icon-left="backward"
          :disabled="previous.disabled"
          @click.prevent="previous.action"
        >Previous</b-button>
        <b-button
          outlined
          style="position: absolute; bottom: 0; right: 0"
          type="is-success"
          icon-pack="fas"
          icon-right="forward"
          :disabled="next.disabled"
          @click.prevent="next.action"
        >Next</b-button>
      </template>
    </b-steps>
  </section>
</template>

<script>
export default {
  computed: {
    steps() {
      const perChunk = 4;
      var result = this.questions.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      return result;
    },
  },
  data() {
    return {
      answers: {},
      activeStep: 0,

      showSocial: false,
      isAnimated: true,
      isRounded: false,
      isStepsClickable: false,

      hasNavigation: true,
      customNavigation: true,
      isProfileSuccess: false,

      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      labelPosition: "bottom",
      mobileMode: "minimalist",

      questions: [
        {
          label: "Residency",
          text: "Residency Status",
          options: ["Canadian Citizen", "Resident"],
        },
        {
          label: "Employment",
          text: "Employment Status",
          options: ["Full-time", "Part-time", "Unemployed", "Retired"],
        },
        {
          label: "Education",
          text: "Did you go to school?",
          options: ["yes", "no"],
        },
        {
          label: "Occupancy",
          text: "Do you own or rent?",
          options: ["own", "rent"],
        },
        {
          label: "Insurance",
          text: "Did you receive any employment insurance?",
          options: ["yes", "no"],
        },
        {
          label: "Investment",
          text: "Do you have investment income?",
          options: ["yes", "no"],
        },
        {
          label: "Childcare",
          text: "Did you pay for any childcare expenses?",
          options: ["yes", "no"],
        },
      ],
    };
  },
};
</script>
