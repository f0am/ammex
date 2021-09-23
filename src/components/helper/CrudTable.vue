<template>
  <div>
    <v-toolbar flat color="white">
      <!-- <v-toolbar-title>{{  }}</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="teal" dark class="mb-2" v-on="on">Ajouter un produit</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <product-select v-model="editedRow.product" />
                  <!-- <v-text-field v-model="editedRow.name" label="Produit"></v-text-field> -->
                </v-flex>
                <v-flex xs12>
                  <v-list two-line>
                    <template v-for="(item) in Object.entries(editedRow.product).splice(1)">
                      <!-- <v-subheader v-if="item[0]" :key="item[0]">{{ item[0].toUpperCase() }}</v-subheader> -->

                      <!-- <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider> -->

                      <v-list-tile :key="item[1]" avatar>
                        <v-list-tile-content>
                          <v-list-tile-title v-html="item[0].toUpperCase()"></v-list-tile-title>
                          <v-list-tile-sub-title v-html="item[1]"></v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </template>
                  </v-list>
                  <!-- <pre>{{editedRow.product}}</pre> -->
                </v-flex>
                <!-- <v-flex xs12>
                  <v-text-field v-model="editedRow.description" label="Description"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field type="number" v-model="editedRow.price" label="Prix"></v-text-field>
                </v-flex>-->
                <v-flex xs12 sm6>
                  <v-text-field type="number" v-model="editedRow.quantity" label="Quantite"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="rows" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.product.name }}</td>
        <td>{{ props.item.product.description }}</td>
        <td>{{ props.item.product.price }} $</td>
        <td>{{ props.item.quantity }}</td>
        <td>{{ (props.item.product.price * props.item.quantity).toFixed(2) }} $</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <h5 style="text-align:center">Veuiller ajouter un produit a la soumission</h5>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import ProductSelect from "@/components/resources/product/SelectCreate";
export default {
  components: {
    ProductSelect
  },
  props: {
    value: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Nom",
        align: "left",
        value: "name"
      },
      { text: "Description", value: "description" },
      { text: "Prix", value: "price" },
      { text: "Quantite", value: "quantity" },
      { text: "Total", value: "total" },
      { text: "Actions", value: "name", sortable: false }
    ],
    rows: [],
    editedIndex: -1,
    editedRow: {
      product: {},
      quantity: "",
      total: ""
    },
    defaultItem: {
      product: {},
      quantity: "",
      total: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Ajouter produit" : "Modifier produit";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.rows.indexOf(item);
      this.editedRow = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.rows.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.rows.splice(index, 1);

      this.$emit("value", this.rows);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedRow = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      this.editedRow.total =
        this.editedRow.product.price * this.editedRow.quantity;
      if (this.editedIndex > -1) {
        Object.assign(this.rows[this.editedIndex], this.editedRow);
      } else {
        this.rows.push(this.editedRow);
      }
      this.$emit("input", this.rows);
      this.close();
    }
  }
};
</script>