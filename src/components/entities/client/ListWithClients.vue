<template fuctional>
  <client-provider v-slot="{ ClientProvider }">
    <List :provider="ClientProvider" v-bind="{ ...$props, ...$attrs }">
      <template
        v-for="(_, name) in $scopedSlots"
        :slot="name"
        slot-scope="slotData"
      >
        <slot :name="name" v-bind="{ ...slotData, ClientProvider }" />
      </template>
    </List>
  </client-provider>
</template>
<script>
import List from "./List";
import { ClientProvider } from "@/providers";

export default {
  components: { ClientProvider, List },
};
</script>