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
          mask: "#######AA####",
        },
        {
          type: "autocomplete",
          name: "gstRemittance",
          label: "Remittance",
          options: ["Monthly", "Quaterly", "Yearly"],
        },
        {
          name: "qst",
          label: "QST Number",
          mask: "#######AA####",
          // condition: (f) => f.client.province === "QC",
        },
        {
          type: "autocomplete",
          name: "qstRemittance",
          label: "Remittance",
          options: ["Monthly", "Quaterly", "Yearly"],
        },
      ],
    };
  },
};
</script>