<script>
import FormHelper from "../../helper/Form";
export default {
  extends: FormHelper,
  data() {
    return {
      fields: [
        {
          name: "name",
          label: "Nom"
        },
        {
          name: "description",
          label: "Description"
        },
        {
          name: "weight",
          label: "Poids"
        },
        {
          name: "dimensions",
          label: "Dimensions"
        },
        {
          name: "price",
          label: "Prix"
        }
      ]
    };
  }
};
</script>