<script>
import SelectHelper from '../../helper/SelectCreate' 
import ClientForm from './Form';
import { Client } from "@/store";
export default {
  extends: SelectHelper,
  data() {
    return {
      label: 'Select Client',
      dialog: false,
      dialogTitle: 'Add Client',
      dialogContent: ClientForm
    }
  },
  computed: {
    options() {
      return Client.all();
    }
  },
  mounted() {
    Client.$fetchClients();
  }
};
</script>
