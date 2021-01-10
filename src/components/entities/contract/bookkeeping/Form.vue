<script>
import FormHelper from "../../../helper/Form";
export default {
  extends: FormHelper,
  data() {
    return {
      fields: [
        {
          name: "gst",
          label: "GST Number",
        },
        {
          type: "autocomplete",
          name: "period",
          label: "Period",
          options: ["Monthly", "Quaterly", "Yearly"],
        },
        {
          name: "qst",
          label: "QST Number",
          // condition: (f) => f.client.province === "QC",
        },
      ],
    };
  },
};
</script>