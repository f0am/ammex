export default {
  methods: {
    async request(cbFn, successMsg) {
      try {
        await cbFn();
        if(successMsg) {
          this.$root.message = successMsg;
          this.$root.color = "success";
          this.$root.show = true;
        }
      } catch (error) {
        this.$root.message = error;
        this.$root.color = "warning";
        this.$root.show = true;
        this.$root.error = error;
      }
    }
  }
};
