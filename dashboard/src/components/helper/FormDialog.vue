<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn small color="teal" v-on="on">{{ dialogButtonText }}</v-btn>
      <!-- <v-btn color="teal" style="float:right" v-on="on">{{dialogButtonText || dialogTitle}}</v-btn> -->
    </template>
    <v-card style="padding: 0 25px">
      <v-card-title>
        <slot name="title">
          <h3>{{dialogTitle}}</h3>
        </slot>
      </v-card-title>
      <v-card-text>
        <slot name="content">
          <component v-if="dialogContent" v-model="newValue" :is="dialogContent" />
        </slot>
        <div style="width: 100%; text-align: right">
          <v-btn style="float: left" color="red" @click="cancel">Annuler</v-btn>
          <v-btn color="green" @click="save">Confirmer</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      dialogTitle: null,
      dialogContent: null,
      dialogButtonText: null,
      newValue: {}
    };
  }
};
</script>