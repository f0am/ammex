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
          name: "qst",
          label: "QST Number",
          condition: (f) => f.client.province === "QC",
        },
        {
          name: "period",
          label: "Period",
          type: "Select",
          options: ["Monthly", "Quaterly", "Yearly"],
        },
      ],
    };
  },
};
</script>