<template>
  <div>
    <b-notification type="is-warning is-light is-marginless is-small" :closable="false">
      <div class="container">
        Information relating to
        <g-link class="link" to="/covid/">
          <strong>COVID-19</strong>
        </g-link>
      </div>
    </b-notification>
    <div class="is-fullhd">
      <b-notification :closable="false" type="is-info is-light is-small">
        <div class="columns has-text-centered is-marginless">
          <div class="column is-3">
            <g-link class="button rounded" to="tel:+1-819-682-0000">
              <i class="fas fa-phone-alt" style="margin:5px"></i>819-682-0000
            </g-link>
          </div>
          <div class="column is-4">
            <ul>
              <li>Monday - Friday: 8:00 - 16:00</li>
              <li>Saturday - Sunday: Closed</li>
            </ul>
          </div>

          <div class="column is-3">
            <g-link class="button is-outlined is-info is-pulled-right" style="margin:5px" to="/indexfr/">FR</g-link>
            <div class="container">
              <g-link
                class="button is-outlined is-info is-pulled-right"
                style="margin:5px"
                to="/"
              >EN</g-link>
            </div>
          </div>
        </div>
      </b-notification>
    </div>
    <div class="container">
      <header class="header">
        <g-link to="/">
          <g-image alt="Ammex Logo" src="~/Logo.png" background-color="smokewhite" width="300rem" />
        </g-link>
        <b-nav class="navbar">
          <g-link class="navbar-item" to="/services/">Services</g-link>
          <g-link class="navbar-item" to="/about/">About Us</g-link>
          <b-dropdown :triggers="['hover']" aria-role="list">
            <template #trigger>
              <g-link class="navbar-item" to="/required-docs">
                Documents
                <i class="fal fa-angle-down" style="margin:7px"></i>
              </g-link>
            </template>
            <g-link class="navbar-item" to="/required-docs/" aria-role="listitem">Required Documents</g-link>
            <g-link class="navbar-item" to="/forms/" aria-role="listitem">Forms</g-link>
            <g-link class="navbar-item" to="/contact-us/" aria-role="listitem">Drop-Off at our Office</g-link>
            <g-link class="navbar-item" to="/login/" aria-role="listitem">Upload Documents</g-link>
          </b-dropdown>
          <g-link class="navbar-item" to="/faq/">FAQ</g-link>
          <g-link class="navbar-item" to="/contact-us/">Contact Us</g-link>
          <b-navbar-item tag="div">
            <div class="buttons">
              <g-link class="button is-danger" to="/login/">
                Log in
                <i class="fas fa-user" style="margin:7px"></i>
              </g-link>
            </div>
          </b-navbar-item>
        </b-nav>
   
      </header>
    </div>
    <slot />
    <footer />
    <div class="columns has-text-centered is-marginless">
      <div class="column has-background-info is-6" style="padding: 80px">
        <g-link class="button is-centered is-big has-background-white" to="tel:+1-819-682-0000">
          <i class="fas fa-phone-alt" style="margin-right:5px"></i>819-682-0000
        </g-link>
      </div>
      <div class="column is-6" style="padding: 80px">
        <g-link to="/contact-us/" class="button is-centered is-big has-background-white">
          <i class="far fa-envelope" style="margin:5px"></i>Contact Us
        </g-link>
      </div>
    </div>
    <footer class="footer" style="padding-bottom: 3rem">
      <div class="content has-text-centered">
        <i class="fas fa-phone-alt" style="margin:5px"></i>
        <span>819-682-0000</span>
        <br />
        <i class="fas fa-map-marker-alt" style="margin:5px"></i>
        <span>204 chemin d'Aylmer app. 304, J9H 1A1 Gatineau, Quebec</span>
        <br />
        <span>
          <g-image alt="Ammex Impôts" src="~/Logo.png" width="200" />
        </span>
        <br />
        <span>Copyright © {{ new Date().getFullYear() }}.</span>
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
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, futura-pt, "system-ui", Helvetica Neue,
    sans-serif;
  margin: 0;
  padding: 0;
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
  margin-top: 10px;
  margin-bottom: 10px;
  height: 80px;
  background-color: white;
}

.navbar-item {
  margin-left: 20px;
  font-size: 20px;
}

a.active--exact.active {
  color: #2866b1;
}
.dropdown-content {
  padding-right: 1rem;
}
.button :hover {
  margin-right: 20px;
}

.sub-header {
  font-weight: bold;
  font-size: xx-large;
}
.h1 title {
  color: whitesmoke;
}
</style>
