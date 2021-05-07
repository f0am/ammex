<template>
  <div>
    <b-notification type="is-warning is-light is-marginless is-small" :closable="false">
      <div class="container">
        {{ covid[lang].information }} 
        <g-link class="link" to="/covid/">
          <strong>COVID-19</strong>
        </g-link>
      </div>
    </b-notification>
    <div class="is-fullhd">
      <b-notification :closable="false" type=" is-info is-light is-small">
        <div class="columns notification is-info is-light has-text-centered is-small">
          <div class="column">
            <g-link class="button rounded" to="tel:+1-819-682-0000">
              <i class="fas fa-phone-alt" style="margin: 5px"></i>819-682-0000
            </g-link>
          </div>
          <div class="column">
            <ul>
              <li>{{ days[lang].monday }} - {{ days[lang].friday }} : 8:00 - 16:00</li>
              <li>{{ days[lang].saturday }} - {{ days[lang].sunday }} : {{days[lang].closed}}</li>
            </ul>
          </div>

          <div class="column">
            <div
              class="button is-outlined is-info is-pulled-right"
              v-if="lang !== 'fr'"
              @click="setLang('fr')"
            >FR</div>
            <div
              v-if="lang !== 'en'"
              class="button is-outlined is-info is-pulled-right"
              @click="setLang('en')"
            >EN</div>
          </div>
        </div>
      </b-notification>
    </div>
    <div class="container">
      <header class="header">
        <g-link to="/">
          <g-image alt="Ammex Logo" src="~/Logo.svg" background-color="smokewhite" width="500" />
        </g-link>
        <b-nav class="navbar">
          <g-link class="navbar-item" to="/about/">
            {{
            menu[lang].about
            }}
          </g-link>
          <b-dropdown :triggers="['hover']" aria-role="list">
            <template #trigger>
              <g-link class="navbar-item" to="/required-docs">
                {{ menu[lang].documents }}
                <i class="fal fa-angle-down" style="margin: 7px"></i>
              </g-link>
            </template>
            <g-link
              class="navbar-item"
              to="/required-docs/"
              aria-role="listitem"
            >{{ menu[lang].requiredDocuments }}</g-link>
            <g-link class="navbar-item" to="/forms/" aria-role="listitem">
              {{
              menu[lang].forms
              }}
            </g-link>
            <g-link
              class="navbar-item"
              to="/contact-us/"
              aria-role="listitem"
            >{{ menu[lang].dropOff }}</g-link>
            <g-link class="navbar-item" to="/login/" aria-role="listitem">
              {{
              menu[lang].uploadDocuments
              }}
            </g-link>
          </b-dropdown>
          <g-link class="navbar-item" to="/services/">
            {{
            menu[lang].services
            }}
          </g-link>
          <g-link class="navbar-item" to="/faq/">{{ menu[lang].faq }}</g-link>
          <g-link class="navbar-item" to="/contact-us/">
            {{
            menu[lang].contact
            }}
          </g-link>
          <b-navbar-item tag="div">
            <div class="buttons">
              <g-link class="button is-danger" to="/login/">
                {{ menu[lang].login }}
                <i class="fas fa-user" style="margin: 7px"></i>
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
          <i class="fas fa-phone-alt" style="margin-right: 5px"></i>819-682-0000
        </g-link>
      </div>
      <div class="column is-6" style="padding: 80px">
        
        <g-link to="/contact-us/" class="button is-centered is-big has-background-white">
          <i class="far fa-envelope" style="margin: 5px"></i>
          {{menu[lang].contact}}
        </g-link>
      </div>
    </div>
    <footer class="footer" style="padding-bottom: 3rem">
      <div class="content has-text-centered">
        <i class="fas fa-phone-alt" style="margin: 5px"></i>
        <span>819-682-0000</span>
        <br />
        <i class="fas fa-map-marker-alt" style="margin: 5px"></i>
        <span>204 chemin d'Aylmer app. 304, J9H 1A1 Gatineau, Quebec</span>
        <br />
        <span>
          <g-image alt="Ammex Impôts" src="~/Logo.svg" width="500" />
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

<script>
export default {
  data() {
    return {
      lang: "en",
      menu: {
        en: {
          home: "Home",
          documents: "Documents",
          requiredDocuments: "Required Documents",
          about: "About Us",
          forms: "Forms",
          dropOff: "Drop Off Documents",
          uploadDocuments: "Upload Documents",
          services: "Services",
          faq: "FAQ",
          contact: "Contact Us",
          login: "Log In"
        },
        fr: {
          home: "Accueil",
          documents: "Documents",
          requiredDocuments: "Documents Requis",
          about: "À Propos",
          forms: "Formulaires",
          dropOff: "Déposer Documents",
          uploadDocuments: "Télécharger Documents",
          services: "Services",
          faq: "FAQ",
          contact: "Coordonnées",
          login: "Connecter"
        }
      },
      days: {
        en: {
          monday: "Monday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          closed: "Closed",
        },
        fr: {
          monday: "Lundi",
          friday: "Vendredi",
          saturday: "Samedi",
          sunday: "Dimanche",
          closed: "Fermé",
        }
      },
      covid: {
        en: {
          information: "Information relating to",
        },
        fr: {
          information: "Information sur la",
        }
      }
    };
  },
  methods: {
    setLang(lang) {
      this.lang = lang;
    }
  }
};
</script>

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
  margin-bottom: 0px;
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
