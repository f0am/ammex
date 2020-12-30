<template>
  <div class="layout">
    <div class="notification is-light is-warning">
  Information relating to <g-link class="link" to="/covid/"><strong>COVID-19</strong></g-link>
    </div>
    <header class="header">
      <strong>
        <g-link to="/"><g-image alt="Ammex Logo" src="~/Logo.png" width="250" /></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About Us</g-link>
        <g-link class="nav__link" to="/required-docs/">Required Documents</g-link>
        <g-link class="nav__link" to="/forms/">Forms</g-link>
        <g-link class="nav__link" to="/services/">Services</g-link>
        <g-link class="nav__link" to="/faq/">FAQ</g-link>
        <g-link class="nav__link" to="/contact-us/">Contact Us</g-link>
        <g-link class="nav__link" to="/login/">Log In</g-link>
      </nav>
    </header>
    <slot/>
    <footer />
      <footer class="footer">
        <div class="content has-text-centered">
      <span>Copyright © {{ new Date().getFullYear() }}. </span> 
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: auto;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:10px;
  margin-bottom: 10px;
  height: 80px;
  background-color: transparent;

}

.nav__link {
  margin-left: 20px;

}

.button {
  margin-right: 20px;
}

.sub-header{
  font-weight: bold;
  font-size:xx-large;
}
.h1 title{
  font-weight: bold;
  color: whitesmoke;
}
.hero {
  background-color: #2867B1;
}


</style>
