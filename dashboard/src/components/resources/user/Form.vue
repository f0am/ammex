<script>
import FormHelper from "../../helper/Form";
export default {
  extends: FormHelper,
  data() {
    return {
      fields: [
        {
          label: "First name",
          name: "firstName",
        },
        {
          label: "Last name",
          name: "lastName",
        },
        {
          label: "Email",
          name: "email",
        },
        {
          label: "Phone",
          name: "phone",
        },
        {
          label: "Role",
          name: "role",
          type: "select",
          options: ["Administrator", "Manager", "Employee"],
        },
      ],
    };
  },
};
</script>