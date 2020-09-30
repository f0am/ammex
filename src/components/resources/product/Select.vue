<script>
import SelectHelper from '../../helper/Select' 
import { Product } from "@/store";
export default {
  extends: SelectHelper,
  data() {
    return {
      label: 'Produits'
    }
  },
  computed: {
    options() {
      return Product.all();
    }
  },
  mounted() {
    Product.$fetchProducts();
  }
};
</script>
