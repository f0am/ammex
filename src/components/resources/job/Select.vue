<script>
import SelectHelper from '../../helper/SelectCreate' 
import ClientForm from './Form';
import { Client } from "@/store";
export default {
  extends: SelectHelper,
  data() {
    return {
      label: 'Choisir un client',
      dialog: false,
      dialogTitle: 'Ajouter un client',
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
