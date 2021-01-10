<script>
import SelectHelper from "../../helper/SelectCreate";
import UserForm from "./Form";
import { User } from "@/store/index";
import { listUsers } from "@/graphql/queries";

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
      const { data } = await this.$gql(listUsers);
      this.users = data.listUsers.items.map((u) => ({
        ...u,
        name: `${u.firstName} ${u.lastName}`,
      }));
      console.log(data);
    } catch (error) {
      this.$alert(error, "warning");
    }
  },
  watch: {
    currentValue(o, n) {
      this.$emit("change", n);
    },
  },
  computed: {
    options() {
      return this.users;
    },
  },
};
</script>
