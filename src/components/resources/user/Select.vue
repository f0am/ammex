<script>
import SelectHelper from "../../helper/SelectCreate";
import UserForm from "./Form";
import { User } from "@/store/index";
export default {
  extends: SelectHelper,
  data() {
    return {
      label: "Select a user",
      dialog: false,
      dialogTitle: "Add a user",
      dialogContent: UserForm,
    };
  },
  computed: {
    options() {
      return User.all();
    },
  },
  mounted() {
    User.$fetchUsers();
  },
};
</script>
