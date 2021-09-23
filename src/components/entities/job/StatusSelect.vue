<template>
  <job-provider v-slot="{ JobProvider }">
    <v-select
      :loading="loading"
      :disabled="loading"
      style="width: 200px"
      @change="updateJobStatus(JobProvider, item)"
      v-model="item.status"
      :items="[
        'PENDING',
        'ACTIVE',
        'IN_PROGRESS',
        'BLOCKED',
        'REVIEW',
        'APPROVAL',
        'WAITING_FOR_PAYMENT',
        'COMPLETED',
      ]"
    />
  </job-provider>
</template>
<script>
import { JobProvider } from "@/providers";

export default {
  components: {
    JobProvider,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>