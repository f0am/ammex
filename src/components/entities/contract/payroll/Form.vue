<script>
import FormHelper from "../../../helper/Form";
export default {
  extends: FormHelper,
  data() {
    return {
      fields: [
        {
          name: "payrollNumber",
          label: "Payroll Number",
          mask: "######",
        },
        {
          name: "frequency",
          label: "Payroll Frequency",
          type: "autocomplete",
          options: ["Weekly", "Bi-weekly", "Semi-monthly", "Monthly"],
        },
        {
          name: "remittance",
          label: "Remittance Period Federal",
          type: "autocomplete",
          options: ["Monthly", "Quaterly", "Yearly"],
        },
        {
          name: "wsib",
          label: "WSIB",
          mask: "########",
        },
        {
          name: "wsibRemittance",
          label: "WSIB Remittance",
          type: "autocomplete",
          options: ["Monthly", "Quaterly", "Yearly"],
        },
        {
          name: "wsibRate",
          label: "WSIB Rate",
          mask: "##.###",
        },

        {
          name: "remittanceQc",
          label: "Remittance Period Quebec",
          type: "autocomplete",
          options: ["Monthly", "Quaterly", "Yearly"],
          // condition: (f) => f.client.province === "QC",
        },
        {
          name: "csst",
          label: "CSST",
          mask: "########",
          // condition: (f) => f.client.province === "QC",
        },
        {
          name: "csstRemittance",
          label: "CSST Remittance",
          type: "autocomplete",
          options: ["Monthly", "Quaterly", "Yearly"],
          // condition: (f) => f.client.province === "QC",
        },
        {
          name: "csstRate",
          label: "CSST Rate",
          mask: "##.###",
          // condition: (f) => f.client.province === "QC",
        },
        {
          name: "t4Deadline",
          label: "T4 Due Date",
          type: "date",
        },
        {
          name: "cheques",
          label: "Cheques Quantity",
          type: "number",
        },
      ],
    };
  },
};
</script>