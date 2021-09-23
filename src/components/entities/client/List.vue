<template>
  <v-data-table
    :search="search"
    :headers="headers"
    :items="items"
    class="elevation-1"
    :loading="provider.loading !== false"
    hover="false"
  >
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
    >
      <slot :name="name" v-bind="{ ...slotData, provider }" />
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    provider: {
      type: Object,
      default: () => {},
    },
    // items: {
    //   type: Array,
    //   default: () => [],
    // },
    loading: {
      type: Boolean,
      default: false,
    },
    search: {
      type: String,
      default: "",
    },
  },
  computed: {
    items() {
      return this.provider.items.map((i) => ({
        ...i,
        contact: {
          ...i.contact,
          name: `${i.contact.firstName} ${i.contact.lastName}`,
        },
      }));
    },
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "clientNumber" },
        { text: "Company Name", value: "name" },
        { text: "Contact Name", value: "contact.name" },
        { text: "Contact Email", value: "contact.email" },
        { text: "Contact Phone", value: "contact.phone" },
        { text: "Status", value: "status" },
        // { text: "Services", value: "contracts" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  methods: {
    getTypeAbbr({ type }) {
      switch (type) {
        case "BOOKKEEPING":
          return "BK";
        case "PAYROLL":
          return "PR";
        case "TAXES":
          return "TX";
        default:
          return "ER";
      }
    },
    getContractColor({ type }) {
      switch (type) {
        case "BOOKKEEPING":
          return "warning";
        case "PAYROLL":
          return "secondary";
        case "TAXES":
          return "accent";
        default:
          return "grey";
      }
    },
    getFullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
    selectUser(e) {
      this.$emit("click:row", e);
    },
  },
};
</script>

<style>
th span {
  font-size: 1.5em;
}
.v-data-table tbody tr {
  height: 70px;
}
</style>