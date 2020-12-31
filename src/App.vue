<template>
  <div>
    <div v-if="authState !== 'signedin'">You are signed out.</div>
    <amplify-authenticator>
      <div v-if="authState === 'signedin' && user">
        <router-view />
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "App",
  data() {
    return {
      user: undefined,
      authState: undefined,
      formFields: [
        { type: "username" },
        { type: "password" },
        { type: "email" },
      ],
    };
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
};
</script>
