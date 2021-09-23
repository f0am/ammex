import FormHelper from '../components/helper/Form'

export default {
  components: { FormHelper },
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
}