<script>
import FormHelper from '@/components/helper/Form'
import CustomerForm from '@/components/resources/customer/Select'
import RepresentativeForm from '@/components/resources/representative/Select'
export default {
  extends: FormHelper,
  // components: {
  //   CustomerForm,
  //   RepresentativeForm
  // },
  data() {
    return {
      fields: [
        {
          name: 'customer',
          label: 'Client'
          // type: CustomerSelect
        },
        {
          // name: 'representative',
          // label: 'Représentant'
          type: RepresentativeSelect
        },
        // {
        //   name: 'rows',
        //   label: 'Items',
        // },
      ]
    }
  }
};
</script>