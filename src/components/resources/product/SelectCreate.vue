<script>
import SelectCreateHelper from "../../helper/SelectCreate";
import ProductForm from "./Form";
import { Product } from "@/store";
export default {
  extends: SelectCreateHelper,
  data() {
    return {
      label: "Choisir produit",
      // itemText: "name",
      dialogTitle: "Nouveau produit",
      dialogContent: ProductForm
    };
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
