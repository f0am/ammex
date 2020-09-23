<script>
import containerFactory from '@/components/factories/container';
import provider from '@/providers/product';

import ListingContainer from '.@/components/helpers/ListingContainer';

export default containerFactory(ListingContainer, {
  provider
});
</script>