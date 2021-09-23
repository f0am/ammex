<script>
import FormHelper from "../../../helper/Form";
export default {
  extends: FormHelper,
  data() {
    return {
      fields: [
        {
          name: "corporation",
          label: "Corporation",
          type: "switch",
        },
        {
          name: "corporationYearEndDate",
          label: "Corporation tax year-end",
          type: "date",
        },
      ],
    };
  },
};
</script>