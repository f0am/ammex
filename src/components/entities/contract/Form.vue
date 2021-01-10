<script>
import FormHelper from "../../helper/Form";
import ClientSelect from "../client/Select";
export default {
  components: {
    ClientSelect,
  },
  extends: FormHelper,
  data() {
    return {
      fields: [
        {
          name: "client",
          label: "Client",
          type: ClientSelect,
        },
        {
          label: "Service Type",
          name: "type",
          type: "select",
          options: [
            { text: "Taxes", value: "TAXES" },
            { text: "Payroll", value: "PAYROLL" },
            { text: "Bookkeeping", value: "BOOKKEEPING" },
          ],
        },
      ],
    };
  },
};
</script>