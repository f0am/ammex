import Vue from 'vue';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

Vue.use(VuetifyGoogleAutocomplete, {
    apiKey: 'AIzaSyCu_9flROyFe6MywQZTqBpKzsMhJblb_9A', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
    // version: '...', // Optional
    // language: '...', // Optional
});