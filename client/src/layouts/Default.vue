<template>
  <div>
    <b-notification type="is-warning is-light is-marginless" :closable="false">
      <div class="container">
        Information relating to
        <g-link class="link" to="/covid/">
          <strong>COVID-19</strong>
        </g-link>
      </div>
    </b-notification>
    <div class="is-fullhd">
      <b-notification :closable="false" type="is-info is-light">
        <div class="container">
          <div
            v-if="lang !== 'fr'"
            class="button is-outlined is-info is-pulled-right"
            @click="setLang('fr')"
          >
            FR
          </div>
          <div
            v-if="lang !== 'en'"
            class="button is-outlined is-info is-pulled-right"
            @click="setLang('en')"
          >
            EN
          </div>
        </div>
      </b-notification>
    </div>
    <div class="container">
      <header class="header">
        <g-link to="/">
          <g-image alt="Ammex Logo" src="~/Logo.png" width="200" />
        </g-link>
        <nav class="navbar">
          <g-link class="nav__link" to="/">{{ menu[lang].home }}</g-link>
          <g-link class="nav__link" to="/about/">{{ menu[lang].about }}</g-link>
          <g-link class="nav__link" to="/required-docs/">{{
            menu[lang].documents
          }}</g-link>
          <g-link class="nav__link" to="/forms/">{{ menu[lang].forms }}</g-link>
          <g-link class="nav__link" to="/services/">{{
            menu[lang].services
          }}</g-link>
          <g-link class="nav__link" to="/faq/">{{ menu[lang].faq }}</g-link>
          <g-link class="nav__link" to="/contact-us/">{{
            menu[lang].contact
          }}</g-link>
          <g-link class="nav__link" to="/login/">{{ menu[lang].login }}</g-link>
        </nav>
      </header>
    </div>
    <slot />
    <footer />
    <footer class="footer">
      <div class="content has-text-centered">
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

<script>
export default {
  data() {
    return {
      lang: "en",
      menu: {
        en: {
          home: "Home",
          documents: "Required Documents",
          about: "About Us",
          forms: "Forms",
          services: "Services",
          faq: "FAQ",
          contact: "Contact Us",
          login: "Log In",
        },
        fr: {
          home: "Accueil",
          documents: "Documents requis",
          about: "À Propos",
          forms: "Formulaires",
          services: "Services",
          faq: "FAQ",
          contact: "Coordonnées",
          login: "S'authentifier",
        },
      },
    };
  },
  methods: {
    setLang(lang) {
      this.lang = lang;
    },
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
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
  background-color: transparent;
}

.nav__link {
  margin-left: 20px;
}

.button :hover {
  margin-right: 20px;
}

.sub-header {
  font-weight: bold;
  font-size: xx-large;
}
.h1 title {
  font-weight: bold;
  color: whitesmoke;
}
</style>
