<script>
import FormHelper from "../../helper/Form";
export default {
  extends: FormHelper,
  data() {
    return {
      fields: [
        {
          name: "deadline",
          label: "Deadline",
          type: "Date"
        },
      ],
    };
  },
};
</script>