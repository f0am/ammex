<script>
import SelectHelper from "../../helper/Select";

import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import * as subscriptions from "@/graphql/subscriptions";

export default {
  extends: SelectHelper,
  data() {
    return {
      label: "Client",
      dialog: false,
      options: [],
    };
  },
  async beforeCreate() {
    try {
      const resp = await this.$api.graphql({ query: queries.listClients });
      this.options = resp.data.listClients.items;
    } catch (error) {
      this.$root.message = error;
      this.$root.color = "warning";
      this.$root.show = true;
    }
  },
};
</script>
