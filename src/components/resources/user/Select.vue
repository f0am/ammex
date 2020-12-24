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
      users: [],
    };
  },
  async beforeCreate() {
    try {
      const resp = await this.$api.graphql({ query: queries.listUsers });
      this.users = resp.data.listUsers.items;
    } catch (error) {
      // console.log("Error retrieving posts", error);
    }
  },
  computed: {
    options() {
      return this.users;
    },
  },
};
</script>
