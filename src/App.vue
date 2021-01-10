<template>
  <!-- <amplify-authenticator> -->
  <router-view />
  <!-- <amplify-sign-in slot="sign-in">
      <div slot="secondary-footer-content"></div>
    </amplify-sign-in>
  </amplify-authenticator> -->
</template>

<script>
// import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "App",
  data() {
    return {
      // user: undefined,
      // authState: undefined,
      // formFields: [
      //   { type: "username" },
      //   { type: "password" },
      //   { type: "email" },
      // ],
    };
  },
  // beforeDestroy() {
  //   return onAuthUIStateChange;
  // },
};
</script>
