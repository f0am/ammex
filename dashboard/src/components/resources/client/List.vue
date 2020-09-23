<template>
  <!-- <base-v-component heading="Clients" link="components/simple-tables" /> -->

  <base-material-card icon="mdi-account-group" color="info" title="Clients list" class="px-5 py-3">
    <template v-slot:after-heading>
      <div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <client-form v-model="editedItem" />
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </base-material-card>
</template>


<script>
import { Client } from "@/store/index";
import ClientForm from "./Form";
export default {
  components: {
    ClientForm,
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "ID",
        value: "id",
      },
      {
        text: "Name",
        value: "name",
      },
      { value: "contact", text: "Contact" },
      { value: "email", text: "Email" },
      { value: "phone", text: "Phone" },
      { value: "jobs", text: "Jobs pending" },
    ],
    clients: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      address: "",
      email: "",
      phone: "",
      jobs: [],
    },
    defaultItem: {
      name: "",
      name: "",
      address: "",
      email: "",
      phone: "",
      jobs: [],
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.clients.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.clients.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.clients[this.editedIndex], this.editedItem);
      } else {
        this.clients.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
