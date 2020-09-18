<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="1000px">
      <v-btn
        slot="activator"
        outline>New Client</v-btn>
      <v-card>
        <v-card-title>
          Edit Client
        </v-card-title>
        <v-card-text>
          <client-form v-model="Client" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            flat
            @click="save">Save</v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="cancel">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="deleteDialog"
      persistent
      max-width="400px">
      <v-card>
        <v-card-title class="headline">Delete Confirmation</v-card-title>
        <v-card-text>Are you sure you want to delete this Client?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            flat
            @click="deleteDialog = false">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="remove">Delete Client</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      :headers="headers"
      :items="Clients"
      class="elevation-1">
      <template v-slot:headers="props">
        <tr>
          <th
            v-for="header in props.headers"
            :key="header.text" >
            {{ header.text }}
          </th>
          <th v-if="actions">Actions</th>
        </tr>
      </template>
      <template v-slot:items="props">
        <td class="center">{{ props.item.name }}</td>
        <td class="center">{{ props.item.location }}</td>
        <td class="center">{{ props.item.op_vlan_id }}</td>
        <td class="center">{{ props.item.ssc_mgmt_vlan_id }}</td>
        <td class="center">{{ props.item.vpn_nat_ip_active }}</td>
        <td class="center">{{ props.item.unused_port }}</td>
        <td
          v-if="actions"
          class="center">
          <icon-tool-tip
            :name="`${props.id}-edit`"
            :description="'Edit'">
            <v-icon
              small
              class="mr-2"
              color="warning"
              @click="editItem(props.item)"
            >mdi-pencil</v-icon>
          </icon-tool-tip>
          <icon-tool-tip
            :name="`${props.id}-delete`"
            :description="'Delete'">
            <v-icon
              small
              color="error"
              @click="deleteItem(props.item)">mdi-trash-can</v-icon>
          </icon-tool-tip>
        </td>
      </template>
      <template slot="no-data">
        <v-progress-linear
          color="green"
          indeterminate/>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import ClientForm from './Form'
export default {
  components: {
    ClientForm
  },
  props: {
    Clients: {
      type: Array,
      required: true
    },
    actions: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false,
      deleteDialog: false,
      Client: {},
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Location',
          value: 'location'
        },
        {
          text: 'Operational Vlan Id',
          value: 'op_vlan_id'
        },
        {
          text: 'Management Vlan Id',
          value: 'ssc_mgmt_vlan_id'
        },
        {
          text: 'VPN IP Active',
          value: 'vpn_nat_ip_active'
        },
        {
          text: 'Unused Port',
          value: 'unused_port'
        }
      ]
    }
  },
  methods: {
    editItem (item) {
      this.Client = item
      this.dialog = true
    },
    save () {
      // Call Edit
      this.Client = {}
      this.dialog = false
    },
    cancel () {
      this.Client = {}
      this.dialog = false
    },
    deleteItem (item) {
      console.log(item)
      this.deleteDialog = true
    },
    remove () {
      this.deleteDialog = false
    }
  }
}
</script>

<style>
.center {
  text-align: center;
}
</style>
