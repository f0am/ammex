<script>
import SelectHelper from '@/components/helper/Select' 
import { Billable } from "@/store";
export default {
  extends: SelectHelper,
  data() {
    return {
      label: 'Tâche Facturable'
    }
  },
  computed: {
    options() {
      return Billable.all();
    }
  },
  mounted() {
    Billable.$fetchBillables();
  }
};
</script>
