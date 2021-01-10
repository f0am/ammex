<script>
import FormHelper from "../../helper/Form";
export default {
  extends: FormHelper,
  data() {
    return {
      fields: [
        {
          label: "User Number",
          name: "userNumber",
        },
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
          options: [
            { text: "Administrator", value: "ADMINISTRATOR" },
            { text: "Manager", value: "MANAGER" },
            { text: "Employee", value: "EMPLOYEE" },
          ],
        },
      ],
    };
  },
};
</script>